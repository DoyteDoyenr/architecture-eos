# Instalação do Projeto

Para instalar o projeto, siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias.

2. Crie links simbólicos para o arquivo `.env` nos diretórios `apps/api` e `apps/web` usando o seguinte comando:

   ```bash
   ln -s ../../.env apps/api/.env
   ln -s ../../.env apps/web/.env
   ln -s ../../.env packages/database/.env
   ```

3. Agora o projeto está pronto para ser iniciado com as configurações de ambiente adequadas.
