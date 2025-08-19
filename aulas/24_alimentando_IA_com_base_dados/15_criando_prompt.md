### Criando o Prompt para Atendimento de Clientes com IA

1. **Objetivo da Etapa**

   - Criar o prompt (System Instruction) que irá orientar o comportamento da IA no atendimento ao cliente.
   - Garantir que a IA responda apenas sobre pedidos e direcione outras demandas para atendimento humano.

2. **Passo a Passo da Implementação**

   1. **Entender o papel do System Instruction**

      - O System Instruction é uma instrução oculta, não visível ao usuário, que define como a IA deve se comportar.
      - Ele serve como diretriz para o modelo, restringindo e orientando suas respostas.

   2. **Definir as regras do atendimento**

      - A IA deve agir como atendente de uma empresa de e-commerce.
      - Só pode responder perguntas sobre pedidos do cliente.
      - Se o cliente perguntar sobre outros assuntos, a IA deve direcionar para atendimento humano.
      - Caso o cliente pergunte sobre a empresa, produtos ou qualquer tema não relacionado a pedidos, a IA deve informar que não pode ajudar e indicar o contato do atendimento humano.

   3. **Exemplo de System Instruction**

      - Crie uma variável string no seu código para armazenar o prompt:
        ```js
        const systemInstruction = `
        Você é atendente de uma empresa de e-commerce e está conversando com clientes sobre dúvidas de suas compras recentes no site.
        Responda os clientes de forma amigável.
        Só responda perguntas relacionadas a pedidos do cliente.
        Caso o cliente pergunte sobre algo não relacionado à empresa ou aos nossos serviços, indique que não pode ajudá-lo com isso.
        Caso o cliente pergunte sobre algo relacionado à empresa, mas que não seja explicitamente sobre suas compras passadas, direcione-o ao atendimento humano pelo número (11) 1234-5678.
        `
        ```

   4. **Utilizar o System Instruction na chamada da IA**

      - Ao fazer a chamada para a API do modelo (ex: Google Gemini), inclua o System Instruction na configuração do modelo:
        ```js
        const model = genAI.getGenerativeModel({
          model: 'gemini-2.0-flash',
          systemInstruction,
        })
        ```

   5. **Testar o comportamento da IA**

      - Faça perguntas sobre pedidos e verifique se a IA responde corretamente.
      - Faça perguntas sobre outros assuntos (ex: "qual a origem da vida?" ou "quais produtos vocês vendem?") e confira se a IA direciona para o atendimento humano ou informa que não pode ajudar.

   6. **Ajustar o prompt conforme necessário**
      - Refine o texto do System Instruction para garantir que a IA siga as regras do atendimento.
      - Teste diferentes cenários e ajuste as instruções para evitar respostas indesejadas.

3. **Observações Importantes**

   - Sempre restrinja o escopo do atendimento da IA para evitar respostas inadequadas ou fora do contexto.
   - O System Instruction é fundamental para garantir segurança e alinhamento com os objetivos do projeto.
   - Atualize o número de contato e detalhes conforme a realidade da sua empresa.

### Conclusão

- Com esses passos, você terá um prompt bem definido para orientar a IA no atendimento ao cliente.
- Próximos passos: inserir dados reais do banco de dados no prompt para personalizar ainda mais as respostas da IA.
