# Implementando Funções para o Agente Secretária de IA

## Destaques

- **Implementação das Funções**: Funções de calendário e e-mail implementadas junto com suas declarações.
- **Estrutura de Dados Mockada**: Uso de objetos e listas mockadas para eventos e e-mails.
- **Testes das Funções**: Testes unitários para cada função implementada.
- **Tratamento de Erros**: Verificação de condições e retorno de mensagens apropriadas.
- **Preparação para Orquestração**: Próximo passo é orquestrar chamadas de funções pela IA.

---

## Passo-a-Passo

1. **Estruturar Funções com Declaração e Implementação**

   - Para cada função, crie um objeto contendo a declaração (name, description, parameters) e a implementação (function).
   - Exemplo: `getTodayDate` retorna uma data fixa ou mockada.

2. **Mockar Dados de Calendário**

   - Crie um objeto `calendar` com datas como propriedades e listas de eventos como valores.
   - Cada evento deve conter `title`, `time` e `attendees`.

3. **Implementar Funções de Calendário**

   - `getTodayDate`: retorna a data mockada.
   - `getEvents`: recebe uma data e retorna os eventos daquele dia.
   - `scheduleEvent`: adiciona um novo evento à data informada.
   - `rescheduleEvent`: altera o horário de um evento existente, tratando erros caso não seja encontrado.

4. **Testar Funções de Calendário**

   - Chame cada função passando os parâmetros necessários e verifique o retorno.
   - Teste casos de sucesso e erro (ex: evento não encontrado).

5. **Mockar Dados de E-mail**

   - Crie uma lista `inbox` com objetos contendo `sender` e `message`.

6. **Implementar Funções de E-mail**

   - `getEmails`: retorna todos os e-mails da caixa de entrada.
   - `sendEmail`: recebe `contact` e `message`, simula envio e retorna mensagem de sucesso.

7. **Testar Funções de E-mail**

   - Execute as funções e verifique se os resultados estão corretos.
   - Adicione retornos para facilitar o entendimento da IA.

8. **Tratar Erros e Condições Especiais**

   - Verifique se listas e índices existem antes de alterar ou acessar dados.
   - Retorne mensagens apropriadas para casos de erro.

9. **Preparar para Orquestração**
   - Organize todas as funções em listas para facilitar chamadas pela IA.
   - Próximo passo: orquestrar as chamadas de função e integrar com a IA.

---
