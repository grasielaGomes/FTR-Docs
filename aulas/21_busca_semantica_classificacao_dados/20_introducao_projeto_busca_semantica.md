### **Introdução ao Projeto Prático de Busca Semântica: Sistema de Recomendação de Filmes**

#### Introdução

- Agora vamos colocar em prática tudo o que aprendemos sobre busca semântica!
- O objetivo deste projeto é criar um sistema de recomendação de filmes, onde o usuário digita o que quer ver e recebe sugestões baseadas no significado do texto, não só nas palavras exatas.

---

#### Tópicos

1. O que vamos construir
2. O que precisamos para o sistema funcionar
3. Passos do projeto
4. Sobre o dataset de filmes

---

### Passo a Passo da Aula

1. **O que vamos construir**

   - Um sistema de recomendação de filmes usando busca semântica.
   - O usuário digita, por exemplo, "dinossauros falantes" e o sistema recomenda filmes como "O Bom Dinossauro" ou outros filmes com dinossauros.
   - O sistema entende o significado da busca, não só as palavras exatas.

2. **O que precisamos para o sistema funcionar**

   - Uma base de conhecimento sobre filmes (com nome, sinopse, tags, etc.).
   - Um banco de dados de vetores para armazenar os embeddings dos filmes.
   - Um sistema que gera embeddings para a busca do usuário (query) e compara com os embeddings dos filmes.
   - Um front-end simples para o usuário digitar a busca e ver os resultados.

3. **Passos do projeto**

   1. **Criar o banco de dados de vetores**

      - Vamos usar o ChromaDB, um banco de dados de vetores fácil de usar e pronto para IA.
      - Instalar, configurar e deixar rodando para receber os dados dos filmes e as buscas.

   2. **Adicionar a base de conhecimento ao banco**

      - Carregar o dataset de filmes (cerca de 15 a 30 mil filmes).
      - Gerar embeddings para cada filme usando um modelo de IA.
      - Salvar esses embeddings no ChromaDB.

   3. **Criar o front-end**

      - Usar React para fazer uma página simples: uma caixa de texto para digitar a busca e uma lista para mostrar os filmes recomendados.
      - O visual será básico, mas funcional.

   4. **Conectar o front-end ao banco de dados**

      - O ChromaDB permite fazer buscas por HTTP, facilitando a integração com o front-end.
      - O usuário digita a busca, o sistema gera o embedding da query, faz a busca no banco e retorna os filmes mais parecidos.

   5. **Melhorar o sistema com embeddings mais poderosos**

      - No início, usaremos o embedding padrão do ChromaDB, mas depois vamos melhorar usando a Gemini API do Google.
      - A Gemini API gera embeddings melhores e gratuitos, aumentando a qualidade das recomendações.

   6. **Usar o dataset Movie Plots Synopses with Tags**
      - Esse dataset tem sinopses e tags dos filmes (ex: terror, infantil, etc.).
      - Está disponível online (MPST Dataset) e também será disponibilizado para download.

---

### Dicas Práticas

- O projeto será dividido em etapas, para facilitar o entendimento e a implementação.
- Não se preocupe com design: o foco é aprender como funciona a busca semântica na prática.
- Use sempre o mesmo modelo de embeddings para os filmes e para as buscas do usuário.
- Se quiser, personalize o front-end depois para deixá-lo mais bonito!

---

> **Resumo:**  
> Nesta aula, você viu o que será construído no projeto prático: um sistema de recomendação de filmes usando busca semântica, banco de dados de vetores e embeddings de IA. Vamos seguir juntos, passo a passo, até o sistema estar funcionando!
