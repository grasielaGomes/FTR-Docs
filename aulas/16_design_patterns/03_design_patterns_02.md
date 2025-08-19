### Padrões de Projeto: Escopo e Finalidade

#### Divisão dos Padrões de Projeto

- **Escopo:**
  - **Classes:** Foco na criação e estruturação de classes.
  - **Objetos:** Foco na criação e interação entre objetos.
- **Finalidade:**
  - **Criacionais:** Lidam com a criação de objetos.
  - **Estruturais:** Tratam da composição e organização de classes e objetos.
  - **Comportamentais:** Focam na interação e comunicação entre objetos.

---

### Padrões Criacionais

- **Objetivo:** Encapsular a lógica de criação de objetos e aumentar a flexibilidade do processo.
- **Principais Padrões:**
  - **Factory Method:**
    - Cria classes sem expor a lógica de criação - é o único criacional dedicado a classes.
    - Exemplo: Sistema de logística com diferentes meios de transporte (moto, carro, avião).
  - **Abstract Factory:**
    - Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
    - Exemplo: Sistema de interface gráfica que pode criar componentes para diferentes sistemas operacionais (Windows, macOS, Linux).
  - **Builder:**
    - Constrói objetos por partes, permitindo diferentes representações com o mesmo código base.
    - Exemplo: Cadastro de usuários com campos obrigatórios e opcionais.
  - **Singleton:**
    - Garante que uma classe tenha apenas uma instância global.
    - Exemplo: Conexão com banco de dados para evitar múltiplas conexões desnecessárias.

---

### Padrões Estruturais

- **Objetivo:** Compor e organizar classes e objetos para formar estruturas maiores.
- **Principais Padrões:**
  - **Adapter:**
    - Converte a interface de uma classe em outra esperada pelo cliente - único dedicado a classes.
    - Exemplo: Adaptação de APIs ou bibliotecas de terceiros.
  - **Bridge:**
    - Separa a abstração da implementação, permitindo que ambas evoluam independentemente.
    - Exemplo: Sistema de renderização gráfica com diferentes plataformas (2D, 3D).
  - **Composite:**
    - Permite tratar objetos individuais e composições de objetos de maneira uniforme.
    - Exemplo: Estruturas hierárquicas como sistemas de arquivos ou menus.
  - **Facade:**
    - Fornece uma interface simplificada para acessar sistemas ou subsistemas complexos.
    - Exemplo: Tela inicial de softwares como Excel ou PowerPoint.
  - **Decorator:**
    - Adiciona funcionalidades a um objeto de forma dinâmica, sem modificar sua estrutura.
    - Exemplo: Sistema de notificações com diferentes tipos de envio.
  - **Flyweight:**
    - Minimiza o uso de memória compartilhando o máximo de dados possível entre objetos semelhantes.
    - Exemplo: Renderização de caracteres em um editor de texto, onde cada caractere compartilha a mesma representação.
  - **Proxy:**
    - Fornece um substituto ou representante para controlar o acesso a um objeto.
    - Exemplo: Controle de acesso a recursos remotos ou carregamento preguiçoso de objetos pesados.

---

### Padrões Comportamentais

- **Objetivo:** Focar na comunicação e interação entre objetos.
- **Principais Padrões:**
  - **Interpreter:**
    - Define uma representação para a gramática de uma linguagem e um interpretador para processar sentenças dessa linguagem - dedicado a classes.
    - Exemplo: Avaliação de expressões matemáticas ou linguagens de domínio específico (DSLs).
  - **Template Method:**
    - Define o esqueleto de um algoritmo em uma classe base, permitindo que subclasses implementem etapas específicas - dedicado a classes.
    - Exemplo: Processamento de arquivos com etapas comuns e específicas para diferentes formatos.
  - **Strategy:**
    - Permite escolher algoritmos de forma dinâmica, com classes intercambiáveis.
    - Exemplo: Seleção de diferentes estratégias de cálculo.
  - **Iterator:**
    - Percorre estruturas de dados de forma sequencial, sem expor sua representação interna.
    - Exemplo: Percorrer coleções como listas, árvores ou grafos.
  - **Observer:**
    - Define um mecanismo de observação para notificar múltiplos objetos sobre eventos.
    - Exemplo: Sistema de notificações em tempo real ou arquitetura baseada em eventos.
  - **Chain of Responsibility:**
    - Permite que um pedido seja processado por uma cadeia de objetos, onde cada um decide se o processa ou o passa adiante.
    - Exemplo: Sistema de suporte técnico com diferentes níveis de atendimento.
  - **Command:**
    - Encapsula uma solicitação como um objeto, permitindo parametrizar ações e desfazer operações.
    - Exemplo: Sistema de edição com suporte a desfazer/refazer ações.
  - **Mediator:**
    - Define um objeto intermediário para controlar a comunicação entre objetos, reduzindo dependências diretas.
    - Exemplo: Sistema de chat onde o servidor gerencia as mensagens entre os usuários.
  - **Memento:**
    - Permite salvar e restaurar o estado interno de um objeto sem expor sua implementação.
    - Exemplo: Funcionalidade de desfazer em editores de texto.
  - **State:**
    - Permite que um objeto altere seu comportamento quando seu estado interno muda.
    - Exemplo: Máquina de estados para controle de um caixa eletrônico.
  - **Visitor:**
    - Permite adicionar novas operações a uma estrutura de objetos sem modificar suas classes.
    - Exemplo: Sistema de análise de arquivos com diferentes tipos de processamento para cada formato.

---

### Conclusão e Próximos Passos

- **Padrões a serem estudados:**
  - **Criacionais:** Factory Method, Builder, Singleton.
  - **Estruturais:** Adapter, Facade, Decorator.
  - **Comportamentais:** Iterator, Observer, Strategy.
- **Objetivo:** Aplicar os padrões no desenvolvimento de soluções eficientes e escaláveis.
