### **Projeto de Classificação: Avaliando o Classificador LLM em Lote**

#### Introdução

- Nesta aula, vamos classificar todas as imagens do conjunto de teste utilizando a LLM (Gemini) de forma paralela.
- O objetivo é avaliar o desempenho do classificador, calcular a acurácia e comparar os resultados com o KNN.

---

#### Tópicos da Aula

1. Execução paralela das classificações com Promise.all
2. Ajuste da estrutura dos dados de teste
3. Associação das previsões às instâncias de teste
4. Cálculo da acurácia do classificador
5. Avaliação em lote e comparação de resultados

---

### Passo a Passo da Aula

#### 1. Execução Paralela das Classificações com Promise.all

- **Objetivo:** Enviar múltiplos requests em paralelo para a API do Google Gemini.
- **Implementação:**
  - Use `testPaths.map()` para criar um array de Promises, cada uma chamando o `llmClassifier` para um path.
  - Utilize `Promise.all` para aguardar todas as respostas.

```javascript
// Exemplo de execução paralela para os 10 primeiros casos
const requests = testPaths.slice(0, 10).map((p) => llmClassifier(p))
const results = await Promise.all(requests)
console.log(results) // Array com as classes previstas
```

- **Observação:** Para testar, utilize um slice pequeno (ex: 10 imagens) antes de enviar todas.

---

#### 2. Ajuste da Estrutura dos Dados de Teste

- **Problema:** O array `testPaths` contém apenas os caminhos das imagens, mas precisamos também da classe real.
- **Solução:** Transforme em um array de objetos `testInstances`, cada um contendo `path` e `trueClass`.

```javascript
const testInstances = testEmbeddings.map((e) => ({
  path: e.path,
  trueClass: e.class,
}))
```

---

#### 3. Associação das Previsões às Instâncias de Teste

- **Objetivo:** Salvar a classe prevista junto com cada instância de teste.
- **Implementação:**
  - Após obter os resultados, associe cada previsão ao respectivo objeto.

```javascript
const requests = testInstances
  .slice(0, 10)
  .map((instance) => llmClassifier(instance.path))
const predicted = await Promise.all(requests)

for (let i = 0; i < predicted.length; i++) {
  testInstances[i].predictedClass = predicted[i]
}

console.log(testInstances.slice(0, 10))
```

---

#### 4. Cálculo da Acurácia do Classificador

- **Objetivo:** Calcular a proporção de acertos do modelo.
- **Implementação:**
  - Utilize uma função `calculateAccuracy` para comparar `predictedClass` e `trueClass`.

```javascript
function calculateAccuracy(instances) {
  let correct = 0
  for (const item of instances) {
    if (item.predictedClass === item.trueClass) correct++
  }
  return correct / instances.length
}

// Exemplo de uso:
const accuracy = calculateAccuracy(testInstances.slice(0, 10))
console.log(`Acurácia: ${(accuracy * 100).toFixed(2)}%`)
```

---

#### 5. Avaliação em Lote e Comparação de Resultados

- **Execução em todo o conjunto de teste:**
  - Remova o slice e execute para todas as imagens.
  - Observe se há rate limit ou erros da API.

```javascript
const requests = testInstances.map((instance) => llmClassifier(instance.path))
const predicted = await Promise.all(requests)

for (let i = 0; i < predicted.length; i++) {
  testInstances[i].predictedClass = predicted[i]
}

const accuracy = calculateAccuracy(testInstances)
console.log(`Acurácia final: ${(accuracy * 100).toFixed(2)}%`)
```

- **Resultados:**
  - O classificador LLM pode acertar 100% dos casos, inclusive aqueles que o KNN errou.
  - Demonstra a robustez do modelo LLM para este dataset.

---

#### Observações Finais

- O pipeline permite avaliar rapidamente o desempenho do classificador LLM em lote.
- O uso de Promise.all facilita a execução paralela, mas atenção ao rate limit da API.
- O modelo LLM pode superar o KNN em alguns casos, mostrando sua capacidade de generalização.

---

> **Próximos Passos:**
>
> - Criar uma aplicação front-end para classificação de gatos e cachorros.
> - Integrar todo o pipeline em um serviço completo de classificação.
