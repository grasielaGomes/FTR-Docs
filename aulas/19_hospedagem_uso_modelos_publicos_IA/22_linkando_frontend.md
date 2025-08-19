### **Conectando o Front-end ao Servidor de Tradução (Integração React + Node.js)**

#### Introdução

- Agora que já temos o servidor Node.js rodando e o front-end gerando legendas em inglês, vamos conectar os dois!
- O objetivo é mostrar, passo a passo, como exibir a legenda em português na tela, integrando o front-end com o endpoint de tradução.
- Você vai aprender a criar variáveis para guardar a legenda traduzida, exibir as duas legendas na interface e preparar a função que fará a chamada ao servidor.

---

#### Tópicos

1. Exibindo a legenda em português na interface
2. Criando o estado para a legenda traduzida
3. Atualizando a legenda traduzida ao clicar no botão
4. Criando a função translate para chamar o servidor
5. Separando a lógica em uma interface (API)
6. Testando a integração e exibindo feedback ao usuário
7. Próximos passos

---

### Passo a Passo para Integrar o Front-end com o Servidor

1. **Exibindo a legenda em português na interface**

   - Mostre a legenda em inglês e, logo abaixo, a legenda em português.
   - Assim, o usuário pode comparar o resultado da tradução.

2. **Criando o estado para a legenda traduzida**

   - No seu componente React, crie um novo estado para guardar a legenda em português:
     ```javascript
     const [captionPtbr, setCaptionPtbr] = useState('Legenda')
     ```
   - Exiba esse valor abaixo da legenda em inglês:
     ```jsx
     <span>{caption}</span>
     <span>{captionPtbr}</span>
     ```

3. **Atualizando a legenda traduzida ao clicar no botão**

   - Ao clicar no botão de gerar legenda, primeiro gere a legenda em inglês normalmente.
   - Depois, chame a função de tradução e atualize o estado da legenda em português:
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

4. **Criando a função translate para chamar o servidor**

   - Crie uma função `translate` que recebe a legenda em inglês e retorna a tradução.
   - Por enquanto, ela pode retornar um texto fixo para teste:
     ```javascript
     export async function translate(captionEn) {
       // Aqui você vai fazer a chamada ao servidor futuramente
       return 'Legenda traduzida'
     }
     ```
   - Depois, você vai implementar a chamada HTTP para o endpoint `/translate`.

5. **Separando a lógica em uma interface (API)**

   - Mantenha as funções `generateCaption` e `translate` em um arquivo separado (ex: `models/api.js`).
   - Isso facilita a manutenção e permite trocar a implementação sem mudar o restante do código.

6. **Testando a integração e exibindo feedback ao usuário**

   - Teste a aplicação: ao clicar no botão, veja se aparece "Gerando legenda..." e depois "Traduzindo legenda...".
   - Quando tudo estiver funcionando, as legendas em inglês e português devem aparecer na tela.

7. **Próximos passos**

   - O próximo passo será implementar a função `translate` para realmente buscar a tradução no servidor Node.js.
   - Assim, a legenda em português será gerada automaticamente pelo modelo de IA.

---

### Dicas Práticas

- Sempre mostre feedback ao usuário enquanto a legenda está sendo gerada ou traduzida.
- Separe a lógica de integração em arquivos próprios (API).
- Teste cada etapa antes de avançar para a próxima.
- Use o Git para versionar cada mudança importante.

---

> **Resumo:**  
> Nesta aula, você aprendeu a exibir a legenda em português no front-end, criar a função de tradução e preparar a integração com o servidor Node.js.  
> Agora, sua aplicação está pronta para mostrar legendas em dois idiomas e, em breve, fazer traduções automáticas usando IA!
