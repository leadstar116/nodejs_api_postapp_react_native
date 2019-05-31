'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/appController');
    var userList = require('../controllers/userController');
    var postList = require('../controllers/postController');

    // todoList Routes
    app.route('/api/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/api/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/api/users')
        .get(userList.list_all_users)
        .post(userList.create_a_user);

    app.route('/api/users/:userId')
        .get(userList.read_a_user)
        .put(userList.update_a_user)
        .delete(userList.delete_a_user);

    app.route('/api/posts')
        .get(postList.list_all_posts)
        .post(postList.create_a_post);

    app.route('/api/posts/:postId')
        .get(postList.read_a_post)
        .put(postList.update_a_post)
        .delete(postList.delete_a_post);
};
