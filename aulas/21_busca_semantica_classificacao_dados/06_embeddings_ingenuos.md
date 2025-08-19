### **Embeddings Ingênuos: Primeiras Ideias para Representar Objetos**

#### Introdução

- Nesta aula, vamos explorar os primeiros jeitos que costumamos pensar para criar embeddings automaticamente.
- Esses métodos são chamados de "ingênuos" porque parecem boas ideias à primeira vista, mas têm limitações importantes.
- Vamos entender por que eles não funcionam bem e o que falta para representar objetos de forma eficiente para o computador.

---

#### Tópicos

1. O que são embeddings ingênuos
2. Representação one-hot
3. Limitações da representação one-hot
4. Contagem de entidades (letras, pixels, cores)
5. Representação binária (bits)
6. Por que essas abordagens não funcionam bem

---

### Passo a Passo da Aula

1. **O que são embeddings ingênuos?**

   - São as primeiras ideias que vêm à cabeça quando tentamos transformar objetos em números para o computador.
   - Não são erradas, mas não capturam o significado (semântica) dos objetos.

2. **Representação one-hot**

   - Cada objeto é representado por um vetor onde só uma posição é 1 e todas as outras são 0.
   - Exemplo:
     - Se temos os objetos "rei", "príncipe", "rainha" e "princesa", o vetor de "rei" seria [1, 0, 0, 0] e o de "rainha" seria [0, 0, 1, 0].
   - Isso é chamado de vetor one-hot.

3. **Limitações da representação one-hot**

   - Vetores são esparsos (quase tudo é zero) e podem ficar enormes se tivermos muitos objetos.
   - Todos os objetos ficam igualmente distantes uns dos outros, ou seja, "jacaré" é tão distante de "rei" quanto de "rainha".
   - Não existe relação de semelhança entre os objetos nesse tipo de vetor.

4. **Contagem de entidades (letras, pixels, cores)**

   - Outra ideia é contar quantas vezes cada letra aparece em uma palavra, ou quantas cores aparecem em uma imagem.
   - Exemplo:
     - "rei" e "rainha" compartilham a letra "R", mas "rato" também tem "R" e não é parecido com "rei".
     - Em imagens, contar a cor caramelo pode indicar "cachorro", mas qualquer coisa caramelo pode ser confundida.
   - Essa abordagem perde o sentido real dos objetos e pode gerar confusões.

5. **Representação binária (bits)**

   - Toda palavra, texto ou imagem já pode ser convertida em números binários (bits).
   - Mas isso só reflete como o computador armazena os dados, não o significado deles.
   - Não há semântica explícita nessa representação.

6. **Por que essas abordagens não funcionam bem?**

   - Não capturam o significado dos objetos.
   - Não garantem que objetos parecidos fiquem próximos no espaço dos vetores.
   - Não ajudam o computador a entender relações ou diferenças reais entre os objetos.
   - Não atendem às características desejadas para bons embeddings (como vimos nas aulas anteriores).

---

### Dicas Práticas

- Evite usar representações one-hot ou contagem simples de entidades para tarefas que exigem entendimento de significado.
- Lembre-se: bons embeddings precisam refletir semelhança e diferença entre objetos de forma automática e eficiente.
- Pense sempre em como o computador pode "perceber" que dois objetos são parecidos, mesmo que tenham nomes ou aparências diferentes.

---

> **Resumo:**  
> Nesta aula, você viu exemplos de métodos ingênuos para criar embeddings, entendeu suas limitações e por que precisamos de abordagens mais inteligentes para representar objetos de forma útil para o computador!
