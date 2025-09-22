00:0.34
Sensacional demais. Agora que a nossa aplicação já rodou ali, a gente já conseguiu ver ela funcionando, é interessante a gente dar uma olhadinha na principal mudança. Então, no final do dia, foi aquilo que nós vimos. O deployment, ele é o mesmo, porém ele está utilizando a API do Argo com o tipo rollout desta API. Isto aqui só vai funcionar depois que você fizer a instalação que o próprio Argo ali recomenda, ok? Porque aqui no caso essa API não existe no core do Kubernetes.

00:30.32
Ela vai passar a existir após a instalação. Beleza? Esse é um ponto importantíssimo. O Deployment é a mesma coisa, ok? O que vai mudar é a estratégia que a gente define aqui dentro da especificação do nosso IEMO, beleza? Que a priori nós passamos aqui Blue-Green, beleza? Tudo certinho. E agora a gente vai brincar um pouquinho com a Canary Deployment. A gente vai fazer inclusive uma mudança ali na nossa aplicação pra gente conseguir testar de uma maneira um pouco mais real.

00:57.9
Só uma dica aqui muito importante antes é o seguinte, o Argo, ele traz ali pra gente, o Argo Rollouts no caso, ele traz ali pra gente um negócio muito legal que é uma UI. Então tudo isso que a gente viu aqui de problema e tudo mais, você pode acompanhar pela UI do Argo, apesar de ser também bem eficiente ele via log.

01:18.840000000000003
Mas o progresso, enfim, do seu deploy, você pode acompanhar via essa UI. E para você ter acesso à UI, basta rodar aqui um kubectl argo rollouts dashboard. Isso aqui também, depois que você fizer a instalação. Como você instalou aqui a API do Argo, via kubectl você consegue acessar desta forma. Então, passando o dashboard, ele vai aqui, teoricamente, abrir.

01:45.400000000000006
para você ele não vai abrir na verdade de maneira automática mas ele vai aqui disponibilizar tá então ele tá aqui então tá aqui bonitinho para gente bacaninha demais inclusive não tem nada aqui em progresso tem nada ali rodando já tá tudo certo e aqui você pode ter acesso ao detalhamento então nós temos aqui basicamente um deploy que é o EPCA 8S tá ele tá com a estratégia ali blue green rodando este container aqui

02:9.990000000000009
certo? E ele está estável. Aqui nós não temos a opção de fazer um eventual rollback, porque na verdade a gente não tem nenhuma versão. Essa daqui foi a primeira revisão. Beleza? Então aqui você pode ter esse acompanhamento, é bem interessante, bem completo. E aí só pra gente fazer um pequeno teste, o que eu vou fazer aqui? A gente vai voltar no nosso deployment, tá?

02:33.58000000000001
E aqui na nossa réplica, a gente tem 5 aqui, a gente vai colocar uma flagzinha que é isso daqui ó, revision, revision, history, history, limit, ok? Vou colocar aqui 5. O que isso significa? Cada deploy que a gente faz é uma revisão, ok? Revision 1, revision 2. Se nós quisermos fazer o rollback, você consegue fazer pela própria interface aqui do Argo Rollouts, ok?

03:2.1500000000000057
Então, só que eu quero limitar, eu não quero que a gente tenha aqui várias revisões, eu tô colocando no máximo 5. Então, quando você fizer um deploy, você vai conseguir voltar até 5 deploys pra trás, que é um número mais do que suficiente. Beleza? Então, é só essa a dica. Isso aqui, inclusive, independe do Argo, ok? Você poderia usar ali na API também do deployment, por exemplo, não tem nenhum problema. É só pra ter esse controle de revisão, né, de tamanho máximo ali, que você vai ter de réplica 7 com esses históricos ali pra você controlar o rollback.

03:32.129999999999995
Beleza? E agora a gente vai mudar aqui pra v2 só pra gente fazer um teste com o Bluegreen. Então eu vou colocar aqui v2, ok? Não existe a v2 ainda, então a gente vai fazer o seguinte, eu vou só taguear aqui, eu vou voltar aqui, vou dar um docker tag, então docker tag, eu vou taguear da app v1 pra v2 aqui do nosso Docker Hub, ok? Vou fazer um docker push aqui da mesma coisa, só pra ele gerar uma tag nova aqui pra gente.

