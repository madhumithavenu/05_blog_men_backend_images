const express = require('express');
const {signup,login} = require("../controllers/user-controller.js");


const userRouter = express.Router();
userRouter.post("/signup",signup);
userRouter.post("/login",login);

module.exports = userRouter;