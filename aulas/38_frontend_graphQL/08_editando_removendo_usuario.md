# Editando e Removendo Usuário no Frontend com GraphQL

## Destaques

- **Diálogos de Edição e Remoção**: Criação dos componentes de edição e remoção de membros.
- **Mutation de Edição**: Atualização de nome e papel do membro.
- **Mutation de Remoção**: Exclusão de membros da plataforma.
- **Integração com a Página de Membros**: Atualização automática da lista após editar ou remover.
- **Gestão Completa de Usuários**: Fluxo de cadastro, edição, remoção e visualização de membros.

---

## Passo-a-Passo para Editar e Remover Usuários

1. **Criando o Diálogo de Edição de Membro**

   - Crie o componente `EditMemberDialog.tsx`.
   - Defina as props: `open`, `onOpenChange`, `member` (User ou null) e `onUpdated`.
   - Importe e utilize componentes de dialog, header, title, input e select para editar nome e papel.
   - Utilize estados locais para `name` e `role`, populando-os com os dados do membro via `useEffect`.
   - Implemente o formulário com campos para nome e papel, e botões de cancelar e salvar.

2. **Implementando a Mutation de Edição**

   - Importe a mutation `updateUser` e utilize o hook `useMutation`.
   - Defina as tipagens para os dados e variáveis da mutation.
   - No `handleSubmit`, chame a mutation passando o `id`, `name` e `role`.
   - No `onCompleted`, limpe os estados, feche o diálogo e chame `onUpdated` para atualizar a lista.

3. **Integrando o Diálogo de Edição à Página de Membros**

   - Na página de membros, crie estados para controlar a abertura do diálogo e o membro selecionado.
   - No handler de edição, defina o membro a ser editado e abra o diálogo.
   - Passe as props necessárias para o `EditMemberDialog` e atualize a lista ao editar.

4. **Criando o Diálogo de Remoção de Membro**

   - Crie o componente `DeleteMemberDialog.tsx`.
   - Defina as props: `open`, `onOpenChange`, `member` (User ou null) e `onDeleted`.
   - Implemente o diálogo com mensagem de confirmação, nome do membro e botões de cancelar e remover.

5. **Implementando a Mutation de Remoção**

   - Importe a mutation `deleteUser` e utilize o hook `useMutation`.
   - No `handleDeleteUser`, chame a mutation passando o `id` do membro.
   - No `onCompleted`, feche o diálogo e chame `onDeleted` para atualizar a lista.
   - Opcional: Utilize o `refetchQueries` para atualizar a lista de membros automaticamente.

6. **Integrando o Diálogo de Remoção à Página de Membros**

   - Crie estados para controlar a abertura do diálogo de remoção e o membro selecionado.
   - No handler de remoção, defina o membro a ser removido e abra o diálogo.
   - Passe as props necessárias para o `DeleteMemberDialog` e atualize a lista ao remover.

7. **Testando Edição e Remoção de Usuários**

   - Execute o frontend e backend.
   - Acesse a página de membros, edite e remova usuários, verificando se a lista é atualizada corretamente.
   - Teste os fluxos de cadastro, edição, remoção e visualização de membros.

8. **Resumo do Módulo**

   - O fluxo completo de gestão de usuários inclui cadastro, login, criação e visualização de ideias, comentários, votos, edição e remoção de membros.
   - O uso do GraphQL com React proporciona maior performance e flexibilidade, resolvendo problemas comuns de overfetch e underfetch presentes em APIs REST.

---
