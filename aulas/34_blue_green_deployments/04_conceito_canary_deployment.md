### Conceito de Canary Deployment com Argo Rollouts

#### 1. O que é Canary Deployment?

- Estratégia de deploy que libera uma nova versão para uma pequena parcela dos usuários antes de promover para todos.
- Permite testar novas versões em produção com baixo risco, monitorando o impacto antes da liberação total.

#### 2. Diferença entre Blue-Green e Canary

- Blue-Green utiliza serviços ativos e preview, com promoção manual ou automática.
- Canary distribui o tráfego gradualmente entre versões, sem serviço de preview, usando o próprio serviço principal.

#### 3. Estrutura do Manifesto Canary

- Altere o manifesto para usar `strategy: canary`.
- Defina os steps com pesos e pausas:
  ```yaml
  strategy:
    canary:
      steps:
        - setWeight: 20
        - pause: {}
        - setWeight: 30
        - pause:
            duration: 60s
        # Último step pode ser pause vazio para exigir promoção manual
  ```
- O peso define o percentual de tráfego direcionado para a nova versão em cada etapa.

#### 4. Aplicando o Canary Deployment

1. **Comente ou remova a estratégia Blue-Green**
   - Deixe apenas a configuração de canary no manifesto.
2. **Defina os steps e pesos**
   - Exemplo: 20% do tráfego para nova versão, pausa, depois 30%, pausa de 60 segundos, etc.
3. **Aplique o manifesto no cluster**
   - Use `kubectl apply -f rollout.yaml` para atualizar o recurso.
4. **Monitore os pods e serviços**
   - Verifique a distribuição dos pods entre versões antigas e novas.
   - O serviço principal distribui o tráfego conforme os pesos definidos.
5. **Promova manualmente se necessário**
   - Se o último pause for vazio, promova manualmente para liberar 100% do tráfego.
   - Se usar duration, a promoção ocorre automaticamente após o tempo definido.

#### 5. Observações Práticas

- O número de pods influencia a divisão dos pesos (exemplo: 2 pods = 50% cada).
- Não existe serviço de preview no canary, todos os pods ficam no serviço principal.
- O dashboard do Argo Rollouts pode ser usado para acompanhar e promover etapas.

#### 6. Considerações Finais

- Canary Deployment permite testar versões de forma gradual e segura.
- Ajuste os steps conforme o tamanho do cluster e o risco do deploy.
- Use pausas manuais para maior controle ou durations para automação.
- Na próxima aula: exemplos práticos com mais pods e ajustes de estratégia.

---
