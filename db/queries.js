const db = require('./db')

const createTodo = name => {
  return db.any('INSERT INTO tasks(name, completed) VALUES($1, false) RETURNING (name)', [name])
}

const getAllTodos = () => {
  return db.any('SELECT * FROM tasks')
}

module.exports = {
  createTodo,
  getAllTodos
}
