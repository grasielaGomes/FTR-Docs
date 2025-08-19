### Criando Nossa VPC

1. **Introdução**

   - Importância de configurar a rede para dar sequência ao fluxo.
   - Duas maneiras de acessar a criação de VPC: pelo menu ou pela barra de pesquisa.

2. **Criação da VPC**

   - Seleção da opção "VPC Only".
   - Nomeação da VPC (ex: VPC Rocket City).
   - Configuração manual do IPv4 CIDR Block.
   - Explicação sobre o CIDR Block e a quantidade de IPs disponíveis.
   - Utilização de uma calculadora de subnets para determinar a quantidade de IPs.
   - Escolha do CIDR Block adequado (ex: 10.0.0.0/16).

3. **Configuração Adicional**
   - Configuração de tags para a VPC.
   - Criação da VPC e visualização do Resource Map.
   - Explicação sobre a criação automática da Route Table.
   - Necessidade de criar subnets e configurar o Route Table posteriormente.

### Passo-a-Passo

1. **Acessar a Criação de VPC**

   - Acesse o console do AWS.
   - Clique em "VPC" no menu ou pesquise por "VPC" na barra de pesquisa.
   - Clique em "Create VPC".

2. **Criar a VPC**

   - Selecione a opção "VPC Only".
   - Dê um nome à VPC (ex: VPC Rocket City).
   - Configure o IPv4 CIDR Block manualmente.
     - Exemplo: 10.0.0.0/16 (65.536 IPs).
   - Utilize uma calculadora de subnets, se necessário, para determinar a quantidade de IPs.

3. **Configuração Adicional**

   - Adicione tags para a VPC (ex: VPC Rocketseat, IAC Pulse).
   - Clique em "Create VPC".

4. **Verificar a Criação da VPC**

   - Verifique o Resource Map para confirmar a criação da VPC.
   - Note que a Route Table foi criada automaticamente.
   - Observe que as subnets ainda não foram criadas.

5. **Próximos Passos**
   - Planeje a criação de subnets e a configuração do Route Table.
   - Prepare-se para configurar o Internet Gateway e o NAT Gateway.
