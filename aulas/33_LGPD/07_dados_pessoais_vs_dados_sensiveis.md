### Dados Pessoais vs Dados Sensíveis: Conceitos e Aplicação Prática

#### 1. O que são Dados Pessoais?

- Informação capaz de identificar uma pessoa natural.
- Exemplos: nome, CPF, RG, endereço, telefone, data de nascimento, e-mail pessoal.
- Dados menos óbvios também podem ser pessoais: endereço IP, geolocalização, número de matrícula, log, timestamp, ID de sessão.
- Atenção especial a tabelas auxiliares, campos ocultos e APIs que retornam informações identificáveis.
- Dados isolados podem parecer inofensivos, mas o cruzamento pode gerar identificação.

#### 2. O que são Dados Sensíveis?

- Categoria especial que exige proteção reforçada.
- Podem causar impacto direto na dignidade, intimidade ou discriminação do titular.
- Exemplos: saúde, religião, orientação sexual, convicção política ou filosófica, biometria, dados genéticos, filiação sindical.
- Exigem base legal específica e medidas de proteção adicionais (criptografia, anonimização, controle de acesso, segregação de funções).

#### 3. Exemplos Práticos

- **Dados pessoais comuns:** nome, e-mail, telefone em formulários de cadastro.
  - Proteção: criptografia em trânsito, qualificação de acesso, evitar exposição em telas e URLs.
- **Dados sensíveis:** estado de saúde, deficiência, resultado de exame médico.
  - Proteção: base legal específica, criptografia forte, autenticação de múltiplos fatores, registro de logs de acesso.
- **Dados contextuais:** IP e geolocalização.
  - Proteção depende do contexto e finalidade. Exemplo: apps de delivery devem justificar coleta e aplicar retenção mínima.
- **Dados anonimizados irreversíveis:** fora do escopo da LGPD, mas exigem documentação do processo e atualização periódica do método.

#### 4. Passo a Passo para Classificar e Proteger Dados

1. **Identifique o tipo de dado tratado**
   - Pergunte: o dado pode identificar alguém? Pode ser cruzado para identificação?
2. **Classifique como pessoal, sensível ou anonimizado**
   - Dados pessoais: exigem proteção básica.
   - Dados sensíveis: exigem proteção reforçada e base legal específica.
   - Dados anonimizados irreversíveis: fora do escopo da LGPD.
3. **Justifique a base legal para tratamento**
   - Consentimento, obrigação legal, proteção do titular, etc.
4. **Implemente medidas de proteção**
   - Criptografia, anonimização, controle de acesso, segregação de funções, registro de auditoria.
5. **Documente e revise processos**
   - Mantenha registro da anonimização, documentação do processo e atualização dos métodos.
6. **Prepare-se para atender direitos do titular**
   - Permita consulta, controle, questionamento e exclusão dos dados quando solicitado.

#### 5. Reflexão Final

- Se o dado identifica alguém, trate com responsabilidade.
- Se pode expor, envergonhar ou discriminar, aplique proteção reforçada.
- O titular tem direito de saber, controlar e exigir.
- Profissionais de TI devem garantir sistemas seguros, transparentes e em conformidade com a LGPD.

---
