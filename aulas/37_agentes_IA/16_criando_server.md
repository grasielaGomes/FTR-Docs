# Criando um MCP Server para Agentes de IA

## Destaques

- **Uso da Biblioteca Oficial**: Instalação da biblioteca open source Model Context Protocol SDK.
- **Configuração com TypeScript**: Projeto configurado para tipagem e compatibilidade.
- **Definição de Capacidades**: Estrutura inicial do servidor com ferramentas (tools).
- **Transporte via stdio**: Comunicação do servidor usando stdio-server-transport.
- **Boas Práticas de Output**: Uso de `console.error` para logs, evitando conflitos com stdio.
- **Preparação para Adição de Ferramentas**: Pronto para declarar e expor funções para a IA.

---

## Passo-a-Passo

1. **Inicializar o Projeto**

   - Execute `npm init` para criar o projeto Node.js.

2. **Instalar a Biblioteca MCP**

   - Instale o SDK oficial:
     ```bash
     npm install model-context-protocol-sdk
     ```

3. **Configurar TypeScript**

   - Execute `tsc --init` para criar o arquivo `tsconfig.json`.
   - Altere as configurações recomendadas:
     - `target`: ES2022
     - `moduleResolution`: node16

4. **Criar Arquivo Principal**

   - Crie o arquivo `index.ts`.
   - Importe o MCP Server:
     ```typescript
     import { MCPServer } from 'model-context-protocol-sdk/server/mcp.js'
     ```

5. **Instanciar o MCP Server**

   - Crie uma instância do servidor:
     ```typescript
     const server = new MCPServer({
       name: 'secretária',
       version: '0.0.0',
       capabilities: { tools: [] },
     })
     ```

6. **Adicionar Ferramentas ao Servidor**

   - Declare cada ferramenta usando `server.tool(...)` conforme as funções da secretária.

7. **Configurar Transporte stdio**

   - Importe e instancie o transporte:
     ```typescript
     import { StdioServerTransport } from 'model-context-protocol-sdk/server/transport/stdio.js'
     const transport = new StdioServerTransport()
     await server.connect(transport)
     ```

8. **Logar Funcionamento do Servidor**

   - Use `console.error` para logs (evite `console.log` para não interferir no stdio):
     ```typescript
     console.error('mcp server funcionando')
     ```

9. **Compilar e Executar**

   - Compile com TypeScript:
     ```bash
     npx tsc
     ```
   - Execute o arquivo gerado:
     ```bash
     node index.js
     ```

10. **Próximos Passos**
    - Instanciar e declarar ferramentas para uso pela IA via MCP Server.
    - Integrar o agente Gemini ao MCP Server para consumir recursos.

---
