### Docker Compose (Feature Flags)

#### Introdução

- Nesta aula, vamos aprender a criar um arquivo `docker-compose.yml` para simplificar o setup do Unleash e do banco PostgreSQL.
- Abordaremos boas práticas para definição de redes, containers e variáveis de ambiente.

---

### Constraints e Contextos

- Podemos definir várias `constraints` em uma estratégia do Unleash, como `GroupId`.
- No cliente, passamos o contexto ao verificar a flag:

```js
const context = { userId: '123', properties: { groupId: 'RocketseatUser' } }
const isEnabled = await unleash.isEnabled('nome_da_flag', context)
```

---

### Initialize vs Start Unleash

- `initialize` não retorna uma promessa.
- `start` retorna uma promessa, ideal para o bootstrap da aplicação:

```js
await unleash.start() // garante que o client seja inicializado antes de continuar
```

---

### Criando o docker-compose.yml

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    container_name: postgres_oneleash
    environment:
      - POSTGRES_USER=oneleash
      - POSTGRES_PASSWORD=oneleash
      - POSTGRES_DB=oneleash
    networks:
      - unleash-net

  unleash:
    image: unleashorg/unleash-server:latest
    container_name: unleash_server
    ports:
      - '4200:4242'
    environment:
      - DATABASE_HOST=postgres_oneleash
      - DATABASE_PORT=5432
      - DATABASE_NAME=unleash
      - DATABASE_USERNAME=oneleash
      - DATABASE_PASSWORD=oneleash
      - DATABASE_SSL=false
    depends_on:
      - postgres
    networks:
      - unleash-net

networks:
  unleash-net:
    driver: bridge
```

---

### Comandos Auxiliares

- Parar e remover containers/imagens antes de recriar:
  - `docker stop <container>`
  - `docker rmi <image>`
  - `docker system prune -f`
  - `docker network prune -f`
- Subir os serviços:

```bash
docker compose up -d
```

---

### Testando a Configuração

1. Verificar containers ativos:
   ```bash
   docker ps
   ```

````
2. Visualizar logs:
   ```bash
docker logs unleash_server
````

3. Acessar a UI do Unleash em `http://localhost:4200`.

#### Criando e Testando uma Flag

- No UI, crie uma flag `login-page`.
- Adicione um `ContextField` chamado `groupId`.
- Defina a estratégia `Gradual Rollout` usando `groupId`:
  - Variante A: `true`
  - Variante B: `false`
- No código Node.js, verifique a flag:

```js
const context = { userId: '123', properties: { groupId: 'RocketseatUser' } }
const isLoginEnabled = await unleash.isEnabled('login-page', context)
```

- Se ocorrer erro de chave de API:
  1. No UI: Admin → Access Control → API Access → New API Token.
  2. Insira o token no cliente:

```js
client.setApiKey('seu_token_aqui')
```

---

### Boas Práticas

- Use volumes para persistência de dados em produção.
- Mantenha variáveis sensíveis fora do repositório (use arquivos `.env`).
- Atualize as imagens e faça backup regular do banco de dados.

---

### Próximos Passos

- Explorar o padrão Open Feature para desacoplar dependências de clientes.
- Automatizar o deployment com CI/CD (GitHub Actions, GitLab CI, etc.).

---

### Referências

- Documentação oficial Unleash Quick Start.
- Guia Docker Compose: https://docs.docker.com/compose/
