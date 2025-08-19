### Modificando o Cluster Local com Kind

#### Introdução

- **Objetivo:** Demonstrar como modificar a configuração do cluster local criado com Kind, utilizando arquivos declarativos e boas práticas.
- **Contexto:** Explorar a criação de clusters com múltiplos nodes (control plane e workers), uso de arquivos YAML e comandos essenciais para gerenciamento do ambiente.

---

### Visualizando o Cluster com Docker

- **Comando:** `docker ps` permite visualizar os containers do Kind em execução.
- **Observação:** Inicialmente, com apenas o control plane, há somente um container rodando.

---

### Deletando o Cluster Existente

- **Comando:**
  ```
  kind delete cluster
  ```
- **Dica:** Se houver múltiplos clusters, utilize o parâmetro `--name` para especificar qual cluster deletar.

---

### Utilizando Arquivos Declarativos para Criar o Cluster

- **Boas práticas:** Sempre utilize arquivos declarativos (YAML) para criar e gerenciar clusters, facilitando reuso e versionamento.
- **Exemplo de manifesto YAML para Kind:**
  ```yaml
  apiVersion: kind.x-k8s.io/v1alpha4
  kind: Cluster
  name: ftr-k8s
  nodes:
    - role: control-plane
    - role: worker
    - role: worker
  ```
- **Estrutura:** O manifesto define um cluster com um control plane e dois worker nodes.

---

### Passo a Passo para Modificar e Criar o Cluster

1. **Deletar o cluster atual (se existir)**

   ```
   kind delete cluster --name ftr-k8s
   ```

2. **Criar a estrutura de diretórios**

   ```
   mkdir -p infra
   ```

3. **Criar o arquivo de configuração do Kind**

   - Salve o conteúdo YAML acima em `infra/kind.yaml`.

4. **Criar o cluster com o arquivo declarativo**

   ```
   kind create cluster --config infra/kind.yaml
   ```

5. **Verificar os nodes do cluster**

   ```
   kubectl get nodes
   ```

6. **Verificar os pods em todos os namespaces**

   ```
   kubectl get pods --all-namespaces
   ```

7. **Verificar o contexto do kubeconfig**
   ```
   kubectl config get-contexts
   ```

---

### Trabalhando com Namespaces

- **Definição:** Namespaces são divisões lógicas dentro do cluster para organizar recursos.
- **Comando para listar pods em um namespace específico:**
  ```
  kubectl get pods -n <nome-do-namespace>
  ```
- **Exemplo:**
  ```
  kubectl get pods -n kube-system
  ```

---

### Considerações e Boas Práticas

- **Evite rodar workloads no namespace default.**
- **Sempre utilize arquivos declarativos para criar e modificar clusters e recursos.**
- **Separe control plane e worker nodes para garantir resiliência e boas práticas.**

---

### Resumo

- Utilizando arquivos YAML, é possível criar clusters Kind com múltiplos nodes de forma reprodutível.
- O uso de namespaces e a separação de funções entre control plane e workers são fundamentais para ambientes organizados e resilientes.

---

### Próximos Passos

- Iniciar a execução de aplicações no cluster modificado.
- Explorar a criação de namespaces e a aplicação de manifestos em diferentes contextos.
