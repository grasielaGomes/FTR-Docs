### Problemas ao Executar um Pod no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar as principais práticas e problemas ao executar pods no Kubernetes, com foco em recursos, limites e replicação.
- **Contexto:** Explicar a importância de definir recursos, entender o comportamento de pods e a necessidade de mecanismos de controle para produção.

---

### O que são Recursos em Pods?

- **Definição:** Recursos são limites e solicitações de CPU e memória atribuídos a cada pod, garantindo controle sobre o uso do nó.
- **Boas práticas:** Sempre defina requests e limits para evitar consumo excessivo e garantir previsibilidade.

---

### Por que Definir Requests e Limits?

- **Controle:** Garante que cada pod utilize apenas a quantidade de recursos permitida.
- **Isolamento:** Evita que um pod consuma recursos de outros, protegendo o cluster.
- **Performance:** Ajuda o scheduler a alocar pods de forma eficiente.

---

### Passo a Passo para Definir Recursos em um Pod

1. **Edite o arquivo YAML do pod**

   - Exemplo de trecho (`pod.yaml`):
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: widget-server
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
     ```

2. **Aplique o arquivo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f pod.yaml
     ```

3. **Verifique o status do pod**

   - Liste os pods:
     ```
     kubectl get pods
     ```
   - Veja detalhes dos recursos:
     ```
     kubectl describe pod widget-server
     ```

4. **(Opcional) Ajuste a política de pull da imagem**

   - Para garantir que a imagem seja baixada apenas se necessário, utilize:
     ```yaml
     imagePullPolicy: IfNotPresent
     ```

5. **(Opcional) Remova o pod**
   - Caso precise deletar:
     ```
     kubectl delete pod widget-server
     ```

---

### Considerações e Boas Práticas

- **Sempre utilize arquivos declarativos para versionamento e reprodutibilidade.**
- **Evite criar pods diretamente em produção; utilize controllers como Deployments para alta disponibilidade.**
- **Requests e limits devem ser definidos desde a criação do pod.**
- **A política padrão de pull de imagem é IfNotPresent.**

---

### Limitações do Pod Isolado

- **Self-healing limitado:** O pod reinicia em caso de falha, mas se for deletado manualmente, não é recriado automaticamente.
- **Sem replicação:** Para múltiplas instâncias, é necessário um controller (Deployment, ReplicaSet, etc).
- **Não recomendado para produção:** Use pods isolados apenas para testes e aprendizado.

---

### Resumo

- Definir recursos é essencial para estabilidade e previsibilidade do cluster.
- Pods isolados não oferecem alta disponibilidade nem replicação.
- Utilize controllers para produção.

---

### Próximos Passos

- Explorar o uso de Deployments para replicação e alta disponibilidade.
- Aprender a criar e gerenciar controllers no Kubernetes.
