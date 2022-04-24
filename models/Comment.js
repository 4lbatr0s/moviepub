const Sentiment = require('sentiment');
const sentiment = new Sentiment(); //sentiment analyzer


//modules


module.exports = class Comment{
    constructor(user, comment, movie) {
      this.user = user;
      this.comment = comment;
      this.commentSentimentAnalysisScore = sentiment.analyze(this.comment);
      this.movie = movie; 
      this.createdAt = new Date().toString();
    }

    //just get user,comment,movie properties of whatever is given as a parameter.
    static create({user, comment, movie}){
      return new Comment(user, comment, movie)
    }
  };