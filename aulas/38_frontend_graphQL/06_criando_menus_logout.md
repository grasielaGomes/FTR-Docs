# Criando Menus e Logout no Frontend com GraphQL

## Destaques

- **Menus de Navegação**: Adição de botões para navegação entre ideias e membros.
- **Informações do Usuário**: Exibição de avatar, nome e e-mail do usuário autenticado.
- **Logout**: Implementação do botão e método de logout no store de autenticação.
- **Redirecionamento**: Usuário é redirecionado para a tela de login após logout.

---

## Passo-a-Passo para Criar Menus e Logout

1. **Adicionando Menus de Navegação**

   - No componente de header, adicione uma `div` com classes `flex items-center gap-4`.
   - Insira links (`Link` do `react-router-dom`) para as rotas de ideias (`/`) e membros (`/members`).
   - Utilize botões com ícones (ex: LightBulb para ideias, Users para membros).
   - Controle o estado ativo do menu verificando a rota atual com `useLocation`.

2. **Exibindo Informações do Usuário**

   - Adicione uma `div` para exibir o avatar, nome e e-mail do usuário.
   - Utilize o componente `Avatar` e, caso não haja imagem, use o fallback com as iniciais do usuário.
   - Exiba o nome em um `span` com classe `text-sm font-medium`.
   - Exiba o e-mail em um `span` com classe `text-xs text-muted`.

3. **Adicionando o Botão de Logout**

   - Fora da `div` de informações do usuário, adicione um botão de logout.
   - Utilize um ícone (ex: LucideLogout) e estilo `ghost` para o botão.
   - No evento `onClick`, chame o método de logout do store de autenticação.

4. **Implementando o Método de Logout no Store**

   - No arquivo do store (`auth.ts`), crie o método `logout`.
   - O método deve:
     - Definir `user` e `token` como `null`.
     - Definir `isAuthenticated` como `false`.
     - Chamar `ApolloClient.clearStore()` para limpar o cache e tokens.
   - Importe e utilize o método no componente de header.

5. **Redirecionando Após Logout**

   - Após executar o logout, utilize o `useNavigate` do `react-router-dom` para redirecionar o usuário para a rota `/login`.

6. **Testando os Menus e Logout**

   - Verifique se os botões de navegação funcionam corretamente.
   - Confirme se as informações do usuário aparecem corretamente.
   - Teste o botão de logout e verifique se o usuário é deslogado e redirecionado para a tela de login.

7. **Próximos Passos**

   - Implementar a área de membros: convidar, listar e gerenciar membros da plataforma.

---
