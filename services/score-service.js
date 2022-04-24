const BaseService = require('./base-service');
const ScoreModel = require('./../models/Score')

class ScoreService extends BaseService{
    constructor(){
        super(ScoreModel, `${__dirname}/../databases/ccore-db.json`);
    }
}

module.exports = new ScoreService();