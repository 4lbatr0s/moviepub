const BaseService = require("./base-service");
const MovieService = require("./movie-service");

const CommentModel = require("../models/Comment");
const userService = require("./user-service");
const Sentiment = require("sentiment");

class CommentService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(CommentModel)
    // }
    model = CommentModel //this line and line from 6 to 8 are same.

    // async saveCommentModel() {
    //     await this.model.save();
    //   }

    //TODO: Prevent multiple favorites.
    // comment: {user:{_id:asdasdasdasdas}, movie:{_id:121231231231231}, content: asdasdasdasdasdas}
    async userCommentToMovie(userId, movieId, comment){
        const commenterUser = await userService.find(userId);
        const commentedMovie = await MovieService.find(movieId);
        const sentiment = new Sentiment()
        const sentimentAnalysis = await sentiment.analyze(comment)
        const commentCreated = await this.add({user:userId, content:comment, sentimentAnalysis:sentimentAnalysis})
        commenterUser.comments.push(commentCreated)
        commentedMovie.comments.push(commentCreated)
        await commenterUser.save()
        await commentedMovie.save()
    } 



}

module.exports = new CommentService()