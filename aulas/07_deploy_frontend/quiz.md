### Quiz - Deploy da aplicação Front-end

#### 1. Sobre a diferença entre back-end e front-end no contexto apresentado nas aulas, é correto afirmar que:

- **Resposta Correta:** O front-end é renderizado no cliente e não precisa de processamento direto no servidor.

#### 2. Qual das opções a seguir melhor descreve o serviço Amazon S3?

- **Resposta Correta:** Um serviço de armazenamento baseado em objetos, usado para armazenar e servir arquivos estáticos e outros dados.

#### 3. Qual a principal função do Amazon CloudFront no contexto de deploy de front-end?

- **Resposta Correta:** Servir como uma rede de entrega de conteúdo (CDN) para reduzir latência e melhorar a performance global.

#### 4. No S3, a opção "Block Public Access" serve para:

- **Resposta Correta:** Evitar que qualquer objeto no bucket seja acessado publicamente sem permissões explícitas.

#### 5. O que acontece quando um usuário acessa um site servido via CloudFront?

- **Resposta Correta:** O CloudFront busca o conteúdo do S3 e armazena em cache nas Edge Locations para reduzir a latência.

#### 6. Sobre invalidação de cache no CloudFront, é correto afirmar que:

- **Resposta Correta:** A invalidação permite forçar a atualização de arquivos armazenados em cache nas Edge Locations.

#### 7. Qual das alternativas a seguir é uma vantagem de utilizar o Vercel para deploy de front-end?

- **Resposta Correta:** Ele permite configurar pipelines de CI/CD de forma simplificada e com deploys automáticos.

#### 8. No contexto do GitHub Actions, qual a principal função do comando `aws s3 sync`?

- **Resposta Correta:** Sincronizar arquivos locais com um bucket S3, garantindo que o conteúdo atualizado seja enviado.

#### 9. O que acontece se o cache do CloudFront não for invalidado após um novo deploy?

- **Resposta Correta:** O usuário pode continuar vendo a versão antiga do site até que o cache expire.

#### 10. No contexto de CI/CD, o GitHub Actions é utilizado para:

- **Resposta Correta:** Criar e automatizar pipelines de build, teste e deploy.

#### 11. No Vercel, o conceito de Preview Environment permite:

- **Resposta Correta:** Testar versões não publicadas de um site antes de fazer o deploy em produção.

#### 12. Qual comando da CLI da Vercel é usado para iniciar um deploy manualmente?

- **Resposta Correta:** vercel deploy

#### 13. Qual vantagem de utilizar o AWS CloudFront sobre servir arquivos diretamente pelo S3?

- **Resposta Correta:** O CloudFront reduz a latência ao armazenar cópias do conteúdo em várias regiões.

#### 14. No S3, o recurso "Versioning" é utilizado para:

- **Resposta Correta:** Manter múltiplas versões de um mesmo arquivo dentro do bucket.

#### 15. Qual dos serviços abaixo NÃO é necessário para realizar o deploy de um front-end estático na AWS?

- **Resposta Correta:** Amazon RDS
