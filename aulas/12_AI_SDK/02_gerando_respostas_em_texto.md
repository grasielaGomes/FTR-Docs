### Gerando Respostas em Texto com o AI SDK da Verso

#### Introdução

- **Objetivo:** Criar um projeto Next.js utilizando o AI SDK da Verso para gerar respostas em texto.
- **Ferramentas Utilizadas:**
  - Next.js
  - AI SDK da Verso
  - OpenAI API
  - Zod (para validação de esquemas)

---

### Passo a Passo para Implementação

#### 1. **Criar o Projeto Next.js**

1. No terminal, execute:
   ```bash
   pnpm create next-app@latest
   ```
2. Use a flag `--empty` para criar um projeto sem estilização ou páginas pré-configuradas:
   ```bash
   pnpm create next-app@latest --empty
   ```
3. Nomeie o projeto como `AISDK` e configure as opções:

   - TypeScript: **Sim**
   - ESLint: **Não**
   - Tailwind CSS: **Sim**
   - App Router: **Sim**
   - TurboPack: **Sim**

4. Após a criação, abra o projeto no editor de código:
   ```bash
   cd AISDK
   code .
   ```

---

#### 2. **Instalar Dependências**

1. Instale os pacotes necessários:
   ```bash
   pnpm add @verso/ai @verso/ai-sdk-react @verso/ai-sdk-openai zod
   ```
2. Crie um arquivo `.env.local` na raiz do projeto e adicione a chave da OpenAI:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```
   - Substitua `your_openai_api_key` pela sua chave da OpenAI.

---

#### 3. **Configurar a API**

1. Dentro da pasta `app`, crie a estrutura para a API:
   ```bash
   mkdir -p app/api/ai
   touch app/api/ai/route.ts
   ```
2. No arquivo `route.ts`, implemente a rota para gerar texto:

   ```typescript
   // filepath: app/api/ai/route.ts
   import { NextResponse } from 'next/server'
   import { generateText } from '@verso/ai'
   import { OpenAI } from '@verso/ai-sdk-openai'

   export async function GET() {
     const result = await generateText({
       model: OpenAI({ model: 'gpt-4' }),
       prompt: 'Traduza "Hello World" para português.',
       system:
         'Você é uma AI especializada em tradução. Sempre retorne da maneira mais sucinta possível.',
     })

     return NextResponse.json({ message: result.text })
   }
   ```

---

#### 4. **Executar o Projeto**

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
2. Acesse a rota no navegador:
   ```
   http://localhost:3000/api/ai
   ```
3. Verifique a resposta gerada pela API, que deve retornar:
   ```json
   {
     "message": "Olá Mundo"
   }
   ```

---

### Explicação das Configurações

#### **Modelos OpenAI**

- O modelo utilizado é o `gpt-4`, que oferece respostas rápidas e precisas.
- A etapa de "Thinking" foi desativada para melhorar a velocidade de resposta.

#### **System Prompt**

- Define o comportamento da AI, neste caso, como uma tradutora especializada.

#### **Validação com Zod**

- O pacote Zod será usado em implementações futuras para validar os esquemas de dados.

---

### Próximos Passos

1. **Incrementar Funcionalidades:**
   - Adicionar suporte para streaming de dados.
   - Implementar validação de entradas com Zod.
2. **Explorar Integrações:**
   - Conectar com outros modelos além da OpenAI.
   - Criar endpoints adicionais para diferentes funcionalidades.
3. **Aprimorar o Projeto:**
   - Adicionar testes unitários.
   - Melhorar a interface do usuário para interagir com a API.
