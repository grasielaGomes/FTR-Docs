### Executando o Primeiro Pod no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como executar o primeiro pod de uma aplicação em um cluster Kubernetes utilizando arquivos declarativos.
- **Contexto:** Explorar boas práticas de organização de arquivos, uso de namespaces e execução de pods via YAML.

---

### O que é um Pod?

- **Definição:** O pod é a menor unidade de execução do Kubernetes, responsável por rodar um ou mais containers.
- **Isolamento:** Cada aplicação deve rodar em seu próprio pod, garantindo isolamento e boas práticas de infraestrutura.
- **Boas práticas:** Evite rodar múltiplas aplicações diferentes no mesmo pod; utilize pods distintos para cada aplicação.

---

### Organização dos Arquivos de Configuração

- **Estrutura recomendada:** Crie uma pasta `k8s` dentro do diretório da aplicação para armazenar os arquivos YAML do Kubernetes.
- **Escalabilidade:** Em ambientes grandes, utilize templates e centralize os YAMLs na infraestrutura para facilitar manutenção e padronização.

---

### Passo a Passo para Executar o Primeiro Pod

1. **Crie a pasta de configuração do Kubernetes na aplicação**

```markdown
### Executando o Primeiro Pod no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como executar o primeiro pod de uma aplicação em um cluster Kubernetes utilizando arquivos declarativos.
- **Contexto:** Explorar boas práticas de organização de arquivos, uso de namespaces e execução de pods via YAML.

---

### O que é um Pod?

- **Definição:** O pod é a menor unidade de execução do Kubernetes, responsável por rodar um ou mais containers.
- **Isolamento:** Cada aplicação deve rodar em seu próprio pod, garantindo isolamento e boas práticas de infraestrutura.
- **Boas práticas:** Evite rodar múltiplas aplicações diferentes no mesmo pod; utilize pods distintos para cada aplicação.

---

### Organização dos Arquivos de Configuração

- **Estrutura recomendada:** Crie uma pasta `k8s` dentro do diretório da aplicação para armazenar os arquivos YAML do Kubernetes.
- **Escalabilidade:** Em ambientes grandes, utilize templates e centralize os YAMLs na infraestrutura para facilitar manutenção e padronização.

---

### Passo a Passo para Executar o Primeiro Pod

1. **Crie a pasta de configuração do Kubernetes na aplicação**

mkdir -p k8s
```

2. **Crie o arquivo YAML do pod**

- Exemplo de conteúdo (`k8s/pod.yaml`):
  ```yaml
  apiVersion: v1
  kind: Pod
  metadata:
    name: widget-server
    namespace: widget
  spec:
    containers:
      - name: widget-server
        image: danielrodrigues/widget-server:<TAG_DA_IMAGEM>
        ports:
          - containerPort: 3333
  ```
- Substitua `<TAG_DA_IMAGEM>` pela tag correta da imagem do container.

3. **Aplique o arquivo YAML no cluster**

```

kubectl apply -f k8s/pod.yaml

```

4. **Verifique se o pod foi criado no namespace correto**

```

kubectl get pods -n widget

```

5. **(Opcional) Caso o pod não apareça, verifique no namespace default**

```

kubectl get pods

```

6. **(Opcional) Para deletar o pod**

```

kubectl delete -f k8s/pod.yaml

```

7. **Verifique os logs do pod para identificar possíveis erros**

```

kubectl logs <nome-do-pod> -n widget

```

---

### Considerações e Boas Práticas

- **Sempre utilize arquivos declarativos (YAML) para criar recursos no Kubernetes.**
- **Inclua o campo `namespace` no metadata para garantir que o recurso seja criado no namespace correto.**
- **Evite utilizar a tag `latest` em imagens de produção; sempre especifique a tag da versão.**
- **Mantenha os arquivos de configuração organizados próximos à aplicação ou em repositórios centralizados para ambientes maiores.**

---

### Resumo

- O pod é a menor unidade de execução no Kubernetes e deve ser criado via arquivos declarativos.
- A organização dos arquivos e o uso correto de namespaces são fundamentais para ambientes escaláveis e manuteníveis.
- Verifique sempre os logs do pod para identificar e corrigir possíveis erros de configuração ou execução.

---

### Próximos Passos

- Corrigir eventuais erros de variáveis de ambiente ou configuração no pod.
- Explorar a criação de outros objetos (Deployments, Services) para evoluir a aplicação no cluster Kubernetes.
