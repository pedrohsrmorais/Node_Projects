const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_database'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Database_node connected!');
});

module.exports = connection;

/*
connection.query('SELECT * FROM users', function(err,results) {
    if (err) throw err;
    console.log(results);
  });
*/

//const conn = require('./database/database');
