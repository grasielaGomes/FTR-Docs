### Primeira Feature Flag no Unleash

#### Introdução

- Objetivo: criar e explorar a primeira Feature Flag no Unleash e entender estrutura de projetos, ambientes e estratégias.
- Contexto: já temos o Unleash OSS rodando localmente.

---

### Projetos e Governança

- No OSS, existe apenas o projeto `default` — criação de novos projetos é recurso Enterprise.
- Riscos de usar apenas o projeto default em grandes organizações:
  - Todos os usuários acessam todas as flags.
  - Potencial para alterações indevidas em flags críticas.
- Alternativas:
  - Separar instâncias do Unleash por Business Unit (BU).
  - Migrar para a versão Enterprise para projetos múltiplos.

---

### Criando a primeira Feature Flag

1. Acesse **Projects > default > Feature Flags > Create feature flag**.
2. Informe:
   - `Name`: ex.: `login_page`
   - `Description`: ex.: controle de exibição da nova tela de login
3. (Opcional) Adicione **Tags** para organização (ex.: `login`).
4. Selecione o **Type** da flag:
   - `RELEASE` (default)
   - `EXPERIMENT`, `OPERATIONAL`, `KILL_SWITCH`, `PERMISSION`, etc.
5. Defina **Impression Data Off** como `false` (default).
6. Clique em **Create** e confirme a criação na lista.

---

### Ambientes (Environments)

- OSS disponibiliza dois ambientes por padrão: `development` e `production`.
- Pode usar `development` como staging e `production` para deploy real.
- Em Enterprise é possível criar ambientes adicionais.
- Ao habilitar/desabilitar em `production`, o UI alerta antes de efetivar.

---

### Estratégias de Rollout

- **Standard**: booleano (true/false) global.
- **Gradual Rollout**: porcentagem do tráfego (ex.: 10% TRUE, 90% FALSE).
- **Outras**: IP, Host, customizadas via addStrategy.
- Exemplo Gradual:
  - Defina 10% para rollout gradual — 10% receives TRUE.
- Exemplo Targeting:
  - Use **context fields** como `userId`:
    - `IS_ONE_OF` / `IS_NOT_ONE_OF`
    - Lista de IDs (ex.: 1,2,3).
- É possível combinar múltiplas estratégias.

---

### Context Fields (Campos de Contexto)

- Permitem filtrar e segmentar flags por atributos customizados.
- Configure em **Settings > Context Fields**:
  - Adicione campos como `userId`, `groupId`, etc.
- No client, envie o contexto com cada request para avaliação.

---

### Observações Finais

- Centralizar controle de flags no Unleash reduz complexidade nas aplicações.
- Tags, descrições e naming consistente facilitam manutenção.
- Environments e context fields aumentam flexibilidade de rollout.

---

### Próximos Passos

- Próxima aula: iniciar aplicação Node.js simples, integrar com Unleash client e testar flags.
- Explorar rollout gradual e context fields na prática.

---

### Referências

- Documentação oficial do Unleash: Quick Start, Settings e API.
