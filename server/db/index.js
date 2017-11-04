var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//exports.connection = mysql.createConnection({
var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'  
});

dbConnection.connect();

module.exports.dbConnection = dbConnection;

//exports.dbConnection.connect();

// module.exports.dbConnection.connect(function(err) {
//   if (err) {
//     console.error('errod connecting: ' + err.stack);
//     return;  
//   }
//   console.log('connnected as id ' + dbConnection.threadId);
// });
