00:1.03
Fantástico! Então acabou aqui, ele fez o build da nossa v4. Nós fizemos aqui algumas alterações nos steps do deploy canário, então aqui eu vou colocar a v4 e a gente vai rodar de novo ali pra ver esse negócio. Então ele já fez o deploy, o push, então eu vou aplicar aqui de novo.

00:17.63
Beleza, e agora ó, ele começou. Tá vendo que agora ele tá muito mais completo? Ele tem vááários steps, ele tem 8 steps aqui, certo? E é isso, então a gente vai começar a ver de fato o deploy. Quando o deploy acontece aqui, quem tá orquestrando ao invés do deployment é o argo rollout. Então a gente não tá usando mais deployment aqui, a gente tá basicamente usando o argo rollout. Beleza? Então aqui,

00:43.94
Ele tá pausado ali, né, no caso, tá com um pause. Vamos esperar aqui ele só dropar esse pod dele ali. Criou você também pode fazer um aborto, né, se você quiser. Ah, eu não quero mais subir, deu algum problema. Você pode abortar e aí ele vai voltar o tráfego todo ali pro...

01:5.560000000000002
para a sua versão anterior. Então é uma opção ali também você fazer isso. Então você pode trabalhar desta forma ali, não tem nenhum grande problema. Então é legal trazer também esse ponto ali. Beleza? Aqui também você pode dar um restart se você quiser. Enfim, tem vários acompanhamentos ali que são legais. E se você clica aqui, você tem acesso ao contexto e aos steps que ele vai fazer ali para a gente. Então isso é bem legal. Eu vou inclusive colocar

01:35.95
Esse pause aqui, deixa eu só mudar ele, que eu vou colocar um tempinho aqui, eu vou colocar 10 segundos, a gente vai só reaplicar aqui, porque a gente já vê esse ponto sem precisar ficar esperando muito aqui, que é legal. Então aqui ele vai esperar 10 segundos.

01:53.08
E aí quando esse tempo todo passar, olha só que legal, passou, ele já começa a setar pra 30%. E aí ele vai controlando isso pra você, ele vai orquestrando. Então basicamente aqui ele vai subir um pod novo, ele vai trabalhar de maneira bem similar ao que a gente via no rolling update, então ele sobe um pod primeiro, quando isso acontece ele vai consequentemente dropar

02:14.169999999999987
um pod anterior, alguém aqui vai deixar de existir. Esse dashboard aqui nem sempre ele vai ser tão efetivo assim, então pode ser que tenha um delayzinho, mas em algum momento aqui esse pod vai deixar de existir. A gente até pode ver aqui nos próprios pods. Boa, tá running, deixa eu ver como que tá, tem dois pods aqui, beleza, show. E vamos aguardar ali, ele já tá aguardando 30 segundos, começou a subir de novo, agora ele vai

02:42.74000000000001
Dropar ali um pod, vai subir um novo. Ele vai acabar subindo mais rápido, esses pods, porque obviamente eu já tenho a imagem baixada, então vai ser muito mais rápido. Então é legal também citar esse ponto. E a gente pode ficar brincando aqui de bater nesse serviço, para ver se ele vai em algum momento bater no meu teste que eu tanto quero ver. Ele sempre está grudando ali na mesma réplica. Isso pode acontecer, porque aqui a gente não tem quase tráfego nenhum.

03:14.039999999999992
É algo de ficar esperando mesmo, então aqui ele tem que desgrudar da mesma réplica que ele sempre tá batendo, que é a única réplica que tá respondendo ali. Mas ele vai mudar em algum momento pra o que nós definimos, que foi ali o mais um teste. Então aqui beleza, tá esperando mais 60 segundos. Claro que aqui o tempo é muito curto, você pode colocar tempos maiores ou você pode deixar aqui pra provar manualmente também.

03:40.22999999999999
que é uma opção, você tem ali esse controle que pode atender bem. Então aqui, olha só, ele está levando embora mais duas réplicas e deixando quatro réplicas ali. Basicamente é isso aqui, vou até gerar um novo Port Forward.

