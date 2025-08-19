### **Testando Funções Assíncronas em JavaScript**

#### Introdução

- Funções assíncronas são muito comuns em JavaScript, especialmente em Node.js.
- Elas permitem que o sistema continue funcionando enquanto espera respostas de APIs, leitura de arquivos, banco de dados, etc.
- Testar funções assíncronas exige atenção especial para garantir que o teste espere a resposta antes de finalizar.

---

#### Tópicos

1. Por que testar funções assíncronas?
2. Formas de implementar funções assíncronas em JS
3. Como testar funções assíncronas com Mocha e Chai
4. Diferença entre callback, Promise e async/await nos testes
5. Quando usar `done`, `return` e `async/await` nos testes

---

### Passo a Passo para Testar Funções Assíncronas

1. **Por que testar funções assíncronas?**

   - Funções assíncronas são usadas para operações que demoram, como chamadas de API, leitura de arquivos ou consultas ao banco de dados.
   - O sistema não pode "parar" esperando essas respostas, então precisa lidar com elas de forma assíncrona.
   - Testar garante que o resultado dessas operações está correto e que o sistema responde como esperado.

2. **Formas de implementar funções assíncronas em JavaScript**

   - **Callback:**  
     Função é chamada quando a operação termina.  
     Exemplo: `setTimeout(() => { ... }, 1000)`
   - **Promise:**  
     Uma promessa de que o resultado estará disponível no futuro.  
     Exemplo: `return new Promise((resolve) => { ... })`
   - **async/await:**  
     Sintaxe moderna para trabalhar com Promises de forma mais simples.  
     Exemplo: `const resultado = await minhaPromise()`

3. **Como testar funções assíncronas com Mocha e Chai**

   - **Testando com Callback e `done`:**  
     Use o parâmetro `done` para avisar ao Mocha que o teste só termina quando a função assíncrona terminar.
     ```javascript
     it('deve retornar dados recebidos (callback)', function (done) {
       fetchData((resultado) => {
         expect(resultado).to.equal('dados recebidos')
         done()
       })
     })
     ```
   - **Testando com Promise e `return`:**  
     Retorne a Promise no teste para que o Mocha espere sua resolução.
     ```javascript
     it('deve retornar dados recebidos (promise)', function () {
       return fetchDataPromise().then((resultado) => {
         expect(resultado).to.equal('dados recebidos')
       })
     })
     ```
   - **Testando com async/await:**  
     Use `async` no teste e `await` para esperar o resultado.
     ```javascript
     it('deve retornar dados recebidos (async/await)', async function () {
       const resultado = await fetchDataPromise()
       expect(resultado).to.equal('dados recebidos')
     })
     ```

4. **Quando usar `done`, `return` e `async/await`?**

   - Use **`done`** quando estiver testando funções que usam callback.
   - Use **`return`** ou **`async/await`** quando estiver testando funções que retornam Promise.
   - Prefira `async/await` para código mais limpo e fácil de entender.

---

### Exemplo Prático

Imagine que você tem uma função que busca dados de uma API simulada:

```javascript
// Função assíncrona com callback
function fetchData(callback) {
  setTimeout(() => {
    callback('dados recebidos')
  }, 1000)
}

// Função assíncrona com Promise
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('dados recebidos')
    }, 1000)
  })
}
```

Você pode testar assim:

```javascript
// Teste com callback
it('deve retornar dados recebidos (callback)', function (done) {
  fetchData((resultado) => {
    expect(resultado).to.equal('dados recebidos')
    done()
  })
})

// Teste com Promise
it('deve retornar dados recebidos (promise)', function () {
  return fetchDataPromise().then((resultado) => {
    expect(resultado).to.equal('dados recebidos')
  })
})

// Teste com async/await
it('deve retornar dados recebidos (async/await)', async function () {
  const resultado = await fetchDataPromise()
  expect(resultado).to.equal('dados recebidos')
})
```

---

> **Resumo:**  
> Testar funções assíncronas é essencial para garantir que seu sistema responde corretamente a operações demoradas.  
> Use `done` para callbacks, `return` ou `async/await` para Promises, e prefira sempre a abordagem mais moderna e legível para seus testes.
