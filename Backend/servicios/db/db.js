const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: btnntwo1tjg7uzvjhiwc-mysql.services.clever-cloud.com,
  user: u249jvquxwlbqf6j,
  password: KrDpq5l5WYMq4bwodlSc,
  database: btnntwo1tjg7uzvjhiwc,
  port:"3306",
  multipleStatements: true
});



mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});



module.exports = mysqlConnection;