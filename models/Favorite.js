module.exports = class Favorite{
    constructor(user, movie) {
      this.user = user;
      this.movie = movie;
      this.createdAt = new Date().toString();
    }

    static create({user, movie}){
      return new Favorite(user, movie)
    }
  };