### Interfaces e Extensibilidade no Kubernetes

#### Introdução

- **Objetivo:** Compreender como o Kubernetes utiliza interfaces para integração com diferentes runtimes, redes e sistemas de armazenamento.
- **Contexto:** Explorar a importância das interfaces (CRI, CNI, CSI) e a flexibilidade do Kubernetes para diferentes cenários e necessidades.

---

### Execução de Containers no Kubernetes

- **Necessidade de Containerização:** Apenas aplicações containerizadas podem ser orquestradas pelo Kubernetes.
- **Imagens Stateless:** Por padrão, as imagens de container são stateless (sem estado), mas o Kubernetes também suporta aplicações stateful.
- **Runtimes de Container:**
  - Exemplos: containerd (padrão), runc (baixo nível), CRI-O (específico para Kubernetes).
  - Todos os runtimes devem implementar a especificação OCI (Open Container Initiative).

---

### Abstração via Interfaces

- **Container Runtime Interface (CRI):**
  - O Kubernetes não se importa com o runtime específico, desde que ele implemente a CRI.
  - Permite flexibilidade e integração com diferentes runtimes.
  - Histórico: Antigamente, o Kubernetes dependia do Docker-shim para integração, mas hoje utiliza a CRI diretamente.
- **Container Network Interface (CNI):**
  - Abstrai a configuração de rede dos containers.
  - Permite uso de diferentes plugins de rede (ex: Calico, Weave, Azure CNI).
  - Kubernetes não possui plugin próprio, utiliza qualquer solução compatível com CNI.
- **Container Storage Interface (CSI):**
  - Abstrai a integração com sistemas de armazenamento.
  - Permite uso de diferentes soluções de storage (ex: EBS, Azure Disk, NFS).
  - Facilita a persistência de dados em aplicações stateful.

---

### Extensibilidade com CRDs

- **Custom Resource Definitions (CRDs):**
  - Permitem estender a API nativa do Kubernetes.
  - Usados para criar recursos customizados e integrar novas funcionalidades ao cluster.
  - Muitas ferramentas utilizam CRDs para ampliar as capacidades do Kubernetes.

---

### Resumo das Interfaces e Extensibilidade

- **Três principais interfaces:**
  - CRI (execução/workload)
  - CNI (rede)
  - CSI (armazenamento/volume)
- **Extensibilidade:**
  - Possível criar plugins e recursos customizados via CRDs.
  - Kubernetes é altamente flexível e adaptável a diferentes cenários.

---

### Próximos Passos

- **Explorar a anatomia de um cluster Kubernetes.**
- **Conhecer recursos e estruturas práticas do Kubernetes.**
