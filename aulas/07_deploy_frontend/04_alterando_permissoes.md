### Destaques - Alterando Permissões no S3

- **Acessando as Configurações de Permissões:**

  - Abrir a aba "Permissions" no bucket.
  - Editar a opção de "Block Public Access" desmarcando-a e confirmando a alteração.

- **Problema Inicial de Acesso:**

  - Mesmo com o acesso público habilitado, a URL do objeto retornava “Access Denied”.
  - Identificação de que, além do acesso público, era necessário atualizar a política do bucket.

- **Editando a Política do Bucket:**

  - Clicar em "Edit bucket policy" para adicionar um novo statement.
  - Selecionar a ação específica no serviço S3, como "s3:GetObject", que permite a leitura dos objetos.
  - Configurar a política para que a ação "GetObject" seja permitida em todos os objetos (utilizando “\*” como identificador se necessário).
  - Especificar o recurso usando o ARN do bucket seguido de "/\*", garantindo que a permissão se aplique a todos os objetos dentro do bucket.

- **Verificação e Resultado Final:**

  - Após salvar a política, o acesso aos arquivos via URL passou a funcionar corretamente.
  - Confirmar que, ao acessar objetos como arquivos CSS, o conteúdo está sendo carregado normalmente.
  - Observação sobre segurança: ao tornar o bucket público, é importante revisar quais arquivos estão disponíveis para garantir que apenas os conteúdos relacionados ao site estejam acessíveis.

- **Observação Final:**
  - A política foi aplicada manualmente, mas o fluxo poderá ser automatizado futuramente (ex.: com GitHub Actions ou ferramentas de IaC).
