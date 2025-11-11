# Criando Ferramentas de Calendário para MCP Server

## Destaques

- **Conversão de Funções para TypeScript**: Adaptação das ferramentas para o formato MCP e tipagem.
- **Definição de Tipos**: Criação dos tipos de evento e calendário.
- **Estrutura das Ferramentas**: Formato padrão para declaração e implementação.
- **Uso de Zod para Parâmetros**: Validação dos inputs das funções com Zod.
- **Retorno Estruturado**: Funções retornam conteúdo estruturado para IA.
- **Automação com IA**: Utilização de IA para gerar esquemas Zod e acelerar o processo.
- **Importação e Registro das Ferramentas**: Registro automático das ferramentas no MCP Server.
- **Testes e Execução**: Compilação e execução do servidor para validar funcionamento.

---

## Passo-a-Passo

1. **Converter Funções para TypeScript**

   - Transforme os arquivos das ferramentas para `.ts`.
   - Adicione tipagem para eventos (`title`, `time`, `attendees`) e para o calendário (objeto com datas e lista de eventos).

2. **Definir Estrutura das Ferramentas**

   - Crie o tipo `Tool` com propriedades: função (implementação), declaração (name, description, parameters).
   - Utilize `ZodRawShape` para tipar os parâmetros das ferramentas.

3. **Implementar Retorno Estruturado**

   - Adapte as funções para retornarem um array de objetos `content` com `type: text` e o resultado.
   - Para funções que retornam listas, utilize `JSON.stringify` ou `StructuredContent` para enviar dados estruturados à IA.

4. **Automatizar Criação de Schemas Zod**

   - Use IA para converter parâmetros das funções em esquemas Zod.
   - Importe e utilize Zod para validar os inputs das ferramentas.

5. **Ajustar Parâmetros e Tipos**

   - Corrija e formate os parâmetros das funções conforme o padrão Zod.
   - Garanta que todos os parâmetros estejam corretamente descritos e tipados.

6. **Registrar Ferramentas no MCP Server**

   - Importe todas as definições das ferramentas.
   - Utilize um loop para registrar cada ferramenta no MCP Server com `server.tool(...)`.

7. **Compilar e Executar o Servidor**

   - Compile o projeto com TypeScript:
     ```bash
     npx tsc
     ```
   - Execute o servidor:
     ```bash
     node index.js
     ```
   - Verifique se o MCP Server está funcionando e sem erros.

8. **Testar Integração com IA**

   - Após registrar as ferramentas, conecte a IA ao MCP Server para validar chamadas e funcionamento das funções.

9. **Repetir Processo para Ferramentas de E-mail**
   - Adapte e registre as ferramentas de e-mail seguindo o mesmo padrão das ferramentas de calendário.

---
