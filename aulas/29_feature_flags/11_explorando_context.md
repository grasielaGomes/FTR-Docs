00:0.99
Sucesso! Então, agora que nós já fizemos alguns testes, nós vamos retomar com testes um pouco mais avançados para tentar chegar no que nós vimos até agora. Porém, antes, só uma pequena correção que passou batida na gravação, que foi o seguinte. Nós estávamos ali com as nossas variantes como strings. Então, A e B eram basicamente duas strings.

00:24.57
Até aqui, nenhum problema, eu estava aqui setando a variante A como a nossa default, como a nossa padrão, e ele estava reclamando aqui. Aqui foi só um pequeno ponto de desatenção, e aí obviamente ele vai dar erro, mas o problema é porque nós estamos pegando aqui boolean details, ok? Então, aqui no caso, você tem que se orientar pelo tipo.

00:47.37
Então, por exemplo, se no caso aqui eu vou retornar uma string, nós teremos aqui o getStringDetails, ok? Com relação a flag é mais ou menos a mesma coisa. Você pode pegar getString, aqui no caso ele não vai trazer o resultado ideal, mas seria também o getStringValue, ok? E aí você tem de acordo com o tipo. Então ele trouxe aqui logar, que ele retornou a variante logar. No caso ali é a variante A, que tem o valor de logar. Se você fizer alguma alteração aqui e mudar para B, por exemplo,

01:18.200000000000003
ele vai seguir a mesma lógica ali e aí ele foi pra entrar. Beleza? Então no caso aqui é um pouquinho diferente, né? Tem uma pequena nuance ali que acabou passando despercebido até pelo hábito aqui do Onleash, mas é isso. Então você sempre vai se orientar pelo tipo. Então ele reclamou ali justamente porque aqui ele espera que você tenha como retorno ali uma string e não foi o que aconteceu, então ele deu ali um mismatch, ok?

01:42.989999999999995
É só a gente estar de acordo com o tipo, se for booleano é isso mesmo, se for string vai ter que ser string e assim de acordo com os tipos primitivos. Então getBoolean, getNumber, getObject, todos vão ser ali em pares. Então você vai ter tanto o details quanto também o value, se você já quiser pegar o value direto, por exemplo, seria o valor ali no caso

02:5.6200000000000045
da própria variante, no caso aqui seria o value da variante. Se você quiser ver os detalhes também, teria ponto value pra pegar o valor que você necessita. Ok? Então só essa correção, tá? E aí dando sequência aqui, qual que é o grande ponto? A gente vai trabalhar aqui uns exemplos de gradual rollout, então o que nós fizemos ali também no unleash, pra ver ali como que esse negócio se comporta com essa flag aqui que a gente tá configurando.

02:34.25
Então, o primeiro ponto aqui é o seguinte. Dentro desse contexto aqui, a gente vai trabalhar com o conceito de Targeting. Que é o que, inclusive, nós já vimos lá no Unleashed. Então, Targeting, dessa forma aqui. E aqui nós teremos um objeto, beleza? A gente depois, inclusive, vai fazer uns outros exemplos com esse objeto, mas a priori, nós podemos fazer o seguinte. Fractional, desta forma aqui.

02:59.18000000000001
E ele aqui no caso vai ser o que? Uma lista, como ele bem sugere ali, ok? É uma lista, e aqui no caso é uma matriz, é uma lista dentro de lista. Então eu vou colocar aqui, se tiver ligado a on, ele vai mandar para 10%. E se tiver

03:20.460000000000008
desligado, ele manda pra 90%. Ok? Então aqui eu vou só retomar com o nosso exemplo, então aqui vai ser, pelo menos nessa flare aqui vai ser 1 mesmo, então 1, off.

03:32.93000000000001
Aqui vai ser um boleano mesmo, então, aqui vai ser um falso. Eu vou falar que eu quero o bom. Então, aqui, vamos só mudar, ele vai trazer para a gente, então, nesse caso vai ser, inclusive, até para a gente testar, ok? Se eu rodar aqui, olha só, ele vai reclamar também, tá vendo? Porque agora ele não retorna mais um string, ele está retornando um boleano aqui. Então, o tipo aqui é bem importante. Então, get boolean.

04:1.9300000000000068
Value e o GetBooleanDetails. Então, GetBooleanDetails aqui pra gente dar uma olhada. Ok? Então, é isso. Vamos aqui dar uma testada.

04:14.659999999999997
Olha lá, deu como true. Então aqui obviamente ele vai funcionar demais, não tem nenhum grande problema, porque a gente colocou 9010, mas se você quiser colocar aqui como, por exemplo, deixa eu só verificar aqui, como off também, então ele vai retornar o tráfego ali para 9010.

04:33.26999999999998
Ele também vai ter um cache, que está similar ao nosso One Leash, basicamente ele também vai ter esse comportamento e você consegue filtrar por aqui, a maneira que você vai controlar o seu fluxo. Beleza? Então, é bem parecido ali, é bem similar. A dor, na verdade, não é nem na parte do código. A dor maior é entender como esse JSON aqui funciona. Novamente, se está com dúvida, basta copiar.

