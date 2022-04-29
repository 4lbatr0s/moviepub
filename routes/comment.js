const express = require('express');
const router = express.Router()
const commentService = require('../services/comment-service');

router.get("/all", async (req, res) => {
    const comments = await commentService.findAll();
    res.render("list", { items: comments }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const Comment = await commentService.find(req.params.id);
    res.send(Comment);
    console.log(Comment);
  });
  
  router.post("/", async (req, res) => {
    const comment = await commentService.add(req.body);
    res.send(comment);
  });
  
  router.delete("/:id", async (req, res) => {
    await commentService.delete(req.params.id);
    res.status(200).json("comment has been deleted");
  });


  module.exports = router;