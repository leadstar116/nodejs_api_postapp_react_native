'use strict';

var User = require('../model/userModel');

exports.list_all_users = function (req, res) {
    User.getAllUser(function (err, user) {
        if (err)
            res.send(err);
        res.send(user);
    });
};



exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);

    console.log(req.body);
    console.log(new_user);
    //handles null error 
    if (!new_user.username || !new_user.token || !new_user.status) {

        res.status(400).send({ error: true, message: 'Please provide username/token/status' });

    }
    else {

        User.createUser(new_user, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
};


exports.read_a_user = function (req, res) {
    User.getUserById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.update_a_user = function (req, res) {
    User.updateById(req.params.userId, new User(req.body), function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.delete_a_user = function (req, res) {
    User.remove(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};