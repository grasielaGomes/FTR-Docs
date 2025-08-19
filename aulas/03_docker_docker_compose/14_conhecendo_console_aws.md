# Conhecendo o Console da AWS

## Destaques Importantes

### Introdução

- **Uso do Docker Hub**: Utilizado para extrair base images.
- **Armazenamento na AWS**: Ferramenta da AWS será utilizada para armazenamento.

### Criação de Conta na AWS

- **Processo de Criação**: Simples e direto, basta seguir os passos no site da AWS.
- **Free Tier**: Consultar o free tier de cada serviço para evitar custos desnecessários.
- **Cartão de Crédito**: Necessário para cadastro, mas só será cobrado pelo uso efetivo dos serviços.

### Controle de Custos

- **Cost Management**: Ferramenta para gerenciar e monitorar custos.
- **Criação de Budgets**: Definir orçamentos e alertas para evitar surpresas.
- **Exemplo de Budget**: Definir um orçamento de $20 com alerta ao atingir 85% ($17).

### Navegação no Console da AWS

- **Regiões da AWS**: Escolher a região mais próxima para menor latência.
- **Região Recomendada**: Ohio (US East 2) ou Norte da Virgínia (US East 1).
- **Latência e Custo**: Regiões mais próximas têm menor latência, mas podem ter custos diferentes.

### Criação de Recursos

- **Criação Manual**: Inicialmente, criar recursos manualmente pelo console.
- **Automatização Futura**: Utilizar ferramentas como Pulumi e Terraform para criar recursos via código.

## Passo-a-Passo

### Criação de Conta na AWS

1. **Acessar o Site da AWS**

   - Visite [AWS](https://aws.amazon.com/) e clique em "Criar Conta".

2. **Seguir os Passos de Cadastro**

   - Preencha as informações solicitadas e siga os passos para criar a conta.

3. **Consultar o Free Tier**

   - Verifique os serviços disponíveis no free tier para evitar custos adicionais.

4. **Adicionar Cartão de Crédito**
   - Insira as informações do cartão de crédito para concluir o cadastro.

### Configuração de Controle de Custos

1. **Acessar Cost Management**

   - No console da AWS, vá para "Cost Management".

2. **Criar um Budget**

   - Clique em "Budgets" e crie um novo orçamento.
   - Defina o valor do orçamento (ex: $20) e o limite de alerta (ex: 85%).

3. **Configurar Alertas**
   - Configure para receber alertas por e-mail ao atingir o limite definido.

### Navegação e Escolha da Região

1. **Acessar o Console da AWS**

   - Faça login no console da AWS.

2. **Escolher a Região**
   - No canto superior direito, selecione a região desejada (ex: Ohio ou Norte da Virgínia).

### Criação de Recursos

1. **Criar Recursos Manualmente**

   - No console da AWS, navegue até o serviço desejado e siga os passos para criar o recurso.

2. **Automatização Futura**
   - Planeje a utilização de ferramentas como Pulumi e Terraform para automatizar a criação de recursos.

## Conclusão

- **Configuração Inicial**: Conta criada e configurada, controle de custos estabelecido.
- **Próximos Passos**: Criação de recursos na AWS e futura automatização.
- **Ferramentas**: Utilizar o console da AWS inicialmente, com planos de automatização via código.
