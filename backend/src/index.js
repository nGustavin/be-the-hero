const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar informações do Backend
  * POST: Criar uma informação no Backend
  * PUT: Alterar uma informação no Backend
  * DELETE: Deletar uma informação no Backend
  * 
  */

  /**
   * Tipos de Parametros:
   * 
   * Query: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
   * Route: Parâmentro utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

  /**
   *    SQL: MySQL, SQLite, PostgreSQL, Oracle. Microsoft SQL Server 
   *    NoSQL: MongoDB, CouchDB, etc  
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where() 
   */

