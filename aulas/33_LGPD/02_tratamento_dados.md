### Tratamento de Dados na LGPD: Passo a Passo Prático

#### 1. Preparação do Ambiente

- Utilizar Docker para criar um ambiente isolado com Postgres.
- Comando para subir o container:
  ```bash
  docker run --name pg-lgpd -e POSTGRES_PASSWORD=postgres -p 5433:5432 -d postgres:latest
  ```
- O isolamento do container está alinhado ao princípio da necessidade da LGPD.

#### 2. Acesso ao Banco de Dados

- Acessar o container via cliente psql:
  ```bash
  docker exec -it pg-lgpd psql -U postgres
  ```
- Todos os comandos serão executados dentro do ambiente seguro do laboratório.

#### 3. Criação do Banco de Dados

- Criar banco de dados específico para o laboratório:
  ```sql
  CREATE DATABASE lgpd_lab;
  ```
- Conectar ao banco criado:
  ```sql
  \c lgpd_lab
  ```
- Definir a finalidade do banco: armazenamento de dados pessoais para estudo.

#### 4. Criação de Esquema Privado

- Criar esquema separado para dados pessoais:
  ```sql
  CREATE SCHEMA privado;
  ```
- O esquema privado facilita a aplicação do princípio da segurança e restrição de acesso.

#### 5. Ativação da Extensão pgCrypto

- Ativar extensão para geração de IDs aleatórios:
  ```sql
  CREATE EXTENSION IF NOT EXISTS pgcrypto;
  ```

#### 6. Criação da Tabela de Pessoas

- Criar tabela com campos mínimos necessários:
  ```sql
  CREATE TABLE privado.pessoas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    cpf TEXT NOT NULL,
    data_nascimento DATE NOT NULL
  );
  ```
- Aplicar princípios da qualidade de dados (NOT NULL, UNIQUE).

#### 7. Documentação da Finalidade e Princípios

- Adicionar comentários explicando finalidade e princípios:
  ```sql
  COMMENT ON SCHEMA privado IS 'Esquema de laboratório para demonstrar tratamento de dados na LGPD';
  COMMENT ON TABLE privado.pessoas IS 'Exercício de laboratório LGPD para fins didáticos. Sem inserção de dados reais. Princípios: finalidade e necessidade.';
  COMMENT ON COLUMN privado.pessoas.nome IS 'Nome do titular, dado pessoal para fins didáticos';
  ```
- Documentar cada coluna conforme necessário.

#### 8. Verificação da Estrutura

- Listar esquemas:
  ```sql
  \dn
  ```
- Listar tabelas:
  ```sql
  \dt privado.*
  ```
- Detalhar estrutura da tabela:
  ```sql
  \d privado.pessoas
  ```

#### 9. Considerações Finais

- Mesmo sem inserir dados, a estrutura já é considerada tratamento de dados pela LGPD.
- É necessário justificar a base legal e definir mecanismos de segurança e governança desde a criação da estrutura.
- Princípios aplicados: finalidade, necessidade, qualidade e segurança.

---

### Resumo do Passo a Passo

1. Suba o container Docker com Postgres.
2. Acesse o banco via psql.
3. Crie o banco de dados e conecte-se a ele.
4. Crie um esquema privado para dados pessoais.
5. Ative a extensão pgCrypto.
6. Crie a tabela com campos mínimos e aplique restrições.
7. Documente finalidade e princípios nos objetos do banco.
8. Verifique a estrutura criada.
9. Reforce que a LGPD exige justificativa e governança desde o início do tratamento de dados.
