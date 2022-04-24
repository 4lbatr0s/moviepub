const BaseService = require('./base-service');
const FavoriteModel = require('./../models/Favorite')

class FavoriteService extends BaseService{
    constructor(){
        super(FavoriteModel, `${__dirname}/../databases/favorite-db.json`);
    }
}

module.exports = new FavoriteService();