# Argo Rollouts (Canary & Blue-Green Deployments)

## Introdução

- Objetivo: apresentar as estratégias de Canary Deployment e Blue-Green Deployment no Kubernetes utilizando Argo Rollouts.
- Revisão: rolling update e recreate nativos do Kubernetes não suportam percentuais de tráfego ou ambientes paralelos dedicados.

---

## Conceitos de Deployment Gradual

- **Rolling Update**: substituição sequencial de Pods, mantendo disponibilidade mínima.
- **Recreate**: destrói todos os Pods antes de criar novos (downtime).
- **Canary Deployment**: libera um percentual do tráfego (ex.: 10%) para a versão nova e ajusta progressivamente.
- **Blue-Green Deployment**: mantém duas versões (A e B) em paralelo; testa a B isoladamente antes de redirecionar todo o tráfego.

---

## Preparando o cluster (Kind)

1. Crie arquivo de configuração `kind-config.yaml`:
   ```yaml
   apiVersion: kind.x-k8s.io/v1alpha4
   kind: Cluster
   metadata:
     name: canary-cluster
   nodes:
     - role: control-plane
     - role: worker
     - role: worker
   ```
2. Crie o cluster:
   ```bash
   kind create cluster --config kind-config.yaml
   ```

---

## Instalando Argo Rollouts

- Argo Rollouts é um CRD que adiciona funcionalidades de rollout avançado ao Kubernetes.
- Instale no namespace `argo-rollouts`:

```bash
kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f https://raw.githubusercontent.com/argoproj/argo-rollouts/stable/manifests/install.yaml
```

- Verifique CRDs e pods:
  ```bash
  kubectl get crds | grep rollouts
  kubectl get pods -n argo-rollouts
  ```

---

## Próximos passos

- Criar aplicação de exemplo com Dockerfile e manifest de Deployment no Kubernetes.
- Configurar recurso `Rollout` do Argo para controlar percentuais e estratégias.
- Comparar comportamentos entre Canary, Blue-Green e rolling update.

---

## Referências

- Argo Rollouts Quick Start: https://argoproj.github.io/argo-rollouts/
- Documentação Kubernetes Kind: https://kind.sigs.k8s.io/
