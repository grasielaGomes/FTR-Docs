### **Projeto Prático Parte 1: Geração de Legendas para Imagens com React**

#### Introdução

- Nesta aula, vamos iniciar a primeira parte do nosso projeto prático: criar uma aplicação em React que gera legendas para imagens usando IA.
- O objetivo é mostrar, passo a passo, como criar o projeto, preparar a interface e deixar tudo pronto para integrar o modelo de IA.

---

#### Tópicos

1. Criando o projeto React
2. Inicializando o repositório Git
3. Instalando dependências
4. Limpando e preparando a interface
5. Estruturando a interface para geração de legendas

---

### Passo a Passo para Criar o Projeto de Legendas

1. **Criando o projeto React**

   - Abra o terminal e execute:
     ```
     npm create vite@latest
     ```
   - Dê um nome para o projeto, por exemplo: `front`.
   - Escolha o template `React` quando solicitado.
   - Entre na pasta do projeto:
     ```
     cd front
     ```

2. **Inicializando o repositório Git**

   - Ainda no terminal, inicialize o Git:
     ```
     git init
     git add .
     git commit -m "initial commit"
     ```
   - Isso garante que todas as alterações fiquem salvas e versionadas.

3. **Instalando dependências**

   - Instale as dependências do projeto:
     ```
     npm install
     ```
   - Instale a biblioteca Transformers da Hugging Face:
     ```
     npm install @xenova/transformers
     ```
   - (Se for usar outra biblioteca, ajuste o comando conforme necessário.)

4. **Limpando e preparando a interface**

   - Remova os componentes e estilos padrão do React criados pelo Vite.
   - Deixe apenas o essencial para começar a montar sua interface.
   - Reinicie o servidor de desenvolvimento para ver as alterações:
     ```
     npm run dev
     ```

5. **Estruturando a interface para geração de legendas**

   - Crie um layout simples com:
     - Um título (ex: `Caption Generator`)
     - Um campo para inserir a URL da imagem
     - Um botão "Generate" para acionar a geração da legenda
     - Um espaço para exibir a imagem escolhida
     - Um espaço para mostrar a legenda gerada
   - Exemplo de estrutura em JSX:
     ```jsx
     <h1>Caption Generator</h1>
     <form className="url-form">
       <input type="text" placeholder="URL da imagem" />
       <button type="button">Generate</button>
     </form>
     <div ="classNamecaptioned-image">
       <img src={urlDaImagem} alt="Imagem escolhida" width={200} height={200} />
       <span>{legendaGerada}</span>
     </div>
     ```
   - Use CSS simples para organizar os elementos (flex, column, margin).

---

### Dicas Práticas

- Não se preocupe com design: o foco é a funcionalidade.
- Mantenha o código limpo e versionado no Git.
- Teste cada etapa no navegador antes de avançar.
- Deixe a lógica da IA separada da interface para facilitar manutenção.

---

> **Resumo:**  
> Nesta etapa, você aprendeu a criar um projeto React do zero, preparar o ambiente, limpar a interface e montar a estrutura básica para gerar legendas para imagens.  
> O próximo passo será integrar o modelo de IA para gerar as legendas automaticamente!
