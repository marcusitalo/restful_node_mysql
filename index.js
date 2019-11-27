const restify = require('restify');
const errs = require('restify-errors');

const server = restify.createServer({
  name: 'nodedb',
  version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'nodedb'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

//router

server.get('/', (req, res, next) =>  {
      knex('crud_api').then((dados) => {
          res.send(dados);
      },next);        
});

server.get('/:id', (req, res, next) =>  {

  const { id } = req.params;

  knex('crud_api')
      .where('id',id)
      .first()
      .then((dados) => {
          if(!dados)
              return res.send(new errs.BadRequestError("Não Foi Encontardo"));
      res.send(dados);
  },next);        
});

server.post('/', (req, res, next) => {
  knex('crud_api')
      .insert(req.body)
      .then((dados) => {
          res.send(dados);
      },next);        
});

server.put('/:id', (req, res, next) =>  {

  const { id } = req.params;

  knex('crud_api')
      .where('id',id)
      .update(req.body)
      .then((dados) => {
          if(!dados)
              return res.send(new errs.BadRequestError("Não Foi Encontardo"));
          res.send("Usuário Atualizados.");
  },next);        
});

server.del('/:id', (req, res, next) =>  {

  const { id } = req.params;

  knex('crud_api')
      .where('id',id)
      .delete()
      .then((dados) => {
          if(!dados)
              return res.send(new errs.BadRequestError("Não Foi Encontardo"));
          res.send("Usuário Excluidos.");
  },next);        
});