03:59.83000000000001
Ele não vai fazer nada, ele só vai gerar a tag ali. Isso aqui é um recurso que você pode fazer, se você precisar. E aqui, olha só que interessante, ele tem a V2. E aí o que eu vou fazer? Eu troquei aqui pra V2 no nosso template. Eu vou aplicar este YAML novamente. Então, kubectl apply. Eu vou aplicar aqui. Beleza! Vamos lá pra nossa UI do Argo.

04:24.379999999999995
E olha só que legal, ele já começou a subir aqui a revisão 2. Já subiu, tá vendo? Só que qual que é o grande detalhe aqui? O que que é o grande valor aqui? Que a versão 1 é a versão que está em produção. A versão 2 é uma versão em preview. Com isso você tem acesso a um promote. Você poderia promover, ok? Isso é muito legal. Ele tá com o deploy pausado aqui, tá vendo? E aí você pode promover. Quando você promove, o que que vai acontecer?

04:53.620000000000005
Isso mesmo, ele vai basicamente dropar a versão antiga, ele inicia aqui um countzinho de 30 segundos aqui, inclusive tá bugado na interface, não são minutos, são segundos, e aí ele vai basicamente transferir o tráfego pra dois. Aqui no caso a gente não tem nenhum tráfego, a gente vai depois testar com o Canary Deployment, mas é o que vai acontecer ali de fato, tá? Então aqui ele vai fazer a virada pra gente.

05:19.089999999999975
Já já, né? Acho que já fez, inclusive. Acho que já fez, exato. Então agora ele começou a descer os nossos pods da versão anterior. A gente até pode olhar aqui no nosso lens, mano.

05:30.829999999999984
Que é bem legal esse procedimento, olha lá. Ele estava com 10 pods, tá vendo? Então ele tinha ali os pods da v1 e agora ele tá matando a v1 pra deixar somente a v2. Então Blue Green é isso, né? Você subiu aqui a versão, e aí pra você ter garantia de que vai funcionar, ele vai rodar pra você duas aplicações ao mesmo tempo. Ele vai rodar tanto a v1 quanto a v2. Quando você fizer ali o promote, ele vai matar a anterior e deixar somente a nova. A nível de... Perdão.

05:59.00999999999999
A nível de Replica 7, você vai ter aqui o Replica 7 anterior apontando para V1. E aí caso você queira fazer o rollback, tanto por aqui quanto pela interface lá do Argo, é bem tranquilo. Basta fazer o rollback aqui. Eu não vou fazer aqui só para não atrapalhar nosso fluxo, mas bastaria fazer o rollback aqui. Aqui no caso ele não tem mais nenhum pod, e você poderia fazer por aqui o rollback. E aqui ele está como Done, como Health, o nosso deploy.

06:23.20999999999998
Beleza, então, beleza, bacana demais, é isso, e de fato está resolvido o problema. Bem simples, até por isso que eu encaixei aqui no conteúdo, porque realmente é bem tranquilo. Agora a gente vai falar um pouquinho do Canary Deployment. Então, para isso, eu vou mudar aqui o nosso Get Reload. Então, hoje ele vai retornar um Hello World, o que eu vou fazer? Eu vou trocar aqui para Olá Mundo. Dá uma aturação bem simples aqui.

06:47.50999999999999
Só isso, bem tranquilo. E eu vou já fazer um docker build, que é aquele procedimento um pouco mais demorado, então docker build. Vou buildar aqui para a nossa v3, só para manter aqui uma coesão. Troquei aqui a versão. Beleza, vamos ver ali como que ele vai funcionar.

07:11.800000000000011
Vai ser coisa rápida aqui, só pra gente fazer esse build e esse push e ficar depois tranquilo com relação a isso. Beleza, tá indo ali pra gente.

