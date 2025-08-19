### **Projeto de Classificação: Criando o Servidor HTTP para a API de Classificação**

#### Introdução

- Agora que temos tudo pronto para classificar imagens, vamos criar um servidor HTTP para expor nossa API de classificação.
- Utilizaremos o framework Express para criar endpoints simples e eficientes.

---

#### Tópicos da Aula

1. Instalação e configuração do Express
2. Criação do endpoint GET de teste
3. Criação do endpoint POST `/classify`
4. Integração com os classificadores KNN e LLM
5. Testes dos endpoints e tratamento de erros

---

### Passo a Passo da Aula

#### 1. Instalação e Configuração do Express

- **Instale o Express no backend:**
  ```sh
  npm install express
  ```
- **Importe e inicialize o Express no seu arquivo principal:**

```javascript
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
```

---

#### 2. Criação do Endpoint GET de Teste

- **Crie um endpoint GET para testar se o servidor está funcionando:**

```javascript
app.get('/', (req, res) => {
  res.send('hello world')
})
```

- **Inicie o servidor e exiba uma mensagem no console:**

```javascript
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
```

- **Teste acessando `http://localhost:3000` no navegador.**

---

#### 3. Criação do Endpoint POST `/classify`

- **Crie o endpoint principal para classificação:**

```javascript
app.post('/classify', async (req, res) => {
  const method = req.body.method
  const imagePath = req.body.imagePath
  const k = req.body.k || 5 // Valor padrão para KNN

  console.log(`New classification request using ${method}`)

  let result = null

  if (method === 'llm') {
    result = await llmClassify(imagePath)
  } else if (method === 'knn') {
    result = await knnClassify(imagePath, k)
  } else {
    return res.status(400).send({ error: 'No method found' })
  }

  res.send({ category: result })
})
```

- **Garanta que o servidor aceite JSON no corpo da requisição usando `express.json()`.**

---

#### 4. Integração com os Classificadores KNN e LLM

- **Importe as funções dos classificadores e inicialize o KNN:**

```javascript
import { classify as llmClassify } from './LLM/API.js'
import { classify as knnClassify, init as knnInit } from './KNN/API.js'

await knnInit() // Inicializa o KNN antes de aceitar requisições
```

- **Certifique-se de que as funções `classify` estão corretas e retornam a categoria prevista.**

---

#### 5. Testes dos Endpoints e Tratamento de Erros

- **Teste o endpoint POST usando `curl` ou ferramentas como Postman:**

```sh
curl -X POST http://localhost:3000/classify \
  -H "Content-Type: application/json" \
  -d '{"method":"llm","imagePath":"URL_DA_IMAGEM"}'
```

- **Verifique se o resultado retorna corretamente:**

```json
{ "category": "dog" }
```

- **Teste também com o método KNN e diferentes valores de `k`.**

- **Se o método não for reconhecido, o servidor retorna um erro:**

```json
{ "error": "No method found" }
```

---

#### Observações Finais

- O servidor HTTP está pronto para receber requisições de classificação tanto para KNN quanto para LLM.
- O endpoint `/classify` aceita o método desejado, o caminho da imagem e, opcionalmente, o valor de `k`.
- Lembre-se de sempre inicializar o KNN antes de aceitar requisições.
- O próximo passo é integrar este backend ao frontend para classificação em tempo real.

---

> **Próximos Passos:**
>
> - Integrar o frontend ao backend utilizando o endpoint `/classify`.
> - Adicionar autenticação ou limites de uso se necessário.
> - Monitorar logs e tratar possíveis erros de produção.
