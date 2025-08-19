### Utilizando o OpenRouter com o AI SDK

#### Introdução

- **OpenRouter:** Ferramenta que atua como um roteador para diferentes modelos de AI, permitindo acesso a múltiplos provedores sem a necessidade de criar contas separadas ou gerenciar várias chaves de API.
- **Benefícios:**
  - Centraliza o acesso a modelos de AI.
  - Reduz custos com descontos baseados no uso.
  - Suporte a diversos modelos especializados para diferentes tarefas.

---

### Tópicos Importantes

#### Vantagens do OpenRouter

1. **Centralização:** Uma única conta para acessar múltiplos modelos de AI.
2. **Economia:** Custos reduzidos devido a descontos por volume de uso.
3. **Flexibilidade:** Permite escolher modelos específicos para diferentes tarefas, como tradução ou geração de texto.
4. **Compatibilidade:** Segue a mesma convenção da API da OpenAI, facilitando a integração.

#### Exemplos de Modelos

- **OpenAI GPT-4:** Modelo robusto para tarefas gerais.
- **Anthropic Claude 3.5 Haiku:** Modelo rápido e barato para tarefas simples, como tradução.

---

### Passo a Passo para Configuração e Uso

#### 1. **Criar Conta no OpenRouter**

1. Acesse o site do OpenRouter e crie uma conta.
2. Faça login utilizando o GitHub ou outro método de autenticação.
3. Gere uma chave de API:
   - Nomeie a chave (ex.: `AISDK`).
   - Defina um limite de gastos (ex.: $5).
4. Copie a chave gerada para uso no projeto.

---

#### 2. **Configurar o Projeto**

1. Substitua a chave da OpenAI pela chave do OpenRouter no arquivo `.env.local`:

   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

   - Substitua `your_openrouter_api_key` pela chave gerada no OpenRouter.

2. Instale o pacote necessário para o OpenRouter:
   ```bash
   pnpm add @verso/ai-sdk-openrouter
   ```

---

#### 3. **Criar Configuração para o OpenRouter**

1. Crie uma pasta para centralizar as configurações de AI:
   ```bash
   mkdir -p src/ai
   touch src/ai/openrouter.ts
   ```
2. No arquivo `openrouter.ts`, configure o modelo:

   ```typescript
   // filepath: src/ai/openrouter.ts
   import { OpenRouter } from '@verso/ai-sdk-openrouter'

   export const openRouterModel = OpenRouter({
     apiKey: process.env.OPENROUTER_API_KEY!,
     model: 'gpt-4', // Substitua pelo modelo desejado, ex.: 'claude-3.5-haiku'
   })
   ```

---

#### 4. **Utilizar o OpenRouter no Projeto**

1. Atualize a rota da API para usar o OpenRouter:

   ```typescript
   // filepath: app/api/ai/route.ts
   import { NextResponse } from 'next/server'
   import { generateText } from '@verso/ai'
   import { openRouterModel } from '@/ai/openrouter'

   export async function GET() {
     const result = await generateText({
       model: openRouterModel,
       prompt: 'Traduza "Hello World" para português.',
       system:
         'Você é uma AI especializada em tradução. Sempre retorne da maneira mais sucinta possível.',
     })

     return NextResponse.json({ message: result.text })
   }
   ```

---

#### 5. **Testar o Projeto**

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```
2. Acesse a rota no navegador:
   ```
   http://localhost:3000/api/ai
   ```
3. Verifique a resposta gerada pela API:
   ```json
   {
     "message": "Olá Mundo"
   }
   ```

---

### Dicas Adicionais

1. **Escolha de Modelos:**

   - Use modelos rápidos e baratos, como o **Claude 3.5 Haiku**, para tarefas simples.
   - Utilize modelos robustos, como o **GPT-4**, para tarefas mais complexas.

2. **Gerenciamento de Créditos:**

   - Adicione créditos no OpenRouter para evitar erros de requisição por falta de saldo.

3. **Documentação de Modelos:**
   - Consulte a documentação do OpenRouter para explorar os modelos disponíveis e seus custos.

---

### Conclusão

- O OpenRouter simplifica o acesso a múltiplos modelos de AI, centralizando a gestão e reduzindo custos.
- A flexibilidade de escolher modelos específicos para diferentes tarefas torna o OpenRouter uma ferramenta essencial para projetos que utilizam inteligência artificial.
