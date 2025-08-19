### **Testcontainers: Testes Avançados com Containers Docker**

#### Introdução

- Testcontainers é uma biblioteca moderna para criar ambientes de teste mais próximos do mundo real.
- Permite rodar bancos de dados e outros serviços em containers Docker durante os testes.
- Disponível para várias linguagens: Node.js, Java, Python, C#, entre outras.
- Ajuda a evitar problemas comuns de testes com mocks e bancos em memória, tornando os testes mais confiáveis.

---

#### Tópicos

1. O que é Testcontainers?
2. Por que usar Testcontainers?
3. Como instalar e configurar
4. Como criar e destruir containers nos testes
5. Exemplos práticos de uso
6. Boas práticas e integração com CI/CD

---

### Passo a Passo para Entender e Usar Testcontainers

1. **O que é Testcontainers?**

   - É uma biblioteca que permite criar containers Docker automaticamente durante a execução dos testes.
   - Com ela, você pode rodar bancos de dados reais (Postgres, Redis, Kafka, etc.) em containers isolados.
   - Os testes ficam mais próximos do ambiente de produção, aumentando a confiança nos resultados.

2. **Por que usar Testcontainers?**

   - Elimina inconsistências de ambientes de teste (problemas com mocks e bancos em memória).
   - Permite testar com bancos de dados reais, sem precisar de um servidor externo.
   - Cada teste pode rodar em um ambiente limpo e isolado, evitando conflitos.
   - Facilita a integração com pipelines de CI/CD (como GitHub Actions e GitLab CI).

3. **Como instalar e configurar**

   - Instale a biblioteca apenas como dependência de desenvolvimento:
     ```
     npm install --save-dev testcontainers
     ```
   - Verifique se o Docker está instalado e rodando na sua máquina.

4. **Como criar e destruir containers nos testes**

   - Importe o `GenericContainer` do testcontainers.
   - Use hooks como `before` e `after` para iniciar e parar o container antes e depois dos testes.
   - Defina um timeout para evitar que o teste fique travado caso o container não suba corretamente.

   Exemplo básico:

   ```javascript
   const { GenericContainer } = require('testcontainers')

   let container

   before(async function () {
     this.timeout(30000) // 30 segundos
     container = await new GenericContainer('alpine')
       .withCmd(['sleep', '60'])
       .start()
     console.log('Container inicializado!')
   })

   after(async function () {
     if (container) {
       await container.stop()
       console.log('Container encerrado!')
     }
   })
   ```

5. **Exemplo Prático**

   - Você pode rodar um banco de dados real (como Postgres) em um container e apontar seus testes para ele.
   - Isso elimina a necessidade de mocks complexos e garante que o código será testado em condições reais.

   ```javascript
   const { GenericContainer } = require('testcontainers')

   let container

   before(async function () {
     this.timeout(30000)
     container = await new GenericContainer('postgres')
       .withEnv('POSTGRES_PASSWORD', 'senha')
       .withExposedPorts(5432)
       .start()
     // Use container.getHost() e container.getMappedPort(5432) para conectar ao banco nos testes
   })

   after(async function () {
     if (container) await container.stop()
   })
   ```

6. **Boas práticas e integração com CI/CD**

   - Use containers pequenos (como Alpine) para testes rápidos.
   - Sempre defina timeouts para evitar travamentos.
   - Testcontainers funciona bem em pipelines de CI/CD, como GitHub Actions e GitLab CI.
   - Cada teste pode rodar em um container separado, garantindo isolamento total.

---

### Dicas e Boas Práticas

- Instale Testcontainers apenas como dependência de desenvolvimento.
- Monitore o tempo de execução dos testes, pois containers podem demorar para subir.
- Use imagens oficiais e leves do Docker.
- Sempre limpe os containers ao final dos testes para não sobrecarregar o sistema.

---

> **Resumo:**  
> Testcontainers permite criar ambientes de teste mais reais usando Docker, tornando seus testes mais confiáveis e próximos do ambiente de produção.  
> É uma ferramenta poderosa para equipes que buscam qualidade e segurança em testes automatizados.
