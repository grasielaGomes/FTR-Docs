### Introdução ao Secret Management e Vault

#### Contexto e Motivação

- Importância de tratar informações sensíveis de forma correta em aplicações.
- Exemplos de informações sensíveis: Access Key ID, Secret Access Key, dados de New Relic, dados de banco de dados.
- Problemas de segurança ao deixar informações sensíveis hardcoded no código ou mesmo em arquivos .env.

---

#### Limitações do Uso de Arquivos .env

- Evita exposição direta no código, mas ainda deixa informações sensíveis acessíveis no arquivo.
- Dificuldade para trabalhar com múltiplos ambientes (staging, produção, etc.).
- Problemas de reaproveitamento e replicação de variáveis em vários pontos do código.
- Informações ainda ficam expostas no servidor e podem ser acessadas indevidamente.

---

#### Objetivo do Módulo

- Configurar e armazenar informações sensíveis de forma mais segura.
- Apresentar duas abordagens:
  1. Uso do Vault (HashiCorp) – Open Source.
  2. Uso do Secret Manager (AWS) – Gerenciado.

---

#### O que é o Vault?

- Ferramenta da HashiCorp para gerenciamento de secrets e proteção de dados sensíveis.
- Parte do ecossistema HashiCorp (Terraform, Waypoint, Packer, Vagrant, Nomad, Consul, Boundary).
- Disponível em versão Open Source e também como serviço pago (HashiCorp Cloud Platform - HCP).
- Permite gerenciar secrets, rotação de chaves, tempo de expiração e controle centralizado de variáveis.

---

#### Funcionamento do Vault

- Aplicações buscam informações sensíveis diretamente do Vault, não mais do .env.
- Conexão com o Vault ocorre no start da aplicação para resgatar secrets e configurações.
- Possibilita rotação automática de chaves e senhas, aumentando a segurança.
- Centraliza todas as configurações (sensíveis ou não) em um único ponto de acesso.

---

#### Benefícios do Vault

- Maior controle e segurança sobre informações sensíveis.
- Facilidade para rotação de secrets e gerenciamento de múltiplos ambientes.
- Redução de riscos de vazamento e exposição de dados.
- Simplificação do gerenciamento de variáveis de ambiente.

---

#### Considerações Finais

- O Vault é uma solução robusta para gerenciamento de secrets em ambientes DevOps.
- Próximos passos: configuração prática do Vault e
