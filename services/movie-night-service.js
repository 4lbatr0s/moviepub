const BaseService = require('./base-service');
const MovieNightModel = require('./../models/MovieNight')

class MovieNightService extends BaseService{
    constructor(){
        super(MovieNightModel, `${__dirname}/../databases/movie-night-db.json`);
    }
}

module.exports = new MovieNightService();