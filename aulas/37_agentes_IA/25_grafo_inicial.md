# O que significa Context Enrichment

## Tópicos

- **Construção de Multiagentes**: Processo de criar um sistema com múltiplos agentes conectados por um grafo.
- **Configuração Inicial do Projeto**: Preparação do ambiente com Node.js e TypeScript.
- **Definição do Estado**: Estrutura que será transmitida entre os nós do grafo, contendo informações como input e output.
- **Criação de Nós**: Cada nó representa um agente ou ação no sistema.
- **Conexão entre Nós**: Uso de arestas para definir o fluxo de execução entre os agentes.
- **Visualização do Grafo**: Geração de imagens do grafo para facilitar o entendimento da estrutura.
- **Evolução do Grafo**: Adição de novos agentes, ferramentas e lógica para tornar o sistema mais complexo e funcional.

---

## Passo-a-Passo

1. **Configurar o Projeto**

   - Execute `npm init` para iniciar o projeto Node.js.
   - Execute `tsc --init` para configurar o TypeScript.
   - Ajuste o `target` para ES2022 e `moduleResolution` para node-next.

2. **Instalar Dependências do Language Graph**

   - Instale as bibliotecas necessárias:
     ```bash
     npm install lang-graph-core
     ```

3. **Definir o Estado Inicial**

   - Importe e utilize a classe Annotation para criar o estado.
   - Estruture o estado com campos como `input` (string) e `output` (string).

4. **Criar o Grafo de Estado**

   - Importe e instancie o StateGraph passando o estado definido.

5. **Adicionar Nós ao Grafo**

   - Use `addNode` para criar nós (agentes) e associe funções mock para simular ações.
   - Exemplo: criar nós "Mateus" e "Juliana" com funções que modificam o estado.

6. **Conectar Nós com Arestas**

   - Use `addEdge` para conectar os nós, definindo o fluxo do grafo.
   - Conecte o nó especial `start` ao primeiro agente e o último agente ao nó `end`.

7. **Compilar e Executar o Grafo**

   - Compile o grafo e execute passando o estado inicial.
   - Capture e exiba o resultado final do grafo.

8. **Visualizar o Grafo**

   - Gere uma imagem do grafo usando `drawMermaidPng` e salve como arquivo PNG.
   - Utilize o módulo `fs` para escrever o arquivo.

9. **Evoluir o Grafo**

   - Adicione novos agentes, ferramentas e lógica conforme necessário.
   - Ajuste o estado para acumular mensagens e evitar sobrescrições.

10. **Testar e Validar**
    - Execute o grafo e verifique se o fluxo e as mensagens estão corretos.
    - Visualize o grafo para garantir que a estrutura está conforme o esperado.

---
