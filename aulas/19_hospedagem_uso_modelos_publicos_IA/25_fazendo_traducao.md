### **Implementando a Tradução Automática com IA no Servidor Node.js**

#### Introdução

- Agora que o Singleton do modelo de tradução está pronto, vamos integrá-lo com a biblioteca da Hugging Face para traduzir textos automaticamente.
- Você vai aprender a instalar a biblioteca, carregar o modelo de tradução, configurar os parâmetros corretos e ajustar o servidor para retornar a tradução real para o front-end.

---

#### Tópicos

1. Instalando a biblioteca da Hugging Face
2. Carregando o modelo de tradução no Singleton
3. Definindo os parâmetros de idioma (source e target)
4. Ajustando a função de tradução para ser assíncrona
5. Corrigindo o formato da resposta da API
6. Testando a tradução automática
7. Salvando o progresso com Git

---

### Passo a Passo para Implementar a Tradução Automática

1. **Instalando a biblioteca da Hugging Face**

   - No terminal, instale a biblioteca que permite usar modelos de IA:
     ```
     npm install @xenova/transformers
     ```
   - Aguarde a instalação terminar antes de prosseguir.

2. **Carregando o modelo de tradução no Singleton**

   - No arquivo do Singleton (`translator.js`), ajuste para carregar o modelo apenas uma vez:

     ```javascript
     // models/translator.js
     let translator = null

     async function getTranslator() {
       if (!translator) {
         const { pipeline } = await import('@xenova/transformers')
         translator = await pipeline(
           'translation',
           'Xenova/nllb-200-distilled-600M',
           { quantized: 'q8' }
         )
       }
       return translator
     }

     module.exports = { getTranslator }
     ```

3. **Definindo os parâmetros de idioma (source e target)**

   - O modelo aceita vários idiomas. Para traduzir do inglês para português, use os códigos:
     - Inglês: `eng_Latn`
     - Português: `por_Latn`
   - Na função de tradução, passe esses parâmetros:
     ```javascript
     const result = await translator(text, {
       src_lang: 'eng_Latn',
       tgt_lang: 'por_Latn',
     })
     ```

4. **Ajustando a função de tradução para ser assíncrona**

   - Torne a função de tradução `async` para lidar com Promises:

     ```javascript
     // models/api.js
     const { getTranslator } = require('./translator')

     async function translate(text) {
       const translator = await getTranslator()
       const result = await translator(text, {
         src_lang: 'eng_Latn',
         tgt_lang: 'por_Latn',
       })
       // O resultado é um array de objetos, pegue o texto traduzido:
       return result[0].generated_text
     }

     module.exports = { translate }
     ```

5. **Corrigindo o formato da resposta da API**

   - No servidor (`index.js`), ajuste o endpoint para lidar com funções assíncronas:

     ```javascript
     const { translate } = require('./models/api')

     app.post('/translate', async (req, res) => {
       const text = req.body.text
       const translated = await translate(text)
       res.json({ translated_text: translated })
     })
     ```

6. **Testando a tradução automática**

   - Reinicie o servidor Node.js.
   - No front-end, envie uma legenda em inglês e veja se recebe a tradução correta em português.
   - Use logs (`console.log`) para acompanhar o texto recebido e o texto traduzido no terminal do servidor.

7. **Salvando o progresso com Git**

   - No terminal, salve as alterações:
     ```
     git add .
     git commit -m "Implementa tradução automática com IA"
     ```

---

### Dicas Práticas

- Sempre teste a tradução com frases diferentes para garantir que o modelo está funcionando.
- Use logs para depurar e entender o fluxo de dados.
- Se a tradução não aparecer, verifique se o modelo foi carregado corretamente e se os parâmetros de idioma estão certos.
- Comite cada avanço no Git para manter o histórico do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a integrar o modelo de tradução automática da Hugging Face ao seu servidor Node.js, configurar os parâmetros de idioma, ajustar o formato da resposta e testar a tradução real.  
> Agora, seu sistema está pronto para traduzir legendas automaticamente usando IA!
