const BaseService = require('./base-service');
const EventModel = require('./../models/Event')

class EventService extends BaseService{
    constructor(){
        super(EventModel, `${__dirname}/../databases/event-db.json`);
    }
}

module.exports = new EventService();