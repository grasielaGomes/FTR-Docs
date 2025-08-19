### Destaques - Entendendo a Estrutura do Deploy do Front-end

- **Contextualização do Front-end vs. Back-end**

  - Aborda a continuidade do conteúdo para deploy, agora focando no front-end.
  - Diferença fundamental: o back-end é client-server (processamento no servidor), enquanto o front-end é client-side (renderizado no cliente).

- **Abordagem para o Deploy do Front-end**

  - Não se utiliza containerização para o front-end; a prioridade é disponibilizar os arquivos para o consumo pelo cliente.
  - O front-end, já desenvolvido, fará chamadas ao back-end hospedado remotamente.

- **Serviços AWS Relacionados ao Deploy do Front-end**

  - **Amazon S3:**
    - Utilizado para armazenar os arquivos estáticos do front-end.
    - Permite upload e gerenciamento de objetos online (ex.: assets, imagens, scripts).
    - Possui diferentes camadas de armazenamento (ex.: S3 Glacier para deep archive).
  - **Amazon CloudFront:**
    - Atua como uma CDN, acelerando a entrega dos arquivos armazenados no S3.
    - Garante que os conteúdos sejam entregues a partir do cache na região mais próxima do usuário.
    - Permite aplicar configurações de segurança e invalidação de cache para manter a consistência do conteúdo.

- **Automatização e Outras Ferramentas**
  - Após a disponibilização manual via S3, a automação do deploy será abordada.
  - Um exemplo bônus será apresentado com a Vercel, demonstrando uma abordagem fora da AWS para contextualizar diferentes modelos de deploy.
