const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require("./routes/blog-routes.js");
const userRouter = require("./routes/user-routes.js");
const cors = require('cors');
const fileupload = require('express-fileupload');
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use('/photo', express.static('upload'));
app.use("/api/user", userRouter);
app.use("/api/blog",blogRouter);

mongoose
    .connect(
        "mongodb+srv://madhumithavenu03:madhu@cluster0.kfmiwbq.mongodb.net/UserBlog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected TO Database and Listening TO Localhost 5000")
    )
    .catch(err => console.log(err)); 
