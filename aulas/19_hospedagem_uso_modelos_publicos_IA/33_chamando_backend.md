### **Chamando o Endpoint de Áudio do Back-end no Front-end (React + Python)**

#### Introdução

- Agora vamos aprender como o front-end pode chamar o endpoint do servidor Python para converter texto em áudio.
- Você vai ver como criar a função que faz a requisição, ajustar o formato da resposta, lidar com CORS e integrar tudo ao fluxo do React.
- Ao final, seu app será capaz de gerar áudio a partir do texto traduzido e tocar automaticamente para o usuário.

---

#### Tópicos

1. Criando a função para chamar o endpoint de áudio
2. Ajustando o formato da resposta do servidor Python
3. Enviando o texto traduzido para o back-end
4. Recebendo e usando a URL do áudio no front-end
5. Lidando com CORS no servidor Flask
6. Testando o fluxo completo
7. Próximos passos

---

### Passo a Passo para Integrar o Endpoint de Áudio

1. **Criando a função para chamar o endpoint de áudio**

   - No arquivo de API do seu front-end (ex: `api.js`), crie uma função parecida com a função `translate`, mas agora para áudio:
     ```javascript
     export async function convertToAudio(translationText) {
       const response = await fetch('http://localhost:5000/textToAudio', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ text: translationText }),
       })
       const data = await response.json()
       return data // Espera-se que data seja um array com um objeto que tem a URL
     }
     ```
   - O endpoint será `http://localhost:5000/textToAudio` e o método é POST.

2. **Ajustando o formato da resposta do servidor Python**

   - Garanta que o endpoint `/textToAudio` responda em JSON, por exemplo:
     ```python
     return jsonify([{"url": url}])
     ```
   - Assim, o front-end pode acessar a URL do áudio facilmente.

3. **Enviando o texto traduzido para o back-end**

   - No React, após gerar e traduzir a legenda, chame a função `convertToAudio` passando o texto traduzido:
     ```javascript
     const audioEndpoint = await convertToAudio(captionPtbr)
     ```
   - Lembre-se de que o campo correto é o texto traduzido (por exemplo, `captionPtbr` ou `translationText`).

4. **Recebendo e usando a URL do áudio no front-end**

   - Pegue a URL retornada pelo back-end e atualize o estado do áudio:
     ```javascript
     setAudioSource('http://localhost:5000' + audioEndpoint[0].url)
     ```
   - Isso fará com que o player de áudio carregue e toque o novo áudio.

5. **Lidando com CORS no servidor Flask**

   - Se aparecer erro de CORS, instale e configure a biblioteca Flask-CORS:
     ```
     uv add flask-cors
     ```
   - No seu servidor Python:
     ```python
     from flask_cors import CORS
     CORS(app)
     ```
   - Ou, para uma rota específica:

     ```python
     from flask_cors import cross_origin

     @app.route("/textToAudio", methods=["POST"])
     @cross_origin()
     def text_to_audio():
         ...
     ```

6. **Testando o fluxo completo**

   - Gere uma legenda, traduza e envie para o endpoint de áudio.
   - O áudio deve ser gerado, salvo e a URL retornada para o front-end.
   - O player de áudio deve carregar e tocar o áudio automaticamente.

7. **Próximos passos**

   - Com tudo funcionando, você pode containerizar o servidor Python para facilitar o deploy.
   - Seu app agora faz todo o pipeline: imagem → legenda → tradução → áudio!

---

### Dicas Práticas

- Sempre teste o endpoint de áudio com textos diferentes antes de integrar ao front-end.
- Garanta que o servidor responda sempre em JSON.
- Use o campo correto do texto traduzido ao chamar o endpoint.
- Se der erro de CORS, confira a configuração do Flask-CORS.
- Comite cada avanço no Git para manter o histórico do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a criar a função para chamar o endpoint de áudio do back-end, ajustar o formato da resposta, lidar com CORS e integrar tudo ao fluxo do React.  
> Agora, seu app está pronto para converter texto em áudio e tocar automaticamente para o usuário!
