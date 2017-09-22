const express = require( 'express' );
const app = express.Router();

const { createTodo } = require('../db/queries')

/* GET home page. */
app.get( '/', function( request, response ) {
  response.render( 'index', { title: 'Express' });
});

app.post('/newitem', function (request, response) {
  const { name } = request.body

  createTodo(name)
    .then( data => response.redirect( '/' ))
    .catch(error => response.render('error', {error}))
})

module.exports = app;
