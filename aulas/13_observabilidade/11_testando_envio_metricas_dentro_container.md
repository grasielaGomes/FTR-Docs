### Testando o Envio de Métricas Dentro de um Container

#### Introdução

- **Objetivo:** Validar o envio de métricas e logs de uma aplicação rodando em container para ferramentas de observabilidade.
- **Contexto:** Configuração e testes locais antes de realizar o deploy em ambientes como ECS.

---

### Métricas e Logs no New Relic

#### 1. **APM e Services**

- **APM (Application Performance Monitoring):**
  - Monitora o desempenho geral da aplicação.
  - Exibe métricas como tempo de resposta, throughput e taxa de erros.
- **Logs:**
  - Exibe logs enviados pela aplicação, categorizados por nível (ex.: `error`).
  - Inclui informações como `request_id`, `service_name` e `type`.

#### 2. **Traces**

- Mostra o tempo de resposta e duração de transações.
- Detalha o comportamento de endpoints, como `/health`.

---

### Configuração e Testes Locais

#### 1. **Configuração de Variáveis de Ambiente**

- Adicionar variáveis de ambiente no container:
  - **APP_NAME:** Nome da aplicação.
  - **LICENSE_KEY:** Chave de licença do New Relic.

#### 2. **Testando Localmente**

- Rodar a aplicação localmente para validar o envio de métricas:
  - Criar um arquivo `.env` com as variáveis necessárias.
  - Utilizar o comando `docker run` para passar as variáveis de ambiente.

#### 3. **Build e Execução**

- **Build da Imagem Docker:**
  ```bash
  docker build -t widget-server:v1 .
  ```
- **Execução do Container:**
  ```bash
  docker run -e APP_NAME=widget-server -e LICENSE_KEY=your_license_key widget-server:v1
  ```

---

### Deploy no ECS

#### 1. **Task Definition**

- Criar uma nova revisão da Task Definition no ECS.
- Adicionar as variáveis de ambiente necessárias:
  - **APP_NAME**
  - **LICENSE_KEY**

#### 2. **Deploy**

- Atualizar o cluster no ECS para usar a nova Task Definition.
- Validar se o deploy foi realizado corretamente.

---

### Problemas e Soluções

#### 1. **Bad Option no Docker**

- O erro `Bad Option` pode ocorrer devido a configurações incorretas no comando `docker run`.
- **Solução:** Revisar as opções passadas no comando e ajustar as variáveis de ambiente.

#### 2. **Logs de Erro**

- Logs de erro podem ser gerados propositalmente para validar o envio de dados.
- **Solução:** Ajustar os níveis de log para `info` ou `debug` após os testes.

#### 3. **No Data**

- O estado "No Data" pode ocorrer se as métricas não forem enviadas corretamente.
- **Solução:** Verificar a configuração do New Relic e as variáveis de ambiente.

---

### Boas Práticas

#### 1. **Segurança**

- Armazenar chaves de licença e variáveis sensíveis como **secrets**.
- Evitar expor informações sensíveis diretamente no código ou em arquivos públicos.

#### 2. **Testes Locais**

- Validar o envio de métricas localmente antes de realizar o deploy em produção.
- Utilizar logs e métricas para identificar problemas durante os testes.

#### 3. **Configuração de Deploy**

- Garantir que as variáveis de ambiente estejam configuradas corretamente no ECS.
- Utilizar ferramentas como AWS Secrets Manager para gerenciar credenciais.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Garantir que as métricas e logs sejam enviados corretamente para o New Relic.
- Resolver problemas de configuração, como o erro `Bad Option`.

#### 2. **Próximos Passos**

- Corrigir problemas identificados durante os testes locais.
- Realizar o deploy final no ECS e validar o envio de métricas em produção.
