### Quiz

1. **Pergunta**: Qual é a vantagem de usar o Pulumi em comparação ao Terraform para pessoas desenvolvedoras?

   - **Resposta Correta**: O Pulumi permite criar infraestrutura usando linguagens já conhecidas, como TypeScript.

2. **Pergunta**: Qual comando do Pulumi permite visualizar as mudanças que serão aplicadas antes de executá-las?

   - **Resposta Correta**: `pulumi preview`

3. **Pergunta**: Qual é a função do comando `pulumi destroy`?

   - **Resposta Correta**: Apagar todos os recursos gerenciados por uma stack do Pulumi.

4. **Pergunta**: Qual é o principal objetivo do IAC (Infrastructure as Code)?

   - **Resposta Correta**: Permitir a criação, gestão e automação de infraestrutura por meio de código.

5. **Pergunta**: Quais são as boas práticas ao gerenciar um repositório IAC com Pulumi?

   - **Resposta Correta**: Adicionar políticas de branch e rodar o preview em pull requests antes de aprovar mudanças.

6. **Pergunta**: No contexto do Pulumi, o que representa uma stack?

   - **Resposta Correta**: A pilha de recursos criada em um único ambiente.

7. **Pergunta**: Como o Pulumi gerencia o estado dos recursos?

   - **Resposta Correta**: Ele utiliza um arquivo de estado, como o stack.json, que pode ser armazenado localmente ou remotamente.

8. **Pergunta**: Qual é a melhor prática para proteger o estado ao usar o S3 como back-end remoto?

   - **Resposta Correta**: Habilitar versionamento no bucket S3.

9. **Pergunta**: Qual é o principal benefício de utilizar o Pulumi Cloud?

   - **Resposta Correta**: Gerenciar os estados remotamente de forma simples.

10. **Pergunta**: O que acontece se um recurso criado pelo Pulumi for modificado manualmente no console do provedor de nuvem?

    - **Resposta Correta**: O Pulumi ignora a alteração manual.
