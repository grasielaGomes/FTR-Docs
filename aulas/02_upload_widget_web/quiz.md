### Quiz - Upload Widget Web

1. **Assinale a alternativa abaixo que NÃO tem relação com a funcionalidade do monitoramento do progresso**

   - Resposta correta: O progresso do upload foi calculado a partir do `uploadSizeInBytes` e `uploads.length`

2. **O Tailwind Variants auxilia em diversos pontos na estilização com o Tailwind, mas o principal deles é poder criar variantes no componente que aplicam a estilização dependendo do valor da propriedade repassada.**

   - Resposta correta: Verdadeiro

3. **A vantagem de utilizar o Zustand em conjunto com o `immer` é que o desenvolvedor poderá aplicar mutações na `store` sem se preocupar em quebrar a regra de imutabilidade do React.**

   - Resposta correta: Verdadeiro

4. **A compressão de imagem foi realizada do lado do frontend utilizando o `canvas` do HTML. Assinale a alternativa que NÃO corresponde ao que foi implementado nessa funcionalidade:**

   - Resposta correta: O arquivo comprimido foi salvo mantendo a extensão (ex.: `.png`) do arquivo original

5. **Porque é importante acessar o valor do Zustand especificando o que quer que seja retornado? Exemplo:**

   ```ts
   const uploads = useUploads((store) => store.uploads)
   ```

   Resposta correta: Para evitar que o componente monitore a atualização de toda a store, foque apenas no que foi retornado

6. **A biblioteca motion permite a animação apenas de elementos nativos do HTML (ex.: div), não sendo possível a animação direta de componentes React (ex.: UploadWidgetUploadList).**

Resposta correta: Falso

7.**Qual a funcionalidade da propriedade asChild presente nos componentes do Radix?**

Resposta correta: Clonar o elemento filho do elemento pai e repassar a ele as propriedades e o comportamento necessários para torná-lo funcional

8.**Como as imagens foram enviadas para a API via HTTP?**

Resposta correta: Body no formato FormData

9.**Porque o estado de uploads no Zustand foi criado utilizando o Map do Javascript?**

Resposta correta: Ele permite utilizar uma estrutura semelhante ao objeto (chave e valor), mas com acesso mais rápido

10.**Ao utilizar valores para a animação de componentes, exemplo:**

```tsx
<motion.div animate={isWidgetOpen ? 'open' : 'closed'} />
```

**Devemos utilizar um hook específico para o gerenciamento desses valores.**

Resposta correta: useCycle

11.**Qual estratégia utiliza informações extras de uma tag HTML para aplicar alterações na estilização com Tailwind?**

Resposta correta: Os `data attributes`

12.**Considere o seguinte componente:**

```tsx
const [isWidgetOpen, setIsWidgetOpen] = useState(false);

<Collapsible.Root onOpenChange={setIsWidgetOpen}>
```

**É correto dizer que o componente acima é controlled pois está utilizando um estado do React para determinar se ele está aberto ou não.**

Resposta correta: Falso

13.**A biblioteca react-dropzone gerencia o envio de arquivos pelo usuário principalmente por conta do getInputProps e getRootProps. Esses métodos são o retorno do hook useDropzone e são aplicados nos elementos HTML de input e container do arquivo, respectivamente.**

Resposta correta: Verdadeiro

14.**Ao utilizar algum elemento da tag motion, como motion.div, o desenvolvedor possui diversas novas propriedades para trabalhar. Assinale a alternativa abaixo que NÃO corresponde a uma dessas propriedades**

Resposta correta: `final` define o estado final da animação

15. **O Zustand foi adicionado na aplicação para ajudar no gerenciamento do estados, especificamente na parte dos uploads.**

Resposta correta: Verdadeiro

16.**O useShallow do Zustand foi utilizado para prevenir rerenderizações desnecessárias ao utilizar o valor computado de uma store.**

Resposta correta: Verdadeiro

17.**A biblioteca react-dropzone auxilia em diversos pontos no gerenciamento de envio de arquivos pelo usuário. Selecione abaixo a alternativa que NÃO corresponde a algum desses pontos.**

Resposta correta: O redimensionamento e compressão dos arquivos

18.**O Axios foi utilizado no lugar do fetch tradicional ou libs mais modernas como ky pois ele permite disparar o cancelamento dos uploads a partir do AbortController.**

Resposta correta: Verdadeiro

19.**Ao estruturar os arquivos como UploadWidgetHeader, UploadWidgetDropzone e UploadWidgetUploadList, estamos nos beneficiando de qual vantagem do React?**

Resposta correta: Componentização por composição
