### Quiz - Docker & Docker Compose

#### 1. Qual é uma das principais vantagens do uso de imagens distroless no desenvolvimento de aplicações containerizadas?

- **Resposta Correta**: Reduzir a superfície de ataque ao remover componentes desnecessários do sistema.

#### 2. Qual é a consequência de utilizar uma imagem base muito grande para construir containers Docker?

- **Resposta Correta**: A imagem demora mais para ser transferida entre ambientes e aumenta o consumo de recursos.

#### 3. Em pipelines de CI, o que significa configurar uma imagem Docker com suporte a multiplataforma?

- **Resposta Correta**: Criar imagens que funcionam em arquiteturas distintas, como AMD64 e ARM64.

#### 4. No contexto de repositórios de imagens configurados como imutáveis, o que acontece ao tentar sobrescrever uma tag existente?

- **Resposta Correta**: Um erro é gerado, indicando que a tag não pode ser sobrescrita.

#### 5. Qual é a principal finalidade de usar secrets no GitHub Actions?

- **Resposta Correta**: Proteger informações sensíveis, como credenciais, de exposição no código.

#### 6. Qual comando do Docker permite executar uma análise interativa dentro de um container em execução?

- **Resposta Correta**: docker exec -it [container_id] /bin/bash

#### 7. Por que a implementação de caching em uma pipeline de CI é considerada uma prática essencial para a otimização do processo?

- **Resposta Correta**: Porque reduz o tempo de execução reaproveitando arquivos e dependências não alterados.

#### 8. Ao configurar uma pipeline no GitHub Actions, qual é a função do campo `on` no arquivo de workflow?

- **Resposta Correta**: Determinar as ações ou eventos que devem disparar o workflow.

#### 9. Qual é a melhor prática para nomear tags de imagens Docker em uma pipeline de CI/CD?

- **Resposta Correta**: Associar a tag ao hash do commit atual, garantindo rastreabilidade.

#### 10. Por que é importante configurar um pipeline para falhar ao detectar vulnerabilidades críticas em um scan de segurança?

- **Resposta Correta**: Para garantir que aplicações não sejam publicadas com vulnerabilidades graves, mitigando riscos de segurança.

#### 11. No GitHub Actions, qual é a principal diferença entre os campos `jobs` e `steps` no arquivo de workflow?

- **Resposta Correta**: `jobs` organiza conjuntos de tarefas em sequência ou paralelo, enquanto `steps` define as ações dentro de cada job.

#### 12. Ao configurar caching para dependências em uma pipeline, qual é o maior benefício em termos de desempenho?

- **Resposta Correta**: Diminuir significativamente o tempo de instalação de pacotes não alterados entre execuções.

#### 13. No Docker, os containers são projetados para serem efêmeros. O que acontece com os dados armazenados dentro de um container quando ele é removido?

- **Resposta Correta**: Os dados são completamente perdidos, a menos que sejam configurados volumes.

#### 14. No Docker Compose, como você configuraria um ambiente para uma aplicação que depende de um banco de dados, garantindo persistência de dados, conexão interna segura e inicialização hierárquica?

- **Resposta Correta**: Configurando o `docker-compose.yml` com `depends_on`, volumes para persistência e uma rede interna entre os serviços.
