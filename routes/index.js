const express = require( 'express' );
const app = express.Router();

const { createTodo } = require('../db/queries')

/* GET home page. */
app.get( '/', function( request, response ) {
  
  response.render( 'index', { title: name });
});

app.post('/newitem', function (request, response) {
  const { name } = request.body

  createTodo(name)
    .then( data => response.status( 201 ).redirect('/'))
    .catch(error => response.render('error', { error }))
})

module.exports = app;
