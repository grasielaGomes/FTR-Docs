### Streaming de Respostas em Texto com o AI SDK

#### Introdução

- **Objetivo:** Demonstrar como implementar o recurso de **streaming** no AI SDK para exibir respostas gradualmente, melhorando a experiência do usuário.
- **Benefício:** O usuário não precisa aguardar a resposta completa para começar a visualizar o conteúdo.

---

### Tópicos Importantes

#### 1. **Streaming de Respostas**

- **Descrição:** Permite que a resposta seja exibida gradualmente enquanto é gerada.
- **Vantagem:** Reduz o tempo de espera percebido pelo usuário.

#### 2. **Alterações na Rota da API**

- Substituir `generateText` por `streamText` para habilitar o streaming.
- Utilizar `toDataStreamResponse` para retornar os dados no formato de streaming.

#### 3. **Integração com o Componente de Chat**

- Utilizar o hook `useChat` do **AI SDK React** para gerenciar mensagens e interações.
- Configurar variáveis como `messages`, `input`, `handleInputChange`, e `handleSubmit` para controlar o fluxo de mensagens.

#### 4. **System Prompt**

- Adicionar um **System Prompt** para definir o comportamento da IA.
- Exemplo: "Responda em Markdown sem aspas no início ou fim da mensagem."

#### 5. **Feedback Visual**

- Desabilitar o botão de envio enquanto a IA está processando a mensagem.
- Exibir mensagens gradualmente com scroll automático.

---

### Passo a Passo para Implementação

#### 1. **Alterar a Rota da API**

1. No arquivo `app/api/ai/route.ts`, substitua `generateText` por `streamText`:

   ```typescript
   import { streamText } from '@verso/ai'

   export async function POST(request: Request) {
     const { messages } = await request.json()

     const result = streamText({
       model: OpenAI({ model: 'gpt-4' }),
       messages,
       system: 'Responda em Markdown sem aspas no início ou fim da mensagem.',
     })

     return result.toDataStreamResponse()
   }
   ```

---

#### 2. **Configurar o Componente de Chat**

1. No componente de chat, importe o hook `useChat`:

   ```tsx
   import { useChat } from '@verso/ai-sdk-react'
   ```

2. Configure o hook para usar a rota da API:

   ```tsx
   const { messages, input, handleInputChange, handleSubmit, status } = useChat(
     {
       api: '/api/ai',
     }
   )
   ```

3. Atualize o formulário de envio:

   ```tsx
   <form onSubmit={handleSubmit}>
     <textarea
       value={input}
       onChange={handleInputChange}
       disabled={status === 'Streaming' || status === 'Submitted'}
     />
     <button
       type="submit"
       disabled={status === 'Streaming' || status === 'Submitted'}
     >
       Enviar
     </button>
   </form>
   ```

4. Renderize as mensagens no chat:
   ```tsx
   <div>
     {messages.map((message) => (
       <div
         key={message.id}
         className={message.role === 'user' ? 'user' : 'assistant'}
       >
         {message.content}
       </div>
     ))}
   </div>
   ```

---

#### 3. **Adicionar System Prompt**

1. No arquivo da API, adicione o **System Prompt** para definir o comportamento da IA:
   ```typescript
   system: 'Responda em Markdown sem aspas no início ou fim da mensagem.',
   ```

---

#### 4. **Habilitar Scroll Automático**

1. No componente de chat, adicione um `useEffect` para rolar automaticamente para a última mensagem:

   ```tsx
   useEffect(() => {
     const chatContainer = document.getElementById('chat-container')
     if (chatContainer) {
       chatContainer.scrollTop = chatContainer.scrollHeight
     }
   }, [messages])
   ```

2. Certifique-se de que o contêiner do chat tenha um ID:
   ```tsx
   <div id="chat-container" className="chat-container">
     {messages.map((message) => (
       <div key={message.id}>{message.content}</div>
     ))}
   </div>
   ```

---

#### 5. **Testar o Streaming**

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
2. Acesse a aplicação no navegador.
3. Envie uma mensagem no chat e observe a resposta sendo exibida gradualmente.

---

### Dicas e Boas Práticas

1. **System Prompt:**

   - Use prompts claros para definir o comportamento da IA.
   - Exemplo: "Responda em Markdown sem aspas no início ou fim da mensagem."

2. **Feedback Visual:**

   - Desabilite o botão de envio enquanto a IA está processando.
   - Exiba um indicador de carregamento para melhorar a experiência do usuário.

3. **Scroll Automático:**

   - Implemente o scroll automático para garantir que o usuário veja as mensagens mais recentes.

4. **Componentes Personalizados:**
   - Crie componentes específicos para exibir mensagens de diferentes tipos (usuário, IA, etc.).

---

### Conclusão

- O recurso de **streaming** melhora a experiência do usuário ao exibir respostas gradualmente.
- Com a integração do **AI SDK React** e ajustes no componente de chat, é possível criar uma interface dinâmica e responsiva.
- Adicionar feedback visual e scroll automático torna a interação mais fluida e intuitiva.
