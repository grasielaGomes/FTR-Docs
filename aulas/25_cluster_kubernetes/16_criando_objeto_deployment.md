### Criando um Deployment no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar e gerenciar um Deployment no Kubernetes utilizando arquivos declarativos.
- **Contexto:** Explicar a importância do Deployment para controle de versões, atualizações sem downtime e gerenciamento avançado de pods.

---

### O que é um Deployment?

- **Definição:** Deployment é um controller do Kubernetes que gerencia ReplicaSets e permite atualizações controladas de pods.
- **Função:** Facilita o rollout e rollback de versões, além de garantir alta disponibilidade e escalabilidade.
- **Boas práticas:** Sempre utilize Deployments para aplicações que precisam de atualizações sem downtime e controle de versões.

---

### Por que usar Deployment?

- **Controle de versões:** Permite atualizar a aplicação sem indisponibilidade.
- **Rollout e rollback:** Possibilita reverter facilmente para versões anteriores.
- **Escalabilidade e auto-recuperação:** Gerencia réplicas e substitui pods automaticamente em caso de falha.

---

### Passo a Passo para Criar um Deployment Declarativo

1. **Crie um arquivo YAML para o Deployment**

   - Exemplo de conteúdo (`deployment.yaml`):
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: widget-server-deployment
     spec:
       replicas: 5
       selector:
         matchLabels:
           app: widget-server
       template:
         metadata:
           labels:
             app: widget-server
         spec:
           containers:
             - name: widget-server
               image: sua-imagem:tag
               resources:
                 requests:
                   cpu: '200m'
                   memory: '256Mi'
                 limits:
                   cpu: '300m'
                   memory: '384Mi'
               imagePullPolicy: IfNotPresent
       strategy:
         type: RollingUpdate
         rollingUpdate:
           maxSurge: 20%
           maxUnavailable: 10%
     ```

2. **Aplique o arquivo declarativo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f deployment.yaml
     ```

3. **Verifique o status do Deployment, ReplicaSet e pods**

   - Liste os Deployments:
     ```
     kubectl get deployment -n <namespace>
     ```
   - Liste os ReplicaSets:
     ```
     kubectl get rs -n <namespace>
     ```
   - Liste os pods:
     ```
     kubectl get pods -n <namespace>
     ```

4. **Atualize a versão da aplicação**

   - Altere a tag da imagem no arquivo YAML e reaplique:
     ```
     kubectl apply -f deployment.yaml
     ```
   - O Deployment fará a atualização sem downtime (Rolling Update).

5. **(Opcional) Faça rollback para uma versão anterior**
   - Execute:
     ```
     kubectl rollout undo deployment/widget-server-deployment -n <namespace>
     ```

---

### Considerações e Boas Práticas

- **Sempre utilize arquivos declarativos para versionamento e reprodutibilidade.**
- **Requests e limits devem ser definidos para cada container.**
- **Prefira a estratégia RollingUpdate para evitar downtime.**
- **Utilize labels consistentes para facilitar o gerenciamento e a seleção de pods.**

---

### Estratégias de Deploy

- **Recreate:** Remove todos os pods antigos antes de criar os novos (pode causar downtime).
- **RollingUpdate (padrão):** Atualiza os pods gradualmente, sem indisponibilidade.
- **Blue-Green/Canary:** Estratégias avançadas para deploys controlados (não nativas do Kubernetes, mas possíveis com ferramentas externas).

---

### Resumo

- Deployment permite atualizações seguras e sem downtime.
- Garante alta disponibilidade, rollback e gerenciamento avançado de pods.
- É o controller recomendado para aplicações em produção.

---

### Próximos Passos

- Explorar estratégias de segurança e sondagem (liveness/readiness probes).
- Aprender a expor Deployments utilizando Services.
