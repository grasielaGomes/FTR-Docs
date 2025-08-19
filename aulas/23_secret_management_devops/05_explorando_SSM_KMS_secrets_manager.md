### Explorando AWS SSM, KMS e Secrets Manager

#### Introdução

- Apresentação dos principais serviços da AWS para gerenciamento de informações sensíveis: Secrets Manager, Systems Manager (Parameter Store) e KMS.
- Foco maior no uso do Secrets Manager, mas destacando diferenças e aplicações de cada serviço.

---

#### Configuração Inicial

- Acesso ao console da AWS com credenciais configuradas localmente.
- Geração de chave de acesso e configuração do ambiente para uso dos serviços AWS.

---

#### Secrets Manager

- Serviço especializado no gerenciamento do ciclo de vida de secrets (senhas, tokens, etc).
- Permite armazenar, recuperar e rotacionar secrets automaticamente.
- Integração facilitada com bancos de dados AWS (RDS, DocumentDB, Redshift) para rotação automática de senhas.
- Possibilidade de configurar rotação periódica de secrets, aumentando a segurança.
- Custo: aproximadamente US$ 0,40 por secret/mês, além de cobrança por chamadas de API.
- Indicado para cenários que exigem rotação e gerenciamento avançado de secrets.

---

#### KMS (Key Management Service)

- Serviço focado na criação e gerenciamento de chaves de criptografia.
- Utilizado para proteger dados e controlar encriptação entre serviços AWS.
- Permite criar chaves simétricas e assimétricas, usadas para encriptação e decriptação de dados.
- Pode ser integrado a outros serviços para proteger secrets e dados sensíveis.
- Não é um gerenciador de secrets, mas sim de chaves criptográficas.

---

#### Systems Manager Parameter Store

- Serviço para armazenamento de parâmetros e configurações (strings, secrets, feature flags).
- Permite armazenar dados sensíveis, mas não oferece rotação automática de secrets.
- Simples de usar: armazena e recupera valores via API.
- Pode associar criptografia KMS para proteger dados armazenados.
- Indicado para configurações e secrets que não exigem rotação automática.

---

#### Comparativo dos Serviços

- **Secrets Manager:** Gerencia secrets e ciclo de vida, com rotação automática e integração com serviços AWS.
- **KMS:** Gerencia chaves de criptografia, protege dados e integra com outros serviços.
- **Parameter Store:** Armazena configurações e secrets, sem rotação automática, mas com opção de criptografia.

---

#### Integração com Aplicações e Kubernetes

- Possibilidade de utilizar sidecar containers para injetar secrets como variáveis de ambiente em aplicações.
- Facilita a gestão de secrets em ambientes de containers e Kubernetes.
- Automatização do processo de criação e rotação de secrets pode ser feita via SDKs e jobs.

---

#### Considerações Finais

- A escolha do serviço depende da necessidade de rotação, integração e segurança dos dados.
- Secrets Manager é indicado para gerenciamento avançado e rotação automática.
- Parameter Store é útil para configurações simples e dados sensíveis sem necessidade de rotação.
- KMS é essencial para gerenciamento de chaves de criptografia e proteção
