# restful_node_mysql
**Servidor RESTFul Local com Node.Js e MySQL**

Instalação e execução

Para testar a aplicação, você deve ter o MySQL instalado, com a estrutura de banco de dados e tabela já criados. Você pode executar o script a seguir para gerar esta estrutura!

```
CREATE DATABASE `nodedb` ;
USE `nodedb`;

CREATE TABLE `crud_api` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `crud_api` VALUES(1, 'Marcus');
INSERT INTO `crud_api` VALUES(2, 'Italo');
```
No arquivo index.js, altere as configuração do MySQL.
```
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'host',
    user : 'usuario',
    password : 'senha',
    database : 'banco'
    }
});
```
Acesse o terminal e execute o comando 
```
npm i -g nodemon 
```
para instalar o nodemon como global, caso ainda não o tenha instalado.
Em seguida, dentro da pasta do projeto, execute
```
npm install
```
Para instalação das dependências.

Após concluída a instalação, execute o comando 
```
nodemon index.js
```
Utilizando algum serviço de requisições HTTP como (**Insomnia** ou **Postman**), basta acessar as rotas criadas com os verbos HTTP corretos.