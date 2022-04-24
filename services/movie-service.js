const BaseService = require('./base-service');
const MovieModel = require('./../models/Movie')

class MovieService extends BaseService{
    constructor(){
        super(MovieModel, `${__dirname}/../databases/movie-db.json`);
    }
}

module.exports = new MovieService();