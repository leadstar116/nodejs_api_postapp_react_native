'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/appController');
    var userList = require('../controllers/userController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/users')
        .get(userList.list_all_users)
        .post(userList.create_a_user);

    app.route('/users/:userId')
        .get(userList.read_a_user)
        .put(userList.update_a_user)
        .delete(userList.delete_a_user);
};
