### Fundamentos da LGPD na Prática: Auditoria e Prestação de Contas

#### 1. Fundamentos da LGPD (Artigo 2º)

- Privacidade
- Autodeterminação informativa
- Liberdade de expressão e informação
- Desenvolvimento econômico e tecnológico
- Livre iniciativa
- Defesa do consumidor
- Proteção dos direitos humanos

#### 2. Aplicação Prática dos Fundamentos

- Projetar sistemas que respeitem direitos e garantam segurança jurídica.
- Criar ambiente de negócio confiável e responsável.

#### 3. Passo a Passo Prático: Auditoria no Banco de Dados

1. **Conectar ao Banco**

   - Acesse o container Docker e conecte-se ao banco `lgpd_lab`.

2. **Instalar Extensões**

   - Ative o suporte à criptografia:
     ```sql
     CREATE EXTENSION IF NOT EXISTS pgcrypto;
     ```
   - Ative a extensão para visibilidade das consultas:
     ```sql
     CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
     ```

3. **Criar Tabela de Auditoria**

   - Estruture a tabela para registrar operações:
     ```sql
     CREATE TABLE auditoria.log (
       hora TIMESTAMP WITH TIME ZONE DEFAULT now(),
       ator TEXT,
       acao TEXT,
       objeto TEXT,
       detalhes JSON
     );
     ```
   - Campos:
     - `hora`: quando ocorreu a operação.
     - `ator`: usuário que executou.
     - `acao`: tipo de operação (INSERT, UPDATE, DELETE).
     - `objeto`: tabela afetada.
     - `detalhes`: conteúdo novo/modificado em JSON.

4. **Criar Função de Auditoria**

   - Função para registrar operações de inserção:
     ```sql
     CREATE OR REPLACE FUNCTION log_pessoa_inserida()
     RETURNS TRIGGER AS $$
     BEGIN
       INSERT INTO auditoria.log (ator, acao, objeto, detalhes)
       VALUES (current_user, 'INSERT', 'privado.pessoas', row_to_json(NEW));
       RETURN NEW;
     END;
     $$ LANGUAGE plpgsql;
     ```

5. **Criar Trigger para Auditoria**

   - Dispare a função após cada inserção na tabela pessoas:
     ```sql
     CREATE TRIGGER tg_pessoas_insert
     AFTER INSERT ON privado.pessoas
     FOR EACH ROW
     EXECUTE FUNCTION log_pessoa_inserida();
     ```

6. **Testar Auditoria**
   - Insira um registro na tabela pessoas:
     ```sql
     INSERT INTO privado.pessoas (nome, email, cpf, data_nascimento)
     VALUES ('Ana Souza', 'ana@example.com', '12345678900', '2001-01-01');
     ```
   - Consulte a tabela de auditoria:
     ```sql
     SELECT * FROM auditoria.log;
     ```
   - Verifique se a operação foi registrada corretamente.

#### 4. Conexão com os Fundamentos da LGPD

- **Responsabilização e prestação de contas:** registro de quem fez o quê.
- **Autodeterminação informativa:** titular pode solicitar histórico das operações.
- **Transparência:** sistema mostra como os dados são tratados.
- **Defesa do consumidor e direitos humanos:** garante dignidade e controle sobre a informação pessoal.
- **Compliance e redução de custos:** uso de recursos nativos do banco para conformidade.

#### 5. Considerações Finais

- Auditoria é essencial para traduzir os fundamentos da LGPD em práticas técnicas.
- Previne abusos, facilita prestação de contas e protege direitos fundamentais.
- Recomenda-se revisar e refazer as atividades para fixar os conceitos.

---
