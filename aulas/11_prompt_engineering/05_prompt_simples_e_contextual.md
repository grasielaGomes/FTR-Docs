### Comparação entre Prompt Simples e Contextual

#### Introdução

- **Objetivo:** Demonstrar a diferença entre prompts simples e contextuais na interação com agentes conversacionais.

#### Qualidade do Prompt

- **Impacto:** A qualidade do conteúdo inserido afeta diretamente a resposta da inteligência artificial em cenários reais de programação.

#### Exemplo 1: Cálculo de Média de um Array

1. **Prompt Simples**

   - **Pergunta:** "Escreva uma função para calcular a média de um array."
   - **Resposta:**
     - Função em PHP para calcular a média de um array de números.
     - Validação para array vazio retornando zero.
     - Uso de camel case para nome da função.
     - Retorno do tipo float.

2. **Problemas com o Prompt Simples**

   - **Padrão de Nomenclatura:** Pode não corresponder ao padrão do código existente (ex: camel case vs snake case).
   - **Retorno Zero:** Pode não ser desejado, preferindo retornar nulo.
   - **Falta de Testes:** Não inclui testes refinados.

3. **Prompt Contextual**

   - **Pergunta:** "Escreva uma função em Python chamada calcular_média (snake case) que recebe uma lista de números inteiros, ignora valores nulos e, caso a lista esteja vazia, retorne nulo. Inclua um teste simples para validar a função."
   - **Resposta:**
     - Função em Python para calcular a média de uma lista de números inteiros.
     - Ignora valores nulos.
     - Retorna nulo se a lista estiver vazia.
     - Inclui um teste simples para validar a função.

4. **Benefícios do Prompt Contextual**
   - **Precisão:** Fornece uma resposta mais próxima do necessário.
   - **Validação:** Inclui testes para validar a função.
   - **Padrão de Nomenclatura:** Adere ao padrão especificado (snake case).

#### Comparação de Resultados

- **Prompt Simples:** Gera respostas genéricas e pode requerer múltiplos prompts para obter a resposta ideal.
- **Prompt Contextual:** Fornece respostas mais precisas e refinadas com uma única solicitação.

#### Conclusão

- **Foco:** Utilizar prompts contextuais para obter respostas de alta qualidade e relevância.
- **Benefício:** Melhorar a eficácia e precisão das interações com agentes conversacionais, evitando a necessidade de múltiplos prompts e recontextualizações.
