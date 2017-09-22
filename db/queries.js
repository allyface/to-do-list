const db = require('./db')

const createTodo = name => {
  return db.any('INSERT INTO tasks(name) VALUES($1) RETURNING (name)', [name])
}

module.exports = {
  createTodo
}
