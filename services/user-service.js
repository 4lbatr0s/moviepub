const BaseService = require("./base-service");
const UserModel = require("../models/User")

class UserService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(UserModel)
    // }
    model = UserModel //this line and line from 6 to 8 are same.

    // async saveUserModel() {
    //     await this.model.save();
    //   }

}

module.exports = new UserService()