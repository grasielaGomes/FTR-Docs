## Quiz Avaliativo – Blue/Green & Canary Deployments

### Questionário baseado nos conteúdos de estratégias de deployment com Argo Rollouts

---

**1. Qual é a principal diferença entre Rolling Update e Blue Green deployment no contexto de estratégias de deployment?**

- Blue Green permite rollback mais rápido que Rolling Update em qualquer cenário
- Rolling Update sempre causa downtime, enquanto Blue Green nunca causa downtime
- Rolling Update funciona apenas com containers Docker, enquanto Blue Green funciona com qualquer tecnologia
- **Rolling Update substitui pods gradualmente, enquanto Blue Green mantém duas versões completas rodando simultaneamente**
- Blue Green é nativo do Kubernetes, enquanto Rolling Update requer CRDs

---

**2. O que são CRDs (Custom Resource Definitions) no contexto do Kubernetes e como se relacionam com o Argo Rollouts?**

- São configurações de segurança específicas para clusters de produção
- São definições de containers que substituem completamente os Deployments tradicionais
- São recursos exclusivos do Argo CD que não funcionam com outros projetos Argo
- **São extensões da API do Kubernetes que permitem adicionar novos tipos de recursos**
- São definições de recursos nativos do Kubernetes que não podem ser modificadas

---

**3. No contexto do Blue Green deployment com Argo Rollouts, qual é a função do "preview service"?**

- Fazer backup automático da versão anterior
- Monitorar a performance da aplicação em tempo real
- **Permitir testes na nova versão (Blue) sem impactar o tráfego de produção que vai para a versão ativa (Green)**
- Automatizar o processo de rollback em caso de falhas
- Receber todo o tráfego de produção durante o deployment

---

**4. Qual dos seguintes NÃO faz parte do Project Argo mencionado nas aulas?**

- Argo Workflows - motor de orquestração de workflows
- **Argo Registry - para gerenciamento de imagens de containers**
- Argo Events - para automação baseada em eventos
- Argo CD - para aplicar conceitos de GitOps
- Argo Rollouts - para estratégias avançadas de deployment

---

**5. Quando configuramos um Rollout para Blue Green deployment, qual campo é obrigatório na especificação da estratégia?**

- autoPromotionEnabled deve ser sempre true
- O campo revisionHistoryLimit deve ser maior que 10
- Deve-se especificar obrigatoriamente o tipo de probe a ser utilizado
- **Deve haver pelo menos activeService e previewService definidos**
- É necessário definir maxSurge e maxUnavailable

---

**6. Qual é o comportamento da estratégia "Recreate" no Kubernetes?**

- Substitui pods gradualmente sem causar downtime
- **Remove todos os pods da versão antiga e cria novos pods da versão nova, causando downtime**
- Mantém duas versões rodando simultaneamente
- Direciona apenas uma porcentagem do tráfego para a nova versão
- Cria uma cópia de segurança antes de fazer qualquer alteração

---

**7. No Canary Deployment, qual é a principal vantagem em relação ao Rolling Update tradicional?**

- Reduz o tempo total de deployment pela metade
- Funciona apenas com aplicações stateless
- Elimina completamente a necessidade de testes automatizados
- Elimina a necessidade de configurar probes de saúde
- **Permite controlar a porcentagem de tráfego direcionado para a nova versão, possibilitando rollout progressivo**

---

**8. Qual comando é usado para acessar o dashboard web do Argo Rollouts após sua instalação?**

- **kubectl argo rollouts dashboard**
- kubectl get rollouts --dashboard
- argo-rollouts ui --port 3100
- kubectl argo rollouts web-ui
- kubectl rollouts dashboard --expose

---

**9. No Blue Green deployment com Argo Rollouts, qual é o comportamento quando autoPromotionEnabled está definido como false?**

- A nova versão é promovida automaticamente após os health checks
- Apenas o preview service recebe tráfego, nunca o active service
- O deployment falha automaticamente após detectar erros
- **É necessária uma promoção manual para que a nova versão entre em produção**
- O deployment volta automaticamente para a versão anterior

---

**10. No Canary Deployment configurado com múltiplos steps (20%, 40%, 60%), o que acontece quando você define um `pause` com `duration` ao invés de um `pause` `{}`?**

- O deployment para indefinidamente até intervenção manual
- **O deployment continua automaticamente após o tempo especificado**
- O deployment é revertido automaticamente após o tempo especificado
- Apenas o primeiro step é executado
- O deployment falha com erro de configuração

---

**11. É possível configurar as estratégias Blue Green e Canary simultaneamente no mesmo Rollout?**

- Sim, desde que sejam aplicadas em namespaces diferentes
- Sim, mas apenas em ambientes de staging
- Sim, usando o campo `strategy.mixed` na configuração
- **Não, o Argo Rollouts permite apenas uma estratégia por Rollout**
- Sim, mas apenas com o flag `--allow-multiple-strategies`

---

**12. No contexto do Canary Deployment, qual é a diferença entre `stableService` e `canaryService`?**

- stableService requer autenticação, canaryService é público
- São sinônimos e podem ser usados intercambiavelmente
- **stableService aponta para pods da versão em produção, canaryService aponta para pods da nova versão**
- stableService é obrigatório, canaryService é opcional em todos os casos
- canaryService funciona apenas em ambiente de desenvolvimento

---

**13. Quando você tem um Rollout com 10 réplicas e configura um Canary Deployment para 20% de tráfego, quantos pods da nova versão são criados inicialmente?**

- 2 pod
- 1 pods
- **2 pod**
- 5 pods
- 10 pods
- Depende da configuração de maxSurge

---

**14. No Blue Green deployment, quando os serviços active e preview apontam para os mesmos pods?**

- Durante o processo de promoção da nova versão
- Quando há um erro no deployment
- Apenas em ambientes de staging com autoPromotion habilitado
- Nunca, pois isso violaria o conceito de Blue Green
- **Após a promoção ser concluída**
