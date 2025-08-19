### **Quiz - Documentação de APIs Node.js com OpenAPI**

1. **O que um arquivo de especificação OpenAPI define?**

   - **Resposta correta:** A estrutura e comportamento da API.

2. **Em qual seção do arquivo OpenAPI é possível definir esquemas de dados reutilizáveis?**

   - **Resposta correta:** components/schemas.

3. **Onde a lógica para definir um valor padrão para um parâmetro de query não informado deve ser configurada?**

   - **Resposta correta:** Manualmente no backend.

4. **Qual o significado de incluir uma propriedade como required em um schema OpenAPI, mesmo que ela possa ser nula?**

   - **Resposta correta:** Para indicar que a propriedade sempre estará presente no objeto, mesmo que nula.

5. **Qual é a finalidade de definir schemas e types na documentação OpenAPI?**

   - **Resposta correta:** Para instruir o front-end sobre o formato esperado dos dados, sem impor validações automáticas.

6. **Qual é a função do objeto info na especificação OpenAPI?**

   - **Resposta correta:** Fornecer informações gerais sobre a API, como título e versão.

7. **Qual propriedade é utilizada para descrever as rotas e operações disponíveis na API?**

   - **Resposta correta:** paths.

8. **Como é realizada a referência a um componente já definido dentro da especificação?**

   - **Resposta correta:** Utilizando o formato #/components/{tipo}/{nome}.

9. **O que o campo paths descreve em um documento OpenAPI?**

   - **Resposta correta:** Os endpoints da API e suas operações.

10. **Qual tipo de dado NÃO é válido em uma especificação OpenAPI?**

    - **Resposta correta:** char.

11. **Qual dos seguintes é um tipo válido de resposta HTTP na OpenAPI?**

    - **Resposta correta:** responses: {200: {...}, 404: {...}}.

12. **Onde se define o tipo de autenticação usada por uma API na especificação OpenAPI?**
    - **Resposta correta:** Dentro de securitySchemes em components.
