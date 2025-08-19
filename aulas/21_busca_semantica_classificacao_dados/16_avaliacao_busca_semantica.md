### **Avaliação de Busca Semântica: Como Saber se Sua Busca Está Boa?**

#### Introdução

- Nesta aula, vamos entender como avaliar os resultados de uma busca semântica.
- O foco é saber se os resultados que o sistema retorna realmente fazem sentido para o usuário, indo além de medir apenas performance técnica (como velocidade ou uso de memória).

---

#### Tópicos

1. Diferença entre avaliar performance e avaliar resultados
2. O desafio de avaliar resultados em busca semântica
3. Avaliação manual x avaliação automatizada
4. Avaliação offline: conjuntos de teste e métricas
5. Métricas comuns: Precision@K, Recall@K, Mean Reciprocal Rank
6. Avaliação online: testes A/B e comportamento do usuário
7. Dicas práticas para avaliação

---

### Passo a Passo da Aula

1. **Diferença entre avaliar performance e avaliar resultados**

   - Performance técnica (latência, custo, uso de memória) é avaliada como em qualquer sistema.
   - Aqui, vamos focar em como saber se os resultados da busca semântica realmente são relevantes para o usuário.

2. **O desafio de avaliar resultados em busca semântica**

   - Em busca semântica, não existe só uma resposta certa.
   - Exemplo: para a query "músicas sobre coração partido", várias músicas diferentes podem ser respostas corretas, de estilos e línguas diferentes.
   - Como saber se o sistema está retornando resultados coerentes?

3. **Avaliação manual x avaliação automatizada**

   - Avaliação manual: você testa várias queries e analisa os resultados um a um.
   - Problema: não é escalável e não cobre todos os casos possíveis.
   - Precisamos de formas objetivas e automáticas de avaliação.

4. **Avaliação offline: conjuntos de teste e métricas**

   - Monte um conjunto de teste (dataset) com várias queries e as respostas esperadas para cada uma.
   - Para cada query, defina quais respostas são aceitáveis.
   - O sistema é avaliado por quantas vezes retorna as respostas esperadas.

5. **Métricas comuns**

   - **Precision@K:**  
     Mede, entre os K primeiros resultados retornados, quantos são realmente relevantes.
     - Exemplo: Se entre os 5 primeiros resultados, 2 são relevantes, Precision@5 = 2/5 = 40%.
   - **Recall@K:**  
     Mede, de todos os resultados relevantes possíveis, quantos aparecem entre os K primeiros.
     - Exemplo: Se existem 3 respostas corretas e 2 aparecem nos 5 primeiros, Recall@5 = 2/3 ≈ 66%.
   - **Mean Reciprocal Rank (MRR):**  
     Mede a posição do primeiro resultado relevante no ranking.
     - Quanto mais alto o resultado relevante aparece, melhor o MRR.
   - **Diversidade:**  
     Avalie se o sistema retorna sempre os mesmos resultados ou se oferece variedade.

6. **Avaliação online: testes A/B e comportamento do usuário**

   - Coloque o novo sistema para uma parte dos usuários (ex: 10%) e mantenha o antigo para o restante.
   - Compare métricas de comportamento:
     - Cliques nos resultados
     - Tempo de uso do sistema
     - Taxa de conversão (em sistemas de compras)
     - Engajamento (quantidade de buscas, interações, etc.)
   - Se o novo sistema tiver melhores métricas, é sinal de que está funcionando melhor.

7. **Dicas práticas para avaliação**

   - Não dependa só do seu feeling ou de avaliações manuais.
   - Use conjuntos de teste e métricas objetivas para comparar sistemas.
   - Avalie partes do sistema separadamente (ex: só o embedding, só o algoritmo de busca).
   - Use testes A/B para validar melhorias com usuários reais.

---

> **Resumo:**  
> Nesta aula, você aprendeu como avaliar os resultados de uma busca semântica, usando métricas objetivas (Precision@K, Recall@K, MRR), conjuntos de teste e testes A/B com usuários reais. Assim, você pode saber de forma clara se sua busca semântica está realmente funcionando bem!
