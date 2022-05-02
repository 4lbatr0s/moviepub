const express = require('express');
const router = express.Router()
const movieNightService = require('../services/movie-night-service');
const movieService = require('../services/movie-service');

router.get("/all", async (req, res) => {
    const movieNights = await movieNightService.findAll();
    console.log(movieNights);
    res.render("list", { items: movieNights }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/withmultiplemovies", async (req, res) => {
    const groups = await movieNightService.bringMovieNightsWithMultipleMovies()
    res.send(groups);
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const movieNight = await movieNightService.find(req.params.id);
    res.render('data', {data:movieNight});
  });
  
  router.post("/", async (req, res) => {
    // const movies = await req.body.movies.find()
    // const name = await req.body.name;
    const movieNight = await movieNightService.add(req.body); //you need to send [movies:{_id:....}]
    res.send(movieNight);
  });
  
  router.delete("/:id", async (req, res) => {
    await movieNightService.delete(req.params.id);
    res.status(200).json("movieNight has been deleted");
  });
 

  module.exports = router;