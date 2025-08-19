### **Quiz - Orquestração de Containers com Kubernetes**

1. **Qual problema principal o Kubernetes foi criado para resolver?**

   **Resposta correta:** Problemas de escala e orquestração de containers

2. **O que é o Control Plane no Kubernetes?**

   **Resposta correta:** O cérebro do cluster que gerencia e garante o estado desejado

3. **Qual é o papel do namespace no Kubernetes?**

   **Resposta correta:** Separação lógica de recursos para organização

4. **Qual é a principal característica que diferencia o Kubernetes de outras soluções de orquestração como o ECS?**

   **Resposta correta:** O Kubernetes é open source e agnóstico a provedores de cloud

5. **Qual componente roda em cada nó worker e é responsável pela comunicação com o Control Plane?**

   **Resposta correta:** kubelet

6. **Qual é a boa prática recomendada para criar recursos no Kubernetes?**

   **Resposta correta:** Usar manifestos declarativos em YAML

7. **Qual componente do Control Plane é responsável por agendar e alocar pods nos nós do cluster?**

   **Resposta correta:** kube-scheduler

8. **No behavior do HPA v2, o que faz a configuração stabilizationWindow?**

   **Resposta correta:** Estabelece o tempo de espera antes de iniciar o processo de scale up ou scale down

9. **Como um Service do Kubernetes identifica quais Pods deve incluir em seus endpoints?**

   **Resposta correta:** Através de labels e seletores

10. **Qual componente é necessário instalar no cluster para que o HPA funcione corretamente?**

    **Resposta correta:** Metrics Server

11. **Qual é a hierarquia correta dos objetos Kubernetes, do mais alto nível para o mais baixo nível?**

    **Resposta correta:** Deployment → ReplicaSet → Pod

12. **Por que não é recomendado usar o namespace default para deployar aplicações em produção no Kubernetes?**

    **Resposta correta:** O namespace default não permite identificar facilmente qual time ou aplicação possui os recursos

13. **Qual é a diferença entre "requests" e "limits" na configuração de resources de um container?**

    **Resposta correta:** Requests é o valor alocado para o container, limits é o máximo que ele pode usar

14. **Qual a principal diferença entre as estratégias de deploy "Recreate" e "Rolling Update"?**

    **Resposta correta:** Recreate deleta todos os pods de uma vez; Rolling Update substitui pods gradualmente

15. **Qual é a diferença entre StartupProbe, ReadinessProbe e LivenessProbe?**

    **Resposta correta:** StartupProbe verifica se o container subiu, ReadinessProbe verifica se está pronto para receber tráfego, LivenessProbe verifica se está funcionando

16. **O que é o Kind?**

    **Resposta correta:** Uma ferramenta para executar Kubernetes localmente usando containers Docker

17. **Quais são as três principais interfaces (APIs) que o Kubernetes utiliza para abstrair diferentes componentes?**

    **Resposta correta:** CRI, CNI e CSI

18. **Qual é a menor unidade de execução no Kubernetes?**

    **Resposta correta:** Pod

19. **Qual é a diferença entre um Pod e um Deployment?**

    **Resposta correta:** Pod é a menor unidade sem controle, Deployment controla versão e réplicas

20. **O que é o kubectl?**

    **Resposta correta:** Uma ferramenta de linha de comando para interagir com clusters Kubernetes

21. **Qual é a principal diferença entre escala horizontal e escala vertical no Kubernetes?**

    **Resposta correta:** Escala horizontal aumenta o número de réplicas, escala vertical aumenta os recursos computacionais de cada pod

22. **Qual é a principal diferença entre ConfigMap e Secret no Kubernetes?**

    **Resposta correta:** ConfigMap é para dados não sensíveis, Secret para dados sensíveis codificados em base64
