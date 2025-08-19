### HPA v2: Autoscaling Avançado no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como configurar o HPA v2 no Kubernetes, utilizando múltiplas métricas e personalização de comportamento de escalonamento.
- **Contexto:** Explicar as diferenças entre HPA v1 e v2, e como o HPA v2 permite maior flexibilidade e controle sobre o autoscaling.

---

### O que é o HPA v2?

- **Definição:** O HPA v2 (Horizontal Pod Autoscaler versão 2) é uma evolução do HPA, permitindo o uso de múltiplas métricas (CPU, memória, customizadas) e configuração de comportamento de escala.
- **Diferenciais:**
  - Suporte a métricas customizadas e múltiplos recursos.
  - Personalização do comportamento de scale up/down (behavior).
  - Maior controle sobre o ritmo e limites de escalonamento.

---

### Por que usar o HPA v2?

- **Flexibilidade:** Permite escalar aplicações com base em diferentes métricas, não apenas CPU.
- **Controle:** Possibilita definir regras detalhadas para o ritmo de crescimento ou redução de pods.
- **Eficiência:** Otimiza recursos e custos, ajustando o número de pods conforme a real necessidade.

---

### Passo a Passo para Configurar o HPA v2 com Múltiplas Métricas

1. **Remova o HPA anterior (se existir)**

   Execute no terminal:

   ```
   kubectl delete hpa widget-server-hpa -n widget
   ```

2. **Crie um arquivo YAML para o HPA v2**

   Exemplo de conteúdo (`hpa-v2.yaml`):

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
   ```

3. **Aplique o arquivo declarativo do HPA v2**

   Execute no terminal:

   ```
   kubectl apply -f hpa-v2.yaml
   ```

4. **Verifique o status do HPA v2**

   Liste os HPAs no namespace:

   ```
   kubectl get hpa -n widget
   ```

   Descreva para ver detalhes e métricas:

   ```
   kubectl describe hpa widget-server-hpa -n widget
   ```

5. **(Opcional) Ajuste os valores de utilização para testar o autoscaling**

   - Edite o arquivo YAML e altere os valores de `averageUtilization` para CPU ou memória.
   - Reaplique o arquivo:
     ```
     kubectl apply -f hpa-v2.yaml
     ```

6. **(Opcional) Personalize o comportamento de escalonamento (behavior)**

   - Adicione a seção `behavior` no YAML para definir limites e ritmo de scale up/down.
   - Exemplo:
     ```yaml
     behavior:
       scaleUp:
         stabilizationWindowSeconds: 60
         policies:
           - type: Percent
             value: 100
             periodSeconds: 60
       scaleDown:
         stabilizationWindowSeconds: 300
         policies:
           - type: Pods
             value: 4
             periodSeconds: 300
     ```

7. **(Opcional) Remova o HPA v2**

   ```
   kubectl delete hpa widget-server-hpa -n widget
   ```

---

### Considerações e Boas Práticas

- **Utilize múltiplas métricas para refletir o comportamento real da aplicação.**
- **Personalize o behavior para evitar oscilações abruptas de pods.**
- **Monitore o HPA e ajuste as configurações conforme o perfil de uso.**
- **Combine o HPA v2 com requests/limits de recursos nos pods para melhor controle.**

---

### Resumo

- O HPA v2 permite autoscaling avançado, utilizando múltiplas métricas e regras personalizadas.
- O uso de arquivos declarativos facilita o versionamento e a reprodutibilidade da configuração.

---

### Próximos Passos

- Explorar métricas customizadas e integração com ferramentas como KEDA.
- Testar o comportamento do HPA v2 em cenários reais de carga e stress.
