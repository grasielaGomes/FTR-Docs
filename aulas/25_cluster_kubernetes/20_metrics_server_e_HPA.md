### Metrics Server e HPA no Kubernetes

#### Introdução

- **Objetivo:** Explicar o papel do Metrics Server e do HPA no Kubernetes, mostrando como coletar métricas e escalar aplicações automaticamente.
- **Contexto:** Destacar a importância do monitoramento de recursos e do autoscaling para garantir performance e disponibilidade.

---

### O que é Metrics Server?

- **Definição:** Metrics Server é um componente do Kubernetes responsável por coletar métricas de uso de recursos (CPU, memória) dos pods e nodes.
- **Utilização:** Fornece dados em tempo real para recursos como o HPA, facilitando decisões de escalonamento.
- **Boas práticas:** Sempre mantenha o Metrics Server instalado e atualizado para garantir o funcionamento do autoscaling.

---

### O que é HPA (Horizontal Pod Autoscaler)?

- **Definição:** HPA é um recurso do Kubernetes que ajusta automaticamente o número de pods de uma aplicação com base em métricas como CPU e memória.
- **Funcionamento:** O HPA consulta o Metrics Server e escala/desescala os pods conforme limites definidos no arquivo declarativo.
- **Benefícios:**
  - Escalabilidade automática.
  - Otimização de recursos.
  - Alta disponibilidade.

---

### Passo a Passo para Instalar o Metrics Server e Configurar o HPA

1. **Instale o Metrics Server**

   Execute no terminal:

   ```
   kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
   ```

2. **Verifique se o Metrics Server está funcionando**

   Liste as métricas dos pods:

   ```
   kubectl top pods -n widget
   ```

   Ou dos nodes:

   ```
   kubectl top nodes
   ```

3. **Crie um arquivo YAML para o HPA**

   Exemplo de conteúdo (`hpa.yaml`):

   ```yaml
   apiVersion: autoscaling/v2
   kind: HorizontalPodAutoscaler
   metadata:
     name: widget-server-hpa
     namespace: widget
   spec:
     scaleTargetRef:
       apiVersion: apps/v1
       kind: Deployment
       name: widget-server
     minReplicas: 3
     maxReplicas: 10
     metrics:
       - type: Resource
         resource:
           name: cpu
           target:
             type: Utilization
             averageUtilization: 60
   ```

4. **Aplique o arquivo declarativo do HPA**

   Execute no terminal:

   ```
   kubectl apply -f hpa.yaml
   ```

5. **Verifique o status do HPA**

   Liste os HPAs no namespace:

   ```
   kubectl get hpa -n widget
   ```

   Descreva para ver detalhes:

   ```
   kubectl describe hpa widget-server-hpa -n widget
   ```

6. **(Opcional) Teste o autoscaling gerando carga**

   Gere carga na aplicação para observar o HPA escalando os pods:

   - Utilize ferramentas como `kubectl run` ou scripts de stress.

7. **(Opcional) Remova o HPA**

   ```
   kubectl delete hpa widget-server-hpa -n widget
   ```

---

### Considerações e Boas Práticas

- **Garanta que o Metrics Server esteja sempre operacional e atualizado.**
- **Defina limites mínimos e máximos de réplicas conforme o perfil da aplicação.**
- **Monitore o comportamento do HPA e ajuste as métricas conforme necessário.**
- **Combine o HPA com requests/limits de recursos nos pods para melhor controle.**

---

### Resumo

- O Metrics Server é essencial para coletar métricas e permitir o autoscaling via HPA.
- O HPA garante escalabilidade automática, performance e economia de recursos.
- O uso de arquivos declarativos facilita o versionamento e a reprodutibilidade da configuração.

---

### Próximos Passos

- Explorar o uso de métricas customizadas para escalonamento avançado.
- Integrar o HPA com ferramentas de observabilidade para monitoramento detalhado.
