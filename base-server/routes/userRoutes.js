const express = require("express");
const userController = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.post("/signUp", userController.signUp);
userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUsers);
//userRouter.get("/getOneUser", userController.getOneUser);
module.exports = userRouter;
