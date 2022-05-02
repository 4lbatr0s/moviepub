const express = require("express");
const User = require("../models/User");
const router = express.Router();
const MovieNightService = require("../services/movie-night-service");
const commentService = require("../services/comment-service");
const favoriteService = require("../services/favorite-service");
const attendanceService = require("../services/attendance-service");
const userService = require("../services/user-service");
const scoreService = require("../services/score-service");
const UserModel = require("../models/User");

router.get("/all", async (req, res) => {
  const users = await userService.findAll();
  res.render("list", { items: users }); //send users to user.pug file for dynamic rendering.
});

router.get("/withcomment", async (req, res) => {
  const users = await userService.usersWithComments();
  res.send(users)
});

router.get("/withfavorite", async (req, res) => {
  const users = await userService.usersWithFavorites();
  res.send(users)
});

router.get("/withscore", async (req, res) => {
  const users = await userService.usersWithScores();
  res.send(users)
});

router.get("/:id", async (req, res) => {
  const user = await userService.find(req.params.id);
  console.log(user)
  res.render("data", { data: user });
});

router.post("/", async (req, res) => {
  const user = await userService.add(req.body); //name
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  await userService.delete(req.params.id);
  res.status(200).json("user has been deleted");
});

//attendmovienight
router.post("/", async (req, res) => {
  const user = await userService.find(req.query.userid);
  const movieNight = await MovieNightService.find(req.query.movieNightid);
  user.attendMovieNights(movieNight);
  res.send(user);
});

//comment
router.post("/:id/comments", async (req, res) => {
  await commentService.userCommentToMovie(req.params.id, req.body.movie, req.body.content);
  res.send("OK")
});

//user favorite movie
router.post("/:id/favorites", async (req, res) => {
  await favoriteService.userFavoriteMovie(req.params.id, req.body.movie);
  res.send("OK")
});
//user score a movie
router.post("/:id/scores", async (req, res) => {
  await scoreService.userScoreMovie(req.params.id, req.body.movie, req.body.score);
  res.send("OK")
});



//attendances
//attend group
router.post("/:id/attend/group", async (req, res) => {
  await attendanceService.userAttendGroup(req.params.id, req.body.group);
  const user = userService.find(req.params.id)
  res.send(user)
});

router.post("/:id/attend/event", async (req, res) => {
  await attendanceService.userAttendEvent(req.params.id, req.body.event);
  const user = userService.find(req.params.id)
  res.send(user)
});

router.post("/:id/attend/movie-night", async (req, res) => {
  await attendanceService.userAttendMovieNight(req.params.id, req.body.night);
  const user = userService.find(req.params.id)
  res.send(user)
});



module.exports = router;
