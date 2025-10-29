### Deployando Aplicação com Argo Rollouts: Blue-Green Deployment

#### 1. Verifique os CRDs Instalados

- Após instalar o Argo Rollouts, confira os CRDs no cluster:
  ```sh
  kubectl get crds
  ```
- No Lens, acesse "Custom Resources" para visualizar as APIs instaladas.

#### 2. Entenda a Estrutura das APIs

- As APIs do Argo Rollouts usam a versão `argoproj.io/v1alpha1` e o tipo `Rollout`.
- Outros tipos disponíveis: AnalysisRun, AnalysisTemplate, ClusterAnalysisTemplate, Experiment.

#### 3. Prepare o Manifesto da Aplicação

- Utilize o manifesto existente do deployment (exemplo: FTR Upload Widget Server).
- O deployment padrão usa `apiVersion: apps/v1` e `kind: Deployment`.

#### 4. Adapte o Manifesto para Argo Rollouts

- Altere para `apiVersion: argoproj.io/v1alpha1` e `kind: Rollout`.
- Certifique-se de que o CRD do Argo Rollouts está instalado no cluster.

#### 5. Configure a Estratégia Blue-Green

- Comente ou remova a estratégia de `RollingUpdate`.
- Adicione a estratégia `blueGreen` no manifesto:
  ```yaml
  strategy:
    blueGreen:
      activeService: widget-server-svc
      previewService: widget-server-svc-preview
      autoPromotionEnabled: false
  ```
- Crie dois serviços: um ativo (`widget-server-svc`) e um preview (`widget-server-svc-preview`).

#### 6. Controle de Revisões

- Defina o limite de revisões para rollback:
  ```yaml
  revisionHistoryLimit: 5
  ```

#### 7. Aplique os Manifestos no Cluster

- Crie o namespace:
  ```sh
  kubectl create namespace widget
  ```
- Aplique ConfigMap, Secret e Service:
  ```sh
  kubectl apply -n widget -f configmap.yaml
  kubectl apply -n widget -f secret.yaml
  kubectl apply -n widget -f service.yaml
  ```
- Aplique o manifesto do Rollout:
  ```sh
  kubectl apply -n widget -f rollout.yaml
  ```

#### 8. Valide o Deploy

- Use o Lens ou comandos kubectl para verificar pods, replica sets e rollouts.
- Se houver erro, confira os campos obrigatórios do manifesto.

#### 9. Teste a Promoção Blue-Green

- Utilize o dashboard do Argo Rollouts:
  ```sh
  kubectl argo rollouts dashboard
  ```
- Acesse o dashboard em `localhost:3100` para promover versões manualmente.
- Também é possível promover via linha de comando:
  ```sh
  kubectl argo rollouts promote <rollout-name> -n widget
  ```

#### 10. Boas Práticas

- Centralize o controle de promoções em dashboards ou ferramentas integradas.
- Evite promover versões diretamente via linha de comando por questões de segurança.

#### 11. Considerações Finais

- O Argo Rollouts substitui o deployment padrão pelo recurso Rollout.
- Blue-Green permite testes seguros antes de promover novas versões.
- Na próxima aula: criação de novas versões e introdução ao Canary Deployment.

---
