### **Adicionando Dados ao Banco de Vetores: Criando uma Collection no ChromaDB**

#### Introdução

- Agora que já criamos nosso banco de dados de vetores com o ChromaDB, é hora de adicionar uma base de conhecimento a esse banco.
- Vamos aprender como criar uma collection (coleção) e inserir documentos (como filmes) no banco de dados, de forma simples e organizada.

---

#### Tópicos

1. Por que separar o carregamento de dados da aplicação principal
2. Criando o projeto Data Loader
3. Instalando o ChromaDB Client e o embedding padrão
4. Criando e conectando a collection no ChromaDB
5. Adicionando documentos e metadados à collection
6. Dicas para carregar grandes volumes de dados

---

### Passo a Passo da Aula

1. **Por que separar o carregamento de dados da aplicação principal**

   - O carregamento de dados geralmente é feito poucas vezes (uma vez por mês, ano, ou só no início).
   - Por isso, é melhor ter um script separado só para isso, chamado de Data Loader.
   - Assim, sua aplicação principal fica mais simples e organizada.

2. **Criando o projeto Data Loader**

   - Crie uma nova pasta chamada `data-loader` (ou outro nome que preferir).
   - No terminal, entre nessa pasta e inicialize o projeto:
     ```sh
     npm init
     ```
   - Isso cria o arquivo `package.json` para gerenciar as dependências.

3. **Instalando o ChromaDB Client e o embedding padrão**

   - Instale o client do ChromaDB e o embedding padrão:
     ```sh
     npm install chromadb chromadb-default-embed
     ```
   - O `chromadb-default-embed` é o algoritmo padrão de embeddings do ChromaDB. Ele serve para testes, mas depois você pode trocar por embeddings melhores, como o da Gemini API do Google.

4. **Criando e conectando a collection no ChromaDB**

   - Crie um arquivo chamado `load_data.js`.
   - Importe e instancie o Chroma Client:

     ```js
     import { ChromaClient } from 'chromadb'

     const chromaClient = new ChromaClient()
     ```

   - Para criar (ou pegar) uma collection:
     ```js
     const collection = await chromaClient.getOrCreateCollection({
       name: 'test',
     })
     ```
   - A collection funciona como uma "tabela" onde você vai guardar seus documentos.

5. **Adicionando documentos e metadados à collection**

   - Para adicionar documentos, use o método `add`:
     ```js
     await collection.add({
       ids: ['1', '2', '3'],
       documents: ['Olá', 'Oi', 'Tudo bom'],
       metadatas: [{ title: 'Meu Filme' }, {}, { nome: 'Arthur' }],
     })
     ```
   - **Dicas importantes:**

     - IDs devem ser únicos e do tipo string.
     - Os arrays de `ids`, `documents` e `metadatas` devem ter o mesmo tamanho.
     - Você pode passar metadados diferentes para cada documento.
     - Se não quiser passar metadados para todos, use `{}` para os que não tiverem.

   - Se quiser usar embeddings próprios (por exemplo, da Gemini API), basta passar o vetor de embeddings no parâmetro `embeddings`.

6. **Dicas para carregar grandes volumes de dados**

   - O script de carregamento é feito para rodar poucas vezes, então não precisa estar acoplado à aplicação principal.
   - Para grandes volumes (milhares de documentos), use scripts em batch e, se necessário, divida em partes menores.
   - Se precisar de algo mais avançado, como ETL ou pré-processamento, considere separar ainda mais o código.

---

### Dicas Práticas

- Sempre use IDs únicos para cada documento.
- Teste o carregamento com poucos documentos antes de rodar com o dataset completo.
- Não se preocupe se o embedding padrão não for perfeito: depois você pode trocar por um modelo melhor.
- Mantenha o carregamento de dados separado do restante da aplicação para facilitar manutenção.

---

> **Resumo:**  
> Nesta aula, você aprendeu como criar um script para carregar dados no ChromaDB, criar uma collection, adicionar documentos e metadados, e preparar seu banco de vetores para buscas semânticas!
