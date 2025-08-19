### **Projeto de Classificação: Ajustando e Melhorando o Frontend**

#### Introdução

- Nesta aula, vamos aprimorar a interface do nosso app de classificação, tornando-o mais bonito, modular e funcional.
- Vamos criar componentes reutilizáveis, melhorar a experiência do usuário e adicionar opções para seleção do método de classificação.

---

#### Tópicos da Aula

1. Criação do componente `CaptionedImage`
2. Exibindo a imagem e o resultado de forma reativa
3. Utilizando `useEffect` para requisições automáticas
4. Exibindo a categoria de forma destacada
5. Melhorando o layout e estilos da interface
6. Adicionando dropdown para seleção do método (`llm` ou `knn`)
7. Ajustes finais e boas práticas

---

### Passo a Passo da Aula

#### 1. Criação do Componente `CaptionedImage`

- **Motivação:** Modularizar a exibição da imagem e do resultado.
- **Como fazer:**
  - Crie um componente chamado `CaptionedImage` que recebe `imageSource` e `caption` como props.
  - Use esse componente para exibir a imagem e o resultado da classificação.

```jsx
function CaptionedImage({ imageSource, caption }) {
  return (
    <div style={{ textAlign: 'center' }}>
      {caption && <h2>It's a {caption}!</h2>}
      <img
        src={imageSource}
        alt="Preview"
        style={{ width: '100%', borderRadius: 10 }}
      />
    </div>
  )
}
```

---

#### 2. Exibindo a Imagem e o Resultado de Forma Reativa

- **Fluxo:**
  - O componente principal controla o estado da imagem (`imageSource`) e da categoria (`category`).
  - Só exibe o componente `CaptionedImage` quando houver uma imagem selecionada.

```jsx
{
  imageSource && <CaptionedImage imageSource={imageSource} caption={category} />
}
```

---

#### 3. Utilizando `useEffect` para Requisições Automáticas

- **Objetivo:**
  - Fazer a requisição ao backend automaticamente quando uma nova imagem for exibida.
- **Como fazer:**
  - Use o hook `useEffect` para disparar a requisição sempre que `imageSource` ou `method` mudar.

```jsx
useEffect(() => {
  async function getCaption() {
    if (!imageSource) return
    const response = await fetch('http://127.0.0.1:3000/classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        method,
        imagePath: imageSource,
      }),
    })
    const data = await response.json()
    setCategory(data.category)
  }
  getCaption()
}, [imageSource, method])
```

---

#### 4. Exibindo a Categoria de Forma Destacada

- **Destaque visual:**
  - Mostre a categoria (ex: "It's a dog!") em um elemento grande, acima da imagem.
  - Enquanto não houver resultado, exiba "It's a..." para criar suspense.

```jsx
<h2>{category ? `It's a ${category}!` : "It's a..."}</h2>
```

---

#### 5. Melhorando o Layout e Estilos da Interface

- **Ajustes visuais:**
  - Centralize os elementos.
  - Use `borderRadius` para deixar a imagem arredondada.
  - Ajuste o botão e o input para ficarem mais agradáveis.

```jsx
<input ... style={{ marginBottom: 10 }} />
<button ... style={{ margin: 10 }} />
```

---

#### 6. Adicionando Dropdown para Seleção do Método (`llm` ou `knn`)

- **Como fazer:**
  - Adicione um `<select>` para o usuário escolher o método de classificação.
  - Controle o método com um estado (`method`).

```jsx
const [method, setMethod] = useState('llm')

;<select value={method} onChange={(e) => setMethod(e.target.value)}>
  <option value="llm">LLM</option>
  <option value="knn">KNN</option>
</select>
```

- **Passe o método selecionado para o componente de imagem e para a requisição.**

---

#### 7. Ajustes Finais e Boas Práticas

- **Evite "saltos" na interface:**
  - Reserve espaço para o resultado, mesmo antes da resposta.
- **Limpe e organize o código:**
  - Separe estilos e componentes conforme necessário.
- **Teste o fluxo completo:**
  - Verifique se a seleção do método e a exibição do resultado funcionam corretamente.

---

#### Observações Finais

- O frontend agora está mais bonito, modular e funcional.
- O usuário pode escolher o método de classificação e ver o resultado de forma clara e destacada.
- O próximo passo é refinar ainda mais a interface e separar estilos e componentes em arquivos próprios.

---

> **Próximos Passos:**
>
> - Refatorar estilos e componentes para arquivos separados.
> - Adicionar feedback visual para carregamento e erros.
> - Explorar melhorias de UX e responsividade.
