# O que significa Context Enrichment

## Tópicos

- **Evolução do Estado**: Alteração do estado para evitar sobrescrita e permitir controle sobre como os outputs são acumulados.
- **Uso de Reducer**: Aplicação do conceito de reducer para combinar o estado atual com novos valores, podendo sobrescrever, manter ou concatenar outputs.
- **Acúmulo de Mensagens**: Transformação do output em um array para acumular múltiplas mensagens ao invés de sobrescrever.
- **Padronização de Mensagens**: Utilização de classes como BaseMessage, AIMessage e HumanMessage para seguir o protocolo de comunicação esperado pela IA.
- **Valor Default**: Definição de valores padrão para o estado, como array vazio ou mensagem inicial.
- **Contador de Nós Executados**: Adição de campo para contar quantos nós foram executados no grafo.
- **Preparação para Multiagentes**: Estado turbinado e pronto para ser usado em sistemas multiagentes e fluxos mais complexos.

---

## Passo-a-Passo

1. **Alterar Estrutura do Estado**

   - Modifique o estado para que o output seja um array ao invés de uma string.
   - Permita acumular múltiplas mensagens sem sobrescrever o valor anterior.

2. **Implementar Reducer**

   - Crie uma função reducer para definir como o estado é atualizado (sobrescrever, manter ou concatenar).
   - Exemplo: `currentOutput.concat(newOutput)` para acumular mensagens.

3. **Definir Valor Default**

   - Configure o valor padrão do output como array vazio ou mensagem inicial.
   - Exemplo: `default: []` ou `default: ['Olá']`.

4. **Padronizar Mensagens**

   - Utilize classes como BaseMessage, AIMessage e HumanMessage para estruturar as mensagens.
   - Adapte o estado para acumular objetos dessas classes ao invés de strings simples.

5. **Adicionar Contador de Nós Executados**

   - Inclua um campo no estado para contar quantos nós foram executados.
   - Implemente um reducer que incremente esse valor a cada execução.

6. **Testar Acúmulo e Padronização**

   - Execute o grafo e verifique se as mensagens estão sendo acumuladas corretamente e seguindo o padrão esperado pela IA.

7. **Preparar para Multiagentes**

   - Garanta que o estado está pronto para ser utilizado em sistemas multiagentes, acumulando histórico e informações relevantes.

8. **Evoluir o Grafo**
   - Adicione novos nós e funcionalidades ao grafo, utilizando o estado turbinado para fluxos mais complexos.

---
