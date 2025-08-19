### **Projeto de Classificação: Criando o Frontend para Classificação de Gatos e Cachorros**

#### Introdução

- Nesta aula, vamos criar uma aplicação frontend para classificar imagens de gatos e cachorros.
- Utilizaremos React para construir a interface e permitir que o usuário envie uma imagem para classificação.

---

#### Tópicos da Aula

1. Criação do diretório e inicialização do projeto React
2. Limpeza do template e ajustes iniciais
3. Estruturação da interface do aplicativo
4. Adição dos elementos principais (input, imagem, botão, resultado)
5. Testando a interface inicial

---

### Passo a Passo da Aula

#### 1. Criação do Diretório e Inicialização do Projeto React

- **Crie um novo diretório para o frontend:**
  ```sh
  mkdir ClassifierApp
  cd ClassifierApp
  ```
- **Inicialize o projeto React:**
  ```sh
  create front-template-react
  cd front
  npm install
  npm run dev
  ```
- **Abra o navegador em `localhost:5173` para visualizar o app rodando.**

---

#### 2. Limpeza do Template e Ajustes Iniciais

- **Remova o código e estilos desnecessários:**
  - Abra o arquivo `App.jsx` e limpe o conteúdo padrão.
  - Remova ou ajuste o CSS em `App.css` para deixar a interface limpa.
  - Altere o título da página para "Cat and Dog Classifier".

---

#### 3. Estruturação da Interface do Aplicativo

- **Planejamento da interface:**
  - Um título principal (`h1`)
  - Um campo de input para o usuário inserir o link da imagem
  - Um espaço para exibir a imagem selecionada
  - Um botão para acionar a classificação
  - Um campo para mostrar o resultado ("cat" ou "dog")

---

#### 4. Adição dos Elementos Principais

- **Exemplo de estrutura JSX para o App:**

```jsx
// App.jsx
import React, { useState } from 'react'

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [result, setResult] = useState('')

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h1>Cat or Dog</h1>
      <input
        type="text"
        placeholder="Cole o link da imagem aqui"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: '100%', marginBottom: 20 }}
      />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Preview"
          style={{
            width: '100%',
            maxHeight: 200,
            objectFit: 'contain',
            marginBottom: 20,
          }}
        />
      )}
      <button
        onClick={() => {
          /* lógica de classificação será implementada depois */
        }}
        style={{ width: '100%', padding: 10, fontWeight: 'bold' }}
      >
        Classify!
      </button>
      <div style={{ marginTop: 20 }}>
        {result && <span>Resultado: {result}</span>}
      </div>
    </div>
  )
}

export default App
```

- **Ajuste o CSS conforme necessário para centralizar e espaçar os elementos.**

---

#### 5. Testando a Interface Inicial

- **Abra o app no navegador e teste:**
  - Cole um link de imagem no input.
  - Verifique se a imagem aparece corretamente.
  - O botão "Classify!" está pronto para ser conectado à lógica de classificação.

---

#### Observações Finais

- A interface está pronta para receber a integração com o backend ou API de classificação.
- O próximo passo será conectar o botão de classificação ao serviço que retorna "cat" ou "dog" para a imagem enviada.

---

> **Próximos Passos:**
>
> - Implementar a lógica de chamada à API de classificação.
> - Exibir o resultado da classificação na interface.
