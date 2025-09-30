### Configuração do Projeto para Observabilidade

#### 1. Instalação das Dependências

- Instale as bibliotecas principais do OpenTelemetry:
  - `@opentelemetry/api`
  - `@opentelemetry/instrumentation-http`
  - `@opentelemetry/sdk-node`
  - `@opentelemetry/instrumentation-knex`
- Adicione o `type: "module"` no `package.json` para usar import/export.
- Instale dependências adicionais:
  - `fastify` (framework web)
  - `knex` (query builder SQL)
  - `pg` (driver Postgres)

#### 2. Estrutura de Pastas e Arquivos

- Crie a pasta `src/`.
- Dentro de `src/`, crie:
  - `db.js`: conexão e funções do banco de dados.
  - `server.js`: servidor Fastify e rotas.
  - `trace.js`: configuração do OpenTelemetry.

#### 3. Configuração do Banco de Dados (`db.js`)

- Importe o Knex e configure a conexão com o Postgres.
- Crie funções para:
  - Conectar ao banco.
  - Preparar e popular tabelas (função `seedDB`).
  - Realizar queries de teste.

#### 4. Configuração do Servidor (`server.js`)

- Importe o Fastify e o módulo do banco de dados.
- Importe e inicialize o `trace.js` para ativar o tracing.
- Crie rotas de exemplo (ex: `/alunos`) com diferentes comportamentos:
  - Resposta lenta.
  - Resposta rápida.
  - Resposta de erro.

#### 5. Configuração do Tracing (`trace.js`)

- Importe as dependências do OpenTelemetry.
- Configure o nível de log (ex: apenas erros).
- Inicialize o SDK do OpenTelemetry com:
  - Nome do serviço (ex: `alunos-api`).
  - Exportador OTLP apontando para o Collector.
  - Instrumentação HTTP e Knex.
- Garanta que todos os eventos sejam enviados antes do encerramento do processo.
- Importe o `trace.js` no início do `server.js`.

#### 6. Scripts e Inicialização

- Adicione o script `start` no `package.json` para iniciar o servidor.
- Use `npm start` para rodar a aplicação.

#### 7. Testando a Configuração

- Verifique se as tabelas são criadas e populadas corretamente.
- Acesse o Jaeger UI (ex: `localhost:8081`) para visualizar traces.
- Faça requisições para as rotas e confira os eventos registrados.
- Corrija eventuais erros de configuração (ex: nomes de colunas).

#### 8. Dicas e Ajustes Finais

- Use atributos customizados nos spans para enriquecer os traces (ex: payloads de resposta).
- Ajuste logs e instrumentação conforme necessidade.
- Evite logar informações sensíveis.

---

### Passo a Passo Resumido

1. Instale todas as dependências necessárias.
2. Estruture o projeto com as pastas e arquivos recomendados.
3. Configure o banco de dados e o servidor Fastify.
4. Implemente o tracing com OpenTelemetry.
5. Adicione scripts de inicialização.
6. Teste a aplicação e visualize os traces no Jaeger.
7. Faça ajustes e melhorias conforme necessário.