05:0.4900000000000091
e acessar aqui o Playground, que ele vai trazer todo o contexto ali pra gente. Então aqui você tem ali, por exemplo, uma ideia, mais ou menos, de como que ele vai funcionar. Então aqui, por exemplo, ele deu um flag not found, que a gente tá usando aqui a flag loginPage. Então agora, ele close como off ali, por exemplo, você pode resetar. Opa, não desta forma, né? Perdi aqui. Deixa eu pegar aqui de novo. Boa.

05:29.180000000000007
Login page, e aqui ele trouxe também false, porque aqui está dessa forma. Se você colocar como on, aí ele vai trazer também como on. Desta forma aqui, para até 10% do seu tráfego. Então, é mais ou menos essa a grande confusão aqui dessa estrutura, mas é uma maneira de você fazer e ter esse controle. Lembrando, a flag sempre vai precisar estar ligada.

05:55.75999999999999
Aqui também ele vai ter outros exemplos, outras opções que você pode também brincar. A gente vai fazer uma aqui de brincadeira só para ver como funciona também. Até coloquei essa daqui. A gente vai fazer uma similar a esse contexto. Pronto? Então aqui, para a gente deixar o nosso exemplo um pouco mais complexo, eu vou criar uma nova flag, beleza? Então a gente vai criar aqui uma nova flag para a gente ter esse contexto. Então eu vou chamar aqui

06:23.180000000000007
Vou chamar aqui de new flag. Escrever aqui de novo, ela vai ter ali o seu state como enabled.

06:38.51999999999998
Beleza. Vamos ter aqui por enquanto variantes também nesse mesmo molde, nesse mesmo contexto. Então aqui, variantes. Inclusive ele já trouxe aqui pra gente uma ideia. Eu vou trabalhar com o conceito de on e off. Beleza. A nossa default aqui, vou colocar como a nossa on, no caso. Vai ser a on.

07:1.75
e que nós teremos um target, então aqui, target, desta forma aqui, e você pode trabalhar com ifs, então isso aqui é um negócio muito interessante. Então eu vou fazer o seguinte aqui, if, desta forma aqui, e dentro da estrutura do nosso flagD é uma lista, então if, lista de objetos aqui no caso, e eu vou colocar um end, então end,

07:28.480000000000018
e eu terei aqui duas condições. Então, primeira condição, isso aqui é bem complicado, bem chatinho, pode ser que tenha até erro meu aqui de typo, mas vamos ver. Então aqui, se for igual, opa, vou colocar aqui como var,

07:49.43000000000001
VAR dessa forma aqui, beleza. E eu vou chamar aqui de... pode ser aqui USER, pode ser USER aqui. Então, se a minha VAR USER tiver o valor de PocketSeat USER e eu coloquei aqui um

08:8.230000000000018
Opa, aqui na verdade é um objeto, então seria isso aqui. Eu coloquei aqui também, como eu coloquei um end, foi só para exemplificar. O end precede uma lista, então você está passando aqui uma lista. Então, se também eu tiver aqui uma outra condição, que eu vou chamar de group. Vou chamar de group aqui. Então, group Rocket City.

08:32.440000000000055
Então, bem complexo aqui, não é realmente muito simples escrever essa estrutura. E aqui nós teremos o nosso ON e o nosso OFF.

08:45.539999999999964
Desta forma aqui, ok? Então é isso, tá? Então se eu tiver aqui umas condições, né? As duas aqui forem true, no end aqui eu preciso que as duas sejam true, eu tô falando aqui de operador igual, então comparação pra saber se o que eu tenho de variável user é igual a isso aqui e group é igual a isso aqui, eu vou ter ali o resultado xptl. Beleza? Pô, legal, né? Legal. Mas e aí? Como é que isso fica do lado do código? Então vamos testar aqui. Vou trocar flag pra new flag.

09:15.92999999999995
E vamos dar uma brincada aqui. Então, node, trouxe como falso. Opa, trouxe como falso. Tá dando falso aqui. Beleza? Eu falei que, só pra gente relembrar aqui, eu falei que o nosso default é on.

09:34.629999999999995
Beleza, só que ele deu falso ali. Por que que ele deu falso? Porque falta o contexto. Então aqui, assim como no Onelist, você pode e deve passar o contexto. Então aqui eu vou passar o contexto. Qual que vai ser o contexto? Eu vou passar aqui como vírgula, e a gente vai aqui abrir e passar as VARs que nós pedimos, que vai ser aqui no caso a VAR User, que é a Rocketseat. Vou quebrar isso aqui.

10:5.169999999999959
que é a Rocketseat User. Opa, beleza. E aqui eu terei também o meu group, que vai ser o Rocketseat Group. Deixa eu ver se é isso aqui mesmo. É isso aqui. Eu vou comentar por enquanto o details, tá? Deixar só aqui. Beleza, só pra gente ver se a flag vai funcionar. Então, trouxe aqui. E aí ele deu true agora, tá? Vamos testar aqui. Se eu passar load aqui,

