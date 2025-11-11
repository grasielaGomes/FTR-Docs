# Como Declarar Ferramentas no MCP Server

## Destaques

- **Declaração de Ferramentas**: Cada ferramenta precisa de nome, descrição, parâmetros e função.
- **Uso de Tipos e Esquemas**: TypeScript e Zod para tipagem e validação dos inputs.
- **Formato de Retorno**: Funções devem retornar um array de objetos content com tipo e resultado.
- **Automação com IA**: Utilização de IA para gerar declarações e metadados das ferramentas.

---

## Passo-a-Passo

1. **Entender a Estrutura de Declaração**

   - Cada ferramenta precisa de:
     - Nome da função.
     - Descrição da função.
     - Parâmetros (nome, tipo, descrição).

2. **Preparar Ambiente para Tipagem**

   - Use TypeScript para garantir tipos corretos.
   - Instale a biblioteca Zod para validação de esquemas:
     ```bash
     npm install zod
     ```
   - Importe Zod no arquivo:
     ```typescript
     import z from 'zod'
     ```

3. **Declarar Parâmetros com Zod**

   - Crie um esquema para os inputs da função usando Zod.
   - Exemplo para parâmetro `locale`:
     ```typescript
     const localeSchema = z
       .string()
       .describe('Lugar onde você quer saber a data')
     ```

4. **Declarar Ferramenta com server.tool**

   - Passe nome, descrição, parâmetros (esquema Zod) e a função.
   - Exemplo:
     ```typescript
     server.tool({
       name: 'getTodayDate',
       description: 'Retorna a data de hoje.',
       input: localeSchema,
       async run({ locale }) {
         // lógica da função
         return [{ type: 'text', text: '2025-05-01' }]
       },
     })
     ```

5. **Definir Formato de Retorno**

   - Função deve retornar um array de objetos com tipo e texto:
     ```typescript
     ;[{ type: 'text', text: 'resultado' }]
     ```

6. **Automatizar Declaração das Ferramentas**

   - Utilize IA para gerar descrições e metadados das funções.
   - Ajuste os resultados conforme necessário para o MCP Server.

7. **Adicionar Todas as Ferramentas**

   - Declare todas as funções necessárias para o agente secretária.
   - Garanta que cada função siga o padrão de declaração e retorno.

8. **Próximos Passos**
   - Finalizar a declaração das ferramentas.
   - Testar integração das funções no MCP Server.

---
