### **Projeto de Classificação: Adicionando Funcionalidades ao Frontend**

#### Introdução

- Nesta aula, vamos adicionar funcionalidades ao nosso aplicativo de classificação de gatos e cachorros.
- O objetivo é melhorar a experiência do usuário, controlar o fluxo de exibição da imagem e preparar o app para integração com o serviço de classificação.

---

#### Tópicos da Aula

1. Inicializando o repositório Git no projeto
2. Refatorando o controle de estado do input e da imagem
3. Exibindo a imagem somente após o clique no botão
4. Ajustando o layout e estilos do componente
5. Preparando a função para chamada ao serviço de classificação

---

### Passo a Passo da Aula

#### 1. Inicializando o Repositório Git

- **Importância:** Manter o controle de versões do projeto.
- **Comando:**
  ```sh
  cd ClassifierApp
  git init
  ```

---

#### 2. Refatorando o Controle de Estado do Input e da Imagem

- **Problema:** A imagem aparecia imediatamente ao digitar o link.
- **Solução:** Separar o estado do input (`textInput`) do estado da imagem exibida (`imageSource`), mostrando a imagem apenas após o clique no botão.

```jsx
import React, { useState } from 'react'

function App() {
  const [textInput, setTextInput] = useState('')
  const [imageSource, setImageSource] = useState(null)

  function handleInputChange(e) {
    setTextInput(e.target.value)
  }

  function classify() {
    setImageSource(textInput)
    // Aqui será feita a chamada ao serviço de classificação
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Cole o link da imagem aqui"
        value={textInput}
        onChange={handleInputChange}
      />
      <button onClick={classify}>Classify!</button>
      {imageSource && (
        <div>
          <img src={imageSource} alt="Preview" style={{ height: 200 }} />
        </div>
      )}
    </div>
  )
}
```

---

#### 3. Exibindo a Imagem Somente Após o Clique no Botão

- **Fluxo:** O usuário digita o link, mas a imagem só aparece após clicar em "Classify!".
- **Vantagem:** Evita carregamento desnecessário e melhora a experiência.

---

#### 4. Ajustando o Layout e Estilos

- **Melhorias visuais:**
  - Centralize os elementos usando `display: flex` e `flexDirection: column`.
  - Ajuste o tamanho da imagem para não distorcer.

```jsx
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* ...input, botão e imagem... */}
</div>
```

---

#### 5. Preparando a Função para Chamada ao Serviço de Classificação

- **Próximo passo:**
  - Após exibir a imagem, a função `classify` será responsável por chamar o backend/API para obter o resultado ("cat" ou "dog").
  - O resultado será exibido abaixo da imagem.

```jsx
const [result, setResult] = useState('')

async function classify() {
  setImageSource(textInput)
  // Exemplo de chamada futura:
  // const response = await fetch('/api/classify', { ... });
  // setResult(response.result);
}
```

---

#### Observações Finais

- O aplicativo agora controla melhor o fluxo de exibição da imagem.
- O próximo passo será implementar a integração com o serviço de classificação e exibir o resultado ao usuário.

---

> **Próximos Passos:**
>
> - Implementar a chamada à API de classificação.
> - Exibir o resultado da classificação na interface.
