### Padrão Adapter: Passo a Passo para Implementação em JavaScript

#### O que é o Padrão Adapter?

- **Categoria:** Padrão de projeto estrutural.
- **Objetivo:**
  - Tornar compatíveis interfaces incompatíveis entre sistemas.
  - Permitir que sistemas ou bibliotecas de terceiros sejam integrados ao seu código.
- **Problema Resolvido:**
  - Facilita a comunicação entre sistemas diferentes, como APIs ou bibliotecas externas.

---

### Passo a Passo para Implementação

#### Passo 1: Criar o sistema existente (Adaptee)

1. **Definir a classe que representa o sistema existente.**
2. **Adicionar os métodos que já estão implementados.**

Exemplo:

```javascript
class VideoPlayer {
  playMedia(fileName) {
    console.log(`Reproduzindo: ${fileName}`)
  }
}

export default VideoPlayer
```

---

#### Passo 2: Criar a interface desejada (Target)

1. **Definir uma interface que o cliente espera usar.**
2. **Adicionar os métodos que o cliente irá chamar.**

Exemplo:

```javascript
class AudioPlayer {
  playAudio(fileName) {
    throw new Error("O método 'playAudio()' precisa ser implementado.")
  }
}

export default AudioPlayer
```

---

#### Passo 3: Criar o Adapter

1. **Criar uma classe que implementa a interface desejada (Target).**
2. **Adicionar uma instância do sistema existente (Adaptee) como dependência.**
3. **Implementar os métodos da interface desejada, adaptando as chamadas para o sistema existente.**

Exemplo:

```javascript
import AudioPlayer from './AudioPlayer.js'
import VideoPlayer from './VideoPlayer.js'

class VideoPlayerAdapter extends AudioPlayer {
  constructor() {
    super()
    this.videoPlayer = new VideoPlayer() // Instância do sistema existente
  }

  playAudio(fileName) {
    console.log('Adaptando áudio para vídeo...')
    this.videoPlayer.playMedia(fileName) // Chama o método do sistema existente
  }
}

export default VideoPlayerAdapter
```

---

#### Passo 4: Testar o Adapter

1. **Criar uma instância do Adapter.**
2. **Chamar os métodos da interface desejada e verificar se o sistema existente é utilizado.**

Exemplo:

```javascript
import VideoPlayerAdapter from './VideoPlayerAdapter.js'

const audioPlayer = new VideoPlayerAdapter()
audioPlayer.playAudio('musica.mp3')
// Saída:
// Adaptando áudio para vídeo...
// Reproduzindo: musica.mp3
```

---

### Conclusão

- **Quando usar:** Quando é necessário integrar sistemas ou bibliotecas com interfaces incompatíveis.
- **Benefícios:**
  - Facilita a reutilização de código existente.
  - Reduz a necessidade de reescrever sistemas já implementados.
- **Recomendações:** Use o Adapter para conectar sistemas diferentes de forma eficiente e organizada.
