const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //usuario de tu bd o root por defecto
    password: '', //password de tu bd
    database: 'testconection', //nombre de tu bd
    // port: "3306", // por default es 3306
    // multipleStatements: true // no lo recomiendo si no tocan hilos
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('base de datos conectada!');
    }
});

module.exports = mysqlConnection;