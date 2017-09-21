DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  completed BOOLEAN NOT NULL
);

INSERT INTO tasks( name, completed)
VALUES ( 'Do this thing', false ),
( 'Do this other thing', false ),
( 'Do this one thing', false ),
( 'Do this please', false ),
( 'Final chance', false );
