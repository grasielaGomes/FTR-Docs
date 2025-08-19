### Introdução ao Kubernetes: Como Funciona um Cluster

#### Introdução

- **Objetivo:** Apresentar o Kubernetes, sua origem, propósito e diferenças em relação a outras soluções de orquestração de containers.
- **Contexto:** Evoluir do conteúdo introdutório ao avançado, abordando desde conceitos básicos até a anatomia de um cluster Kubernetes.

---

### O que é Kubernetes?

- **Definição:** Sistema open source para orquestração de containers, criado originalmente pelo Google (inspirado no projeto Borg) e atualmente mantido pela CNCF (Cloud Native Computing Foundation).
- **Linguagem:** Escrito em Go.
- **Open Source:** Qualquer pessoa pode contribuir com o core do Kubernetes.
- **Propósito:** Atua como um “sistema operacional” para clusters de aplicações, automatizando o gerenciamento e a orquestração de containers.

---

### Problema Resolvido pelo Kubernetes

- **Escalabilidade:** Criado para resolver problemas de escala em grandes ambientes de produção.
- **Quando Usar:** Indicado para organizações que enfrentam desafios de escala e precisam de automação, resiliência e gerenciamento avançado de recursos.
- **Avaliação de Uso:** Não é uma solução “bala de prata” — pode ser overengineering para cenários simples ou de baixo throughput.

---

### Comparação com Outras Soluções

- **AppRunner e ECS:** Soluções de execução e orquestração de containers da AWS, com diferentes níveis de complexidade e automação.
- **Agnóstico a Provedor:** Kubernetes pode ser executado em qualquer cloud provider (EKS, AKS, GKE, DigitalOcean, bare metal, etc.) ou até mesmo localmente.
- **Custo:** O core do Kubernetes é gratuito, mas o gerenciamento (equipe ou serviço gerenciado) gera custos adicionais.

---

### Características do Kubernetes

- **Automação:** Gerenciamento automatizado de containers, réplicas, escalabilidade e resiliência.
- **Service Discovery e Load Balancer:** Inclui recursos nativos para descoberta de serviços e balanceamento de carga.
- **Desacoplamento:** Arquitetura desacoplada, agnóstica a infraestrutura e provedores.
- **Flexibilidade:** Pode ser rodado em diferentes ambientes, desde nuvem até servidores locais.

---

### Considerações sobre Adoção

- **Carga Cognitiva:** Exige conhecimento e dedicação para gerenciamento e manutenção.
- **Custo de Operação:** Pode ser elevado, especialmente em ambientes gerenciados.
- **Avaliação de Cenário:** Importante analisar o contexto da organização antes de adotar o Kubernetes.

---

### Resumo e Próximos Passos

- **Resumo:** Kubernetes é um orquestrador de containers open source, criado para resolver problemas de escala e automação em ambientes complexos.
- **Próximos Passos:** Nas próximas aulas, serão abordadas as diferenças entre Kubernetes e outras ferramentas, detalhes da arquitetura do cluster e exemplos práticos de implantação.
