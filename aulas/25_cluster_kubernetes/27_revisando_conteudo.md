### Revisão dos Principais Conceitos de Kubernetes

#### Introdução

- **Objetivo:** Revisar os principais conceitos abordados no módulo de Kubernetes, consolidando o aprendizado e destacando boas práticas para desenvolvedores.
- **Contexto:** Foco em aplicações stateless, recursos essenciais e práticas recomendadas para uso em clusters reais.

---

### Visão Geral do Cluster Kubernetes

- **Componentes:**
  - Control Plane (ETCD, Kubelet, Scheduler, Controller Manager)
  - Nós de trabalho (Workers)
- **Ferramentas para ambiente local:**
  - Kind (recomendado)
  - Rancher, K3D, K3S, Minikube
- **Dica:** Teste diferentes ferramentas para criar clusters locais e entender suas diferenças.

---

### Recursos Fundamentais

- **Pod:** Unidade básica de execução de containers.
- **ReplicaSet:** Controla o número de réplicas de pods.
- **Deployment:** Gerencia versões e atualizações dos pods.
- **Service:** Exposição e balanceamento de acesso aos pods.
- **ConfigMap e Secret:** Gerenciamento de configurações e dados sensíveis.

---

### Passo a Passo para Implantar uma Aplicação no Cluster

1. **Crie o Namespace**

   - Exemplo de arquivo (`namespace.yaml`):
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: minha-app
     ```
   - Comando:
     ```
     kubectl apply -f namespace.yaml
     ```

2. **Crie o Deployment**

   - Exemplo de arquivo (`deployment.yaml`):
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: minha-app
       namespace: minha-app
     spec:
       replicas: 2
       selector:
         matchLabels:
           app: minha-app
       template:
         metadata:
           labels:
             app: minha-app
         spec:
           containers:
             - name: minha-app
               image: minha-imagem:latest
               ports:
                 - containerPort: 80
     ```
   - Comando:
     ```
     kubectl apply -f deployment.yaml
     ```

3. **Crie o Service**

   - Exemplo de arquivo (`service.yaml`):
     ```yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: minha-app-service
       namespace: minha-app
     spec:
       selector:
         app: minha-app
       ports:
         - protocol: TCP
           port: 80
           targetPort: 80
       type: ClusterIP
     ```
   - Comando:
     ```
     kubectl apply -f service.yaml
     ```

4. **ConfigMap e Secret (opcional)**

   - Crie arquivos para configurações e dados sensíveis conforme necessidade.
   - Comando:
     ```
     kubectl apply -f configmap.yaml
     kubectl apply -f secret.yaml
     ```

5. **Escalabilidade e Testes**
   - Configure o HPA (Horizontal Pod Autoscaler) e o Metrics Server para escalabilidade automática.
   - Realize testes de stress para validar o comportamento da aplicação.

---

### Boas Práticas e Recomendações

- Prefira arquivos declarativos (YAML) para versionamento e reprodutibilidade.
- Organize os arquivos em pastas separadas por ambiente e recurso.
- Utilize namespaces para isolar aplicações e facilitar o gerenciamento.
- Sempre teste configurações em ambiente local antes de subir para produção.
- Explore recursos avançados conforme necessidade: Ingress, LoadBalancer, RBAC, Volumes Persistentes.

---

### Resumo

- O módulo abordou os principais recursos para rodar aplicações stateless em Kubernetes.
- O foco foi em práticas essenciais para desenvolvedores, facilitando o deploy, escalabilidade e gerenciamento.
- Para se aprofundar, explore temas como volumes persistentes, RBAC, StatefulSets e DemonSets.

---

### Próximos Passos

- Aprofunde-se em recursos avançados do Kubernetes conforme sua necessidade.
- Pratique o deploy de aplicações reais e monitore o comportamento dos recursos.
- Utilize as dicas de debug e produtividade para acompanhar aplicações em produção.
