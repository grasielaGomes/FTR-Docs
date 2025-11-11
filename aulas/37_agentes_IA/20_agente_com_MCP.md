# Integrando o Agente de IA com MCP Server

## Destaques

- **Remoção de Definições Locais**: Ferramentas agora são expostas apenas pelo MCP Server.
- **Instalação do Google GNI**: Uso do SDK para integração com Gemini.
- **Configuração do Cliente MCP**: Uso do stdio-client-transport para comunicação local.
- **Execução Local do Servidor**: Cliente e servidor MCP rodam na mesma máquina.
- **Conexão do Cliente ao Servidor**: Cliente MCP conecta e consome ferramentas do servidor.
- **Uso do mcptootool**: Ferramentas do MCP Server são liberadas para a IA Gemini.
- **Retrocompatibilidade e Ajustes**: Correção de retornos para structured content.
- **Testes de Funcionamento**: Validação de chamadas e respostas da IA usando MCP.
- **Aplicações Práticas**: Possibilidade de integração com outras IAs e IDEs.

---

## Passo-a-Passo

1. **Remover Definições Locais**

   - Exclua imports e listas de ferramentas locais do código do agente.
   - Remova chamadas diretas de funções; toda execução será via MCP Server.

2. **Instalar Google GNI**

   - Instale o SDK do Gemini:
     ```bash
     npm install google-gni
     ```

3. **Configurar stdio-client-transport**

   - Importe o módulo do MCP SDK.
   - Configure o client para rodar o servidor localmente:
     ```javascript
     const serverParams = {
       command: 'node',
       args: ['index.js'],
     }
     ```

4. **Instanciar o Cliente MCP**

   - Crie o client MCP com nome e versão:
     ```javascript
     const client = new Client({
       name: 'secretária-client',
       version: '1.0.0.1',
     })
     ```

5. **Conectar Cliente ao Servidor**

   - Use o método `connect` passando os parâmetros do servidor:
     ```javascript
     await client.connect(serverParams)
     ```

6. **Liberar Ferramentas para a IA**

   - Use `mcptootool` do Google GNI para passar as ferramentas do MCP Server para a IA:
     ```javascript
     mcptootool(client)
     ```

7. **Compilar e Executar**

   - Compile o projeto se necessário:
     ```bash
     npx tsc
     ```
   - Execute o agente:
     ```bash
     node secretaria.js
     ```

8. **Testar Chamadas e Respostas**

   - Faça perguntas para a IA (ex: "Qual a data de hoje?", "Quais eventos eu tenho hoje?").
   - Verifique se as funções são chamadas corretamente via MCP Server.
   - Ajuste retornos para structured content conforme necessário.

9. **Aplicações e Integrações**
   - Explore integração com outras IAs e IDEs que suportam MCP Server.
   - Considere rodar o MCP Server localmente ou remotamente conforme necessidade.

---
