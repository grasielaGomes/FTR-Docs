### Billing na AWS — Controle e Monitoramento de Custos

#### 1. Cenário inverso do IaC

- Para infraestruturas legadas, é possível converter recursos existentes em arquivos declarativos usando plugins.
- O processo pode ser feito por recurso, de forma controlada, para evitar inconsistências.
- O objetivo é sincronizar a cloud com o código, facilitando a governança e o controle de custos.

#### 2. Organização de contas e multi-account

- O conceito de multi-account permite dividir os gastos por Business Units (BUs) ou equipes.
- Cada conta pode representar uma BU, facilitando o acompanhamento e a responsabilidade pelos custos.
- Recursos compartilhados (ex: clusters EKS) podem ter custos divididos proporcionalmente entre equipes.

#### 3. Ferramenta de Billing na AWS

- A AWS oferece um painel de Billing para acompanhamento dos gastos.
- O painel apresenta sumário de gastos, previsão (forecast) e comparação com meses anteriores.
- Os custos são detalhados por serviço (EC2, Kubernetes, ECR, etc.), permitindo análise granular.

#### 4. Budget and Planning

- É possível configurar budgets mensais para limitar os gastos.
- O sistema alerta por e-mail quando o limite ou um threshold pré-definido é atingido.
- O acompanhamento do budget ajuda a evitar surpresas e permite atuação rápida em caso de desvios.

#### 5. Facilidade de remoção de recursos com IaC

- O uso de IaC facilita a remoção de recursos: basta rodar um comando para destruir o que foi criado.
- Isso evita custos recorrentes com recursos esquecidos, tanto em estudos quanto em ambientes produtivos.

#### 6. Governança e prevenção de surpresas

- A governança é reforçada pelo uso de budgets e alertas automáticos.
- Configurar alertas é fundamental para não ultrapassar o orçamento e manter o controle financeiro.
