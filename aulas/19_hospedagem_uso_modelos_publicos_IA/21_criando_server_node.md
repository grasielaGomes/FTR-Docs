### **Criando um Servidor Node.js para Tradução de Legendas (Parte 2 do Projeto)**

#### Introdução

- Agora que o front-end já gera legendas em inglês, vamos criar um servidor em Node.js para traduzir essas legendas para português.
- Nesta aula, você vai aprender a criar um servidor HTTP simples usando Express, criar endpoints e preparar tudo para integrar com o front-end.

---

#### Tópicos

1. Criando o diretório do servidor Node.js
2. Inicializando o projeto Node.js
3. Instalando o Express
4. Criando o servidor HTTP
5. Criando o endpoint de teste
6. Criando o endpoint de tradução (POST)
7. Testando o servidor e endpoints
8. Salvando o progresso com Git

---

### Passo a Passo para Criar o Servidor Node.js

1. **Criando o diretório do servidor Node.js**

   - No terminal, crie uma nova pasta para o servidor:
     ```
     mkdir server-node
     cd server-node
     ```

2. **Inicializando o projeto Node.js**

   - Inicie o projeto com o comando:
     ```
     npm init -y
     ```
   - Isso cria um arquivo `package.json` com as configurações básicas.

3. **Instalando o Express**

   - Instale o Express, que facilita a criação de servidores HTTP:
     ```
     npm install express
     ```

4. **Criando o servidor HTTP**

   - Crie um arquivo chamado `index.js` e adicione o seguinte código:

     ```javascript
     const express = require('express')
     const app = express()
     const port = 3000

     app.listen(port, () => {
       console.log(`Servidor ouvindo na porta ${port}`)
     })
     ```

   - Execute o servidor:
     ```
     node index.js
     ```
   - Você verá no terminal: `Servidor ouvindo na porta 3000`.

5. **Criando o endpoint de teste**

   - Adicione um endpoint para testar se o servidor responde:
     ```javascript
     app.get('/', (req, res) => {
       res.send('olá')
     })
     ```
   - Acesse `http://localhost:3000` no navegador e veja se aparece "olá".

6. **Criando o endpoint de tradução (POST)**

   - Adicione um endpoint POST chamado `/translate`:
     ```javascript
     app.post('/translate', (req, res) => {
       res.json({ translated_text: 'legenda traduzida' })
     })
     ```
   - Por enquanto, ele retorna um texto fixo para teste.

7. **Testando o servidor e endpoints**

   - Use o comando curl para testar o endpoint de tradução:
     ```
     curl -X POST http://localhost:3000/translate
     ```
   - Você deve receber:
     ```json
     { "translated_text": "legenda traduzida" }
     ```
   - Isso mostra que o servidor está funcionando e pronto para receber integrações do front-end.

8. **Salvando o progresso com Git**

   - Salve seu trabalho usando Git:
     ```
     git add .
     git commit -m "server node"
     ```

---

### Dicas Práticas

- Sempre teste seus endpoints com curl ou ferramentas como Postman.
- Use respostas fixas no início para facilitar testes antes de integrar o modelo de tradução real.
- Mantenha o código organizado e versionado com Git.
- Separe o servidor Node.js do front-end para facilitar manutenção e evolução do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a criar um servidor Node.js com Express, criar endpoints para teste e tradução, e preparar tudo para integrar com o front-end.  
> O próximo passo será conectar o front-end ao servidor e, depois, implementar a tradução automática usando IA!