04:2.469999999999999
E o ideal é que se você quiser no seu ambiente local, seja estressando ali, é legal dar uma estressada, criar talvez um curl e colocar ele em loop, que pode ser que você consiga pegar mais rápido, né, que ele grudou em uma réplica, então por isso que ele tá sempre listando ali pro mesmo, né, digamos assim. Mas beleza, é isso né, basicamente. E aí também, se der algum problema, você pode fazer um rollback por aqui, é bem simples,

04:32.81999999999999
nenhum segredo nesse sentido, tá? É muito de boa ali, bem tranquilo mesmo com relação a isso, tá? E aí aqui ele acabou fazendo o rollout sozinho, né? Ele vai fazer pra 100% porque a gente colocou lá no final pra ser assim. Eu coloquei o duration aqui. Se você não quiser, você pode deixar ele só pausado mesmo, tá? Você pode colocar ele vazio, por exemplo.

04:55.29000000000002
E aí ele vai chegar em 80, pra alguém de fato colocar ele pra 100, vai ter que chegar aqui e colocar na mão. Eu acabei colocando dessa forma, então por esse motivo ali ele vai fazer sozinho, né, digamos assim. Então já terminando o nosso pod aqui, e as 5 réplicas já estão vivas desta forma aqui. Então é isso, né, basicamente ali.

05:19.24000000000001
O que a gente gostaria de ver é que ele caiu o Port Forward, que ele estava grudado ali, parece que não pode. Eu tenho que fazer de novo para ver. A gente vai fazer aqui, mas basicamente não tem nenhuma novidade com relação a isso. Então a gente vai dar aqui um Stop e ele está no mais um teste. Beleza? Então é isso, basicamente. A dica que eu também ia passar é com relação ao Blue-Green. Então aqui, como nós vimos ali, ele fica no Preview. A gente não vai aqui fazer mais o teste, não é o grande foco, mas aí eu deixo também para você esse ponto.

05:47.02999999999997
de você bater no preview pra ver essa diferença, ok? Ponto importante, o Auto Promotion aqui, ele precisa ser falso. Se ele for true, você sempre vai virar automaticamente. Neste caso, o Blue-Green não faria muito sentido, beleza? Porque se você sempre vira automaticamente, é o mesmo conceito do Rolling Update, ok?

06:8.139999999999986
Tem esse ponto, mas, tirando isso, ele sempre vai ser falso, você vai ter um acompanhamento sobre isso e vai ter o Promote ali, que você pode até automatizar. Você pode colocar uma camada de testes, por exemplo, automatizada, e se esses testes ali retornarem o quê, você automatizaria também a promoção. É possível fazer, ok? Mas...

06:26.95999999999998
Enfim, aí fica em aberto, não é de fato. Tem um objetivo aqui, a gente nem queria falar tanto assim do Blue Green, é mais sobre o Canário, que tem relação com o deploy gradual. Então você vai lançando ele de acordo com a porcentagem do seu tráfego. Então 20%, 30%, 40%, enfim, isso em tempo real do seu tráfego e aí você tem um controle muito legal.

06:48.10000000000002
nesse aspecto, é o mesmo deployment, é a mesma coisa, o que a gente mudou aqui é o arco rollout. Então é isso, basicamente o nosso conteúdo de feature flags, passamos ali por on-list, passamos pelo open feature e também pelo flags de, e terminamos aqui no arco rollout como um plus com relação ao que nós vimos ali de deploy no Kubernetes, olhando aqui como fazer um lançamento, um deploy canário em um cluster

07:15.149999999999977
Kubernetes, ok? De dica de estudos, vale aprofundar bastante aqui nessa estrutura do Argo Rollouts. É uma estrutura relativamente simples, ok? Então não vai fugir muito disso aqui, a não ser que você trabalhe, por exemplo, com Sidecar, com Istio, por exemplo, que ele também dá suporte, mas aí tem alguns detalhes importantes. E no projeto do Argo como um todo. Então olhar ali pro Argo CD, principalmente, que ele é muito legal, é um conteúdo bem avançado,

