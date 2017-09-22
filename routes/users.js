const express = require( 'express' );
const app = express.Router();

/* GET users listing. */
app.get( '/', function( request, response ) {
  response.send( 'respond with a resource' );
});

module.exports = app;
