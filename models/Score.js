module.exports = class Score{
    constructor(user, score, movie) {
      this.user = user;
      this.score = score;
      this.movie = movie;
      this.createdAt = new Date().toString();
    }

    static create({user, score, movie}){
      return new Score(user, score, movie)
    }
  };