## Quiz – Feature Flags

### Questionário avaliativo sobre Feature Flags

---

**1. Qual é o principal objetivo de uma Feature Flag?**

- Aumentar a velocidade de compilação do código
- Reduzir o tamanho do código em produção
- **Controlar a exibição ou não de uma feature de acordo com a flag definida**
- Melhorar a performance do banco de dados
- Automatizar testes unitários

---

**2. No contexto do Unleash, o que é uma "constraint"?**

- Uma versão específica do SDK
- Um tipo de banco de dados
- Uma limitação de memória do servidor
- **Uma condição que deve ser atendida para a flag ser ativada**

---

**3. Qual estratégia de rollout no Unleash permite controlar a porcentagem de usuários que verão uma feature?**

- ApplicationHostname
- Standard
- **Gradual Rollout**
- RemoteAddress
- UserWithId

---

**4. Qual é a principal diferença entre o Unleash e o FlagD?**

- **O Unleash tem uma UI web enquanto o FlagD trabalha com arquivos de definição**
- Não há diferença significativa entre eles
- O FlagD tem uma UI web enquanto o Unleash trabalha com arquivos de definição
- O Unleash só funciona com Node.js
- O FlagD só funciona em Kubernetes

---

**5. No OpenFeature, o que é um "Provider"?**

- Um usuário administrador do sistema
- Um banco de dados específico
- Uma linguagem de programação suportada
- Um tipo de estratégia de deploy
- **Um componente que implementa a lógica de feature flags**

---

**6. Qual protocolo de comunicação é utilizado entre a aplicação e o FlagD por padrão?**

- MQTT
- WebSocket
- GraphQL
- **gRPC**
- HTTP/REST

---

**7. O que é o ArgoRollouts no contexto de Kubernetes?**

- Um load balancer nativo
- Um sistema de monitoramento
- Um banco de dados para Kubernetes
- Um gerenciador de secrets
- **Uma extensão do Kubernetes para implementar estratégias avançadas de deploy**

---

**8. Na estratégia Blue-Green deployment, o que acontece quando você promove a nova versão?**

- Apenas 50% do tráfego é direcionado para a nova versão
- As duas versões continuam rodando indefinidamente
- A versão antiga é gradualmente desligada ao longo de horas
- O sistema reinicia completamente
- **A versão antiga é imediatamente substituída pela nova**

---

**9. Qual arquivo de configuração do FlagD define as feature flags?**

- unleash.config
- **flags.json**
- rollout.yaml
- config.yaml
- features.xml

---

**10. No Unleash, qual é a porta padrão utilizada pela aplicação?**

- 5432
- 8080
- **4242**
- 3000
- 8013

---

**11. O que é um CRD (Custom Resource Definition) no Kubernetes?**

- Um certificado de segurança
- Uma configuração de rede
- Um tipo de volume persistente
- **Uma extensão da API nativa do Kubernetes**
- Um tipo de container Docker

---

**12. Na estratégia Canary Deployment com ArgoRollouts, o que significa definir um "weight" de 20%?**

- A aplicação terá 20% mais performance
- Apenas 20% dos pods serão criados
- A nova versão usará apenas 20% da CPU disponível
- O deploy levará 20% menos tempo
- **20% do tráfego será direcionado para a nova versão**

---

**13. O que é "Stick Session" no contexto de Feature Flags?**

- Um tipo de erro de configuração
- Um protocolo de comunicação
- Um método de autenticação
- Uma estratégia de cache
- **Uma forma de manter o usuário sempre na mesma variante da feature**

---

**14. Qual banco de dados o Unleash utiliza por padrão para persistir as informações das flags?**

- Redis
- SQLite
- **PostgreSQL**
- MySQL
- MongoDB

---

**15. No Unleash, o que são "Variants" (Variantes)?**

- Diferentes tipos de bancos de dados
- **Diferentes versões que uma feature flag pode retornar**
- Tipos de autenticação
- Versões do SDK
- Logs de erro do sistema

---

**16. Ao configurar o ArgoRollouts, o que significa definir "revisionHistoryLimit: 5"?**

- O sistema usará no máximo 5GB de memória
- A aplicação terá no máximo 5 pods
- Apenas 5 usuários podem acessar simultaneamente
- **Será possível fazer rollback para até 5 versões**
- O deploy será feito em 5 etapas
