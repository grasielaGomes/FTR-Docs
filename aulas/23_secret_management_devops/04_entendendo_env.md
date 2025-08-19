### Entendendo o Uso de Variáveis de Ambiente e Vault

#### Refatoração e Centralização das Configurações

- Criar um arquivo dedicado (ex: `secret.js`) para centralizar configurações sensíveis.
- Importar e configurar o Vault nesse arquivo, exportando apenas o necessário.
- Separar variáveis como API version, endpoint e token para evitar hardcode no código principal.
- Utilizar `process.env` para acessar variáveis de ambiente.

---

#### Boas Práticas de Gerenciamento de Secrets

- Evitar deixar informações sensíveis diretamente no código.
- Utilizar variáveis de ambiente para acessar dados sensíveis.
- Centralizar a lógica de acesso ao Vault para facilitar manutenção e segurança.

---

#### Estratégias de Leitura de Secrets

- Evitar buscar secrets do Vault a cada requisição para não gerar latência e sobrecarga.
- Boa prática: utilizar um agente para injetar variáveis de ambiente no start da aplicação.
- Após o start, as informações ficam em memória, evitando múltiplas chamadas ao Vault.

---

#### Integração com Containers e Kubernetes

- Em ambientes Docker/Kubernetes, utilizar mecanismos de injeção de variáveis (ex: sidecar containers).
- O sidecar busca secrets no Vault e injeta como variáveis de ambiente na aplicação.
- A aplicação acessa apenas `process.env`, sem conhecer detalhes do Vault.

---

#### Políticas de Acesso e Segurança no Vault

- Vault permite criar diferentes políticas de acesso (ACLs) para tokens e usuários.
- Possibilidade de autenticação via token, JWT, OpenID Connect, username, GitHub, Okta, MFA, etc.
- Definir capacidades específicas (leitura, escrita) para cada token ou usuário.
- Políticas podem ser aplicadas por bucket, engine ou grupo.

---

#### Considerações sobre Engines e Integrações

- Vault possui diferentes engines para gerenciamento de secrets.
- No contexto de aplicação, o foco principal é o gerenciamento de variáveis sensíveis.
- Outras ferramentas como Secret Manager (AWS) e ConfigMap/Secret (Kubernetes) também podem ser utilizadas conforme o cenário.

---

#### Considerações Finais

- Centralizar e proteger variáveis sensíveis é fundamental para segurança e escalabilidade.
- O uso de Vault e boas práticas de injeção de variáveis facilitam a gestão e aumentam a proteção das aplicações.
- Próximos passos: explorar Secret Manager (AWS) e aprofundar integrações
