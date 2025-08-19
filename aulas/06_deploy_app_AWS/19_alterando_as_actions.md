Alterando as Actions

Nesta aula, exploramos a criação e o deploy de uma Task Definition no ECS. Começamos ajustando a estrutura do JSON e removendo o App Runner. Em seguida, implementamos dois passos: renderização da Task Definition e o deploy em si. Discutimos a importância de testar cada etapa da pipeline para facilitar a identificação de problemas. Também abordamos como monitorar o processo de deploy e a troca de instâncias, garantindo que não haja downtime. Na próxima aula, faremos uma refatoração para otimizar ainda mais nossa pipeline.

```yaml
- name: Render task definition
  id: reder-task-definition
  uses: aws-actions/amazon-ecs-render-task-definition@v1
  with:
    task-definition: .aws/task-definition.json
    container-name: widget-server
    image: ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}

- name: Deploy Amazon ECS
  id: deploy-amazon-ecs
  uses: aws-actions/amazon-ecs-deploy-task-definition@v2
  with:
    task-definition: ${{ steps.reder-task-definition.outputs.task-definition }}
    service: widget-server
    cluster: rocketseat-ecs
    wait-for-service-stability: true
```
