# Criando Deployment e Service (Aplicação de Exemplo)

## Introdução

- Objetivo: criar manifestos Kubernetes para realizar o deploy de uma aplicação de exemplo e expô-la via Service.
- Demonstraremos o manifesto `Deployment` e `Service`, além da transição futura para um recurso Argo Rollouts (`Rollout`).

---

## Aplicação de Exemplo

- Boilerplate Nest.js disponível no Docker Hub: `grasielagomes/apk8s:latest`.
- Contém apenas a estrutura mínima para testes de deploy.

---

## Deployment (deployment.yaml)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: apk8s
spec:
  replicas: 5
  selector:
    matchLabels:
      app: apk8s
  template:
    metadata:
      labels:
        app: apk8s
    spec:
      containers:
        - name: apk8s
          image: grasielagomes/apk8s:latest
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: '100m'
              memory: '128Mi'
            limits:
              cpu: '200m'
              memory: '256Mi'
```

---

## Service (service.yaml)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: apk8s-svc
spec:
  type: ClusterIP
  selector:
    app: apk8s
  ports:
    - port: 80
      targetPort: 3000
```

---

## Aplicando no cluster

```bash
kubectl create namespace app
kubectl apply -f k8s/deployment.yaml -n app
kubectl apply -f k8s/service.yaml    -n app
```

- Verifique status de pods e serviços:
  ```bash
  kubectl get pods -n app
  kubectl get svc  -n app
  ```

---

## Transição para Argo Rollouts

- Para usar `Rollout`, altere em `deployment.yaml`:
  - `apiVersion` → `argoproj.io/v1alpha1`
  - `kind: Deployment` → `kind: Rollout`
- Mantenha o restante da spec e adicione a seção `strategy.canary` ou `strategy.blueGreen`.

---

## Próximos passos

- Definir recursos `Rollout` com estratégia Canary para testes graduais de deploy.
- Explorar Blue-Green deployments e hooks de saúde.
- Integrar pipelines CI/CD para automação de rollouts.

---

## Referências

- Argo Rollouts Quick Start: https://argoproj.github.io/argo-rollouts/
- Kubernetes Deployment: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
- Kubernetes Service: https://kubernetes.io/docs/concepts/services-networking/service/
