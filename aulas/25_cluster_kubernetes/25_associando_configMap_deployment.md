### Associando ConfigMap ao Deployment no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como associar variáveis de ambiente de um ConfigMap a um Deployment no Kubernetes.
- **Contexto:** Separar configurações da aplicação, facilitando versionamento, reprodutibilidade e escalabilidade.

---

### O que é um ConfigMap?

- **Definição:** Objeto do Kubernetes usado para armazenar dados de configuração não sensíveis em formato chave-valor.
- **Utilização:** Permite desacoplar configurações do código da aplicação, tornando o ambiente mais flexível.

---

### Por que associar ConfigMap ao Deployment?

- **Organização:** Centraliza configurações, facilitando alterações sem necessidade de modificar o código.
- **Escalabilidade:** Permite atualizar variáveis de ambiente em múltiplos pods de forma simples.
- **Boas práticas:** Evite hardcode de variáveis no Deployment; utilize ConfigMap para facilitar automação e versionamento.

---

### Passo a Passo para Associar ConfigMap ao Deployment

1. **Crie o ConfigMap**

   - Exemplo de arquivo `configmap.yaml`:
     ```yaml
     apiVersion: v1
     kind: ConfigMap
     metadata:
       name: widget-server-cm
     data:
       CLOUDFLARE_BUCKET: 'meu-bucket'
       CLOUDFLARE_PUBLIC_URL: 'https://meu-bucket.r2.cloudflarestorage.com'
     ```
   - Aplique o ConfigMap:
     ```
     kubectl apply -f configmap.yaml
     ```

2. **Referencie o ConfigMap no Deployment**

   - Exemplo de trecho do arquivo `deployment.yaml`:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: widget-server
     spec:
       template:
         spec:
           containers:
             - name: app
               image: sua-imagem:tag
               env:
                 - name: CLOUDFLARE_BUCKET
                   valueFrom:
                     configMapKeyRef:
                       name: widget-server-cm
                       key: CLOUDFLARE_BUCKET
                 - name: CLOUDFLARE_PUBLIC_URL
                   valueFrom:
                     configMapKeyRef:
                       name: widget-server-cm
                       key: CLOUDFLARE_PUBLIC_URL
     ```
   - Aplique o Deployment:
     ```
     kubectl apply -f deployment.yaml
     ```

3. **(Alternativa) Injetar todas as variáveis do ConfigMap**

   - Para injetar todas as chaves do ConfigMap como variáveis de ambiente:
     ```yaml
     envFrom:
       - configMapRef:
           name: widget-server-cm
     ```
   - Isso evita a necessidade de declarar cada variável individualmente.

4. **Verifique se as variáveis foram aplicadas**

   - Liste os pods:
     ```
     kubectl get pods -n widget
     ```
   - Descreva o pod para conferir as variáveis:
     ```
     kubectl describe pod <nome-do-pod> -n widget
     ```

5. **Atualize o ConfigMap (se necessário)**
   - Edite o arquivo e reaplique:
     ```
     kubectl apply -f configmap.yaml
     kubectl rollout restart deployment widget-server -n widget
     ```

---

### Considerações e Boas Práticas

- Prefira arquivos declarativos para versionamento e reprodutibilidade.
- Organize os arquivos de configuração em pastas separadas para infra e aplicação.
- Utilize automação (CI/CD) para atualizar ConfigMaps e Deployments.
- Evite expor dados sensíveis em ConfigMap; para informações sensíveis, utilize Secrets.

---

### Resumo

- Associar ConfigMap ao Deployment permite separar configurações do código, facilitando manutenção e escalabilidade.
- O uso de arquivos declarativos garante rastreabilidade e portabilidade.

---

### Próximos Passos

- Explorar o uso de Secrets para variáveis sensíveis.
- Automatizar a criação e atualização de ConfigMaps via pipeline.
