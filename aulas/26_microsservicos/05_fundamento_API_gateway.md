### Fundamentos de API Gateway em Microserviços

#### Introdução

- O API Gateway é essencial para arquiteturas com múltiplos microserviços.
- Centraliza todas as chamadas HTTP do front-end para os serviços do back-end.
- O front-end se comunica apenas com o API Gateway, que repassa as requisições para o serviço correto.

---

#### Motivação e Vantagens

- Evita que o front-end precise conhecer e acessar URLs de múltiplos serviços.
- Simplifica a configuração e manutenção do front-end.
- Permite escalar e adicionar novos serviços sem alterar o front-end.

---

#### Funcionamento do API Gateway

- Atua como um proxy entre o front-end e os microserviços.
- Redireciona requisições para o serviço correto com base na rota.
- Exemplo: requisições para /shortener/_ vão para o serviço de encurtamento; /analytics/_ vão para o serviço de analytics.

---

#### Recursos Adicionais do API Gateway

- Permite implementar rate limit (limite de requisições por usuário/IP).
- Centraliza autenticação: valida o JWT antes de repassar a requisição para o serviço.
- Pode enviar dados do usuário já validados (ex: user ID) para os serviços, evitando revalidação.

---

#### Exemplos Práticos e Configuração

- API Gateway pode ser implementado com ferramentas como Kong, Trick, entre outros.
- Configuração define quais rotas/redirecionamentos cada serviço recebe.
- Plugins como JWT podem ser usados para autenticação automática.
- O ideal é buscar o secret/chave pública diretamente do serviço de autenticação via JWKS.

---

#### Considerações Finais

- API Gateway facilita o gerenciamento, segurança e escalabilidade dos microserviços.
- Permite centralizar políticas de autenticação, rate limit e roteamento.
- Ferramentas como Kong oferecem interface gráfica para configuração e monitoramento.
