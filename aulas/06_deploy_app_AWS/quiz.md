### Quiz - Deploy da aplicação na AWS

1. **O AWS App Runner é um serviço que permite:**

   - Executar aplicações em contêineres na AWS sem necessidade de gerenciar infraestrutura complexa.

2. **Em relação às melhores práticas de uso de contêineres, é recomendado:**

   - Criar contêineres com imagens o menor possível para reduzir tempo de build e de pull.

3. **O que significa a arquitetura serverless utilizada pelo AWS App Runner?**

   - Significa que o desenvolvedor não precisa gerenciar servidores diretamente, pois a AWS cuida da infraestrutura subjacente.

4. **No AWS IAM, uma role (função) é usada para:**

   - Definir permissões que podem ser assumidas por serviços ou usuários sem necessidade de credenciais fixas.

5. **No contexto da AWS, o que é o Amazon Resource Name (ARN)?**

   - Um identificador único para recursos da AWS, como roles, buckets e instâncias.

6. **Durante o processo de CI/CD no GitHub Actions, qual é a função do AWS ECR?**

   - Servir como repositório para imagens de contêiner, permitindo que o App Runner faça deploy automaticamente.

7. **No contexto de redes em AWS, a Virtual Private Cloud (VPC) é fundamental para:**

   - Criar um ambiente isolado para recursos na nuvem, permitindo a configuração de subnets públicas e privadas.

8. **Qual das afirmações sobre Subnets na AWS é verdadeira?**

   - Subnets públicas e privadas diferem pelo fato de que as públicas possuem um Internet Gateway associado.

9. **Qual das opções abaixo descreve corretamente a função do Load Balancer no ECS?**

   - Ele distribui tráfego de entrada entre múltiplas instâncias, garantindo maior disponibilidade e balanceamento de carga.

10. **O que é um Security Group na AWS?**

    - Um conjunto de regras de firewall que controla o tráfego de entrada e saída de recursos como instâncias EC2 e ECS.

11. **O NAT Gateway na AWS é utilizado para:**

    - Permitir que instâncias em subnets privadas se comuniquem com a internet sem exposição direta.

12. **Qual o papel do Route Table dentro de uma VPC na AWS?**

    - Controlar o tráfego de rede, definindo regras de roteamento para comunicação entre subnets e a internet.

13. **Qual das opções abaixo representa uma boa prática para escalabilidade no ECS?**

    - Configurar múltiplas réplicas de containers distribuídas entre diferentes Availability Zones.

14. **Qual a função do Target Group no Load Balancer dentro do AWS ECS?**

    - Associar instâncias e containers ao Load Balancer, garantindo que o tráfego seja distribuído corretamente.

15. **Qual a principal vantagem do AWS Fargate sobre a execução de containers no EC2 dentro do ECS?**

    - Eliminação da necessidade de provisionar e gerenciar servidores, pois o Fargate é serverless.

16. **O que acontece quando um Health Check falha em uma instância dentro do AWS ECS?**

    - O Load Balancer remove temporariamente a instância do Target Group e redireciona o tráfego para outras instâncias saudáveis.

17. **Qual das estratégias abaixo permite evitar downtime ao fazer um novo deploy no ECS?**

    - Utilizar Rolling Update, substituindo gradualmente as instâncias antigas pelas novas.

18. **Para que serve o IAM Role no AWS ECS?**

    - Definir permissões para que o ECS possa interagir com outros serviços da AWS, como ECR e CloudWatch.

19. **O que acontece se removermos o Internet Gateway de uma VPC pública na AWS?**

    - Todas as instâncias dentro da VPC terão acesso irrestrito à internet. //Verificar

20. **O Elastic Container Registry (ECR) é utilizado para:**
    - Armazenar e versionar imagens de contêiner utilizadas no deploy da aplicação.
