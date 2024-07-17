const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'docker'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco MySQL:', err);
    return;
  }
  console.log('Conectado ao banco MySQL');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() as now', (err, result) => {
    if (err) {
      res.status(500).send('Error querying database');
      return;
    }
    res.send(`Current time: ${result[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
