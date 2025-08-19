### Configurando as Subnets

1. **Introdução**

   - Importância de configurar a rede para dar sequência ao fluxo.
   - Subnets sempre associadas a uma VPC.

2. **Criação das Subnets**

   - Seleção do ID da VPC.
   - Nomeação das subnets (ex: public subnet 01).
   - Escolha da zona de disponibilidade (ex: US East 2 - Ohio).
   - Configuração do intervalo de IPs (CIDR Block) para as subnets.
   - Criação de múltiplas subnets públicas e privadas.

3. **Configuração de Alta Disponibilidade**

   - Distribuição das subnets em múltiplas zonas de disponibilidade (Multi-AZ).
   - Criação de subnets públicas e privadas para cada zona de disponibilidade.

4. **Configuração do Internet Gateway**

   - Criação e associação do Internet Gateway à VPC.
   - Configuração do Route Table para associar o Internet Gateway.

5. **Configuração do NAT Gateway**
   - Criação do NAT Gateway para permitir que subnets privadas acessem a internet.

### Passo-a-Passo

1. **Acessar a Criação de Subnets**

   - Acesse o console do AWS.
   - Clique em "VPC" no menu ou pesquise por "VPC" na barra de pesquisa.
   - Clique em "Subnets" e depois em "Create subnet".

2. **Criar Subnets Públicas**

   - Selecione o ID da VPC.
   - Dê um nome à subnet (ex: public subnet 01).
   - Escolha a zona de disponibilidade (ex: US East 2 - Ohio, zona A).
   - Configure o intervalo de IPs (CIDR Block) para a subnet (ex: 10.0.1.0/24).
   - Adicione tags para a subnet (ex: IAC false).
   - Repita o processo para criar subnets públicas em outras zonas de disponibilidade (ex: public subnet 02 na zona B, public subnet 03 na zona C).

3. **Criar Subnets Privadas**

   - Siga o mesmo processo para criar subnets privadas.
   - Nomeie as subnets (ex: private subnet 01).
   - Escolha a zona de disponibilidade (ex: US East 2 - Ohio, zona A).
   - Configure o intervalo de IPs (CIDR Block) para a subnet (ex: 10.0.4.0/24).
   - Adicione tags para a subnet (ex: IAC false).
   - Repita o processo para criar subnets privadas em outras zonas de disponibilidade (ex: private subnet 02 na zona B, private subnet 03 na zona C).

4. **Configurar o Internet Gateway**

   - Acesse o console do AWS e clique em "Internet Gateways".
   - Clique em "Create Internet Gateway".
   - Dê um nome ao Internet Gateway (ex: IGW Rocketseat).
   - Adicione tags para o Internet Gateway (ex: IAC false).
   - Clique em "Create Internet Gateway".
   - Selecione o Internet Gateway criado e clique em "Attach to VPC".
   - Escolha a VPC criada anteriormente e clique em "Attach".

5. **Configurar o Route Table**

   - Acesse o console do AWS e clique em "Route Tables".
   - Selecione o Route Table criado automaticamente pela VPC.
   - Clique em "Routes" e depois em "Edit routes".
   - Adicione uma nova rota com destino 0.0.0.0/0 e target como o Internet Gateway criado.
   - Clique em "Save routes".
   - Clique em "Subnet associations" e depois em "Edit subnet associations".
   - Associe apenas as subnets públicas ao Route Table e clique em "Save".

6. **Configurar o NAT Gateway**

   - Acesse o console do AWS e clique em "NAT Gateways".
   - Clique em "Create NAT Gateway".
   - Selecione a subnet pública onde o NAT Gateway será criado.
   - Escolha um Elastic IP para o NAT Gateway.
   - Clique em "Create NAT Gateway".
   - Acesse o console do AWS e clique em "Route Tables".
   - Crie um novo Route Table para as subnets privadas.
   - Adicione uma nova rota com destino 0.0.0.0/0 e target como o NAT Gateway criado.
   - Associe as subnets privadas ao novo Route Table.

7. **Verificar a Configuração**
   - Verifique se todas as subnets foram criadas corretamente.
   - Confirme que o Internet Gateway e o NAT Gateway estão funcionando corretamente.
   - Garanta que o Route Table está configurado corretamente para as subnets públicas e privadas.
