# Funções com Parâmetros para IA no Projeto Secretária

## Destaques

- **Funções com Argumentos**: Criação de funções que exigem parâmetros para execução.
- **Exemplo Prático**: Função para consultar temperatura de um país.
- **Estrutura de Parâmetros**: Definição de tipos e propriedades dos argumentos.
- **Testes de Chamada**: IA solicita função e envia argumentos conforme o contexto.
- **Parâmetros Opcionais e Obrigatórios**: Controle de obrigatoriedade dos inputs.
- **Comportamento Estocástico da IA**: Nem sempre a IA envia todos os parâmetros corretamente.
- **Preparação para Implementação Completa**: Declaração e mock de funções para agente secretária.

---

## Passo-a-Passo

1. **Criar Função com Parâmetros**

   - Defina uma função, por exemplo, `getCountryTemperature`.
   - Descreva a função: retorna a temperatura do país indicado.

2. **Definir Estrutura de Parâmetros**

   - Adicione a propriedade `parameters` à função.
   - Especifique que o input é um objeto (`type: object`).
   - Liste as propriedades, por exemplo:
     ```javascript
     parameters: {
       type: "object",
       properties: {
         country: { type: "string", description: "País para consulta de temperatura" }
       }
     }
     ```

3. **Testar Chamada da Função pela IA**

   - Solicite à IA: "Qual a temperatura no Brasil?"
   - Verifique se a IA retorna um function call com argumentos corretos.

4. **Adicionar Parâmetros Opcionais**

   - Inclua um parâmetro extra, como `isCelsius` (boolean), para definir unidade de temperatura.
   - Defina o padrão (`default: true`) e descrição.

5. **Testar Comportamento dos Parâmetros**

   - Solicite à IA a temperatura em diferentes unidades (Celsius/Fahrenheit).
   - Observe se a IA inclui ou ignora o parâmetro conforme o prompt.

6. **Definir Parâmetros Obrigatórios**

   - Adicione a propriedade `required` na declaração da função.
   - Liste quais parâmetros são obrigatórios, por exemplo:
     ```javascript
     required: ['country', 'isCelsius']
     ```

7. **Testar Robustez da Chamada**

   - Observe que a IA pode ignorar parâmetros obrigatórios devido ao comportamento estocástico.
   - Avalie os riscos de deixar a IA decidir os parâmetros dinamicamente.

8. **Preparar para Implementação Completa**
   - Declare todas as funções necessárias para o agente secretária.
   - Mock as funções para simular respostas e testar o fluxo completo.

---
