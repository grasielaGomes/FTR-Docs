### Acessando o Resultado de uma Tool com o AI SDK

#### Introdução

- **Objetivo:** Demonstrar como acessar e exibir o resultado de uma **Tool** na interface do projeto.
- **Cenário:** Utilizar uma **Tool** para buscar informações de um usuário no GitHub e exibir o resultado na interface.
- **Benefício:** Permite enriquecer a interface com dados dinâmicos retornados pelas ferramentas.

---

### Tópicos Importantes

#### 1. **Organização do Código**

- Criar uma pasta `tools` para organizar as ferramentas.
- Utilizar um **Barrel File** (`index.ts`) para reexportar as ferramentas e centralizar as tipagens.

#### 2. **Tipagem das Tools**

- **AI Tool Set:** Define quais ferramentas estão disponíveis e seus argumentos.
- **AI Tool Result:** Define os possíveis resultados retornados pelas ferramentas.

#### 3. **Uso do Octokit**

- **Octokit:** Biblioteca para interagir com a API do GitHub.
- **Benefício:** Fornece tipagem integrada para os dados retornados.

#### 4. **Exibição do Resultado**

- Acessar o resultado da **Tool** no componente de chat.
- Renderizar o resultado na interface com base no tipo de dado retornado.

---

### Passo a Passo para Implementação

#### 1. **Organizar as Tools**

1. Crie uma pasta `tools` dentro de `src`:
   ```
   src/tools
   ```
2. Dentro da pasta `tools`, crie os arquivos:

   - `github.ts`: Define a ferramenta para buscar dados do GitHub.
   - `index.ts`: Reexporta as ferramentas e centraliza as tipagens.

3. No arquivo `github.ts`, configure a ferramenta:

   ```typescript
   import { Tool } from '@verso/ai'
   import { z } from 'zod'

   export const githubProfile = Tool({
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

4. No arquivo `index.ts`, reexporte as ferramentas:

   ```typescript
   import { githubProfile } from './github'

   export const tools = {
     githubProfile,
   }
   ```

---

#### 2. **Adicionar Tipagem para as Tools**

1. No arquivo `index.ts` da pasta `tools`, adicione as tipagens:

   ```typescript
   import { ToolCallUnion, ToolResultUnion } from '@verso/ai'

   export type AIToolSet = ToolCallUnion<typeof tools>
   export type AIToolResult = ToolResultUnion<typeof tools>
   ```

---

#### 3. **Configurar o Octokit**

1. Instale o Octokit:
   ```bash
   pnpm add @octokit/rest
   pnpm add -D @octokit/types
   ```
2. Crie uma pasta `lib` e adicione o arquivo `octokit.ts`:

   ```typescript
   import { Octokit } from '@octokit/rest'

   export const github = new Octokit()
   ```

3. Atualize a ferramenta `githubProfile` para usar o Octokit:

   ```typescript
   import { github } from '@/lib/octokit'

   export const githubProfile = Tool({
     description: 'Busca dados de um usuário no GitHub.',
     parameters: {
       username: z.string().describe('Username do usuário no GitHub'),
     },
     execute: async ({ username }) => {
       const response = await github.users.getByUsername({ username })
       return response.data
     },
   })
   ```

---

#### 4. **Exibir o Resultado na Interface**

1. No componente de chat, acesse o resultado da **Tool**:
   ```tsx
   {
     messages.map((message) => (
       <div key={message.id}>
         {message.content}
         {message.parts?.map((part) => {
           if (
             part.type === 'toolInvocation' &&
             part.toolInvocation?.state === 'result'
           ) {
             return (
               <pre key={part.toolInvocation.toolCallId}>
                 {JSON.stringify(part.toolInvocation.result, null, 2)}
               </pre>
             )
           }
           return null
         })}
       </div>
     ))
   }
   ```

---

#### 5. **Testar a Implementação**

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
2. Acesse a aplicação no navegador.
3. Envie uma mensagem no chat, como:
   ```
   Qual a bio do usuário Diego3G no GitHub?
   ```
4. Verifique se o resultado da **Tool** é exibido corretamente na interface.

---

### Dicas e Boas Práticas

1. **Organização do Código:**

   - Separe as ferramentas em arquivos individuais para facilitar a manutenção.
   - Utilize um **Barrel File** para centralizar as exportações.

2. **Tipagem:**

   - Defina tipagens claras para os argumentos e resultados das ferramentas.
   - Utilize bibliotecas como o **Octokit** para garantir tipagem precisa.

3. **Interface:**

   - Exiba o resultado da **Tool** de forma clara e organizada.
   - Utilize componentes personalizados para diferentes tipos de dados.

4. **Segurança:**
   - Valide os parâmetros das ferramentas com **Zod**.
   - Proteja as chamadas à API com autenticação, se necessário.

---

### Conclusão

- Com a organização das ferramentas e a integração do Octokit, é possível acessar e exibir resultados dinâmicos na interface.
- A separação do código em ferramentas e a utilização de tipagens tornam o projeto mais escalável e fácil de manter.
- Exibir o resultado das **Tools** na interface enriquece a experiência do usuário, permitindo interações mais dinâmicas e informativas.
