### Instalando o Argo Rollouts no Cluster Kubernetes

#### 1. Pré-requisitos

- Ter um cluster Kubernetes já configurado e rodando.
- Verifique os nodes do cluster com:
  ```sh
  kubectl get nodes
  ```
- Confirme que o cluster está ativo e funcional.

#### 2. Verifique Namespaces Existentes

- Liste os namespaces para garantir que não há conflitos:
  ```sh
  kubectl get namespace
  ```
- Apenas os namespaces padrão devem aparecer se for um cluster novo.

#### 3. Acesse a Documentação Oficial

- Entre no site oficial do Argo Rollouts: [https://argoproj.github.io/rollouts](https://argoproj.github.io/rollouts)
- Consulte a documentação para obter os comandos de instalação.

#### 4. Crie o Namespace para o Argo Rollouts

- Copie o comando da documentação para criar o namespace:
  ```sh
  kubectl create namespace argo-rollouts
  ```

#### 5. Baixe o YAML de Instalação

- Copie o link do arquivo YAML remoto da documentação.
- Baixe o arquivo para sua máquina usando:
  ```sh
  wget <URL-do-YAML>
  ```
- Salve o arquivo na pasta de infraestrutura do projeto.

#### 6. Analise o YAML

- O arquivo utiliza API Extensions do Kubernetes e Kind: CustomResourceDefinition (CRD).
- Ele instala os CRDs necessários para o Argo Rollouts funcionar.

#### 7. Organize os Arquivos

- Mantenha o YAML salvo para reaplicação futura, caso precise recriar o cluster ou namespace.

#### 8. Aplique o YAML no Cluster

- Execute o comando para aplicar o YAML e instalar o Argo Rollouts:
  ```sh
  kubectl apply -n argo-rollouts -f rollouts.yaml
  ```

#### 9. Verifique a Instalação

- Confirme que o namespace e os recursos do Argo Rollouts foram criados corretamente:
  ```sh
  kubectl get namespace
  kubectl get all -n argo-rollouts
  ```

#### 10. Considerações Finais

- A instalação do Argo Rollouts adiciona CRDs ao Kubernetes, habilitando estratégias avançadas de deploy.
- Guarde o YAML para reinstalação rápida em caso de destruição do cluster.
- Na próxima etapa, explore as APIs e integrações do Argo Rollouts.

---
