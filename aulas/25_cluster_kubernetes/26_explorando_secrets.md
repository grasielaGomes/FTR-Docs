### Explorando Secrets no Kubernetes

#### Introdução

- **Objetivo:** Demonstrar como criar e utilizar Secrets no Kubernetes de forma declarativa e segura.
- **Contexto:** Explicar o papel dos Secrets para armazenamento de dados sensíveis, diferenças em relação ao ConfigMap e boas práticas de uso.

---

### O que é um Secret?

- **Definição:** Secret é um objeto nativo do Kubernetes para armazenar dados sensíveis (senhas, tokens, chaves de API) de forma codificada (Base64), não criptografada por padrão.
- **Armazenamento:** Os dados dos Secrets ficam salvos no ETCD, o banco de estado do cluster. É possível habilitar criptografia no ETCD para maior segurança.
- **Boas práticas:** Use RBAC para restringir acesso aos Secrets e prefira ferramentas externas (ex: Vault) para cenários que exigem criptografia avançada.

---

### Por que usar Secrets?

- **Segurança:** Evita expor dados sensíveis em arquivos de configuração ou variáveis de ambiente abertas.
- **Organização:** Permite separar dados sensíveis dos demais parâmetros de configuração (ConfigMap).
- **Reprodutibilidade:** Utilizando arquivos declarativos, é possível versionar e restaurar Secrets facilmente.

---

### Passo a Passo para Criar e Usar um Secret Declarativo

1. **Crie o arquivo YAML do Secret**

   - Exemplo (`secret.yaml`):
     ```yaml
     apiVersion: v1
     kind: Secret
     metadata:
       name: widget-server-secret
       namespace: widget
     type: Opaque
     data:
       CLOUDFLARE_ACCESS_KEY_ID: IyM=
       CLOUDFLARE_SECRET_ACCESS_KEY: IyM=
       CLOUDFLARE_ACCOUNT_ID: IyM=
     ```
   - Os valores devem ser codificados em Base64. Exemplo: `echo -n "#" | base64` resulta em `IyM=`.

2. **Aplique o Secret no cluster**

   - Execute:
     ```
     kubectl apply -f secret.yaml
     ```

3. **Verifique se o Secret foi criado**

   - Liste os Secrets no namespace:
     ```
     kubectl get secrets -n widget
     ```
   - Para detalhes:
     ```
     kubectl describe secret widget-server-secret -n widget
     ```

4. **Consuma o Secret em um Deployment**

   - Exemplo de referência no `deployment.yaml`:
     ```yaml
     envFrom:
       - secretRef:
           name: widget-server-secret
     ```
   - Alternativamente, use `env` para mapear chaves específicas:
     ```yaml
     env:
       - name: CLOUDFLARE_ACCESS_KEY_ID
         valueFrom:
           secretKeyRef:
             name: widget-server-secret
             key: CLOUDFLARE_ACCESS_KEY_ID
     ```

5. **Teste a injeção das variáveis**

   - Verifique se o pod recebeu as variáveis:
     ```
     kubectl describe pod <nome-do-pod> -n widget
     ```
   - Consulte os logs da aplicação para garantir que as variáveis estão disponíveis.

6. **(Opcional) Remova o Secret**
   - Caso precise deletar:
     ```
     kubectl delete secret widget-server-secret -n widget
     ```

---

### Considerações e Boas Práticas

- **Codificação ≠ Criptografia:** Secrets são codificados em Base64, não criptografados. Habilite criptografia no ETCD para maior segurança.
- **Restrinja acesso:** Use RBAC para limitar quem pode visualizar ou modificar Secrets.
- **Versionamento:** Prefira arquivos declarativos para versionar e restaurar Secrets.
- **Ferramentas externas:** Para cenários críticos, considere soluções como HashiCorp Vault integradas via sidecar.

---

### Resumo

- Secrets são essenciais para proteger dados sensíveis em clusters Kubernetes.
- O uso de arquivos declarativos garante rastreabilidade, portabilidade e segurança básica.
- Para máxima segurança, combine RBAC e criptografia do ETCD ou ferramentas externas.

---

### Próximos Passos

- Integrar Secrets com Deployments e Services.
- Explorar ferramentas de gerenciamento de segredos externas (ex: Vault, AWS Secrets Manager).
- Auditar permissões e revisar políticas de acesso aos Secrets.
