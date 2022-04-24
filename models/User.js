const Comment = require("./Comment");
const Favorite = require("./Favorite");
const Movie = require("./Movie");
const MovieNight  = require("./MovieNight");
const Score = require("./Score");
const Group = require("./Group");

module.exports = class User {
  constructor(
    username,
    watchList = [],
    comments = [],
    favorites = [],
    scores = [],
    movieNights = [],
    groups = []
  ) {
    this.username = username;
    this.watchList = watchList;
    this.comments = comments;
    this.favorites = favorites;
    this.scores = scores;
    this.movieNights = movieNights;
    this.groups = groups;
  }

  static create({username, watchList, comments, favorites, scores, movieNights, groups}){
    const user = new User(username, watchList, comments, favorites, scores, movieNights, groups)
    return user
  }

  comment(movie, comment) {
    movie.usersCommented.push(this);
    const comm = new Comment(this, comment, movie);
    this.comments.push(comm);
    movie.comments.push(comm);
  }
  favorite(movie) {
    movie.usersFavorited.push(this);
    this.favorites.push(movie);
  }
  score(movie, score) {
    movie.usersScored.push(this);
    movie.scores.push(score);
    this.scores.push(score);
  }
  attendMovieNights(movieNight) {
    movieNight.attendees.push(this);
    this.movieNights.push(movieNight);
  }

  attendGroup(group) {
    group.members.push(this);
    this.groups.push(group);
  }

};
