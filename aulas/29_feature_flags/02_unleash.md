### Unleash (Feature Flags)

#### Introdução

- Objetivo: apresentar o Unleash como uma solução de Feature Flags e demonstrar um setup local usando Docker.
- Escopo desta aula: usar a versão Open Source (OSS), rodando localmente, e preparar um ambiente com PostgreSQL.

---

### O que é o Unleash

- Vendor / tool para gerenciar Feature Flags.
- Permite consultar, de forma remota, se uma feature deve ser habilitada (booleano) ou aplicada por estratégias de segmentação (rollout gradual, por grupo, por geolocalização, etc.).
- Integra com aplicações que consultam o Unleash em runtime, evitando redeploys para habilitar/desabilitar funcionalidades.

---

### Versões e modelo de uso

- OSS (Open Source): gratuito, pode ser self-hosted — é o foco desta aula.
- Enterprise / Cloud: versão paga com funcionalidades adicionais (ex.: plano enterprise com custo por mês).
- Observação: ao optar por self-hosted em Kubernetes/infra própria, há custos operacionais e de tráfego a considerar.

---

### Arquitetura e dependências

- Persistência: o Unleash precisa de um armazenamento persistente. O backend mais comum é PostgreSQL.
- Porta PostgreSQL recomendada: 5432 (padrão). É necessária uma estratégia de backup para os dados das flags.

---

### Rodando localmente (visão geral)

- Estratégia usada aqui: subir um container PostgreSQL e um container Unleash na mesma Docker network.
- Motivos: o Unleash resolve o host do banco pela DNS interno da rede Docker; por isso não é necessário usar localhost.
- Expor o painel do Unleash na máquina host para acessar via navegador (ex.: mapear porta 4200 do host para 4242 do container).

Fluxo resumido:

- criar uma network Docker (ex.: `docker network create unleash`);
- subir o container do Postgres com variáveis de ambiente para usuário, senha e nome do DB;
- subir o container do Unleash apontando para o host do Postgres (nome do container) e passar as variáveis de configuração do banco.

---

### Variáveis de ambiente importantes (exemplos)

- Para Postgres (docker run -e ...):

  - POSTGRES_PASSWORD (senha do banco) — exemplo: `unleash`
  - POSTGRES_USER (usuário do banco) — exemplo: `unleash`
  - POSTGRES_DB (nome do banco) — exemplo: `unleash`

- Para Unleash (variáveis que o servidor espera):
  - DATABASE_HOST (host do Postgres — use o nome do container, ex.: `postgres_unleash`)
  - DATABASE_PORT (5432)
  - DATABASE_NAME
  - DATABASE_USERNAME
  - DATABASE_PASSWORD
  - DATABASE_SSL (false em ambiente local; true em produção/cluster)

Observação: nomes exatos das variáveis podem variar conforme a imagem; consultar o Quick Start da imagem Unleash.

---

### Boas práticas e observações

- Rodar os containers na mesma network Docker para resolução de nomes internos.
- Por padrão, não expor o banco à interface host se não for necessário (o Unleash acessa internamente).
- Em produção, habilitar SSL e backup regular do Postgres.
- Para testes locais, mapear apenas a porta necessária do Unleash (ex.: host 4200 para container 4242).

---

### Acesso inicial e credenciais

- A interface Admin UI do Unleash fica disponível via navegador após o container subir (ex.: http://localhost:4200 quando mapeado).
- Credenciais iniciais mencionadas na aula (verificar na imagem/documentação oficial):
  - usuário: `admin`
  - senha: `oneleash` (ou conforme a imagem/default — confirmar na documentação da imagem)
  - organização/exemplo: `forall` (mencionado como possível valor; confirmar)

Nota: anotei as credenciais conforme a fala; confirmar no Quick Start / README da imagem para garantir corretude.

---

### Próximos passos

- Na próxima aula: criar uma flag no Unleash e integrar com uma aplicação real para demonstrar rollout e estratégias.
- Transformar o procedimento manual em um `docker-compose.yml` para facilitar reprodução.

---

### Referências

- Repositório e documentação do Unleash (Quick Start / Docker image) — consultar para variáveis/flags atualizadas.
