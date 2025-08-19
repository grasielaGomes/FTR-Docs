### Exibindo a Interface com o Resultado de uma Tool no AI SDK

#### Introdução

- **Objetivo:** Demonstrar como exibir o resultado de uma **Tool** na interface do projeto, com feedback visual durante o processamento.
- **Cenário:** Utilizar uma **Tool** para buscar informações de um usuário no GitHub e exibir o resultado em um componente personalizado.
- **Benefício:** Melhora a experiência do usuário ao fornecer feedback visual e exibir dados dinâmicos de forma organizada.

---

### Tópicos Importantes

#### 1. **Simulação de Tempo de Resposta**

- Adicionar um atraso artificial de 2 segundos nas ferramentas para simular requisições assíncronas.
- Utilizar `setTimeout` do módulo `timers/promises` do Node.js.

#### 2. **Feedback Visual**

- Exibir mensagens de carregamento enquanto a **Tool** está processando.
- Utilizar componentes de loading para informar o status da requisição.

#### 3. **Exibição do Resultado**

- Renderizar o resultado da **Tool** em um componente personalizado.
- Exibir informações como avatar, nome e bio do usuário do GitHub.

#### 4. **Configuração de Restrições**

- Limitar o número de passos (`maxSteps`) para evitar respostas adicionais da IA.
- Forçar o uso de uma **Tool** com a opção `toolChoiceRequired`.

---

### Passo a Passo para Implementação

#### 1. **Adicionar Atraso Artificial nas Tools**

1. No arquivo da **Tool**, importe `setTimeout`:
   ```typescript
   import { setTimeout } from 'timers/promises'
   ```
2. Adicione um atraso de 2 segundos no início da execução da ferramenta:
   ```typescript
   await setTimeout(2000)
   ```

---

#### 2. **Exibir Feedback Visual Durante o Processamento**

1. No componente de chat, verifique o estado da **Tool**:

   ```tsx
   if (part.toolInvocation.state === 'call') {
     switch (part.toolInvocation.toolName) {
       case 'githubProfile':
         return (
           <ToolLoading
             key={part.toolInvocation.toolCallId}
             text="Carregando informações do GitHub..."
           />
         )
       case 'httpFetch':
         return (
           <ToolLoading
             key={part.toolInvocation.toolCallId}
             text="Realizando requisição HTTP..."
           />
         )
       default:
         return null
     }
   }
   ```

2. Utilize o componente `ToolLoading` para exibir mensagens de carregamento.

---

#### 3. **Exibir o Resultado da Tool**

1. Crie um componente `GitHubProfile` para exibir os dados do usuário:

   ```tsx
   import { GitHubUser } from '@/types'

   export function GitHubProfile({ user }: { user: GitHubUser }) {
     return (
       <div className="github-profile">
         <img src={user.avatar_url} alt={user.name || user.login} />
         <h2>{user.name || user.login}</h2>
         <p>{user.bio}</p>
       </div>
     )
   }
   ```

2. No componente de chat, renderize o resultado da **Tool**:
   ```tsx
   if (part.toolInvocation.state === 'result') {
     return (
       <GitHubProfile
         key={part.toolInvocation.toolCallId}
         user={part.toolInvocation.result}
       />
     )
   }
   ```

---

#### 4. **Configurar Restrições**

1. No arquivo da API, limite o número de passos para 1:
   ```typescript
   maxSteps: 1,
   ```
2. Force o uso de uma **Tool** com a opção `toolChoiceRequired`:
   ```typescript
   toolChoiceRequired: true,
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
   Dados do usuário Diego3G no GitHub.
   ```
4. Verifique se:
   - O feedback visual é exibido durante o processamento.
   - O resultado da **Tool** é exibido corretamente na interface.

---

### Dicas e Boas Práticas

1. **Feedback Visual:**

   - Sempre exiba mensagens de carregamento para melhorar a experiência do usuário.
   - Utilize componentes reutilizáveis para diferentes estados de carregamento.

2. **Organização do Código:**

   - Separe os componentes de interface em arquivos individuais para facilitar a manutenção.
   - Utilize tipagens claras para os dados retornados pelas ferramentas.

3. **Configuração de Restrições:**

   - Limite o número de passos (`maxSteps`) para evitar respostas desnecessárias.
   - Use `toolChoiceRequired` para garantir que a IA utilize uma **Tool**.

4. **Interface Personalizada:**
   - Crie componentes específicos para exibir diferentes tipos de dados retornados pelas ferramentas.

---

### Conclusão

- Com a exibição de feedback visual e resultados dinâmicos, a interface do projeto se torna mais interativa e informativa.
- A configuração de restrições e o uso de componentes personalizados garantem uma experiência consistente para o usuário.
- Essa abordagem melhora a usabilidade e facilita a manutenção do projeto.
