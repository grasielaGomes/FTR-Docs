### Associando Nossa Task Definition ao Cluster

1. **Introdução**

   - Importância de associar a Task Definition ao cluster ECS.
   - Diferença entre Services e Tasks no ECS.

2. **Configuração do Serviço**

   - Escolha do Launch Type (Fargate ou EC2).
   - Seleção da Task Definition e sua revisão.
   - Definição do nome do serviço e número de réplicas.
   - Opções de deployment (Rolling Update, Blue-Green, Canary Deployment).

3. **Configuração de Rede**
   - Necessidade de criar VPC, subnets e security groups.
   - Importância do Load Balancer para balancear o tráfego entre múltiplas réplicas.

### Passo-a-Passo

1. **Entender a Importância da Associação da Task Definition ao Cluster**

   - Reconheça a importância de associar a Task Definition ao cluster ECS para executar a aplicação.
   - Entenda a diferença entre Services (long-running tasks) e Tasks (jobs com início e fim definidos).

2. **Configurar o Serviço no ECS**

   - Acesse o console do ECS e clique em "Create Service".
   - Escolha o Launch Type (Fargate ou EC2).
   - Selecione a Task Definition e a revisão desejada.
   - Defina o nome do serviço (ex: widget service).
   - Especifique o número de réplicas (ex: 3 réplicas).
   - Escolha a opção de deployment (Rolling Update, Blue-Green, Canary Deployment).
   - Configure o mínimo e máximo de tasks durante o deployment.

3. **Configurar a Rede**

   - Crie uma VPC, subnets e security groups no console do AWS.
   - Configure a Route Table e associe-a às subnets.
   - Crie um Load Balancer e configure-o para balancear o tráfego entre as réplicas.

4. **Associar a Task Definition ao Cluster**

   - Acesse o cluster ECS e associe a Task Definition ao cluster.
   - Crie um serviço para rodar a task no cluster.

5. **Verificar a Configuração**
   - Verifique se a Task Definition foi criada corretamente.
   - Confirme que a task está associada ao cluster e pronta para ser executada.
   - Garanta que o Load Balancer está funcionando corretamente e distribuindo o tráfego entre as réplicas.
