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

app.get('/', (req, res) => {
  db.query('SELECT NOW() as now', (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao tentar acessar a base. Verifique as informações dentro do seu banco de dados. Estamos utilizando o usupario ROOT, senha 1234 e database docker.');
      return;
    }
      res.send(`Horário Atual: ${result[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
