### **Lendo Dados de um Arquivo CSV e Carregando no Banco de Vetores**

#### Introdução

- Agora vamos aprender como ler um arquivo CSV com dados de filmes e carregar esses dados no nosso banco de vetores (ChromaDB).
- O objetivo é transformar os dados do CSV em documentos prontos para buscas semânticas.

---

#### Tópicos

1. Entendendo o arquivo CSV do dataset
2. Instalando a biblioteca para ler CSV no JavaScript
3. Lendo o arquivo CSV no script
4. Preparando os dados para o banco de vetores
5. Adicionando os dados em batch (em grupos)
6. Cuidados com a memória e dicas para grandes volumes

---

### Passo a Passo da Aula

1. **Entendendo o arquivo CSV do dataset**

   - O dataset MPST vem em formato CSV, com colunas como:
     - `imdb-id`: ID do filme no IMDB
     - `title`: título do filme
     - `plotSynopsis`: sinopse do filme
     - `tags`: categorias do filme (ex: terror, infantil)
   - Vamos usar principalmente o ID, o título, a sinopse e as tags.

2. **Instalando a biblioteca para ler CSV no JavaScript**

   - Para ler arquivos CSV em JavaScript, vamos instalar a biblioteca `csv-parser`.
   - No terminal, rode:
     ```sh
     npm install csv-parser
     ```

3. **Lendo o arquivo CSV no script**

   - Importe as bibliotecas necessárias:
     ```js
     import fs from 'fs'
     import csv from 'csv-parser'
     ```
   - Abra o arquivo CSV e leia linha por linha:
     ```js
     fs.createReadStream('mpst_full_data.csv')
       .pipe(csv())
       .on('data', (row) => {
         // Aqui você processa cada linha do CSV
       })
       .on('end', () => {
         // Aqui você executa o carregamento no banco de dados
       })
     ```

4. **Preparando os dados para o banco de vetores**

   - Para cada linha (row) do CSV, crie três listas:
     - `ids`: use o campo `imdb-id`
     - `documents`: pode ser um JSON com título, sinopse e tags
     - `metadatas`: pode repetir as informações ou adicionar outros detalhes
   - Exemplo:
     ```js
     ids.push(row['imdb-id'])
     const document = {
       title: row.title,
       plotSynopsis: row.plotSynopsis,
       tags: row.tags,
     }
     documents.push(JSON.stringify(document))
     metadatas.push({ title: row.title, tags: row.tags })
     ```

5. **Adicionando os dados em batch (em grupos)**

   - Para evitar problemas de memória, não carregue todos os dados de uma vez.
   - Junte os dados em grupos (por exemplo, de 100 em 100) e adicione ao banco de vetores:
     ```js
     if (ids.length === 100) {
       await collection.add({
         ids,
         documents,
         metadatas,
       })
       ids = []
       documents = []
       metadatas = []
     }
     ```
   - No final, adicione o que sobrou (menos de 100).

6. **Cuidados com a memória e dicas para grandes volumes**

   - Se tentar carregar tudo de uma vez, pode estourar a memória do computador.
   - Sempre processe em batches (grupos pequenos).
   - Se o arquivo for muito grande, aumente ou diminua o tamanho do batch conforme a capacidade do seu computador.

---

### Dicas Práticas

- Teste o carregamento com poucos filmes antes de rodar com o dataset completo.
- Use sempre IDs únicos para cada documento.
- Se precisar, adicione mais campos nos metadados para facilitar buscas futuras.
- Divida o carregamento em batches para evitar travamentos.

---

> **Resumo:**  
> Nesta aula, você aprendeu como ler dados de um arquivo CSV, preparar esses dados e carregar em batches no seu banco de vetores, deixando tudo pronto para buscas semânticas eficientes!
