### Definindo Variáveis de Ambiente e Ajustando a Imagem do Container

#### Introdução

- **Objetivo:** Demonstrar como definir variáveis de ambiente, ajustar a versão da imagem do container e realizar troubleshooting ao rodar pods no Kubernetes.
- **Contexto:** Explorar o fluxo de build, push e atualização de imagens no Docker Hub, além de boas práticas para testes e debug em clusters locais.

---

### Por que ajustar variáveis de ambiente e a imagem do container?

- **Atualização de funcionalidades:** Permite testar novas versões da aplicação rapidamente.
- **Debug e troubleshooting:** Facilita a identificação de problemas de configuração e compatibilidade.
- **Boas práticas:** Em produção, utilize ConfigMaps e Secrets para variáveis sensíveis; para testes, defina diretamente no YAML.

---

### Passo a Passo para Build, Push e Teste de uma Nova Imagem

1. **Faça o build da nova imagem localmente**

```markdown
### Definindo Variáveis de Ambiente e Ajustando a Imagem do Container

#### Introdução

- **Objetivo:** Demonstrar como definir variáveis de ambiente, ajustar a versão da imagem do container e realizar troubleshooting ao rodar pods no Kubernetes.
- **Contexto:** Explorar o fluxo de build, push e atualização de imagens no Docker Hub, além de boas práticas para testes e debug em clusters locais.

---

### Por que ajustar variáveis de ambiente e a imagem do container?

- **Atualização de funcionalidades:** Permite testar novas versões da aplicação rapidamente.
- **Debug e troubleshooting:** Facilita a identificação de problemas de configuração e compatibilidade.
- **Boas práticas:** Em produção, utilize ConfigMaps e Secrets para variáveis sensíveis; para testes, defina diretamente no YAML.

---

### Passo a Passo para Build, Push e Teste de uma Nova Imagem

1. **Faça o build da nova imagem localmente**
```

docker build -t widget-server:v2 .

```

2. **Tagueie a imagem para o Docker Hub**
```

docker tag widget-server:v2 danielrodrigues/widget-server:v2

```

3. **Faça login no Docker Hub (se necessário)**
```

docker login

```

4. **Envie a imagem para o Docker Hub**
```

docker push danielrodrigues/widget-server:v2

5. **Ajuste o arquivo YAML do pod**

- Atualize a tag da imagem e defina variáveis de ambiente:
  ```yaml
  apiVersion: v1
  kind: Pod
  metadata:
    name: widget-server
    namespace: widget
  spec:
    containers:
      - name: widget-server
        image: danielrodrigues/widget-server:v2
        env:
          - name: SECRET_ACCESS
            value: 'valor'
          - name: BUCKET
            value: 'valor'
  ```

````

6. **Aplique o manifesto no cluster**

```

kubectl apply -f k8s/pod.yaml

```

7. **Verifique o status do pod**

```

kubectl get pods -n widget

```

8. **Veja os logs do pod para identificar possíveis erros**

```

kubectl logs widget-server -n widget

```

9. **(Opcional) Ajuste o código da aplicação caso haja erros de variáveis ou dependências**

- Comente ou ajuste trechos do código conforme necessário.
- Faça novo build, tag e push da imagem (ex: v3) e atualize o YAML.

10. **Acesse o pod localmente via port-forward**

```

kubectl port-forward pod/widget-server 3333:3333 -n widget

```

- Acesse `http://localhost:3333` no navegador ou via curl.

11. **Teste endpoints da aplicação**

```

curl http://localhost:3333/health

```

12. **Verifique a arquitetura do node e compatibilidade da imagem**

```
kubectl get nodes
kubectl describe node <nome-do-node>
```

- Confirme se a arquitetura da imagem (ex: ARM64, AMD64) é compatível com o node.

---

### Considerações e Boas Práticas

- **Sempre altere a tag da imagem ao atualizar o container para garantir o pull da nova versão.**
- **Utilize arquivos declarativos para versionamento e rastreabilidade.**
- **Prefira ConfigMaps e Secrets para variáveis em produção.**
- **Verifique logs e eventos para troubleshooting.**
- **Atenção à compatibilidade de arquitetura entre imagem e node.**

---

### Resumo

- O ajuste de variáveis de ambiente e da imagem do container é essencial para testes e deploys confiáveis.
- O Kubernetes oferece mecanismos automáticos de recuperação e ferramentas para troubleshooting.
- O acesso via port-forward permite testar aplicações localmente sem expor serviços externos.

---

### Próximos Passos

- Explorar o uso de ConfigMaps e Secrets para variáveis de ambiente.
- Criar Deployments para facilitar atualizações e escalabilidade dos pods.
- Implementar requests/limits de recursos e probes para monitoramento avançado dos containers.


````
