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

    async groupsWithAttendees(){
        const groups = await this.model.find({
            'attendees.0': {"$exists":true}     
        })
        return groups
    }
    
    async groupsWithEvents(){
        const groups = await this.model.find({
            'events.0': {"$exists":true}     
        })
        return groups
    }
}

module.exports = new GroupService()