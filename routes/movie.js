const express = require('express');
const movieService = require('../services/movie-service');
const router = express.Router()

router.get("/all", async (req, res) => {
    const movies = await movieService.findAll();
    res.render("list", { items: movies }); //send users to user.pug file for dynamic rendering.
  });
  //TODO: To prevent ObjectID failed for value ..string problems, write requests that brings array of objects before :/id callings.
  router.get("/withcomment", async (req, res) => {
    const movies = await movieService.moviesWithComments();
    res.send(movies)
  });
  
  router.get("/withfavorite", async (req, res) => {
    const movies = await movieService.moviesWithFavorites();
    res.send(movies)
  });
  
  router.get("/withscore", async (req, res) => {
    const movies = await movieService.moviesWithScores();
    res.send(movies)
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.find(req.params.id);
    res.send(movie);
    console.log(movie);
  });
  
  router.post("/", async (req, res) => {
    const movie = await movieService.add(req.body);
    res.send(movie);
  });
  
  router.delete("/:id", async (req, res) => {
    await movieService.delete(req.params.id);
    res.status(200).json("movie has been deleted");
  });


  module.exports = router;