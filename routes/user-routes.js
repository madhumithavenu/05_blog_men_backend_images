const express = require('express');
const {signup} = require("../controllers/user-controller.js");


const userRouter = express.Router();


userRouter.post("/signup",signup);


module.exports = userRouter;