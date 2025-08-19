### **Executando o Modelo de Texto para Áudio e Salvando o Resultado no Python**

#### Introdução

- Agora que o modelo de texto para áudio está implementado, vamos aprender a salvar o áudio gerado e garantir que todo o fluxo do endpoint está funcionando.
- Você vai ver como testar o modelo manualmente, implementar a função de salvar áudio, corrigir possíveis erros e validar o funcionamento do endpoint.

---

#### Tópicos

1. Testando o modelo manualmente
2. Implementando a função `save_audio`
3. Instalando a biblioteca SciPy
4. Corrigindo o formato do áudio para salvar corretamente
5. Testando o endpoint completo
6. Próximos passos

---

### Passo a Passo para Executar e Salvar o Áudio

1. **Testando o modelo manualmente**

   - Antes de integrar tudo, teste o modelo diretamente no script Python.
   - No terminal, acesse a pasta do modelo:
     ```
     cd models
     ```
   - Importe e instancie a classe de conversão:
     ```python
     from text_to_audio import TextToAudio
     model = TextToAudio()
     audio = model.convert("oi, tudo bom?")
     ```
   - Execute o script com:
     ```
     uv run text_to_audio.py
     ```
   - O modelo pode demorar para rodar na primeira vez (cerca de 30 segundos).

2. **Implementando a função `save_audio`**

   - No arquivo `utils/__init__.py`, implemente a função para salvar o áudio usando a biblioteca SciPy:

     ```python
     from scipy.io import wavfile

     def save_audio(audio, path, sample_rate):
         wavfile.write(path, sample_rate, audio)
     ```

   - Certifique-se de que a função recebe o áudio, o caminho do arquivo e o sample rate.

3. **Instalando a biblioteca SciPy**

   - Se ainda não instalou, adicione SciPy ao projeto:
     ```
     uv add scipy
     ```

4. **Corrigindo o formato do áudio para salvar corretamente**

   - O áudio gerado pelo modelo precisa ser convertido para o formato correto antes de salvar.
   - No `save_audio`, converta o áudio para numpy e use `squeeze`:

     ```python
     import numpy as np

     def save_audio(audio, path, sample_rate):
         audio = np.squeeze(audio)
         wavfile.write(path, sample_rate, audio)
     ```

   - Isso garante que o arquivo será salvo corretamente.

5. **Testando o endpoint completo**

   - Rode o servidor Flask:
     ```
     uv run -- flask --app main.py run
     ```
   - Faça uma requisição para o endpoint de texto para áudio (exemplo usando curl):
     ```
     curl -X POST http://localhost:5000/textToAudio \
       -H "Content-Type: application/json" \
       -d '{"text": "Oi, tudo bom?"}'
     ```
   - O servidor deve gerar o áudio, salvar o arquivo e retornar a URL do áudio.
   - Acesse a URL retornada para ouvir o áudio gerado.

6. **Próximos passos**

   - Agora que o fluxo está funcionando, conecte o endpoint ao front-end para que o usuário possa ouvir o áudio gerado automaticamente.

---

### Dicas Práticas

- Sempre teste o modelo manualmente antes de integrar ao endpoint.
- Use a biblioteca SciPy para salvar arquivos `.wav` de forma simples.
- Se o áudio não tocar corretamente, verifique o formato e o sample rate.
- Comite cada avanço no Git para manter o histórico do projeto.

---

> **Resumo:**  
> Nesta aula, você aprendeu a testar o modelo de texto para áudio, implementar a função de salvar áudio, corrigir possíveis erros de formato e validar o funcionamento do endpoint.  
> Agora, seu sistema está pronto para converter texto em áudio e servir o arquivo para o usuário!
