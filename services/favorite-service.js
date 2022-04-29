const BaseService = require("./base-service");
const FavoriteModel = require("../models/Favorite")

class FavoriteService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(FavoriteModel)
    // }
    model = FavoriteModel //this line and line from 6 to 8 are same.

    // async saveFavoriteModel() {
    //     await this.model.save();
    //   }

}

module.exports = new FavoriteService()