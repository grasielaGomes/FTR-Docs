### Componentes Básicos e Armadilhas no Prompt Engineering (Parte 2)

#### Introdução

- **Objetivo:** Explicar componentes básicos e armadilhas comuns na construção de prompts para melhorar a eficácia na interação com agentes conversacionais.

#### Componentes Básicos de um Prompt Eficaz

1. **Formato de Resposta Desejado**

   - **Importância:** Definir claramente o formato de resposta desejado para evitar retrabalhos.
   - **Boa Prática:** Especificar como a resposta deve ser apresentada.
   - **Exemplo:** "Além de me responder com o código que soluciona esse problema, me explique como otimizar esse código para, ao escalar minha aplicação, não haver esse problema novamente, mesmo com x usuários ativos."

2. **Exemplificação de Entrada e Saída**
   - **Importância:** Fornecer exemplos claros de entrada e saída para guiar a resposta do agente.
   - **Boa Prática:** Incluir exemplos específicos de como deve ser a entrada do problema e a saída esperada.
   - **Exemplo:** "Converta números em palavras no seguinte formato: 1, 2, 3. Converta apenas os números de 1 milhão a 1 milhão e 50. Gere também uma saída com o formato sendo apenas os números em extenso, sem os caracteres numéricos."

#### Comparação de Resultados

- **Prompt Simples:** Gera respostas genéricas e pode requerer múltiplos prompts para obter a resposta ideal.
- **Prompt Contextual:** Fornece respostas mais precisas e refinadas com uma única solicitação.

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
