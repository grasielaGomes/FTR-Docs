# Novos steps na pipeline

### Adicionar Steps para Instalação de Dependências

1. **Adicionar Step para Configurar Node.js**

   - No arquivo `.github/workflows/dockerhub.yml`, adicione um step para configurar o Node.js:
     ```yaml
     - name: Configure Node
        id: configure-node
        uses: actions/setup-node@v4
        with:
          node-version: 20
     ```

2. **Adicionar Step para Instalar pnpm**

   - Adicione um step para instalar o pnpm:
     ```yaml
     - name: Install pnpm
        id: install-pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8
     ```

3. **Adicionar Step para Instalar Dependências**
   - Adicione um step para instalar as dependências:
     ```yaml
     - name: Install dependencies
        id: install-dependencies
        run: |
          pnpm Install
     ```
