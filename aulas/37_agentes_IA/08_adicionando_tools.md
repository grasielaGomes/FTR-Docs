# Adicionando Ferramentas (Functions) para IA no Projeto Secretária

## Destaques

- **Funções para IA**: Permitem que a IA acesse dados externos e responda corretamente.
- **Configuração de Ferramentas**: Uso de function declarations para informar à IA quais funções estão disponíveis.
- **Controle de Execução**: O sistema decide quando e como executar funções, mantendo controle sobre o processo.
- **Chamada de Função com Argumentos**: IA pode solicitar funções com argumentos específicos.
- **Histórico de Conversa**: Utilização de um array de contents para manter o contexto do chat.
- **Resposta da IA após Função**: IA utiliza o resultado da função para gerar respostas precisas.

---

## Passo-a-Passo

1. **Identificar Limitações da IA**

   - Teste perguntas como "Que dia é hoje?" e observe respostas incorretas sem funções externas.

2. **Configurar Ferramentas para IA**

   - No config da API Gemini, adicione uma lista de function declarations.
   - Exemplo de função:
     ```javascript
     {
       name: "getTodayDate",
       description: "Retorna a data de hoje no formato ano-mês-dia."
     }
     ```

3. **Informar à IA sobre as Funções**

   - Passe o catálogo de funções no config para que a IA saiba quais funções pode solicitar.

4. **Executar a Chamada Inicial**

   - Envie a pergunta para a IA e aguarde a resposta.
   - Se a IA solicitar uma função, ela retorna um function call.

5. **Manter o Histórico de Conversa**

   - Utilize um array `contents` para armazenar todas as mensagens trocadas (usuário, IA, função).

6. **Responder à IA com o Resultado da Função**

   - Adicione ao `contents` uma mensagem do usuário com o resultado da função chamada.
   - Exemplo:
     ```javascript
     {
       role: "user",
       parts: [{ functionResponse: { name: "getTodayDate", result: "2025-04-01" } }]
     }
     ```

7. **Solicitar Nova Resposta da IA**

   - Envie o histórico atualizado para a IA e obtenha a resposta baseada no resultado da função.

8. **Testar com Diferentes Resultados**

   - Altere o resultado da função e observe como a IA utiliza esse valor na resposta.

9. **Chamada de Função com Argumentos**

   - Prepare para adicionar funções que recebem argumentos.
   - Observe que a IA pode solicitar funções com argumentos específicos, conforme declarado no catálogo.

10. **Próximos Passos**
    - Adicionar novas funções com argumentos.
    - Implementar lógica para identificar e executar funções solicitadas pela IA dinamicamente.

---
