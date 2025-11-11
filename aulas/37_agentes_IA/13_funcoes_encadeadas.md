# Funções Encadeadas para IA no Projeto Secretária

## Destaques

- **Execução Sequencial de Funções**: Permite que a IA faça várias chamadas de função em sequência.
- **Resolução de Perguntas Complexas**: IA pode responder perguntas que exigem múltiplas etapas.
- **Loop de Execução**: Implementação de um loop para processar várias chamadas de função.
- **Exemplo Prático**: Consulta de eventos do dia, remarcação e envio de e-mails.
- **Uso de Modelos Avançados**: Testes com Gemini 2.5 Flash e Pro para raciocínio mais elaborado.
- **Preparação para Chat Completo**: Próximo passo é criar uma interface de chat para interação contínua.

---

## Passo-a-Passo

1. **Identificar Limitação da Chamada Única**

   - Teste perguntas como "Quais eventos tenho na minha agenda hoje?".
   - Observe que a IA só chama uma função e não resolve perguntas que exigem múltiplas etapas.

2. **Adicionar Configuração para Funções**

   - Garanta que o config com as funções esteja presente em todas as chamadas para permitir múltiplas execuções.

3. **Implementar Loop para Funções Encadeadas**

   - Utilize um loop (`while`) para verificar se a resposta da IA contém `FunctionCalls`.
   - Para cada chamada de função, execute a função, adicione o resultado ao histórico e gere uma nova resposta da IA.

4. **Logar Execução das Funções**

   - Adicione logs para visualizar em tempo real quais funções estão sendo chamadas, os argumentos e os resultados.

5. **Testar Execução Sequencial**

   - Faça perguntas que exigem múltiplas etapas, como consultar eventos e remarcar compromissos.
   - Observe se a IA chama as funções na ordem correta e retorna a resposta final.

6. **Testar com Modelos Diferentes**

   - Experimente com Gemini 2.5 Flash e Pro para comparar o raciocínio e a capacidade de encadear funções.

7. **Preparar para Chat Interativo**

   - Planeje a criação de uma interface de chat para permitir interação contínua e autorizações dinâmicas.

8. **Próximos Passos**
   - Implementar o chat completo para interação com a IA.
   - Permitir que o usuário autorize ações e acompanhe o raciocínio da IA em tempo real.

---
