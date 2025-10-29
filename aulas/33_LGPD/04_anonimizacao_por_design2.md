### Minimização por Design: Particionamento Vertical e Princípios LGPD

#### 1. Objetivos da Minimização por Design

- Proteção dos direitos fundamentais (privacidade, liberdade).
- Segurança jurídica com regras claras sobre coleta e armazenamento.
- Ambiente de negócio saudável: menos dados coletados, menos custo e menos risco de compliance.

#### 2. Conceito de Particionamento Vertical

- Separação dos dados de contato em uma tabela própria, ligada à tabela principal de pessoas.
- Reduz exposição: consultas simples não revelam dados desnecessários.
- Permite aplicar permissões diferentes para cada tipo de dado.
- Cada área do sistema acessa apenas o que realmente precisa (princípio da necessidade).

#### 3. Benefícios do Particionamento Vertical

- Menor superfície de risco: menos campos expostos, menos chance de vazamento.
- Possibilidade de separar fisicamente dados sensíveis.
- Facilita auditoria e comprovação do princípio da finalidade.
- Reduz custos operacionais e fortalece a confiança do titular dos dados.

#### 4. Passo a Passo Prático

1. **Criar Tabela de Contatos**

   - Separar telefone, cidade e estado em uma tabela própria, ligada à tabela pessoas.
   - Campos opcionais (telefone, cidade, estado) só são preenchidos quando necessário.
   - Exemplo de criação:
     ```sql
     CREATE TABLE privado.contatos (
       pessoa_id UUID REFERENCES privado.pessoas(id) ON DELETE CASCADE,
       telefone telefonebr,
       cidade TEXT,
       estado ufbr
     );
     COMMENT ON TABLE privado.contatos IS 'Armazena dados de contato estritamente necessários ao processo, conforme minimização por design.';
     ```

2. **Aplicar Domínios e Restrições**

   - Utilizar domínios criados anteriormente para telefone e estado.
   - Permitir valores nulos para campos opcionais.

3. **Testar Inserção e Validação**

   - Inserir dados na tabela pessoas e contatos apenas quando necessário.
   - Testar inserção de valores inválidos para garantir que o domínio protege os dados.
   - Exemplo de erro ao inserir estado inválido:
     ```sql
     INSERT INTO privado.contatos (pessoa_id, estado) VALUES ('<id>', 'XX');
     -- Retorna erro: VALUE FOR DOMAIN UFBR VIOLATES CHECK CONSTRAINT
     ```

4. **Documentar Finalidade e Princípios**

   - Adicionar comentários explicando a finalidade da tabela e dos campos.
   - Justificar a separação dos dados para facilitar auditoria e compliance.

5. **Verificar Estrutura**
   - Conferir que os campos opcionais realmente permitem valores nulos.
   - Validar que apenas dados necessários são coletados e armazenados.

#### 5. Princípios LGPD Aplicados

- Minimização: coleta apenas do necessário.
- Qualidade: validação automática dos dados via domínios.
- Segurança jurídica: regras claras e auditáveis.
- Redução de riscos e custos operacionais.

#### 6. Considerações Finais

- O particionamento vertical e a minimização por design devem ser aplicados desde a modelagem do banco.
- Empresas que coletam menos dados têm menos risco e mais segurança.
- Treine e revise sempre os conceitos para garantir conformidade com a LGPD.
