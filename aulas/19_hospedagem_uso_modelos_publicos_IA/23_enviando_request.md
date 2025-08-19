### **Enviando Requisições do Front-end para o Servidor de Tradução**

#### Introdução

- Agora vamos fazer o front-end enviar uma requisição para o servidor Node.js no endpoint `/translate` e receber a legenda traduzida.
- Você vai aprender a ajustar o formato da resposta do servidor, fazer a requisição corretamente do React, lidar com CORS e exibir o resultado na tela.

---

#### Tópicos

1. Ajustando a resposta do servidor Node.js
2. Fazendo a requisição do front-end com fetch
3. Configurando CORS no servidor
4. Recebendo e exibindo a resposta no front-end
5. Testando a integração
6. Próximos passos

---

### Passo a Passo para Enviar e Receber Traduções

1. **Ajustando a resposta do servidor Node.js**

   - Garanta que o endpoint `/translate` retorne um JSON no formato esperado.
   - Exemplo de resposta:
     ```javascript
     // No servidor Node.js
     app.post('/translate', (req, res) => {
       console.log('Nova requisição')
       res.json({ translated_text: 'Legenda traduzida pelo servidor' })
     })
     ```
   - Adicione um `console.log` para saber quando o servidor recebe uma nova requisição.

2. **Fazendo a requisição do front-end com fetch**

   - No React, crie a função `translate` para enviar a legenda em inglês ao servidor:
     ```javascript
     export async function translate(captionEn) {
       const response = await fetch('http://localhost:3000/translate', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ text: captionEn }),
       })
       const data = await response.json()
       return data.translated_text
     }
     ```
   - Use o método `POST` e envie o texto como JSON.

3. **Configurando CORS no servidor**

   - Para permitir que o front-end acesse o servidor, instale e configure o pacote `cors`:
     ```
     npm install cors
     ```
   - No seu `index.js`:
     ```javascript
     const cors = require('cors')
     app.use(
       cors({
         origin: 'http://localhost:5173', // substitua pela URL do seu front-end
       })
     )
     ```
   - Isso libera o acesso apenas para o seu front-end.

4. **Recebendo e exibindo a resposta no front-end**

   - No React, ao clicar no botão, chame a função `translate` e atualize o estado da legenda em português:
     ```javascript
     async function handleGenerate() {
       setCaption('Gerando legenda...')
       setCaptionPtbr('Traduzindo legenda...')
       const caption = await generateCaption(imageSource)
       setCaption(caption)
       const captionPt = await translate(caption)
       setCaptionPtbr(captionPt)
     }
     ```
   - Assim, a legenda traduzida aparecerá na tela.

5. **Testando a integração**

   - Reinicie o servidor Node.js após as alterações.
   - Clique no botão no front-end e veja se a legenda traduzida aparece corretamente.
   - Verifique no terminal do servidor se aparece "Nova requisição".

6. **Próximos passos**

   - Agora que a integração está funcionando, o próximo passo será implementar a tradução automática usando IA no servidor.

---

### Dicas Práticas

- Sempre teste a resposta do servidor antes de integrar com o front-end.
- Use `console.log` para depurar e acompanhar as requisições.
- Lembre-se de configurar o CORS corretamente para evitar erros de acesso.
- Comite cada avanço no Git para manter o histórico do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a enviar requisições do front-end para o servidor Node.js, configurar CORS, receber e exibir a legenda traduzida.  
> Agora, sua aplicação está pronta para integrar a tradução automática usando IA!
