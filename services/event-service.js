const BaseService = require("./base-service");
const EventModel = require("../models/Event")

class EventService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(EventModel)
    // }
    model = EventModel //this line and line from 6 to 8 are same.

    // async saveEventModel() {
    //     await this.model.save();
    //   }

}

module.exports = new EventService()