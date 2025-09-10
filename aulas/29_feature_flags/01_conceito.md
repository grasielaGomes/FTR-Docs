### Feature Flags — Conceito e visão geral

#### Introdução

- Objetivo desta aula: apresentar o conceito de Feature Flags e contextualizar o módulo (visão teórica e próximos passos práticos).
- Estrutura do módulo: 1) Introdução conceitual; 2) Exemplo prático com um vendor específico; 3) Abordagem desacoplada via abstração (estilo Open Telemetry) e bônus sobre estratégias de deploy (Canary, Blue/Green).

---

#### O que é uma Feature Flag?

- Mecanismo para controlar a exibição ou comportamento de uma feature em tempo de execução.
- Permite ativar/desativar funcionalidades sem alterar ou redeployar código.
- Usos comuns: testes A/B, lançamentos graduais, controle por grupos (e-mails, IPs, localidades).

---

#### Exemplo prático (visão de front-end)

- Cenário: duas versões de uma tela de login (tela A usa e-mail; tela B usa nome de usuário).
- Objetivo do teste A/B: comparar conversões entre duas variantes (rótulos, layout ou fluxo).
- Requisito importante: stickiness — o usuário deve permanecer na mesma variante ao recarregar a página (ex.: sessão "grudada").

---

#### Arquitetura e integração

- Abordagem direta: a aplicação contém lógica para checar flags (não recomendada em escala).
- Abordagem recomendada: abstração que se comunica com um provedor/vendor (similar ao padrão Open Telemetry para observabilidade).
- A aplicação não precisa conhecer o vendor; fala com a abstração, que orquestra a comunicação com o provedor.

---

#### Benefícios e mecanismos de controle

- Controle fino sobre quem vê a feature (segmentação por e-mail, IP, localidade, regras customizadas).
- Métricas integradas: acompanhar quantas pessoas foram expostas e eventos de conversão (clicks, conversões).
- Segurança operacional: desativar rapidamente uma feature problemática sem redeploy.

---

#### Riscos e boas práticas

- Evitar manter flags indefinidamente: cada flag deve ter um ciclo de vida e prazo de remoção.
- Limpar código: quando a feature estiver plenamente lançada, remover os checks e a flag do código.
- Evitar excesso de modularização por flags — muitas flags aumentam a complexidade do código (vários ifs).

---

#### Quando usar Feature Flags

- Testes A/B e experimentação controlada.
- Lançamentos graduais para reduzir risco (canary, rollout por segmentos).
- Operações de segurança: toggles para desativar funcionalidades que causem problemas.

---

#### Bônus: estratégias de deploy relacionadas

- Canary Deployment: lançar nova versão para uma pequena fração de usuários e ampliar gradualmente.
- Blue/Green: alternar entre ambientes paralelos para reduzir downtime e risco.
- Integração com Kubernetes: possibilidade de orquestrar testes e rollouts em clusters — veremos exemplos práticos nas próximas aulas.

---

#### Próximos passos

- Na próxima aula: conheceremos um vendor de Feature Flags, como configurar e integrar à aplicação.
- Atividade prática: criar um ambiente mínimo, conectar a um provedor e experimentar um teste A/B com stickiness.

---

#### Resumo rápido

- Feature Flags são ferramentas poderosas para controle de lançamento e experimentação.
- Use abstrações para desacoplar a aplicação do vendor.
- Planeje o ciclo de vida das flags e remova-as quando não forem mais necessárias.
