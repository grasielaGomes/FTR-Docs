# Criando a Página de Membros no Frontend com GraphQL

## Destaques

- **Página de Membros**: Listagem de membros, busca e modal para convidar novos membros.
- **Cards de Membros**: Exibição de avatar, nome, e-mail, role e ações de editar/remover.
- **Busca de Membros**: Input para pesquisar membros na lista.
- **Mutations**: Criação, edição e remoção de membros via GraphQL.
- **Componentização**: Separação em componentes como MemberCard e InviteMemberDialog.

---

## Passo-a-Passo para Criar a Página de Membros

1. **Criando a Página de Membros**

   - Crie a pasta `members` e o arquivo `index.tsx`.
   - Importe e utilize o componente `Page` para estruturar a página.
   - Adicione o header e uma área para busca de membros com um input e botão "Novo Usuário".

2. **Implementando Busca de Membros**

   - Crie estados `search` e `setSearch` com `useState` para controlar o input de busca.
   - Implemente um handler `handleAddUser` para abrir a modal de convite de membro.

3. **Configurando a Rota de Membros**

   - No `App.tsx`, adicione a rota `/members` protegida para a página de membros.

4. **Criando a Query de Listagem de Membros**

   - Crie a query `LIST_MEMBERS` em `src/graphql/queries/members.ts`.
   - Defina os campos: `id`, `name`, `email`, `role`, `createdAt`, `updatedAt`.
   - Utilize o hook `useQuery` para buscar os membros na página.

5. **Tipando e Renderizando a Lista de Membros**

   - Tipar o retorno da query como um array de usuários.
   - Crie uma constante `members` para armazenar os dados ou um array vazio.
   - Implemente a renderização dos membros usando `.map()`.

6. **Criando o Componente MemberCard**

   - Crie o componente `MemberCard` em `components/MemberCard.tsx`.
   - Defina as props: `member`, `isCurrentUser`, `onEdit`, `onDelete`.
   - Exiba avatar, nome, e-mail, role e botões de editar/remover.
   - Importe e utilize o `MemberCard` na página de membros.

7. **Identificando o Usuário Atual**

   - Utilize o store de autenticação para obter o `currentUserId`.
   - Compare `member.id` com `currentUserId` para exibir "você" no card.

8. **Implementando as Funções de Editar e Remover**

   - Crie handlers `handleEditUser` e `handleDeleteUser` que recebem o `memberId`.
   - Passe essas funções como props para o `MemberCard`.

9. **Criando a Modal de Convite de Membro**

   - Crie o componente `InviteMemberDialog`.
   - Defina os estados `open`, `name`, `email` e handlers para abrir/fechar a modal.
   - Implemente o formulário com campos para nome e e-mail.
   - Adicione botões de cancelar e convidar.

10. **Criando a Mutation de Criação de Membro**

    - Crie a mutation `CREATE_USER` em `src/graphql/mutations/members.ts`.
    - Defina os campos de retorno: `id`, `name`, `email`, `createdAt`, `updatedAt`.
    - Utilize o hook `useMutation` no `InviteMemberDialog` para criar o membro.

11. **Atualizando a Lista Após Convite**

    - No `onCompleted` da mutation, feche a modal, limpe os campos e chame o `refetch` da query de membros.

12. **Testando a Página de Membros**

    - Execute o frontend e backend.
    - Acesse `/members`, teste a busca, convide novos membros e veja os cards renderizados.
    - Verifique se os botões de editar/remover aparecem corretamente.

13. **Próximos Passos**

    - Implementar as modais de edição e remoção de membros utilizando as mutations criadas.
    - Finalizar a gestão de membros do projeto MindShare.

---
