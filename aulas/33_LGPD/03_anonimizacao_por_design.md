### Minimização por Design na LGPD: Passo a Passo Prático

#### 1. Conceito de Minimização por Design

- Cada campo extra em uma tabela é uma porta de entrada para dados pessoais.
- A LGPD exige que apenas dados necessários sejam coletados e armazenados.
- Minimização por design significa questionar a real necessidade de cada campo desde a modelagem do banco.

#### 2. Problemas do Overcollection

- Coleta excessiva de dados aumenta riscos de privacidade e exposição.
- Dados desnecessários geram mais responsabilidade, custos de proteção e risco de sanções.
- Exemplo: pedir CPF, RG, nome da mãe e endereço completo quando só o e-mail seria suficiente.

#### 3. Princípios Aplicados

- Coletar apenas o que é necessário para a finalidade da aplicação.
- Separar dados essenciais de dados acessórios.
- Permitir que campos opcionais sejam realmente opcionais.

#### 4. Domínios de Validação

- Criar domínios para garantir que apenas valores válidos sejam aceitos.
- Exemplo: domínio para estados brasileiros, aceitando apenas as 27 siglas oficiais.
- Exemplo: domínio para telefone, aceitando apenas caracteres válidos e tamanho adequado.

#### 5. Passo a Passo Prático

1. **Conectar ao Banco**

   - Use Docker e psql para acessar o banco criado anteriormente.

2. **Verificar Esquema e Tabela**

   - Confirme que o esquema privado e a tabela pessoas existem.

3. **Evitar Overcollection**

   - Antes de criar novas tabelas, questione a real necessidade de cada campo.
   - Separe dados essenciais dos acessórios.

4. **Criar Domínio para Estado**

   - Crie um domínio que aceite apenas as siglas dos estados brasileiros:
     ```sql
     CREATE DOMAIN ufbr AS CHAR(2) CHECK (VALUE IN ('AC', 'AL', ..., 'TO'));
     ```

5. **Criar Domínio para Telefone**

   - Crie um domínio que aceite apenas números, parênteses, traços e tamanho entre 8 e 20 caracteres:
     ```sql
     CREATE DOMAIN telefonebr AS TEXT CHECK (LENGTH(VALUE) BETWEEN 8 AND 20 AND VALUE ~ '^[0-9\-\(\) ]+$');
     ```

6. **Aplicar Domínios nas Tabelas**

   - Use os domínios criados nas colunas das tabelas para garantir consistência.

7. **Garantir Consistência e Segurança**
   - Centralize regras de validação para evitar erros e inconsistências.
   - Reduza a exposição de dados e o risco de coleta excessiva.

#### 6. Benefícios da Minimização por Design

- Menos dados coletados = menos risco de vazamento e sanções.
- Regras claras e auditáveis aumentam a segurança jurídica.
- Menos erros, menos trabalho e menor custo para a organização.

#### 7. Considerações Finais

- A minimização por design deve ser aplicada desde a modelagem do banco.
- Na próxima aula, será abordada a separação de dados de contato e o conceito de partilhamento vertical.
