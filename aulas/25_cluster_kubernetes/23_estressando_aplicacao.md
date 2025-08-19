### Teste de Estresse na Aplicação Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como realizar um teste de estresse em uma aplicação rodando no Kubernetes, observando o comportamento do HPA (Horizontal Pod Autoscaler).
- **Contexto:** O teste de carga é fundamental para calibrar recursos, validar o autoscaling e garantir a resiliência da aplicação em cenários reais de alta demanda.

---

### O que é um Teste de Estresse?

- **Definição:** Teste de estresse consiste em simular um grande volume de requisições para avaliar como a aplicação e o cluster reagem sob alta carga.
- **Ferramentas:** Existem diversas ferramentas para esse fim, como Vegeta, Locust, K6 e Fortio. Neste exemplo, utilizaremos o Fortio rodando como pod no cluster.

---

### Por que Realizar Testes de Estresse?

- **Calibração:** Permite ajustar requests/limits de CPU e memória, além de calibrar o HPA para cenários reais.
- **Validação:** Garante que o autoscaling está funcionando corretamente e que a aplicação suporta picos de tráfego.
- **Observabilidade:** Facilita a análise de métricas e comportamento dos pods durante o teste.

---

### Passo a Passo para Executar o Teste de Estresse

1. **Ajuste os recursos do Deployment e HPA**

   - Reduza as réplicas e os limites de CPU/memória para facilitar a observação do autoscaling.
   - Exemplo de ajuste:
     ```yaml
     replicas: 2
     resources:
       requests:
         cpu: '100m'
         memory: '128Mi'
       limits:
         cpu: '200m'
         memory: '256Mi'
     ```
   - Configure o HPA para escalar a partir de 2 réplicas e thresholds de 60%:
     ```yaml
     minReplicas: 2
     maxReplicas: 10
     metrics:
       - type: Resource
         resource:
           name: cpu
           target:
             type: Utilization
             averageUtilization: 60
       - type: Resource
         resource:
           name: memory
           target:
             type: Utilization
             averageUtilization: 60
     ```

2. **Aplique as configurações no cluster**

   - Execute:
     ```sh
     kubectl apply -f deployment.yaml
     kubectl apply -f hpa.yaml
     ```

3. **Verifique se os pods e HPA estão ativos**

   - Execute:
     ```sh
     kubectl get pods -n widget
     kubectl get hpa -n widget
     ```

4. **Execute o teste de estresse com Fortio**

   - Utilize o comando abaixo para rodar o Fortio como pod temporário:
     ```sh
     kubectl run fortio --rm -it --image=fortio/fortio:latest -n widget -- fortio load -c 20 -qps 5000 -t 60s http://<service-name>.<namespace>.svc.cluster.local/<endpoint>
     ```
   - Substitua `<service-name>`, `<namespace>` e `<endpoint>` conforme sua aplicação (exemplo: `widget-server.widget.svc.cluster.local/real`).

5. **Acompanhe o comportamento do HPA e dos pods**

   - Em outro terminal, monitore em tempo real:
     ```sh
     watch kubectl get pods -n widget
     watch kubectl get hpa -n widget
     ```

6. **Analise os resultados**
   - Observe o aumento de pods, uso de CPU/memória e o tempo de resposta durante o teste.
   - O Fortio exibirá estatísticas como total de requisições, latência média, percentis e erros.

---

### Considerações e Boas Práticas

- **Prefira rodar testes de estresse em ambientes de homologação ou desenvolvimento.**
- **Utilize pods temporários para não poluir o cluster.**
- **Ajuste os thresholds do HPA conforme o comportamento observado.**
- **Documente os resultados para futuras calibrações.**

---

### Resumo

- O teste de estresse é essencial para validar o autoscaling e a resiliência da aplicação.
- Ferramentas como Fortio permitem simular cenários reais e coletar métricas detalhadas.
- O HPA deve ser ajustado conforme os resultados obtidos.

---

### Próximos Passos

- Testar diferentes cenários de carga e thresholds do HPA.
- Explorar outras ferramentas de teste de carga (K6, Locust, Vegeta).
- Integrar testes de estresse ao pipeline de CI/CD para validação contínua.
