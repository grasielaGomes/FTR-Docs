### Zero-Shot e Few-Shot Learning

#### Introdução

- **Objetivo:** Entender como aplicar estratégias técnicas sofisticadas em prompts para resolver problemas complexos e obter respostas mais precisas de modelos de IA.

#### Zero-Shot Learning

- **Definição:** Pedir ao modelo para executar uma tarefa sem fornecer exemplos prévios.
- **Exemplo:** "Escreva uma query SQL para selecionar todos os produtos com preço acima de 100."
  - **Limitações:** Funciona bem para tarefas simples, mas pode falhar se a tarefa exigir contexto adicional.
  - **Problema:** Se a tabela de produtos tiver um nome diferente, como "products" em vez de "produtos", a resposta pode não ser adequada.

#### Few-Shot Learning

- **Definição:** Fornecer ao modelo alguns exemplos antes de pedir para executar a tarefa.
- **Exemplo:** "Já possuo uma consulta que traz produtos com preço acima de 50. Gere uma consulta similar para produtos com preço acima de 100."
  - **Benefício:** O modelo utiliza os exemplos fornecidos para entender o contexto e gerar uma resposta mais precisa.
  - **Cenário:** Fornecer exemplos de consultas SQL e pedir para gerar uma nova consulta baseada nesses exemplos.

#### Comparação de Resultados

- **Zero-Shot Learning:** Gera respostas baseadas apenas na informação passada, pode ser insuficiente para tarefas complexas.
- **Few-Shot Learning:** Fornece respostas mais precisas e refinadas ao utilizar exemplos para contextualizar a tarefa.

#### Exemplo Prático

- **Cenário:** Solicitar a conversão de números em palavras.
  - **Prompt Simples:** "Converta números em palavras."
    - **Problema:** Resposta genérica e confusa.
  - **Prompt Específico:** "Converta números em palavras no seguinte formato: 1, 2, 3. Converta apenas os números de 1 milhão a 1 milhão e 50. Gere também uma saída com o formato sendo apenas os números em extenso, sem os caracteres numéricos."
    - **Benefício:** Resposta clara e precisa, com exemplos de entrada e saída.

#### Conclusão

- **Foco:** Utilizar prompts contextuais e exemplificar entrada e saída para obter respostas de alta qualidade e relevância.
- **Benefício:** Melhorar a eficácia e precisão das interações com agentes conversacionais, evitando a necessidade de múltiplos prompts e recontextualizações.

#### Revisão dos Componentes Importantes

1. Clareza e especificidade.
2. Contexto relevante.
3. Definir o formato de resposta desejado.
4. Exemplificação de entrada e saída.
5. Restrição e parametrização.
