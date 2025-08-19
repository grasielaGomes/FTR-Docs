### Criando um ReplicaSet no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar e gerenciar um ReplicaSet no Kubernetes utilizando arquivos declarativos.
- **Contexto:** Explicar a importância do ReplicaSet para garantir alta disponibilidade, auto-recuperação e escalabilidade de pods.

---

### O que é um ReplicaSet?

- **Definição:** ReplicaSet é um controller do Kubernetes responsável por garantir que um número específico de pods idênticos esteja sempre em execução.
- **Função:** Se um pod falhar ou for deletado, o ReplicaSet cria automaticamente um novo pod para manter a quantidade desejada.
- **Boas práticas:** Sempre utilize ReplicaSet (ou Deployments) para aplicações que precisam de alta disponibilidade e escalabilidade.

---

### Por que usar ReplicaSet?

- **Alta disponibilidade:** Garante que sempre haverá a quantidade desejada de pods rodando.
- **Auto-recuperação:** Substitui pods que falham automaticamente.
- **Escalabilidade:** Permite aumentar ou reduzir o número de réplicas facilmente.

---

### Passo a Passo para Criar um ReplicaSet Declarativo

1. **Crie um arquivo YAML para o ReplicaSet**

   - Exemplo de conteúdo (`replicaset.yaml`):
     ```yaml
     apiVersion: apps/v1
     kind: ReplicaSet
     metadata:
       name: widget-server-rs
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
     ```

2. **Aplique o arquivo declarativo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f replicaset.yaml
     ```

3. **Verifique o status do ReplicaSet e dos pods**

   - Liste os ReplicaSets:
     ```
     kubectl get replicaset -n <namespace>
     # ou abreviado
     kubectl get rs -n <namespace>
     ```
   - Liste os pods criados:
     ```
     kubectl get pods -n <namespace>
     ```

4. **Teste a auto-recuperação**

   - Delete um pod manualmente:
     ```
     kubectl delete pod <nome-do-pod> -n <namespace>
     ```
   - O ReplicaSet criará automaticamente um novo pod para manter a quantidade desejada.

5. **(Opcional) Altere a quantidade de réplicas**
   - Edite o campo `replicas` no arquivo YAML e reaplique:
     ```
     kubectl apply -f replicaset.yaml
     ```

---

### Considerações e Boas Práticas

- **Sempre utilize arquivos declarativos para versionamento e reprodutibilidade.**
- **Evite manipular pods diretamente; utilize controllers como ReplicaSet ou Deployment.**
- **Requests e limits devem ser definidos para cada container.**
- **A política padrão de pull de imagem recomendada é IfNotPresent.**

---

### Limitações do ReplicaSet

- **Não controla versões:** Alterar a imagem no ReplicaSet não atualiza os pods existentes automaticamente.
- **Downtime em atualizações:** Para atualizar a imagem, é necessário deletar o ReplicaSet e criar um novo, causando downtime.
- **Deployments são recomendados:** Para atualizações sem downtime e controle de versões, utilize Deployments.

---

### Resumo

- ReplicaSet garante alta disponibilidade e auto-recuperação de pods.
- Permite escalar facilmente a quantidade de pods.
- Não é indicado para atualizações de versão; prefira Deployments para esse cenário.

---

### Próximos Passos

- Explorar o uso de Deployments para atualizações sem downtime.
- Aprender a expor múltiplos pods utilizando Services.
