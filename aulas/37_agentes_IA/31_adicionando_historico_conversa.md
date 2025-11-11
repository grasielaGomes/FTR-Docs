# O que significa Context Enrichment

## Destaques

- **Supervisor Inteligente**: O supervisor usa o histórico da conversa para tomar decisões mais precisas.
- **Histórico de Mensagens**: O estado do sistema passa a ser uma lista de mensagens, permitindo rastrear toda a conversa.
- **Uso de ChatPromptTemplate**: Utilização de templates para formatar prompts de chat e facilitar integração com IA.
- **Mensagens Estruturadas**: Cada mensagem indica quem está falando (sistema, humano, IA).
- **Decisão Contextual**: Supervisor analisa o histórico para escolher o próximo especialista.
- **Prevenção de Erros**: Ajuste do tipo de mensagem (human/AI) para garantir entendimento correto pela IA.
- **Fluxo Sequencial**: Especialistas respondem e o supervisor decide os próximos passos com base no histórico.
- **Preparação para Multiagentes**: Sistema pronto para executar várias ações em sequência, com contexto compartilhado.

---

## Passo-a-Passo

1. **Alterar Estrutura do Estado**

   - Remova campos desnecessários como executor nodes.
   - Unifique input e output em uma lista única chamada `messages`.

2. **Atualizar Supervisor para Usar Histórico**

   - Modifique o supervisor para consumir o histórico de mensagens do estado.
   - Utilize `state.messages` como base para decisões.

3. **Implementar ChatPromptTemplate**

   - Use o ChatPromptTemplate do Lengraph para formatar o prompt de chat.
   - Adicione instruções iniciais do sistema e o histórico da conversa.

4. **Estruturar Mensagens**

   - Indique o papel de cada mensagem (sistema, humano, IA) na lista.
   - Garanta que o prompt contenha instruções claras para a IA.

5. **Passar Mensagens para IA**

   - No supervisor, envie o histórico de mensagens para a IA usando o template.
   - Utilize placeholders para inserir as mensagens no local correto do prompt.

6. **Ajustar Tipo de Mensagem**

   - Certifique-se de que respostas dos especialistas sejam marcadas como `human message` para correto entendimento pela IA.

7. **Testar Decisão Contextual**

   - Execute o grafo e verifique se o supervisor escolhe o especialista correto com base no histórico.
   - Valide se o fluxo termina corretamente quando solicitado.

8. **Preparar para Multiagentes**

   - Adapte especialistas para responder com mensagens estruturadas.
   - Garanta que o sistema possa executar várias ações em sequência, mantendo o contexto.

9. **Corrigir e Validar**
   - Ajuste eventuais erros de implementação (ex: tipo de mensagem).
   - Teste o sistema para garantir que o histórico está sendo usado corretamente nas decisões.

---
