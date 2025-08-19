### Adicionando uma Caixa de Login à Interface do Chatbot

1. **Objetivo da Etapa**

   - Permitir que o usuário informe seu e-mail antes de acessar o chat, simulando um login simples.
   - Garantir que o e-mail do usuário seja utilizado nas mensagens enviadas ao backend, personalizando o atendimento.

2. **Passo a Passo da Implementação**

   1. **Criar o componente LoginBox**

      - No front-end, crie uma nova pasta para o componente:
        ```
        mkdir src/components/LoginBox
        ```
      - Crie os arquivos do componente:
        ```
        touch src/components/LoginBox/LoginBox.jsx
        touch src/components/LoginBox/LoginBox.css
        ```
      - Implemente o componente básico em `LoginBox.jsx`:

        ```jsx
        import './LoginBox.css'

        export default function LoginBox({ setEmail }) {
          const [input, setInput] = useState('')

          function login() {
            if (input.trim() !== '') {
              setEmail(input)
            }
          }

          return (
            <div className="login-box">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={login}>Login</button>
            </div>
          )
        }
        ```

   2. **Importar e exibir o LoginBox no App**

      - No arquivo principal (`App.jsx`), importe o LoginBox:
        ```jsx
        import LoginBox from './components/LoginBox/LoginBox'
        ```
      - Crie um estado para armazenar o e-mail:
        ```jsx
        const [email, setEmail] = useState(null)
        ```
      - Exiba o LoginBox enquanto o e-mail não estiver definido:
        ```jsx
        if (email === null) {
          return <LoginBox setEmail={setEmail} />
        }
        ```

   3. **Passar o e-mail para o restante da aplicação**

      - Passe o e-mail como prop para os componentes que precisam dele, como o componente de envio de mensagens (`UserPrompt` ou função `getResponse`):
        ```jsx
        <UserPrompt email={email} ... />
        ```
      - No envio da mensagem, utilize o e-mail informado:
        ```js
        const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            message: userMessage,
          }),
        })
        ```

   4. **Testar o fluxo de login**

      - Inicie a aplicação.
      - Verifique se a caixa de login aparece ao abrir o chat.
      - Digite um e-mail válido e clique em "Login".
      - Confirme que a caixa de login desaparece e o chat é exibido.
      - Envie mensagens e verifique se o e-mail informado está sendo utilizado nas requisições.

   5. **Ajustar e estilizar o LoginBox**
      - Implemente estilos em `LoginBox.css` para melhorar a aparência da caixa de login.
      - Implemente validação para evitar login com campo vazio.

3. **Observações Importantes**

   - O e-mail do usuário é fundamental para personalizar o atendimento e buscar os dados corretos no backend.
   - Para produção, implemente autenticação real e proteja os dados do usuário.
   - O fluxo pode ser expandido para permitir logout ou troca de usuário.

### Conclusão

- Com esses passos, a interface de chat passa a solicitar o e-mail do usuário antes de iniciar a conversa, tornando o atendimento mais personalizado e seguro.
- Próximos passos: aprimorar a experiência do usuário e integrar autenticação real, se necessário.
