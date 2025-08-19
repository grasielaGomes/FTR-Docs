### Criando o Primeiro Service no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar um Service no Kubernetes para expor aplicações e garantir o acesso aos pods de forma estável e padronizada.
- **Contexto:** Explicar a importância do Service para o roteamento de tráfego, balanceamento de carga e isolamento de rede dentro do cluster.

---

### O que é um Service?

- **Definição:** Service é um recurso do Kubernetes responsável por expor um ou mais pods, criando um ponto de acesso estável (IP e DNS) e realizando o balanceamento de carga entre eles.
- **Persistência:** O Service mantém um endereço fixo, mesmo que os pods por trás dele sejam recriados.
- **Tipos de Service:**
  - **ClusterIP:** (padrão) expõe o serviço internamente no cluster.
  - **NodePort:** expõe o serviço em uma porta específica de cada nó do cluster.
  - **LoadBalancer:** expõe o serviço externamente, utilizando um balanceador de carga da nuvem.
  - **ExternalName:** mapeia o serviço para um nome DNS externo.

---

### Por que usar um Service?

- **Acesso estável:** Permite acessar aplicações sem se preocupar com o IP dinâmico dos pods.
- **Balanceamento de carga:** Distribui as requisições entre os pods disponíveis.
- **Isolamento e segurança:** Controla o escopo de exposição da aplicação (interno, externo, etc).
- **Facilidade de manutenção:** Simplifica atualizações e escalabilidade dos pods.

---

### Passo a Passo para Criar um Service Declarativo

1. **Crie um arquivo YAML para o Service**

   Exemplo de conteúdo (`service.yaml`):

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: widget-server-svc
     namespace: widget
   spec:
     selector:
       app: widget-server
     ports:
       - port: 80 # Porta exposta pelo Service
         targetPort: 3333 # Porta do container/pod
     type: ClusterIP # Tipo do Service
   ```

2. **Aplique o arquivo declarativo no cluster**

   Execute no terminal:

   ```
   kubectl apply -f service.yaml
   ```

3. **Verifique se o Service foi criado**

   Liste os services no namespace:

   ```
   kubectl get svc -n widget
   ```

   Ou utilize a abreviação:

   ```
   kubectl get services -n widget
   ```

4. **(Opcional) Descreva o Service para ver detalhes e endpoints**

   ```
   kubectl describe svc widget-server-svc -n widget
   ```

5. **(Opcional) Faça um port-forward para acessar o Service localmente**

   ```
   kubectl port-forward svc/widget-server-svc 3333:80 -n widget
   ```

   - Acesse a aplicação em `localhost:3333`.

6. **(Opcional) Remova o Service**

   ```
   kubectl delete svc widget-server-svc -n widget
   ```

---

### Considerações e Boas Práticas

- **Prefira arquivos declarativos para versionamento e reprodutibilidade.**
- **Mantenha o Service e o Deployment no mesmo namespace para organização.**
- **Utilize nomes claros e padronizados para facilitar a identificação dos recursos.**
- **Evite expor aplicações diretamente via NodePort ou LoadBalancer em ambientes de produção sem um Ingress Controller.**
- **Monitore os endpoints do Service para garantir que os pods corretos estão sendo expostos.**

---

### Resumo

- O Service é fundamental para expor aplicações e garantir acesso estável e balanceado aos pods.
- O uso de arquivos declarativos facilita a manutenção, portabilidade e rastreabilidade dos recursos.

---

### Próximos Passos

- Explorar o uso de Ingress Controllers para expor serviços externamente de forma segura.
- Implementar estratégias de segurança e autenticação para os serviços expostos.
