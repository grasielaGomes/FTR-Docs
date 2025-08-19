### Testando a IA com Prompts Personalizados

1. **Objetivo da Etapa**

   - Validar o comportamento da IA utilizando prompts personalizados com dados reais dos clientes.
   - Testar diferentes cenários de atendimento para garantir que a IA responde corretamente conforme o perfil do usuário e as regras do prompt.

2. **Passo a Passo da Implementação**

   1. **Preparar o ambiente de testes**

      - Certifique-se de que o fluxo de integração entre banco de dados, montagem do prompt e chamada à IA está funcionando.
      - Tenha clientes e compras cadastrados no banco de dados.

   2. **Testar perguntas sobre compras**

      - Envie perguntas como:  
        "Olá, gostaria de saber qual foi a minha última compra e o valor dela."
      - Verifique se a IA responde corretamente com o produto e valor da última compra do cliente.

   3. **Testar perguntas sobre status das compras**

      - Envie perguntas como:  
        "Quero saber o status das minhas compras."
      - Confirme se a IA retorna o status de cada compra, incluindo datas e situações (em separação, cancelada, etc.).

   4. **Testar reclamações e solicitações**

      - Envie mensagens como:  
        "Minha compra não chegou."
      - Observe se a IA verifica o status e prazo de entrega, e responde de acordo com o SLA da região do cliente.

   5. **Testar diferentes perfis de clientes**

      - Altere o cliente para um perfil mais jovem (ex: 24 anos) e observe se a linguagem da IA é mais informal.
      - Troque para um cliente idoso (ex: 60 anos) e veja se a resposta é mais respeitosa.
      - Teste com diferentes estados para validar o SLA informado.

   6. **Testar perguntas fora do escopo**

      - Envie perguntas como:  
        "Quero comprar um sabonete."
      - Verifique se a IA limita a resposta ao escopo de pedidos anteriores e direciona para o atendimento humano quando necessário.

   7. **Ajustar e refinar o prompt**
      - Se necessário, ajuste o System Instruction ou o template do prompt para garantir que a IA siga as regras do atendimento.
      - Repita os testes para validar as mudanças.

3. **Observações Importantes**

   - Sempre valide o comportamento da IA com diferentes perfis e situações.
   - Certifique-se de que a IA não forneça informações fora do escopo definido no prompt.
   - Utilize logs e exemplos de respostas para ajustar o tom e a precisão das respostas.

### Conclusão

- Com esses testes, você garante que a IA responde de forma personalizada, respeitando o perfil do cliente e as regras do atendimento.
- Próximos passos: estruturar o código em um servidor HTTP e integrar com a interface de chat para um fluxo completo de atendimento.
