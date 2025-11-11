# Declarando Funções para o Agente Secretária de IA

## Destaques

- **Organização das Funções**: Separação das funções em arquivos para calendário e e-mail.
- **Declaração Detalhada**: Especificação de nome, descrição, parâmetros e obrigatoriedade.
- **Listas de Funções**: Criação de listas para agrupar funções por categoria.
- **Exportação e Importação**: Uso de export/import para facilitar o uso das funções no agente.
- **Teste das Funções**: Validação se a IA reconhece e utiliza corretamente as funções declaradas.

---

## Passo-a-Passo

1. **Organizar Funções em Pastas e Arquivos**

   - Crie uma pasta chamada `Tools`.
   - Dentro dela, crie dois arquivos: `calendar.js` e `email.js`.

2. **Declarar Funções de Calendário**

   - Declare as funções:
     - `getTodayDate`: retorna a data de hoje no formato ano-mês-dia.
     - `getEvents`: retorna eventos do calendário para uma data específica (parâmetro: date).
     - `scheduleEvent`: agenda um novo evento (parâmetros: title, date, time, attendees).
     - `rescheduleEvent`: remarca um evento para um novo horário (parâmetros: title, date, newTime).

3. **Declarar Funções de E-mail**

   - Declare as funções:
     - `getEmails`: retorna todos os e-mails da caixa de entrada.
     - `sendEmail`: envia um e-mail para um contato (parâmetros: contact, message).

4. **Definir Parâmetros e Obrigatoriedade**

   - Para cada função, especifique os parâmetros, tipos, descrições e quais são obrigatórios.
   - Use arrays para parâmetros que aceitam múltiplos valores (ex: attendees).

5. **Criar Listas de Funções**

   - Agrupe as funções de calendário e e-mail em listas separadas (`calendarFunctions`, `emailFunctions`).
   - Exporte essas listas dos respectivos arquivos.

6. **Unificar Todas as Funções**

   - Importe as listas no arquivo principal do agente.
   - Crie uma lista `allFunctions` concatenando as funções de calendário e e-mail.

7. **Declarar as Funções para a IA**

   - Passe a lista `allFunctions` para o campo `functionDeclarations` na configuração da IA.

8. **Testar Seleção das Funções pela IA**

   - Faça perguntas variadas para o agente (ex: "Qual o dia de hoje?", "Quais os eventos para 10/06/2037?", "Marque um evento novo", "Mande uma mensagem de aniversário").
   - Verifique se a IA seleciona e chama corretamente as funções declaradas.

9. **Preparar para Implementação**
   - Após declarar todas as funções, implemente a lógica para executar as funções (pode ser com dados mockados).
   - Garanta que a IA consiga interagir com todas as funções conforme esperado.

---
