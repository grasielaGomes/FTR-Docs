### Objetos do Kubernetes nos Worker Nodes

#### Introdução

- **Objetivo:** Apresentar os principais objetos que podem ser utilizados dentro de um nó de trabalho (worker node) no Kubernetes.
- **Contexto:** Entender como a API do Kubernetes permite a criação e gerenciamento desses objetos, e a importância de boas práticas como o uso de manifestos declarativos.

---

### Estrutura dos Worker Nodes e Interação com a API

- **Separação de funções:** Control Plane gerencia, worker node executa aplicações.
- **Interface com a API:** Todos os objetos são criados e gerenciados via API do Kubernetes (kube-apiserver).
- **Boas práticas:** Utilizar manifestos declarativos (YAML) para criar recursos, garantindo rastreabilidade e padronização.

---

### Camada de Workload: Principais Objetos

- **Pod:**
  - Menor unidade de execução no Kubernetes.
  - Responsável por rodar containers.
  - Recebe IP interno do cluster.
  - Pode ser criado de forma imperativa, mas o recomendado é via manifesto declarativo.
- **ReplicaSet:**
  - Controla a quantidade de pods em execução.
  - Garante que o número desejado de réplicas esteja sempre disponível.
- **Deployment:**
  - Gerencia versões da aplicação (tags de container).
  - Permite atualizações e rollback de versões.
  - Hierarquia: Deployment → ReplicaSet → Pod.
- **StatefulSet:**
  - Indicado para aplicações com estado (ex: bancos de dados, Kafka).
  - Garante identidade e persistência dos pods.
- **Horizontal Pod Autoscaler (HPA):**
  - Escala automaticamente o número de pods com base em métricas.
- **ConfigMap e Secret:**
  - Armazenam configurações e segredos utilizados pelos pods.

---

### Camada de Rede

- **Service:**
  - Exponibiliza pods para acesso interno ou externo.
  - Faz o balanceamento de carga entre réplicas.
- **Ingress:**
  - Gerencia o acesso HTTP/HTTPS externo ao cluster.
- **Gateway (CRD):**
  - Solução moderna para gerenciamento de tráfego.
- **Endpoints:**
  - Representam os IPs dos pods associados a um service.

---

### Camada de Storage

- **PersistentVolume (PV):**
  - Recurso de volume persistente no cluster.
- **PersistentVolumeClaim (PVC):**
  - Solicitação de uso de um volume persistente por um pod.
- **Configuração de volumes:**
  - Necessária para aplicações stateful.

---

### Considerações e Boas Práticas

- **Manifestos declarativos:**
  - Utilizar YAMLs para criar e gerenciar objetos.
  - Facilita versionamento e automação.
- **Separação de ambientes:**
  - Aplicar recursos sempre nos worker nodes, não no control plane.
- **Complexidade:**
  - Kubernetes oferece muitos objetos e opções, exigindo entendimento teórico antes da prática.

---

### Resumo

- Os worker nodes hospedam diversos objetos essenciais para execução, configuração, rede e armazenamento das aplicações.
- O uso correto desses objetos garante resiliência, escalabilidade e flexibilidade no cluster Kubernetes.

---

### Próximos Passos

- Explorar a API do Kubernetes e entender como instalar e operar um cluster na prática.
- Criar e testar pods e outros objetos em exemplos reais.
