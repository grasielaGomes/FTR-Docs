# Configurando Projeto Frontend com GraphQL

## Destaques

- **Frontend do Mindshare**: Interface para login, cadastro, ideias, comentários e membros.
- **Integração com Backend**: Utiliza o backend GraphQL criado anteriormente (Apollo Server + Express).
- **Ferramentas Utilizadas**: Vite, React, TypeScript, Tailwind CSS, shadcn/ui, React Router DOM.

---

## Passo-a-Passo para Configurar o Projeto Frontend

1. **Pré-requisitos**

   - Ter o backend GraphQL já criado e rodando (Apollo Server + Express).
   - Ter o Node.js e npm instalados.

2. **Criando o Projeto com Vite**

   - No terminal, execute:
     ```bash
     npm create vite
     ```
   - Nomeie o projeto como `front-end`.
   - Escolha `React` com `TypeScript`.
   - Acesse a pasta do projeto e instale as dependências:
     ```bash
     cd front-end
     npm install
     ```

3. **Configurando Tailwind CSS e shadcn/ui**

   - Instale Tailwind CSS e plugins necessários:
     ```bash
     npm install tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
   - Instale o shadcn/ui:
     ```bash
     npx shadcn-ui@latest init
     ```
   - Instale componentes adicionais conforme necessidade (ex: Card, Button, Input, Avatar):
     ```bash
     npx shadcn-ui@latest add card button input avatar
     ```
   - Ajuste o arquivo `index.css` com as configurações e cores do projeto.

4. **Configurando o Projeto**

   - Remova arquivos e estilos não utilizados (`App.css`, etc).
   - Importe o Tailwind CSS no `index.css`.
   - Ajuste o `tsconfig.json` e `tsconfig.app.json` para mapear paths, se necessário.
   - Instale tipos do Node:
     ```bash
     npm install @types/node
     ```
   - Configure o `vite.config.ts` para resolver aliases de imports.

5. **Estruturando o Projeto**

   - Crie as pastas `src/components` e `src/pages`.
   - Em `components`, crie um componente `Layout.tsx` para estruturar a aplicação.
   - Importe e utilize componentes do shadcn/ui (ex: Toaster para notificações).

6. **Criando as Páginas de Login e Cadastro**

   - Em `src/pages`, crie `Login.tsx` e `Signup.tsx`.
   - Implemente os formulários controlados com estados para e-mail, senha e nome (no cadastro).
   - Utilize os componentes de UI (Card, Input, Button, etc).
   - Importe a logo do projeto em `assets` e utilize nas páginas.

7. **Configurando Rotas**

   - Instale o React Router DOM:
     ```bash
     npm install react-router-dom
     ```
   - No `App.tsx`, configure as rotas para `/login` e `/signup` utilizando os componentes criados.
   - No `main.tsx`, envolva o App com o `BrowserRouter`.

8. **Ajustando Estilos**

   - Centralize os formulários de login e cadastro utilizando classes utilitárias do Tailwind CSS.
   - Ajuste cores e espaçamentos conforme o protótipo.

9. **Testando o Projeto**

   - Execute o projeto:
     ```bash
     npm run dev
     ```
   - Acesse as rotas `/login` e `/signup` para verificar as telas.

10. **Próximos Passos**

    - Configurar Apollo Client e GraphQL no frontend.
    - Implementar mutations para cadastro e login.
    - Desenvolver as páginas de ideias, comentários e membros.

---