07:40.25
Show? Foi? Então vamos fazer aqui um docker tag da v3 aqui do nosso local para o meu usuário também v3 e vou dar aqui novamente um docker push v3. Beleza. Enquanto ele faz isso daí, que vai ser também rapidinho, vamos voltar aqui no código, vou fechar um pouquinho as abas, ok? E a gente vai aqui para o nosso deployment, que a gente vai basicamente mudar. Então, ao invés aqui de ser blue-green, não vai mais ser blue-green. Eu vou deixar comentado isso aqui, ok? E a gente vai colocar o seguinte aqui, canary.

08:10.95999999999998
Canary Deployment. Simples assim. E dentro do Canary nós temos os steps. Então, steps. Desta forma aqui. Ok? E aí o que a gente vai fazer? O nosso step ele vai até 100%. E ele é baseado em peso. Beleza? Então a gente vai colocar inicialmente aqui um peso. Então, set.

08:31.680000000000007
Set weight, dessa forma aqui, eu acho, weight, perfeito. Isso aqui mesmo. Vou colocar aqui de 20% aqui no caso, ok? 20% aqui no caso seria por cento. E eu vou colocar aqui uma pausa. Então, pause, dessa forma aqui. Beleza, uma pausa indefinida. E eu vou colocar depois um set weight. Um set weight.

08:58.190000000000055
de 40. Só um exemplo aqui. Vou colocar de 30, na verdade, pra gente ter um Baby Step bem legal aqui. Beleza? Então, tô mudando a estratégia. Canary Deployment com esses dois Steps aqui. Beleza? Troquei pra tag v3 aqui, tem que trocar pra v3. Beleza, vamos aqui fazer um teste então. Então, CubeCTL, Apply.

09:19.690000000000055
Beleza, e vamos voltar aqui, olha só, ele já mudou completamente. Então aqui no caso, olha que legal, a gente está com um deploy canário, ok? E ele começou a fazer agora a subida, e eu setei aqui o peso, eu falei 20%, ele tem 3 steps, que foi o que nós definimos aqui.

09:37.50999999999999
e ele te mostra o atual. Então, atualmente, atualmente, nós temos o quê? Nós temos ali basicamente o nosso deploy canário, certo? No primeiro step, pausado, com peso de 20%. Olha que interessante, olha isso daqui. Olha isso daqui. O que significa? Que ele tá rodando a revisão 3 com um pod,

10:1.240000000000009
E a Revisão 2, ele tá aqui terminando o último POD, então ele vai rodar com 4 PODs, ou seja, 20%. Eu tenho um POD de 5, eu tenho um que vai receber o tráfego aqui do meu Revision 3 e os outros 4 PODs vão receber do Old. Beleza? Então aqui é um cálculo matemático, por isso que eu falei no início. Você conseguiria fazer com o Kubernetes? Default isso daqui, daria pra fazer.

10:25.92999999999995
Só não é tão simples assim. Então aqui no caso, o nosso querido Argo Rollouts, existem outras ferramentas, nem falei no início ali, você poderia usar, por exemplo, o Flagger, o Flux também, que tem ali um conceito que olha pra isso, seria mais o Flagger aqui, mas enfim, também tem essa opção. Ele acaba orquestrando isso pra você. Então é muito interessante, isso aqui é muito legal. E se você for no Lens, o que você vai reparar aqui?

10:51.610000000000014
que ele tem isso daqui. Ele mudou o seu Replica 7, olha só, o Replica 7 anterior ele está com 4 e ele gerou um novo que tem 1 réplica. E aqui nos seus pods, você tem 5 réplicas. Qual que é o detalhe interessante aqui. Este aqui, ele é V3, a gente até pode dar uma olhada nele aqui.

11:9.42999999999995
E ele é um pod V3, tá vendo? V3. O 2 aqui, os outros todos são V2, ok? E aí quando você fizer um acesso aqui, ele vai simplesmente cair em alguns momentos e na maioria ele vai cair nos outros, tá? Então se você até acessar aqui os seus serviços, os services, ele tem aqui os pods, né? Deixa a gente ver aqui os endpoints. Aqui ele tem os seus pods todos aqui. Deixa eu só verificar aqui qual que é o IP do nosso...

