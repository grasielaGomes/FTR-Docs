# O que significa Context Enrichment

## Destaques

- **Multiagentes no Grafo**: Adição de agentes especialistas conectados por um supervisor.
- **Especialização de Funções**: Cada agente cuida de uma área (financeiro, agendamento, comunicação).
- **Supervisor Inteligente**: O supervisor decide qual especialista acionar em cada etapa.
- **Execução Sequencial**: O grafo é ajustado para garantir que as ações ocorram em sequência, não em paralelo.
- **Arestas Condicionais**: Uso de arestas condicionais para controlar o fluxo entre supervisor e especialistas.
- **Retorno ao Supervisor**: Especialistas retornam ao supervisor após execução.
- **Finalização do Fluxo**: O supervisor decide quando encerrar e direcionar para o nó final (end).
- **Preparação para Inteligência**: Próximo passo é adicionar lógica de IA para decisões do supervisor e ações dos especialistas.

---

## Passo-a-Passo

1. **Adicionar Agentes ao Grafo**

   - Crie os nós para Supervisor, Financial Specialist, Scheduling Specialist e Comms Specialist.
   - Remova nós mock antigos e reutilize o nó do Supervisor.

2. **Conectar Supervisor aos Especialistas**

   - Adicione arestas do Supervisor para cada especialista.
   - Inicialmente, conecte todos em paralelo para visualização.

3. **Ajustar para Execução Sequencial**

   - Substitua arestas diretas por arestas condicionais usando funções que decidem o próximo nó com base no estado.
   - Exemplo: Supervisor chama Financial Specialist, depois retorna ao Supervisor, que chama o próximo especialista.

4. **Implementar Retorno ao Supervisor**

   - Após execução, cada especialista retorna ao Supervisor.
   - Adicione arestas dos especialistas de volta ao Supervisor.

5. **Controlar Fluxo com Estado**

   - Use o campo de nós executados no estado para decidir qual especialista será chamado em cada etapa.
   - Implemente lógica condicional para sequência: Financial → Scheduling → Comms → End.

6. **Adicionar Funções para Cada Especialista**

   - Crie funções distintas para cada especialista, exibindo logs para identificar a execução.

7. **Finalizar Fluxo**

   - Após todos os especialistas serem chamados, Supervisor direciona para o nó End.
   - Garanta que o fluxo não entre em loop infinito.

8. **Testar Execução do Grafo**

   - Execute o grafo e verifique se os especialistas são chamados na ordem correta e o fluxo é finalizado.

9. **Preparar para Inteligência**
   - Planeje adicionar lógica de IA para decisões do Supervisor e ações dos especialistas.
   - Considere adicionar um nó de chat para interação com o usuário.

---

# O que significa Context Enrichment

## Destaques

- **Multiagentes no Grafo**: Adição de agentes especialistas conectados por um supervisor.
- **Especialização de Funções**: Cada agente cuida de uma área (financeiro, agendamento, comunicação).
- **Supervisor Inteligente**: O supervisor decide qual especialista acionar em cada etapa.
- **Execução Sequencial**: O grafo é ajustado para garantir que as ações ocorram em sequência, não em paralelo.
- **Arestas Condicionais**: Uso de arestas condicionais para controlar o fluxo entre supervisor e especialistas.
- **Retorno ao Supervisor**: Especialistas retornam ao supervisor após execução.
- **Finalização do Fluxo**: O supervisor decide quando encerrar e direcionar para o nó final (end).
- **Preparação para Inteligência**: Próximo passo é adicionar lógica de IA para decisões do supervisor e ações dos especialistas.

---

## Passo-a-Passo

1. **Adicionar Agentes ao Grafo**

   - Crie os nós para Supervisor, Financial Specialist, Scheduling Specialist e Comms Specialist.
   - Remova nós mock antigos e reutilize o nó do Supervisor.

2. **Conectar Supervisor aos Especialistas**

   - Adicione arestas do Supervisor para cada especialista.
   - Inicialmente, conecte todos em paralelo para visualização.

3. **Ajustar para Execução Sequencial**

   - Substitua arestas diretas por arestas condicionais usando funções que decidem o próximo nó com base no estado.
   - Exemplo: Supervisor chama Financial Specialist, depois retorna ao Supervisor, que chama o próximo especialista.

4. **Implementar Retorno ao Supervisor**

   - Após execução, cada especialista retorna ao Supervisor.
   - Adicione arestas dos especialistas de volta ao Supervisor.

5. **Controlar Fluxo com Estado**

   - Use o campo de nós executados no estado para decidir qual especialista será chamado em cada etapa.
   - Implemente lógica condicional para sequência: Financial → Scheduling → Comms → End.

6. **Adicionar Funções para Cada Especialista**

   - Crie funções distintas para cada especialista, exibindo logs para identificar a execução.

7. **Finalizar Fluxo**

   - Após todos os especialistas serem chamados, Supervisor direciona para o nó End.
   - Garanta que o fluxo não entre em loop infinito.

8. **Testar Execução do Grafo**

   - Execute o grafo e verifique se os especialistas são chamados na ordem correta e o fluxo é finalizado.

9. **Preparar para Inteligência**
   - Planeje adicionar lógica de IA para decisões do Supervisor e ações dos especialistas.
   - Considere adicionar um nó de chat para interação com o usuário.

---
