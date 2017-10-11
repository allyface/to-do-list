const express = require( 'express' );
const app = express.Router();

const { createTodo, getAllTodos } = require('../db/queries')

/* GET home page. */
app.get( '/', function( request, response ) {

  getAllTodos()
    .then( data => {
      console.log('data', data)
      return data
    })
    .then( data => response.render( 'index', { allTodos: data }))
    .catch( error => response.render( 'error', { error }))
});

app.post( '/newitem', function ( request, response ) {
  const { name } = request.body

  createTodo( name )
    .then( data => response.redirect( '/' ))
    .catch( error => response.render( 'error', { error }))
})

module.exports = app;
