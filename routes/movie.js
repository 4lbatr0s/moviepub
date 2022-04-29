const express = require('express');
const router = express.Router()
const movieService = require('../services/movie-service');

router.get("/all", async (req, res) => {
    const movies = await movieService.findAll();
    res.render("list", { items: movies }); //send users to user.pug file for dynamic rendering.
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