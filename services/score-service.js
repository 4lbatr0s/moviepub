const BaseService = require("./base-service");
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

}

module.exports = new ScoreService()