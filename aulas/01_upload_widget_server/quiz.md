### Quiz - Upload Widget Server

1. **O que acontece se uma rota não for registrada no servidor Fastify?**

   - Resposta correta: O servidor retorna um erro 404 indicando que a rota não foi encontrada.

2. **Qual das opções abaixo descreve corretamente a funcionalidade do método `z.coerce.number()` no código?**

   - Resposta correta: Converte o valor para número e lança um erro se a conversão falhar.

3. **Qual o principal motivo para escolher o Drizzle ORM em relação ao Prisma, de acordo com a aula?**

   - Resposta correta: Maior facilidade de escrita de queries complexas devido à sua integração com TypeScript.

4. **Qual a principal diferença entre validação e serialização de dados em uma aplicação?**

   - Resposta correta: Validação verifica os dados de entrada, enquanto serialização ajusta os dados de saída.

5. **Qual o principal objetivo da abordagem funcional de tratamento de erros apresentada na aula?**

   - Resposta correta: Melhorar a legibilidade e a manutenção do código.

6. **Qual é o comportamento esperado ao rodar o código, caso `NODE_ENV` seja definido como `staging`, que não está no esquema?**

   - Resposta correta: O código lança um erro de validação e para a execução.

7. **Qual a importância de utilizar um algoritmo de geração de IDs que seja "time sortable"?**

   - Resposta correta: Permite ordenar os registros por data de criação de forma eficiente.

8. **Qual funcionalidade foi destacada como diferencial do Cloudflare R2 em relação ao Amazon S3?**

   - Resposta correta: Custo reduzido para armazenamento de arquivos.

9. **Qual a principal vantagem do Vitest mencionada na aula em comparação com o Jest?**

   - Resposta correta: Maior velocidade e uso do esbuild como base.

10. **Qual é a principal função do Swagger no contexto do Fastify?**

    - Resposta correta: Gerar documentação interativa para APIs.

11. **O que é o Biome?**

    - Resposta correta: Um formatter e linter para padronização de código.

12. **No arquivo `server.ts`, qual é o propósito do plugin `fastifyCors`?**

    - Resposta correta: Permitir o acesso ao servidor de diferentes origens.

13. **Qual o propósito da pasta `migrations` dentro da estrutura do projeto?**

    - Resposta correta: Armazenar os arquivos SQL gerados para criar e alterar as tabelas do banco de dados.

14. **O que acontece quando o método `server.setErrorHandler` detecta um erro de validação?**

    - Resposta correta: O servidor retorna um status 400 com detalhes do erro de validação.

15. **Qual o principal motivo para utilizar streams no upload de imagens, em vez de carregar o arquivo inteiro para a memória?**

    - Resposta correta: Menor consumo de memória, especialmente para arquivos grandes.

16. **Qual das seguintes opções descreve corretamente o uso do `fastifyMultipart`?**

    - Resposta correta: Adicionar suporte a multi-part form data para upload de arquivos.

17. **Qual é a função do método `server.setValidatorCompiler` no Fastify?**

    - Resposta correta: Configurar o compilador usado para validar os dados de entrada nas rotas.

18. **Qual a principal diferença entre `makeLeft` e `isLeft`?**

    - Resposta correta: `makeLeft` cria um valor `Either` representando uma falha, enquanto `isLeft` verifica se um `Either` é uma falha.

19. **No código apresentado, qual é o objetivo do objeto `jsonSchemaTransform` usado na configuração do Swagger?**

    - Resposta correta: Transformar o esquema de validação para o padrão OpenAPI.

20. **Por que o projeto utiliza o TSX como dependência?**

    - Resposta correta: Para rodar arquivos TypeScript sem precisar de transpilação manual.

21. **Qual é o propósito do trecho `volumes: './docker:/docker-entrypoint-initdb.d'` no arquivo docker-compose.yml?**

    - Resposta correta: Garantir que os arquivos no diretório `./docker` sejam executados durante a inicialização do container.

22. **Qual o papel da classe `Either` na abordagem apresentada?**

    - Resposta correta: Representar um valor que pode ser um sucesso ou uma falha.

23. **Qual é a função do método `fastify.register` no servidor?**

    - Resposta correta: Registrar um plugin ou uma rota para o servidor Fastify.

24. **Por que a paginação baseada em offset pode ser ineficiente em bancos de dados com grande quantidade de dados?**
    - Resposta correta: Porque o banco de dados precisa ler todos os registros anteriores ao offset para retornar os resultados.
