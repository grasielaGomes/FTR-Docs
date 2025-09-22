00:1.03
Sensacional. Então aqui a gente fez a aplicação, nosso deployment deu uma subida ali, criamos o rollout, ele não deu nenhum erro, mas ele também não apareceu no sentido de pods. Então não temos nenhum pod ali, não tem nada acontecendo.

00:16.89
E qual que é o grande detalhe que eu havia falado na última aula? Se a gente der uma passada aqui, olha só, a gente vai ter o namespace do Águas Rolautas que nós criamos, certo? E ele tá aqui. Esse componente aqui é como se fosse um watcher. Então se a gente clicar nele, a gente olhar para os logs dele, tudo que acontecer ele vai dar uma reclamada aqui.

00:38.74
Então olha só que legal, ele tá falando, olha só que interessante. E o nosso rollout, o Epic A8S, até chegou na API dele, a gente tentou bater na API dele, só que ele tá reclamando que não foi definida nenhuma estratégia. Nenhuma canary e nenhuma bluegreen, tá vendo? Então ele não vai deixar esse deploy subir de fato, porque é um campo required, tem que ter pelo menos um dos dois, beleza?

01:5.219999999999999
Então, qual que é o ponto que a gente vai fazer aqui? A gente vai resolver esse problema. Então, a gente vai voltar aqui no nosso deployment e a gente vai aqui pra fora, tá? Então, na linha aqui do nosso spec, na verdade do nosso template, perdão. Na linha do nosso template, seria aqui no caso, deixa eu ver se tá ok. A gente vai simplesmente digitar strategy e a gente vai ver primeiro a blue-green, ok? Que é ali a mais simples, beleza?

01:34.33
Blue Green, Blue Green. E aqui eu vou colocar basicamente o seguinte, vou colocar o Active, o Active Service, certo? Que vai ser o nosso APK 8S mesmo. Então APK 8S, na verdade eu vou chamar até pra ficar legal, de SVC. Então APK 8S, SVC. Beleza? E o nosso Preview Service.

01:59.790000000000006
que será o Epica 8S, vou chamar aqui de Preview. Beleza? E aí tem uma outra flag também que é muito importante, que é o Auto Promotion.

02:13.02000000000001
enabled, que eu vou colocar como false na verdade, que é o seguinte, quando acontecer o deploy, eu não quero autopromover, ou seja, eu não quero sair do preview e já mandar direto para o serviço ativo. Eu quero que ele fique ali e caso eu queira, na mão ali, eu vou fazer esse processo. Beleza? Então, vamos aqui agora aplicar. Então, kubectl apply.

02:38.06999999999999
Beleza, aplicamos e vamos ver aqui no nosso querido Lens se tem alguma coisa agora. A priori não tem nada, mas a gente pode dar uma olhadinha aqui nos logs. Pode ser que de logs tenha alguma coisa. Então vamos clicar aqui nos logs.

02:52.24000000000001
E aqui ele deu uma reclamada, olha, novamente, ele falou aqui em ValidValue, porque ele não encontrou o Preview. Qual que é o problema aqui? A gente não tem ainda o serviço Preview, então ele vai dar uma reclamada mesmo, tá? A gente pode criar. Então aqui, o nosso serviço a gente vai duplicar, então aqui o que a gente vai fazer? A gente vai quebrar aqui a linha, a gente vai duplicar.

03:15.189999999999998
appk8s, eu vou chamar ele aqui de preview, pra ficar até um pouco mais completo. Então preview, e aqui a gente coloca como preview. Na prática eu vou ter o seguinte, eu vou ter dois serviços aqui. Então o primeiro, ele vai cair no appk8s.svc, e aqui ele cai no preview. Então a gente tá criando aqui o preview, é a mesma coisa, só muda o nome, e aqui em cima eu deixo o principal appk8s.service. Beleza? Então é isso, vamos agora dar um apply. Ele configurou ali pra gente, vamos ver se ele vai criar.

03:45.00999999999999
Olha só, que legal, aqui ele já falou, processo completo. Então, se deu o processo completo, será que ele funcionou? Ou será que ele ainda deu algum problema? Deixa eu ver aqui. Ele está reclamando no replicaCount. Ele ainda deu uma reclamada aqui, na verdade. Ele deu certo, mas ele reclamou. Deixa eu verificar aqui. O que está acontecendo?

