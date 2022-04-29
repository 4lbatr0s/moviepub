const BaseService = require("./base-service");
const CommentModel = require("../models/Comment")

class CommentService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(CommentModel)
    // }
    model = CommentModel //this line and line from 6 to 8 are same.

    // async saveCommentModel() {
    //     await this.model.save();
    //   }

}

module.exports = new CommentService()