### Criando Nossa Primeira Task Definition

1. **Introdução à Task Definition**

   - Criação de uma Task Definition no ECS.
   - Importância de definir corretamente a infraestrutura e os recursos.

2. **Configuração da Task Definition**

   - Escolha do nome da Task Definition.
   - Seleção do tipo de infraestrutura (Fargate ou EC2).
   - Definição de CPU e memória.
   - Configuração da role (IAM) para a task.
   - Configuração do container (imagem, portas, recursos, variáveis de ambiente).

3. **Configuração Adicional**

   - Opções de fault injection.
   - Configuração de volumes, monitoração e logs.
   - Criação de novas revisões da Task Definition.

4. **Associação da Task ao Cluster**
   - Associação da Task Definition ao cluster ECS.
   - Criação de um serviço para rodar a task.

### Passo-a-Passo

1. **Criar uma Nova Task Definition**

   - Acesse o console do ECS e clique em "Create new task".
   - Dê um nome à Task Definition (ex: Rocket City Widget Server).

2. **Selecionar a Infraestrutura**

   - Escolha o tipo de infraestrutura (Fargate ou EC2).
   - Para Fargate, selecione a arquitetura (AMD ou ARM).
   - Defina o tamanho da task (CPU e memória).

3. **Configurar a Role (IAM)**

   - Selecione uma role existente ou crie uma nova role no IAM.
   - A role deve ter permissões para acessar o ECR e executar a task.

4. **Configurar o Container**

   - Dê um nome ao container (ex: widget server).
   - Insira a URI da imagem do container do ECR.
   - Defina o mapeamento de portas (ex: 3333).
   - Alocar recursos (CPU e memória) para o container.
   - Adicione variáveis de ambiente necessárias para a aplicação.

5. **Configuração Adicional**

   - Decida se deseja habilitar fault injection (não habilitar por ora).
   - Configure volumes, monitoração e logs conforme necessário.
   - Crie a Task Definition.

6. **Criar Novas Revisões da Task Definition**

   - Para atualizar a Task Definition, crie uma nova revisão.
   - Atualize a tag da imagem ou outras configurações conforme necessário.

7. **Associar a Task ao Cluster**

   - Acesse o cluster ECS e associe a Task Definition ao cluster.
   - Crie um serviço para rodar a task no cluster.

8. **Verificar a Configuração**
   - Verifique se a Task Definition foi criada corretamente.
   - Confirme que a task está associada ao cluster e pronta para ser executada.
