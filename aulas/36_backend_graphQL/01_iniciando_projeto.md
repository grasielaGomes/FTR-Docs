# Iniciando Projeto com GraphQL

## Destaques

- **Projeto Mindshare**: Plataforma para equipes proporem ideias, darem feedbacks e votarem nas melhores.
- **Aprendizado Prático**: Construção de uma aplicação real do zero, aplicando conceitos de GraphQL.
- **Vantagem do GraphQL**: Um único endpoint, payload otimizado e consultas flexíveis.
- **Ferramentas Utilizadas**: Node.js, TypeScript, Apollo Server, Playground do Apollo, Express (futuramente), SQLite.

---

## Passo-a-Passo para Iniciar o Projeto Mindshare com GraphQL

1. **Introdução ao Projeto**

   - Objetivo: Construir uma plataforma colaborativa para ideias e feedbacks.
   - Aplicação prática dos conceitos de GraphQL durante o desenvolvimento.

2. **Entendendo o GraphQL**

   - Criado pelo Facebook em 2012, aberto em 2015.
   - Diferente do REST: apenas um endpoint, cliente escolhe os dados que deseja.
   - Payload mais limpo e otimizado para o front-end.

3. **Preparando o Ambiente**

   - Abra o editor de código.
   - Instancie um novo terminal.

4. **Inicializando o Projeto Node**

   - Execute: `npm init -y`
   - Adicione `"type": "module"` ao `package.json` para usar ES Modules.

5. **Instalando Dependências Principais**

   - Instale Apollo Server e GraphQL:
     ```bash
     npm install apollo-server graphql
     ```

6. **Configurando TypeScript**

   - Instale dependências de desenvolvimento:
     ```bash
     npm install -D typescript tsx @types/node
     ```
   - Inicie o arquivo de configuração do TypeScript:
     ```bash
     npx tsc --init
     ```
   - Ajuste as configurações do `tsconfig.json` conforme necessário (ex: `experimentalDecorators`, `emitDecoratorMetadata`).

7. **Criando a Estrutura do Projeto**

   - Crie a pasta `src`.
   - Crie o arquivo `src/index.ts`.

8. **Configurando o Servidor Apollo**

   - Importe `ApolloServer` e `startStandaloneServer` do Apollo Server.
   - Defina os `typeDefs` (exemplo: type Query com campo `helloWorld: String`).
   - Crie os resolvers (exemplo: resolver para `helloWorld` retornando uma string).
   - Inicialize o servidor na porta 4000 e exiba a URL no console.

9. **Ajustando Scripts do Projeto**

   - No `package.json`, troque o script de teste por:
     ```json
     "dev": "tsx watch src/index.ts"
     ```
   - Inicie o servidor com:
     ```bash
     npm run dev
     ```

10. **Utilizando o Playground do Apollo Server**

    - Acesse o Playground na URL informada no console.
    - Explore e execute queries, como a `helloWorld`.

11. **Próximos Passos**
    - Nas próximas aulas: migrar para Express, criar resolvers e mutations, implementar modelos e banco de dados SQLite, adicionar autenticação e fluxos de cadastro, comentários e votos.

---
