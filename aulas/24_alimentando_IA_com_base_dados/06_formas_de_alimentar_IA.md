### Formas de Alimentar IA com Dados

1. **Acesso Direto a Banco de Dados**

   - Consiste em realizar queries diretamente em bancos de dados estruturados (ex: SQL) e inserir os resultados no prompt da IA.
   - Indicado quando os dados já estão organizados em tabelas e a consulta é conhecida e pré-definida.
   - Exemplo: chatbot de companhia aérea consultando voos disponíveis por origem e destino.
   - Recomenda-se evitar que a IA gere queries automaticamente (text-to-SQL), pois pode resultar em consultas erradas e riscos para o negócio.
   - Queries devem ser pré-definidas para garantir controle e segurança das respostas.
   - Comparação com um estagiário: a IA não tem contexto suficiente para tomar decisões seguras sobre queries sem orientação.

2. **Retrieval Augmented Generation (RAG) / Geração Aumentada por Recuperação**

   - Técnica utilizada para alimentar a IA com dados não estruturados (textos, documentos, imagens, vídeos).
   - Envolve realizar uma busca semântica para encontrar os documentos ou trechos mais relevantes para a pergunta ou contexto.
   - A IA utiliza os resultados da busca semântica para embasar e enriquecer suas respostas.
   - RAG é indicado quando não é possível realizar queries estruturadas, como em FAQs, documentação dispersa ou grandes volumes de texto.
   - Busca semântica substitui métodos antigos baseados em palavras-chave ou tópicos, trazendo resultados mais precisos e relevantes.

3. **Quando Usar Cada Abordagem**

   - Acesso direto a banco de dados: para dados estruturados, consultas conhecidas e controle total sobre as respostas.
   - RAG: para dados não estruturados, perguntas abertas e necessidade de contextualização a partir de múltiplas fontes.

### Conclusão

- As duas principais formas de alimentar IA com dados são: acesso direto a banco de dados (para dados estruturados) e RAG/busca semântica (para dados não estruturados).
- O módulo irá explorar cada abordagem separadamente, mostrando como alimentar a IA com diferentes tipos de dados.
