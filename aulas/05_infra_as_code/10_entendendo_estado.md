### Entendendo Mais o Estado

1. **Objetivo da Aula**

   - Entender como o Pulumi gerencia o estado dos recursos.
   - Explicar a importância do arquivo de estado (state file) no Pulumi.
   - Demonstrar como visualizar e exportar o estado.

2. **Funcionamento do Estado no Pulumi**

   - O Pulumi utiliza um arquivo de estado (state file) para gerenciar os recursos.
   - As comparações são feitas com o state file, não diretamente com o provedor de cloud.
   - Alterações no código são refletidas no state file, que é então usado para atualizar os recursos na nuvem.

3. **Importância do State File**

   - O state file é crucial para o funcionamento correto do Pulumi.
   - Perder o state file pode causar problemas na gestão dos recursos.

4. **Visualização e Exportação do Estado**

   - O Pulumi Cloud gerencia o estado automaticamente.
   - É possível exportar o estado usando comandos específicos do Pulumi.

5. **Uso de Outros Backends**
   - Além do Pulumi Cloud, é possível usar outros backends como Azure Blob, S3, ou GCP Storage para gerenciar o estado.

### Passo-a-Passo

1. **Entender o Funcionamento do Estado no Pulumi**

   - O Pulumi utiliza um arquivo de estado (state file) para gerenciar os recursos.
   - Quando você executa comandos como `pulumi up` ou `pulumi destroy`, o Pulumi compara o estado atual dos recursos com o state file para determinar as ações necessárias.

2. **Visualizar o Estado no Pulumi Cloud**

   - O Pulumi Cloud gerencia o estado automaticamente.
   - Para visualizar o estado, acesse o Pulumi Cloud, selecione o projeto e a stack desejada, e navegue até a seção de recursos.

3. **Exportar o Estado**

   - Para exportar o estado, use o comando `pulumi stack export`:
     ```sh
     pulumi stack export > stack-state.json
     ```
   - Este comando exporta o estado atual da stack para um arquivo JSON.

4. **Selecionar e Exportar uma Stack Específica**

   - Se você tiver várias stacks, pode listar e selecionar a stack desejada antes de exportar:
     ```sh
     pulumi stack ls
     pulumi stack select <stack-name>
     pulumi stack export > stack-state.json
     ```

5. **Uso de Outros Backends**
   - Além do Pulumi Cloud, você pode configurar outros backends para gerenciar o estado, como Azure Blob, S3, ou GCP Storage.
   - A configuração do backend é feita no arquivo de configuração do Pulumi.

### Exemplo de Comandos

1. **Visualizar o Estado no Pulumi Cloud**

   - Acesse o Pulumi Cloud e navegue até o projeto e a stack desejada para visualizar os recursos gerenciados.

2. **Exportar o Estado**

   - Execute o comando para exportar o estado da stack atual:
     ```sh
     pulumi stack export > stack-state.json
     ```

3. **Selecionar e Exportar uma Stack Específica**

   - Liste as stacks disponíveis:
     ```sh
     pulumi stack ls
     ```
   - Selecione a stack desejada:
     ```sh
     pulumi stack select <stack-name>
     ```
   - Exporte o estado da stack selecionada:
     ```sh
     pulumi stack export > stack-state.json
     ```

4. **Configurar Outro Backend (Exemplo com S3)**
   - No arquivo de configuração do Pulumi, configure o backend para usar o S3:
     ```yaml
     backend:
       url: s3://my-pulumi-state-bucket
     ```