07:40.889999999999986
Mas caso aí seja do seu interesse, vale dar uma olhada, um conceito de GitOps para Cluster Kubernetes, como obviamente aqui o nosso conteúdo é mais para o lado do desenvolvimento, a gente não vai aprofundar tanto assim, mas eu deixo aí como dica caso você queira entender como funciona.

07:57.31999999999999
Show? Então é isso, um prazer inenarrável a gente ter chegado até esse momento aqui, bastante conteúdo, conteúdo muito avançado, muito legal, e a gente agora vai seguir ali pro assunto de cost management, ok? Então, como que a gente faz ali um gerenciamento eficaz de custo em cloud, né, pra gente ali não

08:14.550000000000011
gastar muita grana ou ter uma certa governança com relação aos custos. Inclusive vamos falar um pouquinho sobre o Github também, que é um assunto importante. Mas sem dar muitos spoils, a gente se vê aí no próximo módulo de DevOps, aqui no nosso POS, o stack da Rocketseat. Espero você lá, um grande abraço.

---

### Explorando Testes de Rollout (Blue-Green e Canary)

#### Introdução

- Nesta aula, validaremos o funcionamento de novas versões no Argo Rollouts.
- Vamos usar a UI do Argo para monitorar deploys, limitar histórico de revisões, e testar Blue-Green e Canary deployments.

---

### 1. Dashboard do Argo Rollouts

- Inicie a interface web:

```bash
kubectl argo rollouts dashboard
```

- Acesse em `http://127.0.0.1:3100` para visualizar status de revisões, steps, e opções de promote/rollback.

---

### 2. Limitando Histórico de Revisões

- No manifest do `Rollout`, adicione:

```yaml
spec:
  revisionHistoryLimit: 5
```

- Este valor mantém apenas as 5 últimas revisões para rollback.

---

### 3. Testando Blue-Green (versão v4)

1. Crie a imagem v4 com mensagem alterada:
   ```bash
   # Dentro da pasta do projeto
   docker build -t grasielagomes/apk8s:v4 .
   docker push grasielagomes/apk8s:v4
   ```
2. Atualize o Rollout para usar `:v4`:
   ```bash
   kubectl set image rollout/apk8s apk8s=grasielagomes/apk8s:v4 -n app
   ```
3. Observe no dashboard:
   - Nova revisão em `Preview`.
   - Utilize **Promote** para finalizar a troca e migrar 100% do tráfego.

---

### 4. Testando Canary (versão v4)

1. No manifest do `Rollout`, substitua `strategy.blueGreen` por `strategy.canary`:

```yaml
strategy:
  canary:
    steps:
      - setWeight: 20
        pause:
          duration: 10s
      - setWeight: 30
        pause:
          duration: 30s
```

````
2. Aplique as mudanças e monitore:
   ```bash
   kubectl apply -f k8s/rollout.yaml -n app
   kubectl argo rollouts get rollout apk8s -n app --watch
````

3. Para avançar manualmente entre steps:
   ```bash
   kubectl argo rollouts promote apk8s -n app
   ```

---

### 5. Boas práticas

- Ajuste `pause.duration` para validações automáticas ou manuais.
- Use comandos `kubectl argo rollouts logs` e `--watch` para acompanhar detalhes.
- Garanta readiness/liveness probes para checar a saúde do novo Pod antes de promover.

---

### 6. Próximos Passos

- Explorar Rollout Hooks para testes automáticos de smoke.
- Integrar CI/CD para automatizar build, push e rollout.
- Comparar Flagger, Flux e outras ferramentas de canary.

---

### Referências

- Argo Rollouts User Guide: https://argoproj.github.io/argo-rollouts/
- CLI Reference: https://argo-rollouts.readthedocs.io/
