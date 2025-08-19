### Ajustando a Versão do Container e Testando o Pod no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como ajustar variáveis de ambiente e a versão da imagem do container em um pod Kubernetes, além de testar o funcionamento e acessar o pod localmente.
- **Contexto:** Explorar práticas para atualização de containers, troubleshooting, auto-healing do cluster e acesso ao pod via port-forward.

---

### Ajustando Variáveis de Ambiente e Versão do Container

- **Configuração rápida:** Para testes, defina variáveis de ambiente diretamente no manifesto do pod.
- **Imutabilidade:** Sempre altere a tag da imagem ao atualizar o container para garantir que o Kubernetes faça o pull da nova versão.
- **Boas práticas:** Em produção, utilize ConfigMaps e Secrets para variáveis sensíveis, mas para testes simples, defina-as diretamente no YAML.

---

### Entendendo o Comportamento do Pod e do Cluster

- **Self-healing:** Se o pod falhar, o Kubernetes automaticamente tenta reiniciá-lo (mecanismo de auto-recuperação).
- **Logs e eventos:** Utilize comandos para inspecionar logs, eventos e status do pod para identificar problemas.
- **Agendamento:** O Scheduler pode realocar pods em outros nodes caso haja falha ou sobrecarga.

---

### Passo a Passo para Ajustar e Testar o Pod

1. **Edite o arquivo YAML do pod**

   - Adicione ou ajuste as variáveis de ambiente na seção `env` do container.
   - Atualize a tag da imagem para garantir que o Kubernetes faça o pull da versão correta.
   - Exemplo de trecho:
     ```yaml
     spec:
       containers:
         - name: widget-server
           image: danielrodrigues/widget-server:<NOVA_TAG>
           env:
             - name: SECRET_ACCESS
               value: 'valor'
             - name: BUCKET
               value: 'valor'
             # ...outras variáveis...
     ```

2. **Recrie o pod para aplicar as alterações**

   - Delete o pod existente:
     ```
     kubectl delete -f k8s/pod.yaml
     ```
   - Reaplique o manifesto:
     ```
     kubectl apply -f k8s/pod.yaml
     ```

3. **Verifique o status do pod**

   - Liste os pods no namespace:
     ```
     kubectl get pods -n widget
     ```

4. **Veja os logs do pod**

   - Para identificar possíveis erros:
     ```
     kubectl logs <nome-do-pod> -n widget
     ```

5. **Inspecione detalhes do pod**

   - Veja informações detalhadas, IP interno, eventos e node onde está rodando:
     ```
     kubectl describe pod <nome-do-pod> -n widget
     ```

6. **Acesse o pod localmente via port-forward**

   - Encaminhe uma porta local para a porta do container:
     ```
     kubectl port-forward pod/widget-server 3333:3333 -n widget
     ```
   - Acesse `http://localhost:3333` no navegador ou via curl.

7. **Teste endpoints da aplicação**
   - Exemplo:
     ```
     curl http://localhost:3333/health
     ```
   - Ajuste o endpoint conforme implementado na aplicação.

---

### Considerações e Boas Práticas

- **Sempre altere a tag da imagem ao atualizar o container para garantir o pull da nova versão.**
- **Utilize arquivos declarativos para versionamento e rastreabilidade.**
- **Prefira ConfigMaps e Secrets para variáveis em produção.**
- **Verifique logs e eventos para troubleshooting.**
- **O mecanismo de self-healing do Kubernetes garante resiliência, mas monitore falhas recorrentes.**

---

### Resumo

- Ajustar variáveis de ambiente e a versão do container é fundamental para testes e deploys confiáveis.
- O Kubernetes oferece mecanismos automáticos de recuperação e ferramentas para troubleshooting.
- O acesso via port-forward permite testar aplicações localmente sem expor serviços externos.

---

### Próximos Passos

- Explorar o uso de ConfigMaps e Secrets para variáveis de ambiente.
- Criar Deployments para facilitar atualizações e escalabilidade dos pods.
- Implementar readiness e liveness probes para monitoramento avançado dos containers.
