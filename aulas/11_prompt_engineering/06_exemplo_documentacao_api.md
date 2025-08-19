### Comparação entre Prompt Simples e Contextual

#### Introdução

- **Objetivo:** Demonstrar a diferença entre prompts simples e contextuais na interação com agentes conversacionais.

#### Qualidade do Prompt

- **Impacto:** A qualidade do conteúdo inserido afeta diretamente a resposta da inteligência artificial em cenários reais de programação.

#### Exemplo: Documentação de uma API

1. **Prompt Simples**

   - **Pergunta:** "Documente uma API REST para cadastro de usuários."
   - **Resposta:**
     - Geração de documentação em formato JSON.
     - Uso de nomenclatura padrão em inglês.
     - Utilização de métodos HTTP padrão (POST, GET, PUT, DELETE).
     - Inclusão de autenticação JWT e códigos de resposta comuns.

2. **Problemas com o Prompt Simples**

   - **Formato de Dados:** Assume JSON, pode não ser adequado se o projeto usa XML.
   - **Nomenclatura:** Utiliza nomes em inglês, pode não seguir o compliance de uma empresa brasileira.
   - **Generalidade:** Gera uma resposta genérica que pode não atender a requisitos específicos.

3. **Prompt Contextual**

   - **Pergunta:** "Documente uma API REST em formato OpenAPI 3.0 para um sistema de cadastro de usuários com os devidos endpoints de criação, listagem, atualização e exclusão. Inclua exemplos de requisição e resposta em XML, e use nomenclatura em português brasileiro para seguir o compliance do código legado atual do projeto. Inclua detalhes sobre validação de campos."
   - **Resposta:**
     - Geração de documentação em formato OpenAPI 3.0.
     - Uso de nomenclatura em português brasileiro.
     - Exemplos de requisição e resposta em XML.
     - Inclusão de detalhes sobre validação de campos.

4. **Benefícios do Prompt Contextual**
   - **Precisão:** Fornece uma resposta mais próxima do necessário.
   - **Formato Adequado:** Utiliza o formato de dados correto (XML).
   - **Compliance:** Adere ao padrão de nomenclatura especificado (português brasileiro).
   - **Detalhamento:** Inclui validação de campos e exemplos específicos.

#### Comparação de Resultados

- **Prompt Simples:** Gera respostas genéricas e pode requerer múltiplos prompts para obter a resposta ideal.
- **Prompt Contextual:** Fornece respostas mais precisas e refinadas com uma única solicitação.

#### Conclusão

- **Foco:** Utilizar prompts contextuais para obter respostas de alta qualidade e relevância.
- **Benefício:** Melhorar a eficácia e precisão das interações com agentes conversacionais, evitando a necessidade de múltiplos prompts e recontextualizações.
