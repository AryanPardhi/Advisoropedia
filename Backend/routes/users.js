var express = require("express");
var router = express.Router();
const checkAuth = require("../Middleware/check-auth");
const UserController = require('../Controller/userController');

// Create User Signup page * no login required
router.post("/signup", UserController.user_signup);

// Login User * no login requires
router.post("/login", UserController.user_login);

// Delete User * login required
router.delete("/:userId",checkAuth, UserController.delete_user);

module.exports = router;
