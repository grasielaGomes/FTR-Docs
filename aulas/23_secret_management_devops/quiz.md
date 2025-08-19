### **Quiz - Secret Management em DevOps**

1. **Em um ambiente de produção com Kubernetes, qual dessas abordagens é a mais recomendada para injeção de secrets?**

   - **Resposta correta:** Utilizar sidecar containers para injetar as secrets como variáveis de ambiente.

2. **O HashiCorp Vault oferece qual recurso avançado para gerenciamento de secrets?**

   - **Resposta correta:** Rotação automática de chaves e controle de expiração.

3. **Embora os arquivos .env resolvam alguns problemas importantes no desenvolvimento, qual é a principal limitação de segurança que eles ainda apresentam?**

   - **Resposta correta:** As credenciais ficam visíveis em texto plano no servidor, mesmo não estando no código.

4. **No Vault, qual é a principal vantagem do sistema de versionamento de secrets?**

   - **Resposta correta:** Mantém histórico completo das alterações.

5. **No Vault, qual é o formato do path usado para acessar secrets?**

   - **Resposta correta:** /secret/data/nome-da-secret

6. **No Parameter Store, quando você cria um parâmetro como "Secure String", qual serviço da AWS é utilizado para criptografia?**

   - **Resposta correta:** KMS

7. **Para recuperar um parâmetro criptografado do Parameter Store já descriptografado, qual parâmetro deve ser usado no comando GetParameter?**

   - **Resposta correta:** WithDecryption: true

8. **Quando se trabalha com Vault, qual é a melhor prática recomendada para organização das configurações?**

   - **Resposta correta:** Deixar todas as configurações no Vault, criando um ponto único de acesso

9. **No contexto do Secret Manager da AWS, qual é o formato dos dados retornados quando você recupera uma secret?**

   - **Resposta correta:** JSON string

10. **Qual é a diferença fundamental entre uma chave simétrica e assimétrica no contexto do AWS KMS?**

    - **Resposta correta:** Chaves simétricas usam a mesma chave para criptografar e descriptografar

11. **Qual biblioteca é recomendada para integrar aplicações Node.js com o HashiCorp Vault?**

    - **Resposta correta:** node-vault

12. **Na AWS, qual é a principal diferença entre o Parameter Store (SSM) e o Secret Manager?**

    - **Resposta correta:** O Secret Manager oferece rotação automática, o Parameter Store não
