### Configurando o Behavior do HPA v2 no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como configurar o comportamento (behavior) do HPA v2, ajustando o ritmo e a agressividade do autoscaling.
- **Contexto:** Explicar como as políticas de scale up e scale down influenciam a velocidade e o controle do escalonamento automático.

---

### O que é o Behavior do HPA?

- **Definição:** Behavior é a configuração que determina como o HPA v2 realiza o scale up (crescimento) e scale down (redução) dos pods, controlando janelas de estabilização e políticas de escalonamento.
- **Personalização:** Permite definir limites, porcentagens e intervalos para aumentar ou reduzir pods, evitando oscilações abruptas.

---

### Por que configurar o Behavior?

- **Agilidade:** Permite escalar rapidamente em cenários de pico (scale up).
- **Controle:** Evita reduções bruscas de pods, garantindo estabilidade (scale down).
- **Eficiência:** Ajusta o ritmo de escalonamento conforme o perfil da aplicação e do negócio.

---

### Passo a Passo para Configurar o Behavior do HPA v2

1. **Adicione a seção `behavior` ao YAML do HPA v2**

   Exemplo de conteúdo (`hpa-behavior.yaml`):

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
             averageUtilization: 75
       - type: Resource
         resource:
           name: memory
           target:
             type: Utilization
             averageUtilization: 70
     behavior:
       scaleDown:
         stabilizationWindowSeconds: 30
         policies:
           - type: Pods
             value: 2
             periodSeconds: 15
           - type: Percent
             value: 20
             periodSeconds: 30
         selectPolicy: Max
       scaleUp:
         stabilizationWindowSeconds: 5
         policies:
           - type: Percent
             value: 50
             periodSeconds: 5
   ```

2. **Aplique o arquivo declarativo do HPA com behavior**

   Execute no terminal:

   ```
   kubectl apply -f hpa-behavior.yaml
   ```

3. **Verifique o status e eventos do HPA**

   Liste os HPAs no namespace:

   ```
   kubectl get hpa -n widget
   ```

   Descreva para ver detalhes e eventos:

   ```
   kubectl describe hpa widget-server-hpa -n widget
   ```

4. **(Opcional) Ajuste os valores de behavior para testar diferentes cenários**

   - Edite o arquivo YAML e altere os valores de `stabilizationWindowSeconds`, `policies` e `selectPolicy`.
   - Reaplique o arquivo:
     ```
     kubectl apply -f hpa-behavior.yaml
     ```

5. **(Opcional) Observe o comportamento do HPA em tempo real**

   - Utilize o comando:
     ```
     watch kubectl get pods -n widget
     ```
   - E também:
     ```
     watch kubectl get hpa -n widget
     ```

---

### Considerações e Boas Práticas

- **Ajuste o behavior conforme o perfil de uso e criticidade da aplicação.**
- **Evite políticas muito agressivas para scale down, para não comprometer a disponibilidade.**
- **Monitore os eventos do HPA para entender o impacto das configurações.**
- **Combine behavior com múltiplas métricas para maior controle.**

---

### Resumo

- O behavior do HPA v2 permite personalizar o ritmo e a agressividade do autoscaling, garantindo eficiência e estabilidade.
- O uso de arquivos declarativos facilita o versionamento e a reprodutibilidade da configuração.

---

### Próximos Passos

- Realizar testes de stress para validar o comportamento do HPA em cenários reais.
- Explorar métricas customizadas e integrações avançadas para autoscaling.
