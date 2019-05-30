'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'be7019ef7a9e39',
    password : '03f23fcc',
    database : 'heroku_84600b3cc05d1fb',
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;