### Testando a Virada de Aplicação com Canary Deployment

#### 1. Ajuste dos Steps e Pesos no Manifesto

- Configure os steps do Canary Deployment para liberar gradualmente a nova versão:
  - 20% do tráfego, pausa manual.
  - 40% do tráfego, pausa de 30 segundos.
  - 60% do tráfego, pausa de 20 segundos.
  - 80% do tráfego, pausa manual.
  - 90% do tráfego, pausa manual.
  - 100% do tráfego, promoção manual.

#### 2. Reaplique o Manifesto e Acompanhe as Réplicas

- Atualize a versão da aplicação (exemplo: V4).
- Reaplique o manifesto do rollout:
  ```sh
  kubectl apply -f rollout.yaml
  ```
- Observe a distribuição das réplicas entre as versões antiga e nova.

#### 3. Monitore os Pods e Serviços

- Verifique os pods e serviços no cluster para acompanhar a transição dos pesos.
- O serviço principal distribui o tráfego conforme os steps definidos.
- Não existe serviço de preview no Canary, todos os pods ficam no serviço principal.

#### 4. Entenda a Distribuição de Sessões

- Sem configuração adicional, usuários podem alternar entre versões a cada acesso.
- Para manter o usuário na mesma versão, pesquise sobre Stick Session, Consistent Hash ou Consistent Session.
- Configure camadas extras (Ingress, Gateway, NGINX, ALB) para controle por cookie, header ou IP.

#### 5. Promova Manualmente para 100%

- Após os steps, promova manualmente para liberar 100% do tráfego para a nova versão:
  ```sh
  kubectl argo rollouts promote <rollout-name>
  ```
- O processo pode ser automatizado se houver maturidade e boas práticas de observabilidade.

#### 6. Rollback em Caso de Problemas

- Se houver falha, utilize o rollback para retornar à versão anterior rapidamente.

#### 7. Dicas Importantes

- Não é possível usar Canary e Blue-Green juntos no mesmo rollout.
- O Argo Rollouts exige que apenas uma estratégia esteja configurada por vez.

#### 8. Considerações Finais

- O Canary Deployment permite uma virada gradual e segura da aplicação.
- Ajuste os steps conforme o risco e o tamanho do cluster.
- Mantenha mecanismos de observabilidade ativos para detectar problemas rapidamente.
- Use rollback para garantir segurança em caso de falhas.

---
