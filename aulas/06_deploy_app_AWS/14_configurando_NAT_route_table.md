### Configurando NAT e Route Table

1. **Introdução**

   - Importância de finalizar a configuração da rede.
   - Criação do NAT Gateway para permitir que subnets privadas acessem a internet.

2. **Criação do NAT Gateway**

   - Nomeação do NAT Gateway (ex: NAT Gateway Rocket City).
   - Seleção da subnet pública para o NAT Gateway.
   - Alocação de um Elastic IP para o NAT Gateway.

3. **Configuração da Route Table**

   - Criação de uma nova Route Table.
   - Edição das rotas para direcionar o tráfego através do NAT Gateway.
   - Associação das subnets privadas à nova Route Table.

4. **Verificação da Configuração**
   - Verificação da criação e associação do NAT Gateway.
   - Confirmação de que o tráfego está sendo roteado corretamente.

### Passo-a-Passo

1. **Criar o NAT Gateway**

   - Acesse o console do AWS e clique em "NAT Gateways".
   - Clique em "Create NAT Gateway".
   - Dê um nome ao NAT Gateway (ex: NAT Gateway Rocketseat).
   - Selecione a subnet pública onde o NAT Gateway será criado (ex: public subnet 01).
   - Alocar um Elastic IP para o NAT Gateway.
   - Clique em "Create NAT Gateway".

2. **Criar a Route Table**

   - Acesse o console do AWS e clique em "Route Tables".
   - Clique em "Create Route Table".
   - Dê um nome à Route Table (ex: RTB Rocket City).
   - Selecione a VPC associada.
   - Adicione tags, se necessário (ex: IAC false).
   - Clique em "Create Route Table".

3. **Configurar a Route Table**

   - Selecione a Route Table criada.
   - Clique em "Routes" e depois em "Edit routes".
   - Adicione uma nova rota com destino 0.0.0.0/0 e target como o NAT Gateway criado.
   - Clique em "Save routes".
   - Clique em "Subnet associations" e depois em "Edit subnet associations".
   - Associe as subnets privadas à nova Route Table.
   - Clique em "Save".

4. **Verificar a Configuração**
   - Verifique se o NAT Gateway foi criado e associado corretamente.
   - Confirme que o tráfego das subnets privadas está sendo roteado através do NAT Gateway.
   - Garanta que a Route Table está configurada corretamente para as subnets privadas.
