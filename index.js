"use strict";

//node api
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");


//routers
const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const commentRouter = require("./routes/comment")
const eventRouter = require("./routes/event")
const favoriteRouter = require("./routes/favorite")
const movieNightRouter = require("./routes/movie-night")
const scoreRouter = require("./routes/score")
const movieRouter = require("./routes/movie")
const groupRouter = require("./routes/group")


require("./mongo-connection"); //we can directly require this file because we don't export anything from mongo-connection.

const app = express(); //initialize express server, create web application.
app.use(bodyParser.json()); //we need to use bodyParser in order to parse the body we send with axios from google developer tools/ for now.
app.set("view engine", "pug"); //we should tell the express to use which specific render engine it should use.


//first parameter is the route path, second parameter is the callback function to decide how to answer the route path.
//name does not mean anything but order is important.
//routes
app.use("/", indexRouter)
app.use("/user",userRouter)
app.use("/comment",commentRouter)
app.use("/event",eventRouter)
app.use("/favorite",favoriteRouter)
app.use("/group",groupRouter)
app.use("/movie-night",movieNightRouter)
app.use("/movie", movieRouter)
app.use("/score",scoreRouter)


//app.listen requires a callback function because it needs to request a permission to use the port 3000.
app.listen(5000, () => {
  console.log(`Server listening at port  ${5000}`);
});
