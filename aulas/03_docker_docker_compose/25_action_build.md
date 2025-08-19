# Ajustando Configurações de Build

## Destaques Importantes

### Utilização de Actions

- **Docker Build and Push Action**: Utilizar a action oficial do Docker para simplificar o processo de build e push.
- **Multiplataforma**: Configurar a action para suportar múltiplas plataformas (AMD64, ARM64).

## Passo-a-Passo

2. **Utilizar a Tag Gerada nos Steps de Build e Push**
   - Utilize a tag gerada nos steps de build e push:
     ```yaml
     - name: Build and push the image to Docker Hub
       uses: docker/build-push-action@v6
       with:
         context: .
         push: true
         tags: |
           ${{steps.login-ecr.outputs.registry}}/${{ vars.ECR_REPOSITORY }}:${{ steps.generate-tag.outputs.sha }}
     ```
