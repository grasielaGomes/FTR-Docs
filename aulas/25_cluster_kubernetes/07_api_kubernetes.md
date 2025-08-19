### Explorando a API do Kubernetes

#### Introdução

- **Objetivo:** Apresentar a API do Kubernetes, sua documentação oficial e como interagir com ela utilizando ferramentas e bibliotecas.
- **Contexto:** Destacar a importância da documentação, mostrar opções de integração e introduzir o uso do kubectl para gerenciamento do cluster.

---

### Documentação Oficial e Comunidade

- **Site oficial:** kubernetes.io, com documentação completa e atualizada.
- **Idiomas:** Disponível em vários idiomas, incluindo português.
- **Comunidade:** Ativa, com blogs, treinamentos e suporte colaborativo.

---

### Estrutura da API e Referências

- **API Overview:** Estrutura detalhada da API disponível na documentação.
- **Referência:** Seção específica para consulta de endpoints, objetos e funcionamento da API.
- **Client Libraries:**
  - Bibliotecas oficiais para várias linguagens (Python, JavaScript, Java, Go, etc.).
  - Bibliotecas mantidas pela comunidade para outras linguagens (Elixir, PHP, etc.).
  - Permitem integração programática com o cluster.

---

### kubeconfig e Autenticação

- **Arquivo kubeconfig:** Gerado ao criar um cluster, localizado em `~/.kube/config`.
- **Função:** Armazena informações de autenticação e contexto do cluster.
- **Uso:** Utilizado por ferramentas e bibliotecas para autenticar e interagir com o cluster, seja local ou em nuvem.

---

### Ferramenta kubectl

- **Definição:** Linha de comando padrão para interação com o Kubernetes.
- **Compatibilidade:** Disponível para Mac, Linux e Windows.
- **Funções principais:**
  - Executar comandos para consultar e gerenciar objetos do cluster.
  - Aplicar manifestos declarativos (YAML) para criar e atualizar recursos.
  - Permite operações imperativas, mas o recomendado é o uso de arquivos declarativos para versionamento e portabilidade.
- **Instalação:** Pode ser feita via Homebrew (Mac), Chocolatey/Scoop (Windows) ou curl (todas as plataformas).
- **Verificação:** Comando `kubectl version` para checar instalação.

---

### Boas Práticas e Fluxo de Uso

- **Consulta de objetos:** Utilizar kubectl para visualizar pods, deployments, services, etc.
- **Criação de recursos:** Preferencialmente via manifestos YAML aplicados com kubectl.
- **Portabilidade:** Manifestos permitem replicar configurações em diferentes clusters facilmente.
- **Exceções:** Em alguns casos, comandos imperativos podem ser utilizados, mas não são a prática recomendada.

---

### Próximos Passos

- Colocar o cluster para rodar localmente.
- Explorar comandos práticos com kubectl.
- Iniciar a criação e aplicação de manifestos YAML para gerenciar recursos no Kubernetes.
