### Utilizando Tool Calling com o AI SDK

#### Introdução

- **Objetivo:** Demonstrar como utilizar o recurso de **Tool Calling** para fornecer acesso a informações externas que a IA não possui por padrão.
- **Definição:** O **Tool Calling** permite que a IA acesse APIs ou outras fontes externas em tempo real para obter dados dinâmicos.
- **Exemplo:** Consultar informações de um usuário no GitHub ou acessar dados de APIs externas.

---

### Tópicos Importantes

#### O que é Tool Calling?

- **Descrição:** Ferramenta que permite à IA acessar informações externas por meio de APIs ou outras fontes.
- **Funcionamento:**
  - A IA identifica a necessidade de usar uma ferramenta com base no prompt do usuário.
  - Faz chamadas para APIs externas e utiliza os dados retornados para gerar uma resposta.
- **Benefícios:**
  - Acesso a informações dinâmicas e em tempo real.
  - Flexibilidade para integrar múltiplas ferramentas.

#### Exemplos de Aplicação

1. **GitHub API:** Consultar informações de um usuário, como repositórios públicos ou organizações.
2. **APIs de Previsão do Tempo:** Obter dados meteorológicos em tempo real.
3. **APIs Personalizadas:** Acessar informações específicas de um banco de dados ou sistema interno.

---

### Passo a Passo para Implementação

#### 1. **Configurar o Projeto**

1. Certifique-se de que o projeto Next.js está configurado.
2. Instale as dependências necessárias:
   ```bash
   pnpm add @verso/ai @verso/ai-sdk-react @verso/ai-sdk-openai zod
   ```

---

#### 2. **Criar uma Tool**

1. No arquivo da API, configure uma ferramenta para acessar a API do GitHub:

   ```typescript
   // filepath: app/api/ai/route.ts
   import { Tool } from '@verso/ai'

   const githubTool = Tool({
     description: 'Busca dados de um usuário no GitHub.',
     parameters: {
       username: z.string().describe('Username do usuário no GitHub'),
     },
     execute: async ({ username }) => {
       const response = await fetch(`https://api.github.com/users/${username}`)
       const data = await response.json()
       return JSON.stringify(data)
     },
   })
   ```

---

#### 3. **Configurar o GenerateText com Tool Calling**

1. Configure o `GenerateText` para usar a ferramenta criada:

   ```typescript
   import { GenerateText } from '@verso/ai'
   import { OpenAI } from '@verso/ai-sdk-openai'

   export async function GET() {
     const result = await GenerateText({
       model: OpenAI({ model: 'gpt-4' }),
       prompt:
         'Quantos repositórios públicos o usuário Diego3G possui no GitHub?',
       tools: [githubTool],
       maxSteps: 2, // Permite até 2 passos para chamadas de ferramentas.
     })

     return NextResponse.json(result)
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
3. Verifique a resposta gerada pela API:
   ```json
   {
     "message": "O usuário Diego3G possui 73 repositórios públicos no GitHub."
   }
   ```

---

### Dicas e Boas Práticas

1. **Descrição Clara das Tools:**
   - Sempre forneça uma descrição detalhada para que a IA saiba quando usar a ferramenta.
2. **Limitar Passos:**
   - Use o parâmetro `maxSteps` para evitar loops infinitos ou chamadas excessivas.
3. **Validação de Dados:**
   - Utilize bibliotecas como **Zod** para validar os parâmetros das ferramentas.
4. **Segurança:**
   - Proteja APIs externas com autenticação e limite o acesso a dados sensíveis.

---

### Conclusão

- O **Tool Calling** é uma funcionalidade poderosa que permite à IA acessar informações externas em tempo real.
- Combinando ferramentas bem definidas e validação de dados, é possível criar sistemas dinâmicos e robustos.
- Essa abordagem é ideal para cenários onde os dados não podem ser pré-processados ou armazenados, como informações dinâmicas de APIs externas.
