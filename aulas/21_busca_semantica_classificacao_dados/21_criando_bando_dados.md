### **Criando o Banco de Dados de Vetores com ChromaDB**

#### Introdução

- Agora vamos aprender, passo a passo, como criar o nosso banco de dados de vetores usando o ChromaDB.
- O ChromaDB é um banco de dados feito para IA, muito eficiente para buscas semânticas, e é fácil de instalar e rodar.

---

#### Tópicos

1. Criando a pasta do projeto
2. Instalando o ChromaDB com Python e UV
3. Inicializando o ambiente
4. Limpando arquivos desnecessários
5. Instalando o ChromaDB no ambiente
6. Rodando o ChromaDB
7. Entendendo como o ChromaDB funciona

---

### Passo a Passo da Aula

1. **Criando a pasta do projeto**

   - Crie uma nova pasta para o banco de dados de vetores, por exemplo:  
     `VectorDatabase`
   - Entre nessa pasta pelo terminal.

2. **Instalando o ChromaDB com Python e UV**

   - O ChromaDB é feito em Python, então você precisa ter o Python instalado.
   - Vamos usar o UV, um gerenciador de ambientes Python moderno e recomendado.

3. **Inicializando o ambiente com UV**

   - No terminal, rode:
     ```sh
     uv init
     ```
   - Isso cria um novo projeto Python dentro da pasta, com os arquivos necessários.

4. **Limpando arquivos desnecessários**

   - Você pode deletar arquivos como `main` e `readme` que são criados automaticamente, se não for usá-los.

5. **Instalando o ChromaDB no ambiente**

   - Ainda no terminal, rode:
     ```sh
     uv add chromadb
     ```
   - Isso instala o ChromaDB dentro do seu ambiente Python.

6. **Rodando o ChromaDB**

   - Para rodar o ChromaDB, use:
     ```sh
     uv run -- chroma run
     ```
   - O ChromaDB vai iniciar e rodar no endereço `localhost:80`.
   - Ele cria uma pasta chamada `.chroma` para armazenar os dados de forma persistente.

7. **Entendendo como o ChromaDB funciona**

   - O ChromaDB já está pronto para receber consultas e armazenar vetores.
   - Ele usa o algoritmo HNSW (Hierarchical Navigable Small World) para buscas rápidas e eficientes, mesmo em grandes volumes de dados.
   - Esse algoritmo faz buscas aproximadas, ou seja, é muito rápido, mas pode não ser 100% preciso — o que é suficiente para a maioria dos projetos de IA.

---

### Dicas Práticas

- Deixe o ChromaDB rodando em uma janela do terminal enquanto desenvolve o projeto.
- Não se preocupe com os arquivos internos do ChromaDB, só mantenha o serviço ativo.
- Se precisar, instale o ChromaDB também no front-end mais tarde, quando for integrar tudo.

---

> **Resumo:**  
> Nesta aula, você aprendeu como criar e rodar um banco de dados de vetores usando o ChromaDB, preparando o ambiente para buscas semânticas eficientes no seu projeto!
