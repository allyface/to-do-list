module.exports = (() => {

  let config = {}

  const getEnv = () => {
    return process.env.NODE_ENV
  }

  const makeConfig = () => {
    if ( getEnv() === 'development') {
      require('dotenv').config({path: __dirname + '../.env'})
    }
    config = {
      db: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME
      }
    }
  }

  makeConfig()

  const getConfig = () => {
    return config
  }

  return {
    getConfig,
    getEnv
  }

})()
