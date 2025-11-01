# Instalação do Projeto

Para instalar o projeto, siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias.

2. Crie links simbólicos para o arquivo `.env` nos diretórios das apps e packages usando o seguinte comando:

   ```bash
   ln -s ../../.env apps/eosfin/.env
   ln -s ../../.env apps/eosloan/.env
   ln -s ../../.env packages/database/.env
   ```

3. Agora o projeto está pronto para ser iniciado com as configurações de ambiente adequadas.
