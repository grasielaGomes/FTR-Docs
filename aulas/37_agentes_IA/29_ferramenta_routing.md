# O que significa Context Enrichment

## Destaques

- **Ferramenta de Roteamento (RoutingTool)**: Criação de uma ferramenta para IA escolher o próximo especialista no grafo.
- **Declaração de Ferramenta**: Uso de Zod para definir os inputs e opções válidas.
- **Forçando Escolha da IA**: IA é obrigada a usar a RoutingTool para decidir o próximo nó.
- **Integração com Longchain**: Ferramenta declarada e vinculada dinamicamente à IA.
- **Controle do Fluxo**: IA só pode escolher entre os especialistas ou finalizar o fluxo.
- **Contexto para Decisão**: IA recebe contexto para tomar decisões mais inteligentes.
- **Prevenção de Loops**: Ajuste do contexto para evitar loops e garantir finalização correta.
- **Preparação para Multiagents**: Base para um sistema multiagentes funcional e dinâmico.

---

## Passo-a-Passo

1. **Declarar a Ferramenta de Roteamento**

   - Crie a RoutingTool com nome, descrição e input usando Zod.
   - Defina as opções válidas: Financial Specialist, Scheduling Specialist, Comms Specialist, End.

2. **Vincular Ferramenta à IA**

   - Use `bindTools` do Longchain para adicionar a RoutingTool à IA.
   - Configure `ToolChoice` para forçar o uso da RoutingTool.

3. **Forçar Chamada de Função**

   - Garanta que a IA sempre chame a RoutingTool ao decidir o próximo nó do grafo.

4. **Capturar Decisão da IA**

   - Ao receber a resposta da IA, extraia o parâmetro `next` da chamada de função.
   - Use esse valor para direcionar o fluxo do grafo.

5. **Testar Escolha dos Especialistas**

   - Simule comandos como "Quero ver minhas contas" ou "Quero mandar uma mensagem".
   - Verifique se a IA escolhe corretamente o especialista ou finaliza o fluxo.

6. **Ajustar Contexto para Decisão**

   - Adicione contexto relevante ao prompt da IA para melhorar a escolha do próximo nó.
   - Evite loops e garanta que o fluxo seja finalizado quando necessário.

7. **Preparar Especialistas para Ação**

   - Implemente ações reais nos especialistas para que o sistema multiagents execute tarefas concretas.

8. **Testar o Sistema Multiagents**
   - Execute o grafo e valide se o RoutingTool direciona corretamente para cada especialista e para o nó final.

---
