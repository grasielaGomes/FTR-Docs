### **Organizando o Estilo e Corrigindo Layouts**

#### Introdução

- Olá! Nesta aula, vamos dar uma geral no visual da nossa aplicação.
- O estilo estava um pouco bagunçado, com CSS diretamente no nosso código JavaScript. Vamos organizar isso, movendo o CSS para um arquivo separado, e depois corrigir alguns problemas de layout que apareceram, como elementos saindo da tela e tags de filmes se comportando de maneira estranha.

---

#### Tópicos

1.  Extraindo CSS inline para um arquivo `app.css`.
2.  Ajustando a largura do container principal da aplicação.
3.  Corrigindo o problema de tags de filmes quebrando linha ou transbordando.
4.  Implementando um scroll horizontal para as tags quando necessário.
5.  Garantindo o alinhamento correto das tags.

---

### Passo a Passo da Aula

1.  **Extraindo o CSS para um Arquivo Dedicado**

    - **O Problema:** Nosso código JavaScript (`App.jsx`) estava com muitos estilos CSS misturados diretamente nele (inline styles). Isso dificulta a organização e manutenção.
    - **A Solução:** Vamos mover todo esse CSS para um arquivo separado, que geralmente chamamos de `app.css` (ou `index.css`, dependendo da estrutura do seu projeto React).
    - **Como Fazer:**
      - Você pode fazer isso manualmente, copiando cada trecho de `style={{...}}` do JSX e transformando-o em classes CSS no arquivo `.css`.
      - No vídeo, foi sugerido usar uma ferramenta de IA (como o ChatGPT) para acelerar esse processo:
        1.  Copie todo o código do seu componente React (ex: `App.jsx`).
        2.  Peça à IA para "extrair todo o CSS inline do seguinte código React para um arquivo CSS separado e fornecer o código JavaScript modificado".
        3.  Substitua o código do seu `App.jsx` pelo JavaScript que a IA retornou (que agora usará `className` em vez de `style`).
        4.  Cole o CSS gerado pela IA no seu arquivo `app.css`.
      - Certifique-se de que seu `App.jsx` (ou o arquivo principal do seu app) está importando o arquivo `app.css`. Geralmente, isso é feito com uma linha no topo do `App.jsx`:
        ```javascript
        // filepath: front/src/App.jsx
        import './app.css' // Ou o caminho correto para seu arquivo CSS
        // ... resto dos imports e código do componente
        ```
    - Após essa mudança, a aparência da sua aplicação não deve ter mudado, mas o código estará mais organizado.

2.  **Ajustando a Largura do Container Principal (`#root`)**

    - **O Problema:** O container principal da nossa aplicação (geralmente um `div` com `id="root"` no `index.html`, que é onde o React monta a aplicação) pode estar com uma largura fixa (ex: `max-width: 1280px`) que faz com que ele transborde em telas menores ou janelas redimensionadas.
    - **A Solução:** Queremos que ele ocupe 100% da largura da tela (viewport width) e que o `padding` e `border` não o façam "crescer" para além disso.
    - No seu arquivo `app.css` (ou `index.css`), ajuste o estilo do `#root`:

      ```css
      /* filepath: front/src/app.css */
      /* ... existing code ... */

      #root {
        /* Remova ou comente a linha max-width: 1280px; se existir */
        width: 100vw; /* Faz o root ocupar 100% da largura da janela */
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        box-sizing: border-box; /* Garante que padding e border não aumentem a largura total */
      }

      /* ... existing code ... */
      ```

    - Isso deve impedir que o container principal cause uma barra de rolagem horizontal desnecessária.

