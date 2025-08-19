### Tópicos Importantes

1. **Configuração de Acesso Público no CloudFront**
   - Durante a criação da distribuição no CloudFront, foram feitas configurações de acesso público.

2. **Bucket S3 Não Público**
   - O bucket S3 utilizado não é público, ao contrário do bucket estático.
   - As permissões do bucket estão configuradas para bloquear o acesso público.

3. **Acesso Negado Diretamente ao Objeto**
   - Se tentar acessar diretamente um objeto no bucket S3, o acesso será negado.
   - Isso aumenta a segurança, pois os objetos só podem ser acessados através do CloudFront.

4. **Permissões de GET pelo CloudFront**
   - O CloudFront tem permissão para realizar requisições GET nos objetos do bucket S3.
   - Essa configuração foi sugerida pelo próprio CloudFront durante a criação da distribuição.

5. **Melhoria na Segurança do Bucket**
   - A configuração de acesso apenas via CloudFront melhora a segurança do bucket S3.
   - Acesso direto aos objetos pela URL é negado, mas permitido via CloudFront.

### Passo a Passo

1. **Verificar Configurações de Acesso Público no CloudFront**
   - Acesse o console do CloudFront na AWS.
   - Verifique as configurações de acesso público feitas durante a criação da distribuição.

2. **Confirmar Permissões do Bucket S3**
   - Acesse o console do S3 na AWS.
   - Verifique as permissões do bucket S3 utilizado, confirmando que o acesso público está bloqueado.

3. **Testar Acesso Direto ao Objeto no S3**
   - Tente acessar diretamente um objeto no bucket S3 pela URL.
   - Verifique que o acesso é negado, confirmando a configuração de segurança.

4. **Testar Acesso via CloudFront**
   - Acesse o objeto através da URL gerada pelo CloudFront.
   - Verifique que o acesso é permitido, confirmando que o CloudFront tem permissão para realizar requisições GET.

5. **Revisar Permissões Sugeridas pelo CloudFront**
   - Durante a criação da distribuição, o CloudFront sugeriu permissões específicas.
   - Revise essas permissões para garantir que estão configuradas corretamente no bucket S3.

6. **Garantir Segurança do Bucket S3**
   - Confirme que todas as configurações de segurança estão em vigor.
   - Assegure-se de que o acesso direto aos objetos pela URL é negado e permitido apenas via CloudFront.