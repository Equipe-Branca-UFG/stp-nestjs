# Sistema de Transferência de Pacientes

Este projeto foi desenvolvido como parte do curso de Pós-Graduação em Desenvolvimento Web e Mobile pela Universidade Federal de Goiás (UFG). O sistema tem como objetivo facilitar a transferência de pacientes entre unidades de saúde de forma eficiente e segura.

## Tecnologias Utilizadas

- **NestJS**: Um framework para construir aplicações server-side Node.js eficientes e escaláveis.
Este projeto foi desenvolvido como parte do curso de Pós-Graduação em Desenvolvimento Web e Mobile pela Universidade Federal de Goiás (UFG). O sistema tem como objetivo facilitar a transferência de pacientes entre unidades de saúde de forma eficiente e segura.

## Tecnologias Utilizadas

- **NestJS**: Um framework para construir aplicações server-side Node.js eficientes e escaláveis.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações do sistema.

## Configuração Inicial

Para popular a base de dados, execute os seguintes comandos:

```bash
npm install
npx prisma generate
npx prisma db push
npx ts-node src/scripts/seed.ts
```

Certifique-se de adicionar o arquivo `.env` com as seguintes variáveis:

- `JWT_SECRET`: Chave secreta para o JWT. Exemplo: `63a0adbff0a3feece93073b627d5f2f79015971ec1eb43dd0dabdba2dfe379b3`.
- `DATABASE_URL`: URL de conexão com o banco de dados. Exemplo: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority`.

## Participantes

- Bruna Larissa Câmara Queiroz;
- Eduardo de Sousa Batista;
- Guilherme Alves Martins;
- Márcio Gabriel Queiroz Flores;
- Mario Elias Cândido Neto.