04:13.379999999999995
Deixa eu ver se ele criou o Replica 7, isso aqui é legal até para a gente dar uma debugada, isso aqui é bem interessante.

04:20.730000000000018
Então ele criou, agora ele fez a criação, olha só. A gente vai usar um replica set, o que muda aqui é só que a gente não vai ter um deployment. A gente está substituindo o deployment pelo argo, mas o replica set continua existindo e os pods agora também existem. Então é isso, deu tudo certo, aparentemente aqui deu tudo certo, e a gente pode sempre acompanhar os logs pelo argo rollouts. Então aqui no argo rollouts.

04:46.10000000000002
ele é quem vai falar se deu problema ou não. Aqui no caso ele falou que deu Reconciliation Completed, então deu tudo ok. Como foi aqui o primeiro deploy, ele deu uns erros ali também, olha só, por conta do sync, mas enfim, agora já foi lá e funcionou. Podemos ver, então aqui no serviço vamos dar uma olhada. Aqui no app, temos dois serviços, olha que interessante. Vamos bater aqui no svc, então vou clicar aqui.

05:13.430000000000007
Caiu no Hello World, nesse caso aqui já foi, eu não tinha outro serviço. E vamos bater aqui também no preview para ver.

05:21.55000000000001
também bateu no reload. Então, tudo certo, tudo tranquilo, a priori. Mas, agora a gente tem que falar sobre, de fato, o nosso Canary. E também a gente tem que fazer uma alteração na aplicação para gerar ali uma nova versão para a gente conseguir testar melhor isso. Beleza? Mas é isso, só para a gente não ter um vídeo aqui muito longo, a gente vai fazer um breve corte e a gente volta na sequência com essa configuração. Ok? Espero você lá. Um abraço.

---

### Ajustando Strategy Blue-Green (Argo Rollouts)

#### Introdução

- Ao aplicar um recurso `Rollout` sem definir uma estratégia, nenhum Pod é criado.
- Vamos corrigir adicionando a configuração `strategy.blueGreen` no manifest do Rollout.

---

### Erro Detectado

- Logs do Argo Rollouts indicavam erro de campo obrigatório:

```text
Error: strategy is required, must define one of: canary, blueGreen
```

---

### Configuração Blue-Green no Rollout

Arquivo: `k8s/rollout.yaml` (substitui o Deployment)

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: apk8s
spec:
  replicas: 5
  selector:
    matchLabels:
      app: apk8s
  template:
    metadata:
      labels:
        app: apk8s
    spec:
      containers:
        - name: apk8s
          image: grasielagomes/apk8s:latest
          ports:
            - containerPort: 3000
  strategy:
    blueGreen:
      activeService: apk8s-svc
      previewService: apk8s-preview-svc
      autoPromotionEnabled: false
```

---

### Serviço Preview

Arquivo: `k8s/service-preview.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: apk8s-preview-svc
spec:
  type: ClusterIP
  selector:
    app: apk8s-preview
  ports:
    - port: 80
      targetPort: 3000
```

---

### Aplicando Configurações

```bash
kubectl apply -f k8s/rollout.yaml         -n app  # Atualiza Rollout com strategy blue-green
kubectl apply -f k8s/service-preview.yaml -n app  # Cria serviço preview
```

- Verifique status do Rollout e serviços:
  ```bash
  kubectl argo rollouts get rollout apk8s -n app
  kubectl get svc -n app
  ```

---

### Monitoramento e Logs

- Acompanhe logs do Rollout:
  ```bash
  kubectl argo rollouts logs -f apk8s -n app
  ```
- Confira condições de promoção e status:
  ```bash
  kubectl argo rollouts get rollout apk8s -n app --watch
  ```

---

### Próximos Passos

- Definir estratégia Canary no Rollout para testes graduais.
- Atualizar imagem da aplicação para gerar nova versão e validar rollout.
- Integrar controles de saúde (liveness/readiness) e hooks no Argo Rollouts.

---

### Referências

- Argo Rollouts Blue-Green: https://argoproj.github.io/argo-rollouts/user-guide/blue-green/
- Argo CLI: https://argo-rollouts.readthedocs.io/en/stable/