10:35.26999999999998
Ele deu falso. Então está funcionando demais. Se eu passar aqui o details, a gente também pode dar um teste, fazer uma brincadeira aqui. Não funcionou, né? Por quê? Aqui não vai funcionar mesmo, aqui tá a load aqui, mas vamos só testar de novo.

10:50.799999999999955
Não funcionou justamente por conta da falta de contexto. Então você tem que passar nos dois lugares. Então aqui você tem que passar também o contexto. E aqui no caso, deixa eu só deixar um pouco melhor, eu vou criar aqui. const context, nesse caso aqui vai ser default mesmo, a gente vai sempre ter esse contexto aqui e a gente passa ele aqui.

11:13.120000000000005
Ao invés de duplicar o código, fica mais fácil de mexer. Beleza, você vai montar isso de acordo com o dinamismo da sua aplicação, mas aqui no nosso caso está tudo certo. E aí ele deu match e a variante foi a 1 por conta disso. Então isso aqui é muito interessante, é muito legal. É complicado, não dá para dizer que é simples fazer essa configuração, realmente é meio difícil.

11:38.66999999999996
Mas aqui é mais pra você também ver essa opção. O Open Feature hoje é um assunto que está em alta justamente por ele proporcionar esse desacoplamento, então é um ponto ali que vale a pena dar uma olhada, dar uma entendida, ver como funciona, por exemplo, como a gente está fazendo aqui, e explorar melhor esses conceitos voltados a como construir esse JSON. Lembrando que tem um esquema aqui também e dá pra ver mais ou menos o modelo.

12:5.809999999999945
Beleza? Então é isso aqui. A gente agora vai ter somente mais uma aula pra criar um Docker Compose dessa confusão que a gente criou aqui, pra ficar até mais fácil pra você rodar e brincar aí no seu ambiente local. Beleza? Então a gente volta na próxima aula pra falar um pouquinho sobre o Docker Compose desse Docker Run que a gente executou. Show? Eu espero você lá. Um grande abraço.

---

### Explorando Contextos e Rollout Progressivo

#### Introdução

- Nesta aula, vamos abordar nuances de tipos ao consultar flags e demonstrar estratégias de rollout (% gradual) usando contextos.
- Pontos-chave: correção de métodos de consulta por tipo e criação de regras de targeting (fractional rollout).

---

### Correção de consultas por tipo

- Métodos de API do Open Feature devem corresponder ao tipo de retorno:
  - Booleano: `getBooleanValue` / `getBooleanDetails`
  - String: `getStringValue` / `getStringDetails`
  - Número: `getNumberValue` / `getNumberDetails`
  - Objeto: `getObjectValue` / `getObjectDetails`

```js
// Exemplo booleano correto:
const flag = await client.getBooleanValue('myFlag', false, context)
// Exemplo string correto:
const text = await client.getStringValue('myFlag', 'default', context)
```

---

### Rollout Progressivo (Fractional)

- Utilizamos o objeto `targeting` para definir percentuais de distribuição entre `on` e `off`:

```js
const targeting = {
  fractional: [
    ['on', 10], // 10% do tráfego recebe 'on'
    ['off', 90], // 90% recebe 'off'
  ],
}
const result = await client.getBooleanValue(
  'loginPage',
  false,
  context,
  targeting
)
```

- O FlagD aplica caching similar ao Unleash e resync automático ao atualizar `flags.json`.

---

### Exemplo avançado de Targeting

- Podemos combinar múltiplas condições usando operadores `and`:

```json
// Exemplo parcial de flags.json
"flags": [
  {
    "name": "newFlag",
    "enabled": true,
    "variants": [
      { "variant": "on",  "value": true },
      { "variant": "off", "value": false }
    ],
    "defaultVariant": "on",
    "targeting": {
      "and": [
        { "var": "user",  "equals": "RocketseatUser" },
        { "var": "group", "equals": "RocketseatGroup" }
      ]
    }
  }
]
```

```js
const context = { user: 'RocketseatUser', group: 'RocketseatGroup' }
const isActive = await client.getBooleanValue('newFlag', false, context)
console.log('newFlag ativa?', isActive)
```

---

### Boas práticas

- Defina claramente o tipo de cada flag e use o método de consulta correspondente.
- Versione o arquivo `flags.json` e registre alterações no repositório.
- Teste targeting no Playground FlagD antes de atualizar o arquivo de produção.
- Utilize `setProviderAndWait` para garantir readiness do provider.

---

### Próximos passos

- Criar `docker-compose.yml` para orquestrar FlagD e a aplicação.
- Implementar testes automatizados de rollout em pipelines CI/CD.
- Comparar cenários de uso entre Unleash, Open Feature e FlagD.

---

### Referências

- Documentação Open Feature: https://github.com/open-feature
- Schema FlagD: https://flagd.dev/schemas/flagd-schema.json
- Playground FlagD: https://flagd.dev/playground
