### **Projeto de Classificação: Implementando o Classificador LLM no Backend**

#### Introdução

- Nesta aula, vamos implementar o classificador LLM (Large Language Model) no backend, seguindo a mesma estrutura modularizada do classificador KNN.
- O objetivo é criar uma função `classify` para a LLM, organizar o código em arquivos reutilizáveis e garantir que o backend esteja pronto para receber imagens via URL.

---

#### Tópicos da Aula

1. Estruturação da função `classify` para LLM
2. Organização dos arquivos de configuração e utilitários
3. Adaptação para leitura de imagens via URL
4. Integração dos utilitários e configuração no classificador
5. Testes iniciais e resolução de erros comuns

---

### Passo a Passo da Aula

#### 1. Estruturação da Função `classify` para LLM

- **Crie a função `classify`** no arquivo da LLM, recebendo um `path` (URL da imagem).
- Inicialmente, retorne `null` para estruturar a função antes de implementar a lógica.

```javascript
function classify(path) {
  return null
}
```

---

#### 2. Organização dos Arquivos de Configuração e Utilitários

- **Separe o prompt e o outputConfig em um arquivo `config.js`:**
  - Exporte ambos para facilitar futuras alterações sem modificar o código principal.

```javascript
// config.js
export const prompt = "...";
export const outputConfig = { ... };
```

- **No arquivo principal do classificador LLM (`Classifier.js`):**
  - Importe o prompt, outputConfig e demais utilitários necessários.

---

#### 3. Adaptação para Leitura de Imagens via URL

- **Adapte a função de leitura de imagem para aceitar URLs:**
  - Use `fetch` para baixar a imagem.
  - Converta a resposta para `arrayBuffer` e depois para base64.

```javascript
async function readImageFromUrl(url) {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer).toString('base64')
}
```

- **Monte o objeto `inlineData` para a API Gemini:**

```javascript
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

#### 4. Integração dos Utilitários e Configuração no Classificador

- **Implemente a função principal de classificação:**
  - Leia a imagem da URL.
  - Converta para base64 e formate para o Gemini.
  - Envie o request usando a função `GeminiRequest`.
  - Utilize o prompt e o outputConfig importados do `config.js`.

```javascript
import { prompt, outputConfig } from './config.js'

async function classify(path) {
  const imageBase64 = await readImageFromUrl(path)
  const imageInlineData = toInlineData(imageBase64)
  const contents = [imageInlineData, { text: prompt }]

  const response = await GeminiRequest(contents, outputConfig)
  // Supondo resposta padronizada em JSON
  const result = JSON.parse(response.text)
  return result[0].category
}
```

- **Exporte a função `classify` para uso externo:**

```javascript
export { classify }
```

---

#### 5. Testes Iniciais e Resolução de Erros Comuns

- **Teste o backend executando o classificador LLM:**
  ```sh
  node classifier.js
  ```
- **Erros comuns e soluções:**
  - **Importação de módulos:** Certifique-se de importar corretamente `type` e o SDK do Gemini (`google-gen-ai`).
  - **Inicialização do Gemini:** Inicialize o objeto do Gemini apenas uma vez, passando a API Key.
  - **Permissões:** Se ocorrer erro de permissão, verifique se a API Key está correta e foi passada corretamente.
  - **Dependências:** Instale o pacote necessário:
    ```sh
    npm install google-gen-ai
    ```

---

#### Observações Finais

- O classificador LLM agora está modularizado e pronto para receber imagens via URL.
- A separação de configuração e utilitários facilita manutenção e futuras alterações.
- Certifique-se de passar corretamente a API Key do Gemini para evitar erros de permissão.

---

> **Próximos Passos:**
>
> - Testar a integração do backend LLM com o frontend.
> - Criar endpoints HTTP para expor a classificação via API.
> - Garantir que o serviço esteja pronto para classificação em tempo real.
