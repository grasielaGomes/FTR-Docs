### Conceituando Load Balancer

1. **Introdução ao Load Balancer**

   - Importância do Load Balancer no contexto de múltiplas réplicas de containers.
   - Função do Load Balancer como ponto de acesso único e gerenciamento de tráfego.

2. **Múltiplas Réplicas no ECS**

   - Execução de containers em produção com múltiplas réplicas.
   - Cada réplica recebe um IP da subnet da VPC.
   - Necessidade de um ponto único de acesso para o usuário.

3. **Funções do Load Balancer**

   - Ponto de acesso único para a internet.
   - Equilíbrio de carga entre múltiplas réplicas.
   - Redistribuição de requisições para garantir equanimidade entre as réplicas.

4. **Application Load Balancer (ALB)**

   - Utilização do ALB da AWS.
   - Algoritmo Round Robin para balanceamento de carga.
   - Associação do ALB com um Target Group contendo as réplicas.

5. **Configuração do Load Balancer**
   - Recebimento de um DNS para o Load Balancer.
   - Direcionamento de tráfego externo para as réplicas internas.

### Passo-a-Passo

1. **Entender a Importância do Load Balancer**

   - Reconheça a importância do Load Balancer para gerenciar múltiplas réplicas de containers.
   - Saiba que ele serve como ponto de acesso único e para equilibrar o tráfego.

2. **Configurar Múltiplas Réplicas no ECS**

   - Execute containers em produção com múltiplas réplicas.
   - Entenda que cada réplica recebe um IP da subnet da VPC.
   - Garanta que haja um ponto único de acesso para o usuário.

3. **Configurar o Application Load Balancer (ALB)**

   - Utilize o ALB da AWS para balanceamento de carga.
   - Configure o ALB para usar o algoritmo Round Robin.
   - Associe o ALB a um Target Group contendo as réplicas.

4. **Configurar o DNS do Load Balancer**

   - Receba um DNS para o Load Balancer.
   - Configure o Load Balancer para direcionar o tráfego externo para as réplicas internas.

5. **Verificar a Configuração**
   - Verifique se o Load Balancer está funcionando corretamente.
   - Garanta que o tráfego esteja sendo distribuído equitativamente entre as réplicas.
