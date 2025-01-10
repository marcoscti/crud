# CRUD
Projeto criado com intuito de reforçar alguns conhecimentos sobre criação de api's, permitindo a criação, edição e listagem de usuários e em algumas situações exigindo autenticação via JWT.
## Tecnologias utilizadas
- Node JS
- Typescript
- JWT (Json Web Token)
- Mysql
- Docker

Você também pode testar a aplicação localmente basta seguir os passos abaixo:

Para rodar a aplicação em desenvolvimento (modo dev), use:
`npm run dev`

Para compilar os arquivos TypeScript para JavaScript (produção), use:
`npm run build`

Para rodar a versão compilada em JavaScript (produção), use:
`npm start`

Rodar o MySQL no Docker Compose:
`docker-compose up -d`

## Criar Tabelas no Banco de Dados
Entre no container MySQL
`docker exec -it mysql bash`

Abra o MySQL dentro do container:
`mysql -u root -p`

Crie a tabela que servirá de modelo
`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`