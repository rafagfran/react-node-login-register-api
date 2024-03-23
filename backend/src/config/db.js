const mysql = require('mysql2')

dotenv = require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar-se ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');
  });

module.exports = connection