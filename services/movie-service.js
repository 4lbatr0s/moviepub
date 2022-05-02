const BaseService = require("./base-service");
const MovieModel = require("../models/Movie")

class MovieService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(MovieModel)
    // }
    model = MovieModel //this line and line from 6 to 8 are same.

    async moviesWithScores(){
        const movies = await this.model.find({
            'scores.0': {"$exists":true}     
        })
        return movies
    }

    async moviesWithComments(){
        const movies = await this.model.find({
            'comments.0': {"$exists":true}     
        })
        return movies
    }

    async moviesWithFavorites(){
        const movies = await this.model.find({
            'favorites.0': {"$exists":true}     
        })
        return movies
    }
    
}

module.exports = new MovieService()