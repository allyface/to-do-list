const db = require('./db')

const createTodo = name => {
  return db.any('INSERT INTO tasks(name, completed) VALUES($1, false) RETURNING (name)', [name])
}

module.exports = {
  createTodo
}
