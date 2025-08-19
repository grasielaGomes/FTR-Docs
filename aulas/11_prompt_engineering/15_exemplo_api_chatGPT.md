### Exemplo de Uso da API do Chat GPT

#### Introdução

- **Objetivo:** Demonstrar como utilizar a API do Chat GPT para criar automatizações e interações programáticas.

#### Carregamento de Variáveis de Ambiente

- **Descrição:** Carregar variáveis de ambiente para configurar a chave de API de forma segura.
- **Benefício:** Evitar a exposição de chaves de API sensíveis.

#### Configuração da Requisição

- **Cabeçalho:** Incluir a chave de API no cabeçalho da requisição.
- **Payload:** Definir o modelo (GPT-4) e as mensagens a serem enviadas.
  - **Mensagem para o Sistema:** Definir o papel do assistente (ex: "Você é um assistente que responde perguntas técnicas sobre programação").
  - **Pergunta do Usuário:** Exemplo de pergunta (ex: "Explique a diferença entre REST e GraphQL").
  - **Temperatura:** Ajustar a criatividade da resposta.
  - **Máximo de Tokens:** Definir o limite de caracteres na resposta.

#### Execução da Requisição

- **Processo:** Enviar a requisição para a API do Chat GPT e imprimir a resposta.
- **Tratamento de Erros:** Capturar e tratar possíveis erros na requisição.

#### Exemplo de Código

- **Descrição:** Código para fazer a requisição à API do Chat GPT e gerar uma resposta.
- **Processo:**
  - Fazer a requisição para a API do Chat GPT.
  - Gerar a mensagem.
  - Enviar a mensagem via API do WhatsApp (ou outra integração desejada).

#### Automação com Cronjob

- **Descrição:** Configurar um cronjob para rodar o script diariamente ao meio-dia.
- **Ferramenta:** Bash script ou comando adequado.

#### Integração com Outras APIs

- **Exemplo:** Enviar mensagens automáticas via WhatsApp.
  - **Integração com API do WhatsApp:** Utilizar a API para enviar a mensagem gerada pelo Chat GPT.

#### Aplicações Avançadas

- **Exemplo:** Avaliação diária de código no GitHub.
  - **Processo:** Ler código do GitHub, analisar commits e sugerir otimizações diárias.

#### Conclusão

- **Foco:** Utilizar a API do Chat GPT para criar automatizações eficientes.
- **Benefício:** Melhorar a eficácia e precisão das interações automatizadas, garantindo respostas claras e consistentes.
