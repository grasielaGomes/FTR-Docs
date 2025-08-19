### Destaques - Criando Bucket S3

- **Acesso ao Console e Início da Criação**

  - Navegar até o S3 no console da AWS.
  - Clicar em "Criar Bucket" e definir um nome único para o bucket (por exemplo, "Rocketseat Upload Widget Web").

- **Configurações Iniciais do Bucket**

  - **Nome e Unicidade:**
    - É necessário um nome único (se já existir um bucket com o mesmo nome, a criação falhará).
  - **Access Control List (ACL):**
    - Inicialmente, a configuração de ACL é deixada “desabilitada” para o acesso público.
  - **Bloqueio de Acesso Público:**
    - Por padrão, o acesso público está bloqueado (opção recomendada inicialmente) para posteriormente permitir as configurações apropriadas de website.

- **Outras Configurações do Bucket**

  - **Versionamento:**
    - Ativar o versionamento para manter histórico das alterações, similar ao versionamento de código (como no Git).
  - **Tags:**
    - Inclusão de tags (exemplo: `IAC false`) para manter padrões internos.
  - **Encriptação:**
    - Utilização da encriptação “SSE S3” como padrão (server-side encryption) – há a opção de usar o KMS para gerenciamento de chaves, se necessário.
  - **Object Lock (Opcional):**
    - Menção rápida à possibilidade de habilitar o "object lock" para evitar sobrescritas (não explorado neste momento).

- **Realizando o Upload de Arquivos**

  - **Upload dos Arquivos Estáticos:**
    - Após a criação do bucket, os arquivos da pasta `dist` (HTML, CSS, JavaScript) são enviados para o bucket.
    - Exemplificação com o upload do arquivo `index.html` e dos diretórios que contenham CSS/JS.

- **Testando o Acesso aos Arquivos**

  - **Tentativa de Acesso via URL do Objeto:**
    - Acessar a URL gerada para um objeto mostra “Access Denied” devido à falta de configuração de website e permissões públicas.
  - **Diferença entre Acesso Direto e via Static Website:**
    - Ao acessar pela URL do objeto (não configurado como website), pode ocorrer erro de permissão mesmo se o objeto estiver disponível.
  - **Configuração do Static Website:**
    - Navegar até “Properties” do bucket e habilitar a opção de “Static Website”.
    - Definir o documento de índice (index.html) e, se necessário, regras de redirecionamento (deixadas vazias se não houver).
    - Salvar as configurações para gerar o endpoint do website.

- **Observações e Pontos Importantes**
  - **Permissões:**
    - Mesmo após o upload dos arquivos, as configurações de acesso (público versus privado) devem ser ajustadas para garantir que o conteúdo seja servido corretamente.
  - **Mensagem de Erro e Depuração:**
    - Se ocorrer “access denied” ao acessar o endpoint do website, isso indica que ainda há questões de permissionamento a serem resolvidas.
  - **Utilização de Outras Ferramentas:**
    - A abordagem via console é demonstrada, mas futuramente poderá ser automatizada (por exemplo, com o uso de Pulumi ou outras ferramentas de IAC).
