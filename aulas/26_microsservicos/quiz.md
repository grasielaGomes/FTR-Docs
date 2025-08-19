### Quiz - Fundamentos de Microsserviços

1. **Além de rotear requisições, quais duas funcionalidades transversais (que se aplicam a vários serviços) podem ser centralizadas no API Gateway para evitar duplicação de lógica?**
   **Resposta correta:** Rate Limiting (limitação de taxa de requisições por usuário) e Autenticação (validação de tokens JWT).

2. **Qual das seguintes afirmações melhor descreve a principal característica da arquitetura de microsserviços, conforme abordado na aula?**
   **Resposta correta:** A arquitetura de microsserviços é principalmente uma arquitetura de infraestrutura, onde os serviços são independentemente implantáveis e podem utilizar tecnologias diferentes.

3. **O que é idempotência no contexto de microsserviços e qual problema ela visa resolver?**
   **Resposta correta:** Idempotência é um princípio que garante que o processamento de uma mesma mensagem (ou requisição) várias vezes produza o mesmo resultado que processá-la uma única vez, resolvendo o problema de operações duplicadas acidentalmente (como criar o mesmo registro duas vezes).

4. **Qual é o principal desafio de observabilidade em uma arquitetura de microsserviços em comparação com um monolito, e qual conceito é introduzido para resolvê-lo?**
   **Resposta correta:** O desafio é que uma única ação do usuário pode gerar um fluxo complexo e não linear de requisições (síncronas e assíncronas) entre vários serviços. O conceito para resolver isso é o Tracing Distribuído.

5. **De acordo com a aula, qual é a regra fundamental sobre persistência de dados em uma arquitetura de microsserviços e qual desafio isso introduz?**
   **Resposta correta:** Cada serviço deve ter seu próprio banco de dados (ou estrutura de persistência), introduzindo o desafio de manter a consistência e, por vezes, a necessidade de duplicar dados entre os serviços.

6. **Qual é o principal desafio no consumo de dados por parte do cliente (front-end) em uma arquitetura de microsserviços, que o padrão Backend for Frontend (BFF) visa resolver?**
   **Resposta correta:** A necessidade de o front-end fazer múltiplas requisições a diferentes serviços (⁠Orders, ⁠Invoices, etc.) e depois ter que combinar (fazer "merge") essas informações por conta própria para montar uma única tela.

7. **Em uma arquitetura de microsserviços, qual é a abordagem recomendada para gerenciar a autenticação dos usuários?**
   **Resposta correta:** Um serviço centralizado e especializado em Autenticação (Auth) é responsável por gerar os tokens (ex: JWT), enquanto os outros serviços apenas validam esses tokens.

8. **No contexto do Saga Pattern, o que é uma "ação de compensação" (compensating action)?**
   **Resposta correta:** É uma ação que tem como objetivo reverter ou anular os efeitos de uma ação anterior que foi bem-sucedida, caso a transação geral falhe em um passo futuro.
