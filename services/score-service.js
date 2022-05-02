const BaseService = require("./base-service");
const userService = require("./user-service");
const movieService = require("./movie-service");
const ScoreModel = require("../models/Score")

class ScoreService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(ScoreModel)
    // }
    model = ScoreModel //this line and line from 6 to 8 are same.

    // async saveScoreModel() {
    //     await this.model.save();
    //   }


    async userScoreMovie(userId, movieId, score){
        const scorerUser = await userService.find(userId);
        const scoredMovie = await movieService.find(movieId);
        const scoreCreated = await this.add({user:userId, score:score})
        console.log(scoreCreated._id)
        scorerUser.scores.push(scoreCreated)
        scoredMovie.scores.push(scoreCreated)
        await scorerUser.save()
        await scoredMovie.save()
    } 

}

module.exports = new ScoreService()