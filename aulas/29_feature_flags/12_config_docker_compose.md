# Configurando Docker Compose (FlagD)

## Introdução

- Objetivo: simplificar a execução do FlagD via `docker-compose.yml` em vez de múltiplos comandos `docker run`.
- Abordaremos a definição de serviços, mapeamento de portas, volumes e comando de inicialização.

---

## Arquivo docker-compose.yml

```yaml
version: '3.8'
services:
  flagd:
    image: ghcr.io/openfeature/flagd:latest
    container_name: flagd
    ports:
      - '8013:8013' # Porta gRPC (RPC)
      - '8014:8014' # Porta HTTP REST
    volumes:
      - ./flags.json:/etc/flagd/flags.json
    command:
      - flagd
      - start
      - --uri
      - file:///etc/flagd/flags.json
```

---

## Executando os serviços

- Para iniciar em background:

```bash
docker compose up -d
```

- Para executar em modo interativo e acompanhar logs:

```bash
docker compose up
```

- Para parar e remover containers:

```bash
docker compose down
```

---

## Monitoramento e logs

- Verifique status dos containers:

```bash
docker ps
```

- Acesse logs em tempo real:

```bash
docker logs -f flagd
```

- Ao salvar alterações em `flags.json`, o FlagD executa resync automático.

---

## Boas práticas

- Mantenha `flags.json` versionado no repositório.
- Use nomes de serviços e volumes descritivos.
- Ajuste o mapeamento de portas conforme seu ambiente.
- Utilize `docker compose up -d` em produção para não bloquear o terminal.

---

## Próximos passos

- Explorar estratégias de deploy progressivo com Kubernetes.
- Comparar rollout de Feature Flags com rolling updates de Pods.
- Criar pipeline CI/CD integrando FlagD e aplicação.

---

## Referências

- Docker Compose: https://docs.docker.com/compose/
- FlagD Quick Start: https://flagd.dev/docs/quickstart
