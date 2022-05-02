const express = require("express");
const router = express.Router();
const groupService = require("../services/group-service");

router.get("/all", async (req, res) => {
  const groups = await groupService.findAll();
  res.render("list", { items: groups }); //send users to user.pug file for dynamic rendering.
});

router.get("/withattendee", async (req, res) => {
  const groups = await groupService.groupsWithAttendees();
  res.send(groups);
});

router.get("/withevent", async (req, res) => {
  const groups = await groupService.groupsWithEvents();
  res.send(groups);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const group = await groupService.find(req.params.id);
  res.send(group);
  console.log(group);
});

router.post("/", async (req, res) => {
  const group = await groupService.add(req.body);
  res.send(group);
});

router.delete("/:id", async (req, res) => {
  await groupService.delete(req.params.id);
  res.status(200).json("group has been deleted");
});

module.exports = router;
