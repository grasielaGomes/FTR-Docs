### **Projeto de Classificação: Finalizando o KNN - Votação e Classificação**

#### Introdução

- Agora que já temos os K vizinhos mais próximos (KNN), vamos implementar a votação para determinar a classe final da amostra de teste.
- O objetivo é contar as classes dos K vizinhos e retornar a classe que mais aparece.

---

#### Tópicos da Aula

1. Implementação da função para contar as classes dos vizinhos (`countClasses`)
2. Implementação da função para obter a classe majoritária (`getMaxClass`)
3. Refatoração e criação da função principal de classificação (`KNNClassifier`)
4. Testes e avaliação de desempenho do classificador

---

### Passo a Passo da Aula

#### 1. Contando as Classes dos K Vizinhos (`countClasses`)

- **Objetivo:** Contar quantas vezes cada classe aparece entre os K vizinhos mais próximos.
- **Implementação:** Criamos uma função que recebe os vizinhos e retorna um objeto com a contagem de cada classe.

```javascript
function countClasses(kNearestNeighbors) {
  const classCount = {}
  for (let n of kNearestNeighbors) {
    if (classCount[n.class]) {
      classCount[n.class]++
    } else {
      classCount[n.class] = 1
    }
  }
  return classCount
}
```
