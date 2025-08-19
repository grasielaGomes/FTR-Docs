### Tipos de Prompts

#### Introdução

- Existem quatro tipos principais de prompts utilizados em Prompt Engineering.

#### Tipos de Prompts

1. **Prompt Simples**

   - **Definição:** Solicitação direta sem contexto adicional.
   - **Exemplo:** "Como forçar o uso de um índice específico numa consulta no MongoDB?"
   - **Problema:** Gera respostas genéricas e insuficientes.

2. **Prompt Contextual**

   - **Definição:** Adiciona informações relevantes para refinar a resposta.
   - **Exemplo:** "Possuo um banco MongoDB na versão 3 e estou criando uma aplicação em PHP conectando com o banco usando o driver nativo. Gostaria de forçar o uso de um índice. Como é possível fazer isso de forma eficaz, performática e validando se o uso está correto antes de realizar o deploy desta funcionalidade?"
   - **Benefício:** Fornece respostas mais refinadas e precisas.

3. **Prompt Baseado em Exemplos**

   - **Definição:** Fornece exemplos específicos para guiar a resposta.
   - **Exemplo:** "Aqui está um código que eu fiz para autenticar com login e senha. Use esse mesmo código, mas gere um novo que autentique com email e senha, adicionando uma validação de email."
   - **Benefício:** Gera respostas baseadas em padrões fornecidos, facilitando a obtenção de resultados específicos.

4. **Prompt Interativo**
   - **Definição:** Envolve uma interação contínua com o agente, ajustando o contexto conforme a conversa avança.
   - **Exemplo:** "Se minha versão do MongoDB for atualizada para 6, o que acontece?"
   - **Benefício:** Permite explorar diferentes cenários e obter informações adicionais relevantes.

#### Comparação de Prompts

- **Prompt Simples:** Genérico, requer múltiplos prompts para obter a resposta ideal.
- **Prompt Contextual:** Refinado, fornece respostas mais precisas com uma única solicitação.
- **Prompt Baseado em Exemplos:** Específico, utiliza padrões fornecidos para gerar respostas detalhadas.
- **Prompt Interativo:** Dinâmico, ajusta o contexto conforme a interação avança.

#### Conclusão

- **Foco:** Evitar prompts simples e genéricos.
- **Objetivo:** Utilizar prompts contextuais, baseados em exemplos e interativos para obter respostas de alta qualidade e relevância.
- **Benefício:** Melhorar a eficácia e precisão das interações com agentes conversacionais.
