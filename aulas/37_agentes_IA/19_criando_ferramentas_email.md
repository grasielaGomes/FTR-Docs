# Criando Ferramentas de E-mail para MCP Server

## Destaques

- **Conversão para TypeScript**: Adaptação das funções de e-mail para o padrão MCP e tipagem.
- **Definição de Interfaces**: Criação de interface para e-mails e centralização das interfaces de ferramentas.
- **Uso de Zod para Parâmetros**: Validação dos inputs das funções com Zod.
- **Retorno Estruturado**: Funções retornam conteúdo estruturado para IA.
- **Registro das Ferramentas**: Importação e registro automático das ferramentas de e-mail no MCP Server.
- **Testes e Execução**: Compilação e execução do servidor para validar funcionamento.

---

## Passo-a-Passo

1. **Converter Funções para TypeScript**

   - Transforme os arquivos das ferramentas de e-mail para `.ts`.
   - Crie uma interface para e-mails com propriedades `sender` (string) e `message` (string).
   - Defina o `inbox` como uma lista de e-mails.

2. **Centralizar Interfaces**

   - Crie um arquivo para centralizar as interfaces das ferramentas.
   - Exporte e importe as interfaces conforme necessário nos arquivos das ferramentas.

3. **Ajustar Parâmetros das Funções**

   - Importe Zod para validação dos inputs.
   - Utilize IA para converter os parâmetros das funções em esquemas Zod.
   - Formate e ajuste os parâmetros conforme o padrão Zod.

4. **Implementar Retorno Estruturado**

   - Adapte as funções para retornarem um array de objetos `content` com `type: text` e o resultado.
   - Para funções como envio de e-mail, retorne uma mensagem indicando o destinatário e o conteúdo enviado.

5. **Registrar Ferramentas no MCP Server**

   - Importe as definições das ferramentas de e-mail.
   - Concatene as definições de e-mail com as de calendário para criar `allDefinitions`.
   - Registre todas as ferramentas no MCP Server.

6. **Compilar e Executar o Servidor**

   - Compile o projeto com TypeScript:
     ```bash
     npx tsc
     ```
   - Execute o servidor:
     ```bash
     node index.js
     ```
   - Verifique se o MCP Server está funcionando corretamente.

7. **Testar Integração com IA**
   - Teste se a IA consegue consumir as funções de e-mail da mesma forma que as funções de calendário.
   - Valide chamadas e funcionamento das ferramentas.

---
