'user strict';

var mysql = require('./node_modules/mysql');
//heroku

var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b3e7cb0a79dc04',
    password : '1514a61a',
    database : 'heroku_5b9f51c996f2516',
});

//local
/*
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b3e7cb0a79dc04',
    password : '1514a61a',
    database : 'heroku_5b9f51c996f2516',
});
*/
connection.connect(function(err) {
    if (err) throw err;
});sas

module.exports = connection;