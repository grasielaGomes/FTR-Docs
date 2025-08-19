### **Isolando e Implementando o Singleton do Modelo de Tradução no Servidor Node.js**

#### Introdução

- Agora vamos organizar o servidor Node.js para traduzir legendas usando IA, separando a lógica do modelo da lógica HTTP.
- O objetivo é deixar o código mais limpo, fácil de manter e pronto para evoluir, usando o padrão Singleton para carregar o modelo de tradução apenas uma vez.

---

#### Tópicos

1. Por que isolar o modelo do servidor HTTP?
2. Criando a pasta e o arquivo da API do modelo
3. Implementando a função de tradução na API
4. Ajustando o servidor para usar a API
5. Corrigindo problemas de JSON (body-parser)
6. Criando o Singleton do modelo de tradução
7. Testando o fluxo completo
8. Salvando o progresso com Git

---

### Passo a Passo para Isolar e Implementar o Singleton

1. **Por que isolar o modelo do servidor HTTP?**

   - Separar a lógica do modelo de IA da lógica HTTP facilita manutenção, testes e futuras trocas de modelo.
   - Permite evoluir para arquiteturas mais avançadas (como sidecar) sem grandes mudanças.

2. **Criando a pasta e o arquivo da API do modelo**

   - Crie uma pasta chamada `models` dentro do seu projeto Node.js.
   - Dentro dela, crie um arquivo chamado `api.js`.

3. **Implementando a função de tradução na API**

   - No arquivo `api.js`, crie uma função `translate` que recebe o texto em inglês e retorna um texto traduzido (por enquanto, fixo para teste):
     ```javascript
     // models/api.js
     function translate(text) {
       return 'texto traduzido pela API'
     }
     module.exports = { translate }
     ```

4. **Ajustando o servidor para usar a API**

   - No arquivo principal do servidor (`index.js`), importe a função `translate`:
     ```javascript
     const { translate } = require('./models/api')
     ```
   - No endpoint `/translate`, use a função para processar o texto recebido:
     ```javascript
     app.post('/translate', (req, res) => {
       const text = req.body.text
       const translated = translate(text)
       res.json({ translated_text: translated })
     })
     ```

5. **Corrigindo problemas de JSON (body-parser)**

   - Para que o servidor entenda o corpo das requisições em JSON, adicione:
     ```javascript
     app.use(express.json())
     ```
   - Isso deve ser feito antes dos endpoints.

6. **Criando o Singleton do modelo de tradução**

   - Crie um arquivo `translator.js` na pasta `models` para implementar o Singleton:

     ```javascript
     // models/translator.js
     class Translator {
       static translator = null

       static getInstance() {
         if (Translator.translator === null) {
           // Aqui você carregaria o modelo real (exemplo fictício)
           Translator.translator = new Translator()
         }
         return Translator.translator
       }

       translate(text) {
         return 'texto traduzido pelo modelo'
       }
     }

     module.exports = { Translator }
     ```

   - No `api.js`, use o Singleton:
     ```javascript
     const { Translator } = require('./translator')
     function translate(text) {
       const translator = Translator.getInstance()
       return translator.translate(text)
     }
     module.exports = { translate }
     ```

7. **Testando o fluxo completo**

   - Reinicie o servidor.
   - Faça uma requisição do front-end ou com curl/postman e veja se recebe `"texto traduzido pelo modelo"` como resposta.
   - Verifique se não há erros de JSON no terminal.

8. **Salvando o progresso com Git**

   - No terminal, salve as alterações:
     ```
     git add .
     git commit -m "Implementa singleton do modelo de tradução"
     ```

---

### Dicas Práticas

- Sempre isole a lógica do modelo em arquivos separados do servidor HTTP.
- Use o padrão Singleton para evitar recarregar o modelo a cada requisição.
- Teste cada etapa antes de avançar para a próxima.
- Use logs para depurar e entender o fluxo das requisições.
- Comite cada avanço no Git para manter o histórico do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a separar a lógica do modelo de tradução do servidor HTTP, implementar o padrão Singleton para o modelo e garantir que o servidor está pronto para evoluir e receber o modelo de IA real no futuro.
