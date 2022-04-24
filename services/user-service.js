const BaseService = require('./base-service');
const UserModel = require('./../models/User')

class UserService extends BaseService{
    constructor(){
        super(UserModel, `${__dirname}/../databases/user-db.json`);
    }
}

module.exports = new UserService();