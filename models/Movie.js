const Comment = require('./Comment')
const Score = require('./Score')
const Favorite = require('./Favorite')
const User = require('./User')

module.exports = class Movie {
    constructor(name, director, year, usersWatched = [], comments = [], scores = [], favorites = []) {
      this.name = name;
      this.director = director;
      this.year = year;
      this.usersWatched = usersWatched;
      this.comments = comments;
      this.scores = scores;
      this.favorites = favorites;
    }

    static create({name, director, year, usersWatched, comments, scores, favorites}){
      let movie = new Movie(name, director, year, usersWatched, comments, scores, favorites);
      return movie;
    }
  };