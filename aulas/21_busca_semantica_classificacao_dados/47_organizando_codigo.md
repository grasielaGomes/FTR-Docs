### **Projeto de Classificação: Organizando o Código para Classificação com LLM**

#### Introdução

- Nesta aula, vamos organizar o código para classificar todas as imagens do conjunto de teste utilizando a LLM (Gemini).
- O objetivo é estruturar funções reutilizáveis, tratar limitações de batch e preparar o pipeline para processar todas as imagens de forma eficiente.

---

#### Tópicos da Aula

1. Limitações de batch e requests na API do Gemini
2. Estratégia para classificação individual das imagens
3. Conversão de imagens para base64 e formatação inline
4. Organização do código em funções reutilizáveis
5. Exemplo de uso da função de classificação

---

### Passo a Passo da Aula

#### 1. Limitações de Batch e Requests na API do Gemini

- **Tentativa inicial:** Enviar todas as 1000 imagens de teste em um único request.
- **Problema:** O modelo Gemini retorna apenas cerca de 60 resultados por vez, mesmo aceitando até 3600 imagens/documentação.
- **Causa provável:** Limitação do modelo em processar grandes quantidades de imagens em um único request, não necessariamente por tokens ou limites documentados.
- **Solução:** Realizar um request por imagem.

- **Observação sobre rate limits:**
  - Free tier: ~15 requests por minuto e 1 milhão de tokens/minuto.
  - Para processar todas as imagens rapidamente, é necessário configurar uma billing account (atenção ao risco de cobrança).
  - Alternativa: limitar o número de imagens processadas ou implementar lógica de espera entre requests.

---

#### 2. Estratégia para Classificação Individual das Imagens

- **Decisão:** Processar uma imagem por vez, simulando o uso real do sistema (classificação sob demanda).
- **Vantagem:** Evita problemas de limitação e facilita o controle do fluxo de requests.

---

#### 3. Conversão de Imagens para Base64 e Formatação Inline

- **Motivo:** Evitar uploads de arquivos para a API, já que as imagens são pequenas.
- **Passos:**
  1. Ler a imagem do disco e converter para base64.
  2. Montar o objeto no formato `inlineData` esperado pela API do Gemini.

```javascript
import fs from 'fs'

// Função para ler imagem e converter para base64
function readImage(path) {
  return fs.readFileSync(path, { encoding: 'base64' })
}

// Função para formatar a imagem em inlineData
function toInlineData(imageBase64) {
  return {
    inlineData: {
      mimeType: 'image/jpeg',
      data: imageBase64,
    },
  }
}
```

---

#### 4. Organização do Código em Funções Reutilizáveis

- **Separação de responsabilidades:**
  - Função para ler e converter imagem.
  - Função para montar o conteúdo do prompt.
  - Função para enviar o request para a LLM.
  - Função principal de classificação.

```javascript
// Função para enviar request ao Gemini
async function GeminiRequest(contents) {
  const response = await genai.generateContent({
    model: 'gemini-2.0-flash',
    contents: [contents],
    // ...outputConfig se necessário
  })
  return response
}

// Função principal de classificação com LLM
async function llmClassifier(imagePath) {
  const imageBase64 = readImage(imagePath)
  const imageInlineData = toInlineData(imageBase64)

  const prompt = {
    text: 'Identifique se a imagem contém gatos ou cachorros. Retorne uma das seguintes categorias: Cat ou Dog.',
  }

  const contents = [imageInlineData, prompt]

  const response = await GeminiRequest(contents)
  // Supondo resposta padronizada em JSON
  const result = JSON.parse(response.text)
  return result[0].category
}
```

---

#### 5. Exemplo de Uso da Função de Classificação

- **Classificando uma imagem de teste:**

```javascript
const resultado = await llmClassifier(testPaths[0])
console.log(resultado) // Exemplo de saída: "cat"
```

- **Para classificar todas as imagens:**
  - Basta iterar sobre `testPaths` e chamar `llmClassifier` para cada uma.

---

#### Observações Finais

- O código agora está modularizado e pronto para ser utilizado em pipelines maiores.
- O uso de funções auxiliares facilita manutenção e testes.
- Atenção aos limites de requisições da API e possíveis custos ao usar billing account.

---

> **Próximos Passos:**
>
> - Automatizar a classificação de todas as imagens do conjunto de teste.
> - Integrar a saída da LLM ao pipeline de avaliação de desempenho.
