'user strict';

var mysql = require('mysql');
aasadf
//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'PostApp',
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;