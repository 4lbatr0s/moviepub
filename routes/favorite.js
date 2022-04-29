const express = require('express');
const router = express.Router()
const favoriteService = require('../services/favorite-service');

router.get("/all", async (req, res) => {
    const favorites = await favoriteService.findAll();
    res.render("list", { items: favorites }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const favorite = await favoriteService.find(req.params.id);
    res.send(favorite);
    console.log(favorite);
  });
  
  router.post("/", async (req, res) => {
    const favorite = await favoriteService.add(req.body);
    res.send(favorite);
  });
  
  router.delete("/:id", async (req, res) => {
    await favoriteService.delete(req.params.id);
    res.status(200).json("favorite has been deleted");
  });


  module.exports = router;