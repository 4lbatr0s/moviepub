const express = require('express');
const router = express.Router()
const movieNightService = require('../services/movie-night-service');

router.get("/all", async (req, res) => {
    const movieNights = await movieNightService.findAll();
    res.render("list", { items: movieNights }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const movieNight = await movieNightService.find(req.params.id);
    res.send(movieNight);
    console.log(movieNight);
  });
  
  router.post("/", async (req, res) => {
    const movieNight = await movieNightService.add(req.body);
    res.send(movieNight);
  });
  
  router.delete("/:id", async (req, res) => {
    await movieNightService.delete(req.params.id);
    res.status(200).json("movieNight has been deleted");
  });


  module.exports = router;