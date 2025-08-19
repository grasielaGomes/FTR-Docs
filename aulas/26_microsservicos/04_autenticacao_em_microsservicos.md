### Autenticação em Microserviços

#### Introdução

- Autenticação é um desafio comum em arquiteturas de microserviços.
- Cada serviço pode ter rotas HTTP que exigem autenticação do usuário.
- Não faz sentido o usuário se autenticar separadamente em cada serviço.

---

#### Serviço Centralizado de Autenticação

- Utiliza-se um serviço dedicado para autenticação (ex: Auth Service).
- Esse serviço é responsável por gerar tokens (ex: JWT) ou sessões.
- Os demais serviços apenas validam se o token é válido, sem gerar novos tokens.

---

#### Algoritmos de Geração de Tokens

- Algoritmos simétricos (ex: HS256): usam uma única chave secreta para gerar e validar tokens.
  - A chave secreta precisa estar presente em todos os serviços, o que aumenta o risco de vazamento.
- Algoritmos assimétricos (ex: RS256, RS512): usam chave privada para gerar tokens e chave pública para validar.
  - Apenas o serviço de autenticação possui a chave privada; a chave pública pode ser distribuída para todos os serviços e até para o front-end.

---

#### Distribuição de Chaves Públicas

- Problema: se a chave pública mudar, é necessário atualizar todos os serviços.
- Solução: usar JWKS (JSON Web Key Set), um endpoint que retorna a chave pública.
- Os serviços consultam esse endpoint para obter a chave pública e validar os tokens.

---

#### Fluxo de Autorização

- O cliente faz uma requisição com o JWT.
- O serviço consulta o JWKS para obter a chave pública.
- Valida o JWT; se válido, permite a operação, senão bloqueia.

---

#### Exemplos Práticos

- Serviço de autenticação gera o JWT e armazena o secret no .env.
- Endpoint getJWKS retorna a chave pública para os demais serviços.
- Em desenvolvimento, pode-se usar chave simétrica; em produção, recomenda-se chave assimétrica.

---

#### Considerações Finais

- Centralizar autenticação simplifica o fluxo e aumenta a segurança.
- Algoritmos assimétricos e JWKS facilitam a distribuição e rotação de chaves.
- Cada serviço valida o token sem precisar gerá-lo, mantendo a arquitetura desacoplada.
