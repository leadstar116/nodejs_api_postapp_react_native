'use strict';
var sql = require('../config/db.js');

//Post object constructor
var Post = function (post) {
    this.title = post.title;
    this.schedule = post.schedule;
    this.content = post.content;
    this.created_at = new Date();
};
Post.createPost = function (newPost, result) {
    sql.query("INSERT INTO posts set ?", newPost, function (err, res) {

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
Post.getPostById = function (postId, result) {
    sql.query("Select title, schedule, content, created_at from posts where id = ? ", postId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Post.getAllPost = function (result) {
    sql.query("Select * from posts", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('posts : ', res);
            result(null, res);
        }
    });
};
Post.updateById = function (id, post, result) {
    sql.query("UPDATE posts SET title = ?, schedule = ?, content = ? WHERE id = ?", [post.title, post.schedule, post.content, id], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Post.remove = function (id, result) {
    sql.query("DELETE FROM posts WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Post;