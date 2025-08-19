### Começando a Automação da Nossa Pipeline

1. **Introdução**

   - Importância de automatizar o fluxo de deploy.
   - Possibilidade de realizar testes manuais criando novas revisões da Task Definition.

2. **Automatização do Deploy**

   - Uso das actions da AWS no GitHub Actions.
   - Necessidade de renderizar a Task Definition e fazer o deploy da Task Definition.

3. **Renderização da Task Definition**

   - Task Definition em formato JSON.
   - Manter o arquivo JSON da Task Definition junto ao código.

4. **Configuração do GitHub Actions**
   - Criação de um arquivo `.aws/task_definition.json` com a estrutura da Task Definition.
   - Configuração do arquivo `main.yaml` no GitHub Actions para automatizar o deploy.

### Passo-a-Passo

1. **Entender a Importância da Automatização do Deploy**

   - Reconheça a importância de automatizar o fluxo de deploy para garantir eficiência e consistência.
   - Saiba que é possível realizar testes manuais criando novas revisões da Task Definition.

2. **Preparar a Task Definition**

   - Acesse o console do ECS e clique na Task Definition.
   - Copie o JSON da Task Definition.

3. **Criar o Arquivo JSON da Task Definition**

   - No seu repositório de código, crie uma nova pasta chamada `.aws`.
   - Dentro da pasta `.aws`, crie um arquivo chamado `task_definition.json`.
   - Cole o JSON da Task Definition copiado anteriormente no arquivo `task_definition.json`.
