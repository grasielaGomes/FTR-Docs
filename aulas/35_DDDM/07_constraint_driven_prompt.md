### Constraint-Driven Prompts: Técnicas Avançadas de Prompt Engineering

#### 1. O que são Constraint-Driven Prompts

- Consiste em impor limites ou restrições ao formato ou opções que a inteligência artificial pode utilizar.
- Está diretamente relacionado à etapa de restrições na anatomia do prompt.
- Direciona a IA para evitar respostas vagas ou extensas, focando no que realmente importa.

#### 2. Exemplos de Restrições

- Solicitar três alternativas sem usar Kubernetes.
- Explicar no máximo em quatro linhas.
- Retornar apenas em JSON válido.

#### 3. Diferença entre Restrições e Formatos

- Restrições: limites que a IA definitivamente não pode ultrapassar (ex: não usar Kubernetes).
- Formatos: orientações sobre como apresentar a resposta (ex: retornar em JSON), mas a IA pode sugerir alternativas se considerar mais adequado.
- Muitas vezes, restrições e formatos se sobrepõem, mas a IA consegue distinguir o que é obrigatório e o que é sugestão.

#### 4. Comportamento da IA diante de Restrições e Formatos

- O que é imposto como restrição não deve ser descumprido pela IA.
- O que é solicitado como formato pode ser adaptado pela IA, caso ela identifique uma alternativa mais adequada ao contexto.
- Exemplo: pedir resposta em JSON, mas a IA pode sugerir uma planilha se considerar mais útil para o usuário.

#### 5. Por que utilizar restrições

- Evita respostas vagas ou excessivamente longas.
- Garante que a IA foque no que realmente importa para o usuário.
- Ajuda a obter respostas mais objetivas e alinhadas com a necessidade.

---
