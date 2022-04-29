const express = require('express');
const router = express.Router()
const eventService = require('../services/event-service');

router.get("/all", async (req, res) => {
    const events = await eventService.findAll();
    res.render("list", { items: events }); //send users to user.pug file for dynamic rendering.
  });
  
  router.get("/:id", async (req, res) => {
    const event = await eventService.find(req.params.id);
    res.send(event);
    console.log(event);
  });
  
  router.post("/", async (req, res) => {
    const event = await eventService.add(req.body);
    res.send(event);
  });
  
  router.delete("/:id", async (req, res) => {
    await eventService.delete(req.params.id);
    res.status(200).json("event has been deleted");
  });


module.exports = router;