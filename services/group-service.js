const BaseService = require('./base-service');
const GroupModel = require('./../models/Group')

class GroupService extends BaseService{
    constructor(){
        super(GroupModel, `${__dirname}/../databases/group-db.json`);
    }
}

module.exports = new GroupService();