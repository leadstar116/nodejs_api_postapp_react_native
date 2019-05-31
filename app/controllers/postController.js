'use strict';

var Post = require('../model/postModel');

exports.list_all_posts = function (req, res) {
    Post.getAllPost(function (err, post) {
        if (err)
            res.send(err);
        res.send(post);
    });
};

exports.create_a_post = function (req, res) {
    var new_post = new Post(req.body);

    console.log(req.body);
    console.log(new_post);
    //handles null error 
    if (!new_post.title || !new_post.schedule || !new_post.content) {

        res.status(400).send({ error: true, message: 'Please provide title/schedule/content' });

    }
    else {

        Post.createPost(new_post, function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    }
};

exports.read_a_post = function (req, res) {
    Post.getPostById(req.params.postId, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.update_a_post = function (req, res) {
    Post.updateById(req.params.postId, new Post(req.body), function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.delete_a_post = function (req, res) {
    Post.remove(req.params.postId, function (err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Post successfully deleted' });
    });
};