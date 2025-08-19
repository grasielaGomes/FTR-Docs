### Enviando a Aplicação para o ECS

#### Introdução

- **Objetivo:** Demonstrar o processo de deploy de uma aplicação para o ECS (Elastic Container Service) com monitoramento e logs configurados.
- **Contexto:** Configuração de containers, validação de logs e métricas, e ajustes para funcionamento em produção.

---

### Configuração e Execução Local

#### 1. **Problemas Comuns**

- **Erro de Módulo Não Encontrado:** Pode ocorrer devido à imagem base utilizada.
  - **Solução:** Utilizar imagens como `Node.Alpine` ou ajustar comandos no `CMD` ou `ENTRYPOINT`.

#### 2. **Execução Local**

- **Build da Imagem Docker:**
  ```bash
  docker build -t widget-server:v1 .
  ```
- **Execução do Container:**
  ```bash
  docker run -p 3333:3333 -e APP_NAME=widget-server -e LICENSE_KEY=your_license_key widget-server:v1
  ```
- **Validação Local:**
  - Acessar a aplicação via navegador ou ferramenta de teste.
  - Verificar logs com:
    ```bash
    docker logs <container_id>
    ```

---

### Deploy no ECS

#### 1. **Task Definition**

- Criar ou atualizar a Task Definition no ECS.
- Adicionar variáveis de ambiente:
  - **APP_NAME**
  - **LICENSE_KEY**

#### 2. **Deploy**

- Atualizar o cluster no ECS para usar a nova Task Definition.
- Validar o deploy acessando a aplicação e verificando logs.

---

### Logs e Métricas no New Relic

#### 1. **Logs**

- Logs são enviados automaticamente para o New Relic.
- Incluem informações como:
  - `request_id`
  - `service_name`
  - `trace_id`

#### 2. **Métricas**

- Métricas como tempo de resposta e throughput são exibidas no painel do New Relic.
- **Delay:** Pode haver atraso no envio de métricas, especialmente em contas gratuitas.

#### 3. **Infraestrutura**

- O New Relic pode monitorar containers e hosts, exibindo uso de CPU e memória.
- **Agente de Infraestrutura:** Pode ser instalado para monitoramento mais detalhado.

---

### Problemas e Soluções

#### 1. **Delay nos Logs**

- Logs podem demorar para aparecer devido a limitações da conta gratuita.
- **Solução:** Aguardar ou verificar configurações de envio.

#### 2. **Logs Desconfigurados**

- Logs podem aparecer desorganizados devido ao formatador utilizado.
- **Solução:** Ajustar o formatador (ex.: Pino) para compatibilidade com o New Relic.

#### 3. **Erro no Deploy**

- Problemas com credenciais ou configurações podem impedir o deploy.
- **Solução:** Revisar credenciais da AWS e configurações da Task Definition.

---

### Boas Práticas

#### 1. **Segurança**

- Armazenar variáveis sensíveis como **secrets** (ex.: AWS Secrets Manager).
- Evitar expor informações sensíveis diretamente no código.

#### 2. **Testes Locais**

- Validar a aplicação localmente antes de realizar o deploy.
- Utilizar logs e métricas para identificar problemas.

#### 3. **Monitoramento de Infraestrutura**

- Configurar agentes para monitorar CPU, memória e outros recursos no ECS.

---

### Reflexões e Próximos Passos

#### 1. **Desafios**

- Garantir que logs e métricas sejam enviados corretamente para o New Relic.
- Resolver problemas de configuração, como erros no deploy ou logs desorganizados.

#### 2. **Próximos Passos**

- Configurar testes de carga para avaliar o comportamento da aplicação sob estresse.
- Explorar o uso de trace distribuído para monitorar dependências entre serviços.
