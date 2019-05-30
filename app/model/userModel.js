'user strict';
var sql = require('../config/db.js');

//User object constructor
var User = function (user) {
    this.username = user.username;
    this.token = user.token;
    this.status = user.status;
    this.created_at = new Date();
};
User.createUser = function (newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.getUserById = function (userId, result) {
    sql.query("Select username, token, status from users where id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.getAllUser = function (result) {
    sql.query("Select * from users", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};
User.updateById = function (id, user, result) {
    sql.query("UPDATE users SET username = ?, token = ?, status = ? WHERE id = ?", [user.username, user.token, user.status, id], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
User.remove = function (id, result) {
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;