11:40.85000000000002
o IP do nosso V3 aqui, deixa eu verificar, V3, beleza, tá ali, .11, o final. Deixa eu ver se ele tá mapeado aqui certinho. .11. Então ele tá aqui no Service Discovery do meu service. Então se eu bater aqui no meu serviço, em algum momento eu vou chegar lá, tá? Em algum momento. Deixa eu ver o que deu. Deixa eu verificar aqui, deixa eu dar um stop.

12:4.389999999999986
Beleza, foi. Então se eu ficar aqui acessando, em algum momento eu vou bater lá. Como aqui tá 20%, vai demorar. Então a gente vai ter que ficar aqui batendo N vezes, mas uma hora a gente vai com certeza bater lá. Então aqui vai demorar bastante realmente. Então tá ali.

12:24.559999999999945
tão funcional assim, a gente até poderia brincar com o próprio Pod, né? Então aqui no caso, o Pod mais recente é este aqui. Se eu clicar nele, eu estou no Olá Mundo. Se eu clico no anterior, eu estou no Olá Mundo.

12:41.870000000000005
Eu estou no Hello World, ok? A nível de serviço aqui não está tão fácil de visualizar, mas vai ter o mesmo comportamento, ok? Aí, beleza. Se você fez o deploy e funcionou, você pode simplesmente colocar aqui para ele seguir. Então, esse pause seu aqui, deixa eu só voltar aqui na home, eu posso simplesmente dar um promote. Então, eu dou um promote.

13:3.6100000000000136
E aí ele vai subir mais um pod, tá vendo? Então ele vai subindo mais um pod pra mim, da v3, claro, óbvio, e ele vai deletar um daqui. Então ele vai fazer dessa maneira ali, cadenciada, né? Então ele vai subir aqui pra 30%.

13:19.269999999999982
E agora ele acabou indo tudo ali que eu cliquei no Promote. Tem o passo ali do fazer via o Step que foi definido. Quando você passa por todos os Steps, ele vai aqui pro Promote direto e aí ele vai matar todos os pods antigos. Então aqui ele ainda tá matando os anteriores. Deixa eu até ver aqui como é que tá o Replica 7 dele. Beleza, ele tá terminando os pods aqui. Beleza. Tranquilo demais. E aqui?

13:50.39999999999998
Deixa eu remover aqui esse Sport Forward, beleza. Então serve-se, vamos lá aqui um Forward.

13:57.00999999999999
Beleza, e aqui ele tá no ola muito, ok? Mas qual que é o grande ponto que é importante aqui, que inclusive, até do ponto de vista lógico, faz super sentido? É que a gente consegue controlar os pesos, tá? Então é isso que tem que ficar bem definido aqui, beleza? Então aqui no caso, eu coloquei né, 7820, pausei, 7830, pausei. Você pode colocar de maneira automatizada, então por exemplo, você faz uma pausa,

14:24.590000000000032
E esta pausa vai durar, ela dura aqui por exemplo, 30 segundos. E você pode quebrar sim. Então aqui vai para 50%, dura 1 minuto, por exemplo. Aqui vai para 80%, depois de também 1 minuto.

14:43.690000000000055
E aí, quando chegar no último step, você tem ali a opção, claro, de fazer o Promote. E aí o Promote foi aquilo ali que eu cliquei e vai gerar, de fato, ele vai virar a versão toda. Então, vou até fazer mais um teste aqui. Vou colocar aqui mais um teste. Só pra gente brincar aqui um pouquinho. Então, V4, beleza.

15:10.149999999999977
Mas em suma é isso, então você consegue dentro do Kubernetes ter um controle com relação a sua release, ok? É isso que tem que ficar bem explicitado aqui, utilizando o Argo Rollouts. E é isso, se você for usar o Canary Deployment, você vai trabalhar desta forma aqui e via Bluegreen. É bem mais simples, basta ter um serviço ali também de preview, para você conseguir bater no preview e no Canary Deployment ele vai ali escalar de acordo com

