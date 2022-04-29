const BaseService = require("./base-service");
const GroupModel = require("../models/Group")

class GroupService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(GroupModel)
    // }
    model = GroupModel //this line and line from 6 to 8 are same.

    // async saveGroupModel() {
    //     await this.model.save();
    //   }

}

module.exports = new GroupService()