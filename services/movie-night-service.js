const BaseService = require("./base-service");
const MovieNightModel = require("../models/MovieNight")

class MovieNightService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(MovieNightModel)
    // }
    model = MovieNightModel //this line and line from 6 to 8 are same.

    // async saveMovieNightModel() {
    //     await this.model.save();
    //   }

    async bringMovieNightsWithMultipleMovies(){
        const movies = await this.model.find({
            'movies.1':{"exists":true}
        })

        return movies
    }

}

module.exports = new MovieNightService()