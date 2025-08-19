### Probes (Sondas) no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como configurar health checks (probes) em aplicações no Kubernetes para garantir a saúde e disponibilidade dos pods.
- **Contexto:** Explicar a importância das sondas para monitorar o ciclo de vida da aplicação, detectar falhas e automatizar o self-healing.

---

### O que são Probes?

- **Definição:** Probes (sondas) são mecanismos do Kubernetes para verificar a saúde e o estado de containers.
- **Tipos:**
  - **Startup Probe:** Verifica se o container inicializou corretamente.
  - **Readiness Probe:** Indica se o container está pronto para receber tráfego.
  - **Liveness Probe:** Verifica se o container continua saudável durante a execução.
- **Boas práticas:** Implemente endpoints de health e ready que testem não só a aplicação, mas também integrações críticas (banco, cache, mensageria).

---

### Por que usar Probes?

- **Detecção automática de falhas:** Permite que o Kubernetes reinicie containers problemáticos.
- **Zero downtime:** Garante que apenas pods prontos recebam tráfego.
- **Observabilidade:** Facilita o monitoramento e troubleshooting de aplicações.

---

### Passo a Passo para Configurar Probes em um Deployment

1. **Implemente endpoints de health na aplicação**

   - Exemplo: `/health` para checar saúde geral e `/ready` para prontidão (se possível).

2. **Adicione as probes no arquivo YAML do Deployment**

   - Exemplo de configuração:
     ```yaml
     containers:
       - name: widget-server
         image: sua-imagem:tag
         ports:
           - containerPort: 3333
         startupProbe:
           httpGet:
             path: /health
             port: 3333
           failureThreshold: 3
           successThreshold: 1
           timeoutSeconds: 1
           periodSeconds: 15
           initialDelaySeconds: 5
         readinessProbe:
           httpGet:
             path: /health
             port: 3333
           failureThreshold: 3
           successThreshold: 1
           timeoutSeconds: 1
           periodSeconds: 15
           initialDelaySeconds: 15
         livenessProbe:
           httpGet:
             path: /health
             port: 3333
           failureThreshold: 2
           successThreshold: 1
           timeoutSeconds: 1
           periodSeconds: 15
           initialDelaySeconds: 15
     ```

3. **Aplique o arquivo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f deployment.yaml
     ```

4. **Verifique o status das probes**

   - Liste os pods e veja o status:
     ```
     kubectl get pods -n <namespace>
     kubectl describe pod <nome-do-pod> -n <namespace>
     ```
   - Acompanhe eventos e logs para validar o funcionamento das probes.

---

### Considerações e Boas Práticas

- **Implemente endpoints separados para health e ready, se possível.**
- **Ajuste os tempos de delay e thresholds conforme o tempo de inicialização da sua aplicação.**
- **Monitore os eventos e logs para identificar loops de restart ou falhas nas probes.**
- **Probes bem configuradas evitam que aplicações problemáticas cheguem à produção.**

---

### Resumo

- Probes são essenciais para garantir a saúde, disponibilidade e auto-recuperação de aplicações no Kubernetes.
- Permitem deploys mais seguros e facilitam o troubleshooting.

---

### Próximos Passos

- Explorar como expor aplicações no cluster utilizando Services.
- Aprender a monitorar e ajustar probes em ambientes produtivos.
