## Criação do Projeto com Vite

### Destaques

- Criação do projeto frontend utilizando Vite.
- Configuração inicial do projeto com React e TypeScript.
- Limpeza e organização da estrutura do projeto.
- Instalação e configuração do Tailwind CSS.
- Uso da fonte Inter do Google Fonts.
- Configuração do Tailwind para utilizar a fonte Inter.

### Passo-a-Passo

1. **Criar o Projeto com Vite**

   - No terminal, execute:
     ```sh
     npm create vite@latest web -- --template react-ts
     cd web
     pnpm install
     ```

2. **Limpar e Organizar a Estrutura do Projeto**

   - Abra o projeto no VSCode.
   - Delete o arquivo [README.md](http://_vscodecontentref_/0).
   - No arquivo `index.tsx`, troque o conteúdo para "upload widget".
   - Delete o arquivo `src/assets`.
   - Delete o arquivo `src/App.css`.
   - Renomeie `src/App.tsx` para `src/app.tsx` e ajuste as importações.
   - Limpe o conteúdo de `src/app.tsx` e deixe apenas um "hello world".
   - No arquivo `src/main.tsx`, ajuste a importação para `app`.

3. **Instalar e Configurar o Tailwind CSS**

   - No terminal, execute:
     ```sh
     pnpm add -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
   - Configure o `tailwind.config.js` e `index.css`:

     ```js
     // tailwind.config.js
     module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}'],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

     ```css
     /* index.css */
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Adicionar a Fonte Inter do Google Fonts**

   - Acesse o Google Fonts e procure pela fonte Inter.
   - Copie o link de importação e adicione ao `index.html`:
     ```html
     <!-- index.html -->
     <link
       href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
       rel="stylesheet"
     />
     ```

5. **Configurar o Tailwind para Usar a Fonte Inter**

   - No arquivo `tailwind.config.js`, adicione a configuração da fonte:
     ```js
     // tailwind.config.js
     module.exports = {
       theme: {
         extend: {
           fontFamily: {
             sans: ['Inter', 'sans-serif'],
           },
         },
       },
     }
     ```

6. **Executar o Projeto**
   - No terminal, execute:
     ```sh
     pnpm run dev
     ```
   - Verifique se o projeto está rodando corretamente.

### Observações

- Certifique-se de que todas as importações e configurações estão corretas.
- O projeto deve estar configurado para utilizar o Tailwind CSS e a fonte Inter.
