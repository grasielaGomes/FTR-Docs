### Comparando Retornos

#### Cenário de Exemplo

- **Configuração:** Duas abas do chat GPT (uma com pergunta convencional e outra com pergunta elaborada).
- **Ferramenta:** Chat GPT-4 (versão paga) e Chat GPT-3 (versão gratuita).

#### Exemplo de MongoDB

- **Objetivo:** Forçar o uso de um índice específico em uma consulta no MongoDB.
- **Problema:** Consulta deve usar índice B ou C em vez do índice A.

#### Pergunta Convencional

- **Pergunta:** "Como forçar o uso de um índice específico numa consulta no MongoDB?"
- **Resposta:** Uso do método `hint` encadeado após a consulta.
  - **Detalhe:** Funciona para versões acima da versão 5 do MongoDB.
  - **Problema:** Não funciona para versões legadas (anteriores à versão 5).

#### Problemas com a Resposta Convencional

- **Versões Legadas:** Método `hint` não é suportado em versões antigas do MongoDB.
- **Solução:** Necessidade de verificar a versão do MongoDB e ajustar a consulta conforme a versão.

#### Pergunta Elaborada

- **Pergunta:** "Possuo um banco MongoDB que está na versão 3 e estou criando uma aplicação em PHP conectando com o banco usando o driver nativo. Gostaria de forçar o uso de um índice. Como é possível fazer isso de forma eficaz, performática e validando se o uso está correto antes de realizar o deploy desta funcionalidade?"
- **Resposta:**
  - **Detalhe:** Fornece a solução específica para a versão 3 do MongoDB.
  - **Código:** Exemplos de como usar o método `hint` em PHP.
  - **Informações Adicionais:** Métricas de tempo de execução, chaves examinadas e documentos retornados.

#### Comparação das Abordagens

- **Pergunta Convencional:** Resposta genérica, pode não funcionar para versões legadas.
- **Pergunta Elaborada:** Resposta específica, considera a versão do MongoDB e a linguagem de programação utilizada.

#### Importância do Contexto

- **Contexto:** Essencial para obter respostas precisas e relevantes.
- **Memória do Agente:** Atualizar o agente com informações contextuais para melhorar a precisão das respostas futuras.

#### Princípio de Programação

- **Princípio:** Criar algo rápido sem pensar pode gerar problemas futuros.
- **Solução:** Investir tempo na elaboração de perguntas detalhadas para obter respostas precisas e evitar problemas.

#### Conclusão

- **Ferramentas:** Utilização de ferramentas como chat GPT para melhorar a produtividade.
- **Objetivo:** Acelerar a produtividade como desenvolvedor, engenheiro ou programador.
- **Próximos Passos:** Explorar tópicos mais importantes de Prompt Engineering.
