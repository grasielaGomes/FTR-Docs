### O papel do IaC (Infrastructure as Code) na Governança e Controle de Custos

#### 1. Conceito de IaC e Ferramentas

- IaC (Infrastructure as Code) é fundamental para governança e controle de custos em cloud.
- Ferramentas como Pulumi e Terraform permitem criar e gerenciar infraestrutura via código.
- Pulumi aproxima o desenvolvedor da infraestrutura; Terraform é mais tradicional no contexto SRE.

#### 2. Governança: Por que IaC é essencial?

- Toda criação de recurso deve passar pelo IaC, evitando uso direto do console da cloud.
- O ideal é que o console tenha permissões apenas de leitura; criações devem ser feitas via código.
- Isso garante controle, rastreabilidade e evita desperdícios ou duplicidade de recursos.

#### 3. Fluxo de Criação e Aprovação

- Manifestos de IaC ficam versionados em repositórios Git.
- Criações passam por revisão (branch policies, code review) antes de serem aplicadas.
- Pipelines automatizadas realizam o provisionamento após aprovação.
- Esse fluxo evita criação desordenada e facilita a gestão do orçamento.

#### 4. Estimativa de Custos Integrada ao IaC

- Plugins podem calcular o impacto financeiro de novos recursos durante o processo de revisão.
- Exemplo: ao criar um cluster EKS via Pulumi, um plugin pode estimar o custo adicional.
- Isso permite decisões mais conscientes e evita surpresas no orçamento.

#### 5. Fonte da Verdade e Centralização

- O código declarativo é a fonte da verdade da infraestrutura, não o console.
- Facilita auditoria, rastreabilidade e entendimento dos objetivos de cada recurso.
- Evita recursos órfãos ou duplicados, pois tudo está centralizado e transparente.

#### 6. Permissionamento e Autonomia

- Usuários com mais contexto podem ter permissões de escrita, mas o padrão deve ser leitura.
- Criações sempre passam pelo fluxo de IaC, garantindo governança.

#### 7. Migração para IaC

- Para quem já tem infraestrutura criada manualmente, é possível migrar para IaC (caminho inverso).
- Declarar recursos existentes em código e passar a gerenciá-los via manifestos.
