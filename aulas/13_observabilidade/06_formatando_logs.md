### Formatando Logs com OpenTelemetry e Pino

#### Introdução

- **Objetivo:** Demonstrar como formatar logs para integrá-los ao Grafana Cloud utilizando ferramentas como **Pino** e **OpenTelemetry**.
- **Contexto:** Logs não padronizados (ex.: `console.log`) não aparecem em agregadores de logs como o Grafana. É necessário utilizar um formatador para garantir a compatibilidade.

---

### Problemas com `console.log`

- **Limitações:**
  - Logs gerados com `console.log` não são enviados para agregadores de logs.
  - O `console.log` é útil apenas para debugging local e não deve ser usado em produção.
- **Solução:** Utilizar um formatador de logs como o **Pino** para padronizar e enviar logs para serviços externos.

---

### Configuração do Pino

#### 1. **Instalação**

- Instalar as dependências necessárias:
  ```bash
  npm install pino pino-pretty
  ```

#### 2. **Criação de um Logger**

- Criar uma abstração para o logger:

  ```typescript
  import pino from 'pino'

  const log = pino({
    level: 'debug',
    transport: {
      targets: [
        {
          target: 'pino-pretty',
          level: 'error',
          options: {
            name: 'dev-terminal',
            colorize: true,
            levelFirst: true,
            include: 'level,time',
            translateTime: 'yyyy-mm-dd HH:MM:ss Z',
          },
        },
      ],
    },
  })

  export default log
  ```

#### 3. **Níveis de Log**

- O Pino suporta diferentes níveis de log:
  - **debug:** Para debugging.
  - **info:** Informações gerais.
  - **error:** Erros críticos.
  - **fatal:** Erros fatais.
- Exemplo de uso:
  ```typescript
  log.info('Servidor iniciado com sucesso.')
  log.error('Erro ao conectar ao banco de dados.')
  ```

---

### Integração com o Grafana Cloud

#### 1. **Envio de Logs**

- Logs formatados com o Pino podem ser enviados para o Grafana Cloud utilizando o OpenTelemetry.
- Configurar o **OpenTelemetry** para capturar e enviar logs para o Loki no Grafana Cloud.

#### 2. **Visualização no Grafana**

- Logs enviados aparecem no painel do Grafana.
- É possível filtrar logs por nível (ex.: `info`, `error`) ou por serviço.

---

### Boas Práticas

#### 1. **Padronização**

- Utilizar um formatador como o Pino para garantir que os logs sejam estruturados e compatíveis com agregadores de logs.

#### 2. **Segurança**

- Evitar expor informações sensíveis nos logs.
- Configurar variáveis de ambiente para armazenar tokens e credenciais.

#### 3. **Separação de Responsabilidades**

- A aplicação deve apenas emitir logs, enquanto um serviço especializado (ex.: Loki) é responsável por armazená-los e indexá-los.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Configurar logs para serem enviados ao Loki no Grafana Cloud.
- Garantir que os logs sejam úteis para troubleshooting e monitoramento.

#### 2. **Próximos Passos**

- Adicionar logs em diferentes partes da aplicação (ex.: health checks).
- Explorar a integração de logs com métricas e traces no Grafana Cloud.
