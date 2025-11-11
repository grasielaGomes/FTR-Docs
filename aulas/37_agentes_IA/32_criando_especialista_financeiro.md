# O que significa Context Enrichment

## Destaques

- **Supervisor Inteligente**: Supervisor já atua como agente, redirecionando mensagens para especialistas.
- **Especialistas como Agentes**: Especialistas passam a ser agentes Reasoning & Acting (React).
- **Uso do CreateReactAgent**: Facilita a criação de agentes que raciocinam e agem.
- **Prompt Personalizado**: Cada especialista recebe um prompt específico para sua área.
- **Chamada de Ferramentas**: Especialistas usam ferramentas declaradas para executar ações.
- **Mensagens Estruturadas**: Respostas dos especialistas são estruturadas e identificadas.
- **Declaração de Ferramentas Dinâmicas**: Uso de dynamicStructuredTool para criar funções do especialista.
- **Validação de Parâmetros**: Uso de Zod para definir e validar os inputs das ferramentas.
- **Execução e Testes**: Teste do fluxo completo, desde o supervisor até o especialista e retorno ao usuário.
- **Preparação para Outros Especialistas**: Estrutura pronta para adicionar especialistas de comunicação e agendamento.

---

## Passo-a-Passo

1. **Transformar Especialista em Agente React**

   - Importe e utilize `createReactAgent` do LangGraph.
   - Passe a IA, lista de ferramentas e prompt personalizado para o agente.

2. **Definir Prompt do Especialista**

   - Crie um `SystemMessage` com instruções específicas para o especialista (ex: analista financeiro).

3. **Chamar o Agente no Grafo**

   - No nó do especialista, invoque o agente passando o estado (com histórico de mensagens).

4. **Estruturar Resposta do Especialista**

   - Pegue a última mensagem do resultado e retorne como resposta estruturada (ex: HumanMessage com nome do especialista).

5. **Declarar Ferramentas Dinâmicas**

   - Use `dynamicStructuredTool` para criar funções como `payBill`.
   - Defina nome, descrição, esquema de parâmetros (Zod) e função assíncrona.

6. **Validar Parâmetros com Zod**

   - Importe Zod e defina o esquema de parâmetros (ex: valor da conta).
   - Garanta que as ferramentas aceitem e validem os inputs corretamente.

7. **Testar Execução do Especialista**

   - Execute o grafo e simule comandos como "Quero pagar minha conta de 300 reais".
   - Verifique se o especialista executa a função e retorna a resposta correta.

8. **Corrigir Erros de Implementação**

   - Ajuste nomes, tipos de mensagens e parâmetros conforme necessário para evitar erros.

9. **Preparar para Outros Especialistas**
   - Estruture funções e agentes para especialistas de comunicação e agendamento.
   - Planeje interação com o usuário via chat para retorno das respostas.

---
