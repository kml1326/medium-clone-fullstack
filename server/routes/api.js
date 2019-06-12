const express = require("express");
const userController = require("../controllers/user.controller");
const postController = require("../controllers/post.controller");
const auth = require("../modules/auth");

var router = express.Router();

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/isLoggedin", auth.isLoggedIn, userController.isLoggedIn);

router.post("/create", postController.create);

router.put("/create", postController.update);

router.get("/posts", postController.allPosts);

router.get("/posts/:id", postController.singlePost);

router.post("/posts/:id/comment", postController.createComment);

router.get("/:id/comments", postController.allComments);

module.exports = router;
