# Implementando a Primeira Chamada para IA no Projeto Secretária

## Destaques

- **Roadmap do Projeto**: Planejamento das etapas para implementar o agente secretária.
- **Configuração do Ambiente**: Criação do projeto e instalação das dependências.
- **Primeira Chamada para IA**: Teste inicial de comunicação com a IA Gemini.
- **Uso de API Gratuita**: Utilização da API do Google Gemini com chave gratuita.
- **Mock de APIs Externas**: Simulação de calendário e e-mail para facilitar testes.
- **Interface via Terminal**: Utilização do terminal como chat para interação com a IA.

---

## Passo-a-Passo

1. **Planejar o Roadmap do Projeto**

   - Defina as etapas: ambiente, chamada para IA, declaração e implementação das funções, testes finais.

2. **Configurar o Ambiente**

   - Execute `npm init` para iniciar o projeto.
   - Instale o SDK do Gemini:
     ```bash
     npm add google-gni
     ```
   - Crie a estrutura de pastas e arquivos, como `src/secretaria.js`.

3. **Configurar a API Key do Gemini**

   - Crie uma variável de ambiente para armazenar a chave da API do Gemini.
   - No código, instancie a IA usando:
     ```javascript
     const ai = new google.gen.ai(process.env.GEMINI_API_KEY)
     ```

4. **Realizar a Primeira Chamada para IA**

   - Importe o SDK e gere o conteúdo usando o modelo Gemini 2.5 Flash.
   - Monte a mensagem de teste, por exemplo: "Que dia é hoje?"
   - Execute a chamada e exiba a resposta no terminal:
     ```javascript
     const response = await ai.models.generateContent({ ... })
     console.log(response)
     ```

5. **Entender Limitações da IA**

   - Observe que a IA não tem acesso ao mundo externo e pode errar perguntas como data atual.
   - Planeje adicionar funções para permitir consultas externas via ferramentas.

6. **Mockar APIs Externas**

   - Crie calendários e e-mails fake para simular integrações sem depender de serviços reais.
   - Foque nos testes e exemplos, sem integração direta com APIs externas.

7. **Utilizar o Terminal como Interface**

   - Use o terminal para interagir com a IA, simulando um chat.
   - Evite criar uma interface gráfica para agilizar o desenvolvimento.

8. **Próximos Passos**
   - Declarar funções da secretária.
   - Implementar chamadas de ferramentas para permitir que a IA consulte dados externos.
   - Testar o funcionamento completo do agente.

---
