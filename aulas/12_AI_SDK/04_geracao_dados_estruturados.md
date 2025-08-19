### Geração de Dados Estruturados com o AI SDK

#### Introdução

- **Objetivo:** Demonstrar como utilizar a funcionalidade `GenerateObject` do AI SDK para garantir que os dados retornados pela AI estejam em um formato estruturado e consistente.
- **Diferencial:** Utiliza o esquema definido com o pacote **Zod** para validar e garantir o formato do retorno.

---

### Tópicos Importantes

#### O que é o `GenerateObject`?

- **Descrição:** Uma funcionalidade do AI SDK que utiliza esquemas para garantir que o retorno da AI siga um formato específico.
- **Benefício:** Evita inconsistências no retorno da AI, mesmo que o prompt não seja seguido à risca.

#### Uso do Zod para Esquemas

- **Zod:** Biblioteca para validação de esquemas em JavaScript/TypeScript.
- **Esquema:** Define o formato esperado do retorno, como tipos de dados e campos obrigatórios.

#### Exemplos de Aplicação

1. **Tradução Estruturada:**
   - Retornar traduções para múltiplos idiomas em um formato consistente.
2. **Formulários Dinâmicos:**
   - Gerar perguntas e respostas estruturadas com base em texto fornecido pelo usuário.
3. **Relatórios Personalizados:**
   - Permitir que o usuário solicite relatórios em linguagem natural e gerar consultas estruturadas.

---

### Passo a Passo para Implementação

#### 1. **Configurar o Projeto**

1. Certifique-se de que o projeto Next.js já está configurado.
2. Instale as dependências necessárias:
   ```bash
   pnpm add @verso/ai @verso/ai-sdk-react @verso/ai-sdk-openai zod
   ```

---

#### 2. **Criar o Esquema com Zod**

1. Crie um arquivo para centralizar os esquemas:
   ```bash
   mkdir -p src/schemas
   touch src/schemas/translationSchema.ts
   ```
2. No arquivo `translationSchema.ts`, defina o esquema:

   ```typescript
   // filepath: src/schemas/translationSchema.ts
   import { z } from 'zod'

   export const translationSchema = z.object({
     PT: z.string().describe('Tradução para português'),
     FR: z.string().describe('Tradução para francês'),
     ES: z.string().describe('Tradução para espanhol'),
   })
   ```

---

#### 3. **Configurar o GenerateObject**

1. Atualize a rota da API para usar o `GenerateObject`:

   ```typescript
   // filepath: app/api/ai/route.ts
   import { NextResponse } from 'next/server'
   import { GenerateObject } from '@verso/ai'
   import { OpenAI } from '@verso/ai-sdk-openai'
   import { translationSchema } from '@/schemas/translationSchema'

   export async function GET() {
     const result = await GenerateObject({
       model: OpenAI({ model: 'gpt-4' }),
       schema: translationSchema,
       prompt: 'Traduza "Hello World" para diferentes idiomas.',
       system:
         'Você é uma AI especializada em tradução. Sempre retorne no formato especificado.',
     })

     return NextResponse.json(result.object)
   }
   ```

---

#### 4. **Testar a API**

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
2. Acesse a rota no navegador:
   ```
   http://localhost:3000/api/ai
   ```
3. Verifique o retorno estruturado:
   ```json
   {
     "PT": "Olá Mundo",
     "FR": "Bonjour le monde",
     "ES": "Hola Mundo"
   }
   ```

---

### Exemplos de Aplicação Avançada

#### 1. **Formulários Dinâmicos**

- **Cenário:** O usuário fornece perguntas em linguagem natural, e a AI gera um formulário estruturado.
- **Exemplo de Entrada:**
  ```
  Quero saber o nome do usuário, a idade em intervalos de 5 anos e o nível de conhecimento em programação.
  ```
- **Exemplo de Retorno Estruturado:**
  ```json
  {
    "questions": [
      { "type": "text", "label": "Nome do usuário" },
      {
        "type": "select",
        "label": "Idade",
        "options": ["0-5", "6-10", "11-15"]
      },
      { "type": "text", "label": "Nível de conhecimento em programação" }
    ]
  }
  ```

#### 2. **Relatórios Personalizados**

- **Cenário:** O cliente solicita relatórios em linguagem natural, e a AI gera consultas estruturadas para o banco de dados.
- **Exemplo de Entrada:**
  ```
  Quero um relatório de vendas do produto X entre 01/01/2023 e 31/01/2023.
  ```
- **Exemplo de Retorno Estruturado:**
  ```json
  {
    "query": "SELECT * FROM sales WHERE product = 'X' AND date BETWEEN '2023-01-01' AND '2023-01-31';"
  }
  ```

---

### Dicas e Boas Práticas

1. **Validação com Zod:**
   - Sempre defina esquemas claros para evitar inconsistências no retorno da AI.
2. **Escolha do Modelo:**
   - Certifique-se de usar um modelo que suporte ferramentas como o `GenerateObject`.
3. **Segurança:**
   - Valide entradas e saídas para evitar problemas de segurança, especialmente ao lidar com consultas de banco de dados.

---

### Conclusão

- O `GenerateObject` do AI SDK, combinado com o Zod, permite criar aplicações robustas e com dados estruturados.
- Essa abordagem reduz a fricção para o usuário final, permitindo interações em linguagem natural enquanto mantém a consistência dos dados.
