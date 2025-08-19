### **Integração Contínua (CI) e Entrega Contínua (CD) com GitHub Actions**

#### Introdução

- CI (Integração Contínua) e CD (Entrega/Desenvolvimento Contínuo) são práticas essenciais para equipes modernas de desenvolvimento.
- Elas automatizam testes, builds e deploys, garantindo que o código enviado para o repositório esteja sempre funcionando.
- O GitHub Actions é uma ferramenta gratuita (para repositórios públicos) que permite criar pipelines de CI/CD de forma simples e integrada ao GitHub.

---

#### Tópicos

1. O que é CI/CD?
2. Por que usar CI/CD?
3. O que é o GitHub Actions?
4. Como funciona um pipeline de CI no GitHub Actions?
5. Estrutura de um workflow em YAML
6. Como configurar e rodar um pipeline de testes
7. Boas práticas e dicas

---

### Passo a Passo para Entender CI/CD com GitHub Actions

1. **O que é CI/CD?**

   - **CI (Continuous Integration / Integração Contínua):**  
     Processo de integrar código de vários desenvolvedores em um repositório central, rodando testes automaticamente a cada alteração.
   - **CD (Continuous Delivery/Deployment / Entrega/Desenvolvimento Contínuo):**  
     Processo de automatizar a entrega do código testado para ambientes de produção ou homologação.

2. **Por que usar CI/CD?**

   - Garante que todo código novo seja testado automaticamente.
   - Reduz erros humanos e acelera o ciclo de desenvolvimento.
   - Facilita a colaboração em equipes grandes, evitando conflitos e bugs em produção.
   - Permite que apenas código aprovado e testado seja integrado à branch principal (main).

3. **O que é o GitHub Actions?**

   - É uma ferramenta do próprio GitHub para criar pipelines de automação (workflows) usando arquivos YAML.
   - Permite rodar testes, builds, deploys e outras tarefas sempre que houver um evento no repositório (push, pull request, etc).
   - Oferece cota gratuita para repositórios públicos e planos pagos para projetos privados ou grandes volumes.

4. **Como funciona um pipeline de CI no GitHub Actions?**

   - O pipeline é definido em um arquivo `.yml` dentro da pasta `.github/workflows` do seu projeto.
   - Cada pipeline (workflow) pode ser configurado para rodar em eventos específicos, como pull requests para a branch main.
   - O workflow define jobs (tarefas), como rodar testes, verificar cobertura, fazer deploy, etc.
   - Cada job roda em um ambiente virtual (Linux, Windows ou MacOS).

5. **Estrutura de um workflow em YAML**

   - O arquivo YAML é simples e fácil de ler, parecido com JSON ou XML.
   - Exemplo básico de workflow para rodar testes em Node.js:

     ```yaml
     name: CI Pipeline

     on:
       pull_request:
         branches: [main]

     jobs:
       test:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v3
           - name: Setup Node.js
             uses: actions/setup-node@v4
             with:
               node-version: 20
           - run: npm install
           - run: npm test
           - name: Verificar cobertura
             run: npm run coverage
     ```

   - Você pode definir regras para só permitir merge se todos os jobs passarem.

6. **Como configurar e rodar um pipeline de testes**

   - Crie a pasta `.github/workflows` no seu projeto.
   - Adicione um arquivo YAML (ex: `ci.yml`) com a configuração do pipeline.
   - No seu `package.json`, defina scripts para rodar testes e cobertura.
   - Ao criar um pull request para a branch main, o pipeline será executado automaticamente.
   - O status dos jobs aparece na aba "Actions" do GitHub.

7. **Boas práticas e dicas**

   - Use sempre o ambiente Linux para aproveitar a cota gratuita.
   - Defina regras de branch para exigir aprovação dos jobs antes do merge.
   - Mantenha o workflow simples e bem documentado.
   - Use variáveis de ambiente e segredos do GitHub para dados sensíveis.
   - Não suba arquivos de cobertura ou build para o repositório.

---

### Exemplo Prático

Imagine que você quer garantir que todo código enviado para a branch main passe pelos testes e tenha pelo menos 90% de cobertura de linhas e 80% de branches.  
No seu workflow YAML, adicione:

```yaml
- name: Verificar cobertura mínima
  run: npx c8 --check-coverage --lines 90 --branches 80 npm test
```

Assim, o pipeline só será aprovado se os testes cobrirem o mínimo exigido.

---

### Dicas e Boas Práticas

- Sempre configure o pipeline para rodar em pull requests para a branch principal.
- Use o relatório de cobertura para melhorar seus testes.
- Explore a documentação do GitHub Actions para criar jobs personalizados.
- Lembre-se: CI/CD é uma ferramenta de qualidade e agilidade, não um fim em si mesmo.

---

> **Resumo:**
> CI/CD automatiza testes e entregas, garantindo qualidade e agilidade no desenvolvimento.
> O GitHub Actions facilita a criação de pipelines integrados ao seu repositório.
> Use workflows em YAML para definir jobs, rodar testes e garantir que só código aprovado chegue à produção.
