### Autoscaling com HPA no Kubernetes

#### Introdução

- **Objetivo:** Apresentar o conceito de autoscaling horizontal (HPA) no Kubernetes e como configurar o ajuste automático de réplicas de pods conforme a demanda.
- **Contexto:** Explicar a importância do autoscaling para garantir disponibilidade, performance e otimização de recursos em ambientes dinâmicos.

---

### O que é Autoscaling e HPA?

- **Definição:** Autoscaling é a capacidade de ajustar automaticamente a quantidade de pods de uma aplicação conforme métricas de uso (CPU, memória, etc). O HPA (Horizontal Pod Autoscaler) é o recurso nativo do Kubernetes para escalar horizontalmente os pods.
- **Funcionamento:** O HPA monitora métricas dos pods e aumenta ou reduz o número de réplicas conforme limites definidos.
- **Benefícios:**
  - Alta disponibilidade.
  - Otimização de custos e recursos.
  - Resposta automática a picos de tráfego.

---

### Por que usar Autoscaling?

- **Adaptação automática:** Ajusta a capacidade da aplicação conforme a demanda, evitando sobrecarga ou desperdício de recursos.
- **Resiliência:** Garante que a aplicação continue disponível mesmo em cenários de alto tráfego.
- **Eficiência operacional:** Reduz a necessidade de intervenção manual para escalar/desescalar pods.

---

### Passo a Passo para Configurar o HPA

1. **Verifique se o Metrics Server está instalado**

   O HPA depende do Metrics Server para coletar métricas dos pods. Instale com:

   ```
   kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
   ```

2. **Crie um arquivo YAML para o HPA**

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

3. **Aplique o arquivo declarativo no cluster**

   Execute no terminal:

   ```
   kubectl apply -f hpa.yaml
   ```

4. **Verifique o status do HPA**

   Liste os HPAs no namespace:

   ```
   kubectl get hpa -n widget
   ```

   Descreva para ver detalhes:

   ```
   kubectl describe hpa widget-server-hpa -n widget
   ```

5. **(Opcional) Teste o autoscaling gerando carga**

   Gere carga na aplicação para observar o HPA escalando os pods:

   - Utilize ferramentas como `kubectl run` ou scripts de stress.

6. **(Opcional) Remova o HPA**

   ```
   kubectl delete hpa widget-server-hpa -n widget
   ```

---

### Considerações e Boas Práticas

- **Defina limites mínimos e máximos de réplicas conforme o perfil da aplicação.**
- **Monitore o comportamento do HPA e ajuste as métricas conforme necessário.**
- **Garanta que o Metrics Server esteja sempre operacional.**
- **Evite valores muito baixos para minReplicas para não comprometer a disponibilidade.**
- **Combine o HPA com requests/limits de recursos nos pods para melhor controle.**

---

### Resumo

- O HPA permite escalar aplicações automaticamente, garantindo performance e economia de recursos.
- O uso de arquivos declarativos facilita o versionamento e a reprodutibilidade da configuração.

---

### Próximos Passos

- Explorar o uso de escalonamento baseado em métricas customizadas (além de CPU/memória).
- Integrar o HPA com ferramentas de observabilidade para monitoramento avançado.
