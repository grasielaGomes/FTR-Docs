### Como Fazer IAs Lerem Dados Externos

1. **Importância de Alimentar IAs com Dados Externos**

   - Reforço da necessidade de alimentar IAs com dados externos para garantir respostas atualizadas e precisas.
   - Problemas de não alimentar: limitações de tempo e incerteza nas respostas das IAs.

2. **O que Significa "Ler" Dados Externos**

   - "Ler" dados externos é colocar os dados na janela de contexto (input) da IA.
   - Para LLMs (Large Language Models), o input deve ser em texto.
   - Outros tipos de IA podem exigir formatos diferentes, mas para LLMs, sempre texto.

3. **Tipos de Bases de Dados Utilizadas**

   - Bancos de dados relacionais (ex: Postgres, SQL) – dados tabulares.
   - Documentos (PDF, Google Docs, planilhas Excel).
   - Bancos NoSQL (ex: Redis, MongoDB) – formatos variados.
   - Necessidade de converter dados tabulares ou estruturados em texto para uso com LLMs.

4. **Processo de Carregar e Buscar Dados**

   - Carregar: acessar bancos de dados, baixar documentos, fazer queries.
   - Buscar: selecionar apenas os dados relevantes para o contexto da pergunta ou tarefa.
   - Exemplo: buscar apenas os dados do cliente específico em um chatbot.

5. **Processamento e Conversão dos Dados**

   - Converter dados tabulares ou estruturados em texto compreensível para a IA.
   - Processamento pode incluir ajustes de formato, tradução de dados para linguagem natural, etc.
   - Não existe uma única resposta correta para a conversão; diferentes abordagens podem ser usadas.

6. **Adicionando Dados ao Prompt da IA**

   - Após converter os dados para texto, adicioná-los ao prompt enviado para a IA.
   - Exemplo: inserir dados do cliente no prompt para personalizar a resposta.
   - Uso de técnicas de prompt engineering para orientar a IA sobre como utilizar os dados fornecidos.

7. **Pipeline Resumida**

   - Acessar e buscar dados relevantes.
   - Processar e converter para texto.
   - Adicionar ao prompt da IA.
   - Enviar para a IA gerar a resposta.

### Conclusão

- O processo envolve carregar, buscar, processar e inserir dados no prompt da IA.
- Próximos passos incluem exemplos práticos e implementação em código.
