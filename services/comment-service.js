const BaseService = require('./base-service');
const CommentModel = require('./../models/Comment')

class CommentService extends BaseService{
    constructor(){
        super(CommentModel, `${__dirname}/../databases/comment-db.json`);
    }
}

module.exports = new CommentService();