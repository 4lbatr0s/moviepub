const express = require('express');
const router = express.Router()
const scoreService = require('../services/score-service');

router.get("/all", async (req, res) => {
    const scores = await scoreService.findAll();
    res.render("list", { items: scores }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const score = await scoreService.find(req.params.id);
    res.send(score);
    console.log(score);
  });
  
  router.post("/", async (req, res) => {
    const score = await scoreService.add(req.body);
    res.send(score);
  });
  
  router.delete("/:id", async (req, res) => {
    await scoreService.delete(req.params.id);
    res.status(200).json("score has been deleted");
  });


  module.exports = router;