### Criando o Primeiro Namespace no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar um namespace no Kubernetes utilizando arquivos declarativos.
- **Contexto:** Explicar a importância dos namespaces para organização, boas práticas e portabilidade em clusters Kubernetes.

---

### O que é um Namespace?

- **Definição:** Namespace é uma divisão lógica dentro do cluster Kubernetes, utilizada para organizar e isolar recursos.
- **Persistência:** Namespaces existem em todos os nós do cluster, independentemente da quantidade de nodes.
- **Boas práticas:** Não utilizar o namespace default para aplicações; crie namespaces específicos para times, squads ou domínios de negócio.

---

### Por que usar Namespaces?

- **Organização:** Permite segmentar aplicações e recursos por contexto (ex: times, BUs, ambientes).
- **Escalabilidade:** Facilita o gerenciamento de múltiplas aplicações e equipes em um único cluster.
- **Portabilidade:** Utilizando arquivos declarativos, é possível recriar toda a estrutura de namespaces facilmente após reinstalar ou migrar o cluster.

---

### Passo a Passo para Criar um Namespace Declarativo

1. **Crie um arquivo YAML para o namespace**

   - Exemplo de conteúdo (`namespace.yaml`):
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: widget
     ```

2. **Aplique o arquivo declarativo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f namespace.yaml
     ```

3. **Verifique se o namespace foi criado**

   - Liste todos os namespaces:
     ```
     kubectl get namespaces
     ```
   - Ou utilize a abreviação:
     ```
     kubectl get ns
     ```

4. **(Opcional) Crie múltiplos namespaces em um único arquivo**

   - Basta adicionar mais blocos YAML no mesmo arquivo, separando-os por `---`.

5. **(Opcional) Remova um namespace**
   - Caso precise deletar:
     ```
     kubectl delete namespace widget
     ```

---

### Considerações e Boas Práticas

- **Evite criar recursos via linha de comando (imperativo); prefira arquivos declarativos para versionamento e reprodutibilidade.**
- **Organize os arquivos de configuração em pastas separadas para infra e aplicação.**
- **Ao recriar o cluster, basta reaplicar os arquivos YAML para restaurar os namespaces e recursos.**

---

### Resumo

- Namespaces são essenciais para organização e isolamento de recursos em clusters Kubernetes.
- O uso de arquivos declarativos garante portabilidade, rastreabilidade e facilidade de manutenção.

---

### Próximos Passos

- Implantar aplicações dentro do novo namespace criado.
- Explorar a criação de outros objetos (pods, deployments, services) utilizando o namespace como escopo.
