### **Projeto de Classificação: Conectando o Frontend ao Backend**

#### Introdução

- Nesta aula, vamos conectar o frontend ao backend, permitindo que o usuário envie uma imagem para classificação e receba o resultado em tempo real.
- Faremos ajustes no código do frontend para realizar requisições HTTP ao backend e trataremos detalhes importantes como CORS e exibição do resultado.

---

#### Tópicos da Aula

1. Ajustando o endpoint de classificação no backend
2. Fazendo a chamada HTTP do frontend para o backend
3. Lidando com CORS no backend Express
4. Testando a integração frontend-backend
5. Melhorias e próximos passos

---

### Passo a Passo da Aula

#### 1. Ajustando o Endpoint de Classificação no Backend

- **Ajuste no backend:**
  - Remova valores "hardcoded" (fixos) como o valor de `k` no endpoint `/classify`.
  - Permita que o valor de `k` seja recebido via `req.body.k`, usando 5 como padrão caso não seja enviado.

```javascript
const k = req.body.k || 5
```

- **Retorne erro 400 para requisições inválidas:**

```javascript
return res.status(400).send({ error: 'No method found' })
```

---

#### 2. Fazendo a Chamada HTTP do Frontend para o Backend

- **No frontend:**
  - Ao clicar no botão "Classify!", faça uma requisição HTTP POST para o backend.
  - Use `fetch` com método POST, headers `Content-Type: application/json` e envie o corpo com `method`, `imagePath` e, se desejar, `k`.

```javascript
const response = await fetch('http://127.0.0.1:3000/classify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    method: 'knn', // ou 'llm'
    imagePath: textInput,
    k: 5, // opcional
  }),
})
const data = await response.json()
setResult(data.category)
```

- **Lembre-se de tornar a função do botão `async`.**

---

#### 3. Lidando com CORS no Backend Express

- **Problema:** O navegador bloqueia requisições de origens diferentes (CORS).
- **Solução:** Instale e configure o middleware `cors` no backend.

```sh
npm install cors
```

```javascript
import cors from 'cors'

app.use(
  cors({
    origin: 'http://localhost:5173', // Permite chamadas do frontend local
  })
)
```

- **Reinicie o servidor após instalar e configurar o CORS.**

---

#### 4. Testando a Integração Frontend-Backend

- **Teste o fluxo completo:**

  - Digite a URL da imagem no frontend e clique em "Classify!".
  - O resultado deve aparecer corretamente (ex: "dog" ou "cat").
  - Verifique no console do backend se as requisições estão chegando.

- **Exemplo de resposta esperada:**

```json
{ "category": "dog" }
```

---

#### 5. Melhorias e Próximos Passos

- **Sugestões de melhorias:**
  - Exibir o resultado apenas após a classificação.
  - Adicionar um campo para escolher o método (`knn` ou `llm`) via dropdown.
  - Validar o campo de URL antes de enviar a requisição.
  - Tratar erros de requisição e exibir mensagens amigáveis ao usuário.

---

#### Observações Finais

- Agora o frontend está integrado ao backend, permitindo classificação em tempo real.
- O tratamento de CORS é essencial para comunicação entre aplicações em diferentes portas.
- O próximo passo é aprimorar a interface do usuário e adicionar opções de escolha de método de classificação.

---

> **Próximos Passos:**
>
> - Adicionar dropdown para seleção do método (`knn` ou `llm`) no frontend.
> - Exibir o resultado da classificação de forma mais amigável.
> - (Opcional) Containerizar o backend para facilitar o deploy.
