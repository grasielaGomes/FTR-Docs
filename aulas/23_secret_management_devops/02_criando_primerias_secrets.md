### Instalação do Vault e Criação das Primeiras Secrets no Mac

#### Pré-requisitos

- Ter um terminal disponível no Mac (Terminal.app ou iTerm).
- Permissão de administrador para instalar pacotes.

---

#### Passo 1: Instalação do Vault

1. **Instalar via Homebrew**
   - Caso não tenha o Homebrew instalado, execute:
     ```
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Instale o Vault com o comando:
     ```
     brew tap hashicorp/tap
     brew install hashicorp/tap/vault
     ```
2. **Verificar a instalação**
   - Confirme se o Vault foi instalado corretamente:
     ```
     vault --version
     ```

---

#### Passo 2: Inicialização do Vault em modo Dev

- Inicie o Vault em modo de desenvolvimento (apenas para testes locais):

```

vault server -dev

```

- O terminal exibirá um token de root e o endereço do Vault (por padrão: `http://127.0.0.1:8200`).

---

#### Passo 3: Configuração do Ambiente

1. **Exportar variáveis de ambiente**

- Em outro terminal, exporte o endereço e o token:
  ```
  export '
  VAULT_ADDR='http://127.0.0.1:8200     export VAULT_TOKEN='<token_root_exibido_no_passo_anterior>'
  ```
- Substitua `<token_root_exibido_no_passo_anterior>` pelo token mostrado ao iniciar o Vault.

---

#### Passo 4: Criação das Primeiras Secrets

1. **Criar um secret simples**

- Execute:
  ```
  vault kv put secret/meuapp usuario=admin senha=123456
  ```

2. **Ler o secret criado**

- Para visualizar o conteúdo:
  ```
  vault kv get secret/meuapp
  ```

---

#### Passo 5: Gerenciamento Básico de Secrets

- **Atualizar um secret**

```

vault kv put secret/meuapp usuario=admin senha=novasenha

```

- **Listar secrets**

```

vault kv list secret/
```

- **Deletar um secret**

```
vault kv delete secret/meuapp

```

---

#### Considerações Finais

- O Vault em modo dev não deve ser usado em produção.
- Para uso real, configure armazenamento persistente e autenticação adequada.
- Consulte a [documentação oficial](https://developer.hashicorp.com/vault/docs) para recursos avançados.
