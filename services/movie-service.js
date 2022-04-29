const BaseService = require("./base-service");
const MovieModel = require("../models/Movie")

class MovieService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(MovieModel)
    // }
    model = MovieModel //this line and line from 6 to 8 are same.

    // async saveMovieModel() {
    //     await this.model.save();
    //   }

}

module.exports = new MovieService()