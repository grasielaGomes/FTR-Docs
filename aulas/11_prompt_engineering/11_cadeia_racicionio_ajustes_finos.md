### Cadeia de Raciocínio e Ajustes Finos no Prompt Engineering

#### Introdução

- **Objetivo:** Explicar como aplicar a cadeia de raciocínio e ajustes finos para melhorar a eficácia na interação com agentes conversacionais.

#### Cadeia de Raciocínio (Chain of Thought)

- **Definição:** Construção de um entendimento através de etapas intermediárias para alcançar a resposta final de forma mais precisa.
- **Exemplo:**
  - **Cenário:** Obter vendas com produtos acima de R$100.
  - **Processo:**
    - Inicialmente, considerar vendas com ao menos um produto acima de R$100.
    - Refinar para considerar vendas onde todos os produtos são acima de R$100.
    - Ajustar para considerar o valor total da venda acima de R$100.

#### Ajustes Finos (Fine Tuning)

- **Definição:** Interagir em diferentes iterações para fazer ajustes finos no processo de construção do prompt.
- **Exemplo:**
  - **Cenário:** Otimizar uma consulta SQL.
  - **Processo:**
    - Solicitar a consulta mais otimizada possível.
    - Pedir sugestões adicionais para melhorar a performance geral do banco e da aplicação.

#### Comparação de Resultados

- **Cadeia de Raciocínio:** Permite construir um entendimento detalhado e preciso.
- **Ajustes Finos:** Melhora continuamente a qualidade da resposta através de iterações.

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
