## Setup do Back-End

### Destaques

- Construção de um servidor simples utilizando Node.js.
- Rota única para upload de imagens com limite de 4MB.
- Utilização do Cloudflare R2 para armazenamento de imagens.
- Comparação de custos entre Cloudflare R2 e AWS S3.
- Configuração do Cloudflare R2 com a mesma API do AWS S3.
- Uso do SDK da AWS para gerenciar o R2.
- Configuração de variáveis de ambiente e políticas de CORS.

### Passo-a-Passo

1. **Clonar o Repositório**

   - Acesse a descrição da aula para obter o link do repositório.
   - No terminal, crie uma pasta para o projeto:
     ```sh
     mkdir aulas
     cd aulas
     ```
   - Clone o repositório:
     ```sh
     git clone <link-do-repositorio> upload_widget_server
     cd upload_widget_server
     ```

2. **Instalar Dependências**

   - Certifique-se de ter o `pnpm` instalado.
   - Execute o comando:
     ```sh
     pnpm install
     ```

3. **Configurar Variáveis de Ambiente**

   - Crie um arquivo `.env` na raiz do projeto.
   - Preencha as variáveis de ambiente necessárias:
     ```env
     CLOUDFLARE_PUBLIC_URL=<sua-url-publica>
     ACCOUNT_ID=<seu-account-id>
     BUCKET_NAME=<nome-do-seu-bucket>
     ACCESS_KEY=<sua-access-key>
     SECRET_KEY=<sua-secret-key>
     ```

4. **Configurar Cloudflare R2**

   - Acesse o Cloudflare e crie uma conta ou faça login.
   - Navegue até R2, Object Storage.
   - Crie um novo bucket com as seguintes configurações:
     - Location: Automatic
     - Default Storage Class: Standard
   - Habilite a opção "R2 Dev Subdomain" para tornar os arquivos públicos.
   - Configure as políticas de CORS para permitir acesso do front-end.

5. **Gerar API Tokens**

   - Vá em "Manage R2 API tokens" e crie um novo token com as permissões necessárias.
   - Copie a `access key` e a `secret key` para o arquivo `.env`.

6. **Executar o Servidor**
   - No terminal, execute:
     ```sh
     pnpm run dev
     ```
   - Verifique se o servidor está rodando corretamente.

### Observações

- Certifique-se de que as variáveis de ambiente estão corretamente configuradas no arquivo `.env`.
- O front-end deve estar configurado para rodar na porta `5173` para compatibilidade com as políticas de CORS.
