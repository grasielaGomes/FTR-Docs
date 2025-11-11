# O que significa Context Enrichment

## Tópicos

- **Comunicação entre Orquestrador, Agentes e Ferramentas**: O fluxo entre orquestrador e agentes não é apenas uma chamada de função, mas envolve o envio de um estado.
- **Estado do Grafo**: O estado é um pacote de informações que acompanha e registra tudo que acontece no sistema ao longo do tempo.
- **Atualização do Estado**: Cada agente recebe o estado, adiciona ou modifica informações e devolve ao orquestrador ou ao próximo agente.
- **Histórico de Ações**: O estado acumula dados como mensagens, erros, ações realizadas e informações relevantes para a tarefa.
- **Exemplo Prático**: Ao pedir para remarcar uma reunião e enviar um e-mail, o estado registra ambas as ações e possíveis erros, permitindo ao orquestrador gerar uma resposta completa.
- **Estrutura do Estado**: Pode conter lista de mensagens, erros, nome do último agente chamado, sequência de ações, dados específicos como data atual, etc.
- **Importância do Estado**: Permite que agentes atuem de forma independente, mas compartilhem informações relevantes para o fluxo global.
- **Complexidade e Organização**: O uso do estado torna o sistema multi-agentes mais complexo, mas também mais organizado e rastreável.

---

## Passo-a-Passo

1. **Definir o Estado Inicial**

   - Crie uma estrutura de estado que será enviada pelo orquestrador aos agentes.
   - Inclua campos como mensagens, erros, ações, nome do último agente, dados específicos (ex: data atual).

2. **Enviar Estado para o Primeiro Agente**

   - O orquestrador envia o estado inicial para o agente responsável pela primeira tarefa.

3. **Atualizar o Estado no Agente**

   - O agente recebe o estado, executa sua ação e adiciona ou modifica informações relevantes no estado (ex: resultado da ação, erros, dados atualizados).

4. **Devolver Estado ao Orquestrador**

   - O agente devolve o estado atualizado ao orquestrador.

5. **Encaminhar Estado para Próximos Agentes**

   - O orquestrador pode enviar o estado para outros agentes conforme necessário, cada um adicionando suas informações.

6. **Acumular Histórico e Resultados**

   - O estado vai acumulando todas as ações, resultados e erros ao longo do fluxo.

7. **Gerar Resposta Final**

   - O orquestrador utiliza o estado final para construir uma resposta completa para o usuário, informando tudo que foi realizado ou se houve algum erro.

8. **Ajustar Estrutura do Estado Conforme Necessário**

   - Adicione ou remova campos do estado conforme as necessidades do sistema e das tarefas dos agentes.

9. **Testar e Validar o Fluxo**
   - Simule tarefas complexas para garantir que o estado está sendo atualizado corretamente e que o histórico está completo.

---
