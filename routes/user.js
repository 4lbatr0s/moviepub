const express = require('express');
const User = require('../models/User');
const router = express.Router()
const UserService = require('../services/user-service')
const MovieNightService = require('../services/movie-night-service')

router.get("/all", async (req, res) => {
    const users = await UserService.findAll();
    res.render("list", { items: users }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const User = await UserService.find(req.params.id);
    res.send(User);
    console.log(User);
  });
  
  router.post("/", async (req, res) => {
    const user = await UserService.add(req.body); //name
    res.send(user);
  });
  
  router.delete("/:id", async (req, res) => {
    await UserService.delete(req.params.id);
    res.status(200).json("user has been deleted");
  });

  router.post("/", async (req, res) => {
      const user = await UserService.find(req.query.userid);
      const movieNight = await MovieNightService.find(req.query.movieNightid);
      user.attendMovieNights(movieNight)
      res.send(user)
    } 
  );


  module.exports = router;