3.  **Corrigindo o Comportamento das Tags de Filmes**

    - Temos dois problemas com as tags dos filmes:

      1.  **Quebra de Linha Indesejada:** Se o texto de uma tag é longo, ele pode quebrar em várias linhas, o que não fica bom.
      2.  **Transbordamento (Overflow):** Se impedirmos a quebra de linha, as tags podem ficar muito largas e sair do card do filme.

    - **Passo 3.1: Impedir a Quebra de Linha nas Tags**

      - No `app.css`, localize ou crie a classe para a tag individual (ex: `.movie-tag`) e adicione `white-space: nowrap;` (o vídeo menciona `text-wrap: nowrap;` que é uma propriedade mais nova, `white-space` é mais amplamente suportado para este caso específico):

        ```css
        /* filepath: front/src/app.css */
        /* ... existing code ... */

        .movie-tag {
          /* Ou o seletor que você usa para as tags individuais */
          /* ... outros estilos ... */
          white-space: nowrap; /* Impede que o texto da tag quebre linha */
          /* text-wrap: nowrap; */ /* Alternativa mais moderna, mas white-space é mais comum para isso */
        }

        /* ... existing code ... */
        ```

      - Isso fará com que cada tag fique em uma única linha, mas pode piorar o problema de transbordamento.

    - **Passo 3.2: Lidar com o Transbordamento das Tags com Scroll Horizontal**

      - **O Desafio:** Queremos que, se houver muitas tags ou tags muito longas, elas não quebrem o layout do card, mas que o usuário possa rolar horizontalmente para vê-las.
      - **A Estratégia:** Vamos usar um container interno para as tags que permitirá o scroll, e um container externo para ajudar no alinhamento.
      - **Modificações no JSX (dentro do seu componente `MovieCard.jsx` ou onde as tags são renderizadas):**
        Precisamos de uma estrutura com dois `divs` para as tags:

        ```jsx
        // filepath: front/src/components/MovieCard.jsx (ou onde as tags são mapeadas)
        // ...existing code...
        {
          /* Container externo para centralização e outros estilos gerais */
        }
        ;<div className="tags-container">
          {/* Container interno para o scroll e layout flex das tags */}
          <div className="tag-holder">
            {movie.tags.map((tag, index) => (
              <MovieTag key={index} tag={tag} />
            ))}
          </div>
        </div>
        // ...existing code...
        ```

      - **Modificações no CSS (`app.css`):**

        ```css
        /* filepath: front/src/app.css */
        /* ... existing code ... */

        .tags-container {
          /* Container externo */
          display: flex; /* Para centralizar o tag-holder se ele for menor */
          justify-content: center; /* Centraliza o tag-holder */
          /* min-height: 30px; */ /* Ajuste a altura mínima se necessário, conforme o vídeo */
          /* Outros estilos que você tinha para o container de tags */
          overflow: hidden; /* Esconde qualquer overflow que o tag-holder não pegue */
        }

        .tag-holder {
          /* Container interno */
          display: flex; /* Alinha as tags lado a lado */
          gap: 5px; /* Espaçamento entre as tags */
          overflow-x: auto; /* Permite scroll horizontal se as tags excederem a largura */
          padding: 5px 0; /* Adiciona um pouco de padding para o scrollbar não cortar as tags */
          /* Se você quer que as tags comecem da esquerda quando há scroll: */
          justify-content: flex-start;
          /* Se o .tags-container não tiver display:flex e justify-content:center,
             e você quiser o .tag-holder centralizado quando não há scroll,
             você pode precisar de margin: 0 auto; aqui, mas a abordagem com flex no pai é melhor. */
        }

        .movie-tag {
          /* ... (estilos existentes, incluindo white-space: nowrap) ... */
          padding: 5px 10px; /* Exemplo de padding */
          background-color: #eee; /* Exemplo de cor de fundo */
          border-radius: 4px; /* Exemplo de bordas arredondadas */
        }
        /* ... existing code ... */
        ```

    - **Explicação da Solução das Tags:**
      - O `.tag-holder` agora é quem de fato contém as tags em `display: flex` e tem `overflow-x: auto`. Isso significa que se as tags ocuparem mais espaço do que o disponível, uma barra de rolagem horizontal aparecerá _dentro_ do `.tag-holder`.
      - O `.tags-container` (o pai) pode ser usado para centralizar o `.tag-holder` quando não há scroll, ou para definir uma altura mínima, como visto no vídeo. Se o `.tags-container` usar `justify-content: center`, ele centralizará o `.tag-holder`. Quando o `.tag-holder` precisar rolar, ele se expandirá até o máximo permitido e o `justify-content: flex-start` dentro dele garantirá que as tags comecem da esquerda.

4.  **Verificando o Resultado**
    - Após essas alterações, a caixa principal da aplicação deve se ajustar corretamente à largura da tela.
    - As tags dos filmes não devem mais quebrar linha de forma estranha.
    - Se houver muitas tags, elas devem ficar em uma única linha e uma barra de rolagem horizontal deve aparecer para permitir que o usuário veja todas elas.
    - O alinhamento das tags deve estar correto, centralizado quando cabem e começando da esquerda quando precisam de scroll.

---

### Dicas Práticas

- **Ferramentas de Desenvolvedor do Navegador:** Use o "Inspecionar Elemento" (geralmente clicando com o botão direito e selecionando "Inspecionar") para ver como os estilos CSS estão sendo aplicados e para testar mudanças em tempo real.
- **`box-sizing: border-box;`:** É uma propriedade CSS muito útil. Por padrão, a largura e altura de um elemento não incluem `padding` e `border`. `border-box` muda isso, fazendo com que `padding` e `border` sejam incluídos na largura/altura total definida, o que geralmente torna os layouts mais intuitivos.
- **Flexbox para Alinhamento:** `display: flex` e suas propriedades associadas (`justify-content`, `align-items`, `gap`) são poderosas para criar layouts flexíveis e alinhar itens.

---

> **Resumo:**  
> Nesta aula, organizamos nosso CSS movendo-o para um arquivo dedicado. Corrigimos o layout principal da aplicação para evitar transbordamentos e ajustamos o comportamento das tags de filmes para que não quebrem linha e permitam rolagem horizontal quando necessário, mantendo um bom alinhamento. Essas mudanças melhoram tanto a organização do código quanto a experiência visual do usuário.
