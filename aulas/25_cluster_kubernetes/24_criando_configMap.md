### Criando um ConfigMap no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar e utilizar um ConfigMap no Kubernetes para armazenar variáveis de ambiente não sensíveis.
- **Contexto:** Explicar a importância do ConfigMap para separar configurações da aplicação, facilitando a manutenção e portabilidade.

---

### O que é um ConfigMap?

- **Definição:** ConfigMap é um objeto do Kubernetes utilizado para armazenar dados de configuração não sensíveis, como variáveis de ambiente, URLs, endpoints, etc.
- **Uso recomendado:** Informações que não são segredos, como endpoints, nomes de buckets, URLs públicas, devem ser armazenadas em ConfigMaps.
- **Diferença para Secret:** Dados sensíveis (senhas, API keys, tokens) devem ser armazenados em objetos do tipo Secret, não em ConfigMap.

---

### Por que usar ConfigMap?

- **Organização:** Permite separar configurações do código da aplicação, facilitando alterações sem necessidade de novo build.
- **Escalabilidade:** Facilita o gerenciamento de múltiplas configurações para diferentes ambientes (staging, produção, etc).
- **Portabilidade:** Utilizando arquivos declarativos, é possível versionar e reaplicar configurações facilmente.

---

### Passo a Passo para Criar e Utilizar um ConfigMap

1. **Crie um arquivo YAML para o ConfigMap**

   - Exemplo de conteúdo (`configmap.yaml`):
     ```yaml
     apiVersion: v1
     kind: ConfigMap
     metadata:
       name: widget-server-cm
       namespace: widget
     data:
       BUCKET: 'meu-bucket'
       PUBLIC_URL: 'https://localhost:8080'
     ```

2. **Aplique o arquivo declarativo no cluster**

   - Execute no terminal:
     ```
     kubectl apply -f configmap.yaml
     ```

3. **Verifique se o ConfigMap foi criado**

   - Liste todos os ConfigMaps no namespace:
     ```
     kubectl get configmap -n widget
     ```
   - Ou utilize a abreviação:
     ```
     kubectl get cm -n widget
     ```

4. **Descreva o ConfigMap para visualizar os dados**

   - Execute:
     ```
     kubectl describe configmap widget-server-cm -n widget
     ```

5. **(Opcional) Atualize o ConfigMap**

   - Edite o arquivo YAML e reaplique com `kubectl apply -f configmap.yaml`.

6. **(Opcional) Remova o ConfigMap**
   - Caso precise deletar:
     ```
     kubectl delete configmap widget-server-cm -n widget
     ```

---

### Considerações e Boas Práticas

- **Não armazene dados sensíveis em ConfigMap.** Use o objeto Secret para informações confidenciais.
- **Prefira arquivos declarativos para versionamento e reprodutibilidade.**
- **Organize os arquivos de configuração em pastas separadas para infra e aplicação.**
- **Ao recriar o cluster, basta reaplicar os arquivos YAML para restaurar as configurações.**

---

### Resumo

- ConfigMap é essencial para separar configurações não sensíveis do código da aplicação.
- O uso de arquivos declarativos garante portabilidade, rastreabilidade e facilidade de manutenção.

---

### Próximos Passos

- Aprender como referenciar variáveis do ConfigMap em Deployments e Pods.
- Explorar o uso de objetos Secret para dados sensíveis.
