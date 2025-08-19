### Corrigindo as Portas no Security Group

1. **Introdução**

   - Problema de timeout devido à configuração incorreta do Security Group.
   - Importância de configurar corretamente as regras de entrada (Inbound Rules) no Security Group.

2. **Configuração do Security Group**

   - Verificação das regras de entrada no Security Group associado.
   - Remoção das regras padrão e criação de novas regras para permitir o tráfego.

3. **Configuração das Regras de Entrada**

   - Adição de regras para permitir tráfego HTTP na porta 80.
   - Adição de regras para permitir tráfego na porta do container (ex: 3333).
   - Configuração para IPv4 e IPv6.

4. **Verificação da Configuração**
   - Verificação do funcionamento do Load Balancer.
   - Confirmação de que o tráfego está sendo distribuído corretamente entre os targets.

### Passo-a-Passo

1. **Acessar o Security Group**

   - Acesse o console do AWS.
   - Clique em "EC2" no menu.
   - Clique em "Security Groups" na seção de Network & Security.

2. **Verificar e Remover Regras de Entrada**

   - Selecione o Security Group associado à sua task.
   - Clique em "Inbound Rules".
   - Remova as regras de entrada padrão.

3. **Adicionar Regras de Entrada para HTTP**

   - Clique em "Add Rule".
   - Selecione "HTTP" como tipo.
   - Configure a porta 80.
   - Selecione "Anywhere" para permitir tráfego de qualquer IP (0.0.0.0/0 para IPv4 e ::/0 para IPv6).
   - Clique em "Save rules".

4. **Adicionar Regras de Entrada para Porta do Container**

   - Clique em "Add Rule".
   - Selecione "Custom TCP Rule" como tipo.
   - Configure a porta do container (ex: 3333).
   - Selecione "Anywhere" para permitir tráfego de qualquer IP (0.0.0.0/0 para IPv4 e ::/0 para IPv6).
   - Clique em "Save rules".

5. **Verificar a Configuração**
   - Verifique se as novas regras de entrada foram salvas corretamente.
   - Acesse o console do Load Balancer.
   - Confirme que o Load Balancer está funcionando corretamente e distribuindo o tráfego entre os targets.
   - Verifique se o tráfego está sendo roteado corretamente para as tasks no ECS.
