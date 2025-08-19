### **Criando a Interface entre Aplicação e Modelo de IA no React**

#### Introdução

- Agora que já temos a função para gerar legendas (caption), vamos criar a interface que conecta a aplicação ao modelo de IA.
- O objetivo é isolar o modelo do restante do código, facilitando manutenção e futuras trocas.
- Vamos separar a lógica do modelo em uma pasta própria e criar uma função de comunicação (API interna).

---

#### Tópicos

1. Por que isolar o modelo da aplicação?
2. Criando a pasta e o arquivo do modelo
3. Definindo a função de interface (API)
4. Usando a função de interface na aplicação
5. Vantagens do isolamento
6. Próximos passos: implementação do modelo real

---

### Passo a Passo para Criar a Interface entre Aplicação e Modelo

1. **Por que isolar o modelo da aplicação?**

   - Separar o modelo de IA do restante do código facilita a manutenção e a troca do modelo no futuro.
   - A aplicação só precisa saber que existe uma função que recebe uma imagem e devolve uma legenda, sem se preocupar com os detalhes internos do modelo.
   - Esse conceito é chamado de "caixa preta": a aplicação não precisa saber como o modelo funciona, só como usá-lo.

2. **Criando a pasta e o arquivo do modelo**

   - Crie uma nova pasta chamada `models` no seu projeto.
   - Dentro dela, crie um arquivo chamado `api.js`.
   - Esse arquivo será responsável por expor a função que a aplicação vai usar para gerar a legenda.

3. **Definindo a função de interface (API)**

   - No arquivo `api.js`, crie uma função chamada `generateCaption` que recebe a URL da imagem e retorna uma legenda (por enquanto, um texto fixo para teste).
   - Exemplo:
     ```javascript
     // models/api.js
     export function generateCaption(imageSource) {
       // Aqui, futuramente, vamos chamar o modelo de IA
       return 'Nova legenda'
     }
     ```
   - Assim, a aplicação pode importar e usar essa função sem saber como a legenda é gerada.

4. **Usando a função de interface na aplicação**

   - Importe a função `generateCaption` no componente React.
   - Altere a função que gera a legenda para chamar a API:

     ```javascript
     import { generateCaption } from './models/api'

     function handleGenerate() {
       const caption = generateCaption(imageSource)
       setCaption(caption)
     }
     ```

   - Agora, ao clicar no botão, a legenda será atualizada usando a função da API.

5. **Vantagens do isolamento**

   - Você pode testar a aplicação mesmo sem o modelo de IA pronto.
   - No futuro, basta trocar a implementação da função na pasta `models` para usar o modelo real, sem mexer no restante do código.
   - Facilita a manutenção, testes e evolução do sistema.

6. **Próximos passos: implementação do modelo real**

   - Depois de testar a interface, você pode criar um arquivo separado (ex: `imageCaptioner.js`) para implementar o modelo de IA de verdade.
   - A função `generateCaption` vai chamar esse modelo e retornar a legenda gerada automaticamente.

---

### Dicas Práticas

- Sempre isole a lógica do modelo em arquivos separados do React.
- Teste a interface com textos fixos antes de integrar o modelo real.
- Use o Git para versionar cada etapa do desenvolvimento.
- Lembre-se: a aplicação só precisa saber como usar a função, não como ela funciona por dentro.

---

> **Resumo:**  
> Nesta aula, você aprendeu a criar uma interface entre a aplicação React e o modelo de IA, isolando a lógica do modelo em uma pasta separada.  
> Isso facilita a manutenção, testes e futuras trocas de modelo, seguindo boas práticas de arquitetura de software.