15:35.35000000000002
o que foi acontecendo dentro do que você definiu ali. Beleza? Então, é um conceito bem legal, bem rico. E é isso, o objetivo aqui. Como eu disse, é até um plus com relação ao próprio Kubernetes, mas como a gente ia falar de Feature Flag, eu aproveitei para casar um pouquinho o assunto. Mas aqui, só para fazer rapidinho um docker tag, só para a gente fazer mais um teste,

16:4.399999999999977
A gente vai fazer aqui agora um Docker Push P4. Beleza! Então, é isso, tá? Ele vai demorar um pouquinho aqui pra fazer esse build, e aí a gente volta no encerramento, ok? A gente aproveita que essa aula já tá um pouco longa, vou fazer um breve corte, a gente volta ali só pra encerrar esse conteúdo, beleza? Então é isso, espero lá, um abraço!

---

### Testando Estratégias de Rollout (Argo Rollouts)

#### Introdução

- Revisão: após criar o recurso `Rollout` com estratégia Blue-Green, podemos testar diferentes versões da aplicação usando Argo Rollouts.
- Nesta aula, vamos acessar a UI do Argo, limitar histórico de revisões, testar Blue-Green e Canary Deployments.

---

### Dashboard do Argo Rollouts

- Para abrir a interface web de monitoramento do Argo Rollouts:

```bash
kubectl argo rollouts dashboard
```

- Acesse `http://127.0.0.1:3100` (ou porta informada) para visualizar status, revisões e opções de promote/rollback.

---

### Limitando Histórico de Revisões

- No manifest do `Rollout`, adicione `revisionHistoryLimit` para controlar o número máximo de revisões armazenadas:

```yaml
spec:
  revisionHistoryLimit: 5
```

- Cada deploy incrementa a revisão; com limite definido, somente as últimas 5 ficam disponíveis para rollback.

---

### Testando Blue-Green (versão v2)

1. Marque a imagem v2 e envie ao registry:
   ```bash
   docker tag grasielagomes/apk8s:latest grasielagomes/apk8s:v2
   ndocker push grasielagomes/apk8s:v2
   ```

````
2. Atualize o `Rollout` para usar a tag `v2` e re-aplique:
   ```bash
kubectl set image rollout/apk8s apk8s=grasielagomes/apk8s:v2 -n app
````

3. Observe no dashboard a nova revisão (revisão 2) em modo `Preview` e utilize o botão **Promote** para finalizar a troca.

---

### Testando Canary Deployment (versão v3)

1. Altere a aplicação para exibir “Olá Mundo” e crie a tag v3:
   ```bash
   docker build -t grasielagomes/apk8s:v3 .
   docker push grasielagomes/apk8s:v3
   ```

````
2. Configure o `Rollout` para estratégia Canary no manifest:

```yaml
strategy:
  canary:
    steps:
      - setWeight: 20
        pause: {}
      - setWeight: 30
        pause: {}
````

3. Atualize a imagem e aplique:

```bash
kubectl set image rollout/apk8s apk8s=grasielagomes/apk8s:v3 -n app
```

4. No dashboard ou via CLI, verifique distribuição de pods:

```bash
kubectl argo rollouts get rollout apk8s -n app --watch
```

5. Para avançar manualmente entre steps, use:

```bash
kubectl argo rollouts promote apk8s -n app
```

---

### Boas Práticas

- Defina `revisionHistoryLimit` para gerenciar rollback.
- Use `pause` em steps para validar a aplicação antes de continuar.
- Monitore o serviço e pods durante cada step.
- Automatize testes de saúde (liveness/readiness) e hooks no Rollout.

---

### Próximos Passos

- Explorar Rollout Hooks para inspeções de pré/promote.
- Integrar pipelines CI/CD para automatizar builds e rollouts.
- Comparar estratégias Canary e Blue-Green em cenários de carga.

---

### Referências

- Argo Rollouts User Guide: https://argoproj.github.io/argo-rollouts/
- CLI Reference: https://argo-rollouts.readthedocs.io/
