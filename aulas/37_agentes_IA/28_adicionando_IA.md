# O que significa Context Enrichment

## Destaques

- **Supervisor Inteligente**: O supervisor do grafo passa a tomar decisões usando IA.
- **Uso de IA Generativa**: Implementação do Google Gemini via SDK Longchain.
- **Decisão Dinâmica**: Supervisor escolhe o próximo agente com base nas opções disponíveis.
- **Estado do Grafo**: O estado inclui o próximo nó a ser chamado, controlado pela IA.
- **Formatação do Output**: Ajuste do formato de resposta da IA para garantir integração correta.
- **Ferramenta de Escolha**: Planejamento para criar uma ferramenta que restrinja as opções da IA.
- **Preparação para Fluxos Complexos**: Base para adicionar lógica mais avançada e ferramentas customizadas.

---

## Passo-a-Passo

1. **Instalar SDK Longchain para Google Gemini**

   - Execute:
     ```bash
     npm install longchain-google-genai
     ```

2. **Importar e Instanciar IA Generativa**

   - Importe o chat Google Gen AI no código.
   - Instancie o modelo desejado (ex: Flash ou Pro) e configure a API Key.

3. **Testar Chamada Básica da IA**

   - Use `ai.invoke` para enviar uma mensagem simples e verificar a resposta.

4. **Integrar IA ao Supervisor**

   - No nó do Supervisor, altere a lógica para que a decisão do próximo agente seja feita pela IA.
   - Adicione ao estado o campo `nextNode` para registrar a escolha da IA.

5. **Ajustar Formato de Output**

   - Solicite à IA que retorne apenas o nome do próximo nó, sem texto extra ou quebras de linha.
   - Implemente tratamento para garantir que o valor retornado seja compatível com o grafo.

6. **Testar Decisão da IA**

   - Execute o grafo e verifique se o Supervisor escolhe corretamente o próximo agente com base nas opções fornecidas.

7. **Corrigir Problemas de Formatação**

   - Ajuste prompts e tratamento de resposta para evitar erros de formatação (ex: quebras de linha indesejadas).

8. **Planejar Ferramenta de Escolha**

   - Crie uma ferramenta que restrinja as opções da IA, garantindo que ela só possa escolher entre os estados válidos.

9. **Preparar para Lógica Avançada**
   - Estruture o sistema para adicionar lógica mais complexa e ferramentas customizadas conforme o projeto evolui.

---
