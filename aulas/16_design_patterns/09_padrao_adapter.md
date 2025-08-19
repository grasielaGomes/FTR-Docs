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

#### Passo 1: Definir o sistema existente (Adaptee)

1. **Criar a classe que representa o sistema existente.**
2. **Adicionar os métodos que já estão implementados.**

Exemplo:

```javascript
class VideoPlayer {
  playVideo(file) {
    console.log(`Reproduzindo vídeo: ${file}`)
  }
}

export default VideoPlayer
```
