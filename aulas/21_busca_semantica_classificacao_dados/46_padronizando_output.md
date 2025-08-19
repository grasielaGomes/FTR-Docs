### **Projeto de Classificação: Padronizando o Output da LLM para Classificação**

#### Introdução

- Nesta aula, vamos ajustar o prompt e a configuração da LLM (Large Language Model) para garantir que a resposta da classificação de imagens seja padronizada e utilizável no nosso sistema.
- O objetivo é receber sempre uma resposta clara, como "cat" ou "dog", em formato estruturado (JSON).

---

#### Tópicos da Aula

1. Ajustando o prompt para respostas objetivas
2. Garantindo respostas padronizadas com JSON
3. Definindo um schema de resposta para a LLM
4. Expandindo o schema para múltiplas informações
5. Utilizando enumerações para garantir valores válidos

---

### Passo a Passo da Aula

#### 1. Ajustando o Prompt para Respostas Objetivas

- **Problema inicial:** A LLM retorna descrições livres, como "A imagem contém um gato", mas queremos apenas "cat" ou "dog".
- **Solução:** Reformule o prompt para pedir explicitamente uma das categorias.

```text
Identifique se a imagem contém gatos ou cachorros.
Retorne uma das seguintes categorias de acordo com o conteúdo da imagem:
Cat
Dog
```
