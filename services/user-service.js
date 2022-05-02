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
    
    // Find all docs that have at least two comments array elements.
    
async usersWithComments(){
        const users = await this.model.find({
            'comments.0': {"$exists":true}     
        })
        return users
        // const users = await this.findAll({
        //     $where:"this.comments.length>1"
        // })
        // const users = await this.findAll({
        //     comments:{$gt:{$size:1}} //bring bigger than 1
        // })
        // return this.model.find({
        //     comments:{
        //         $gte:{
        //             $size:1
        //         }
        //     }
        // })
    }
    
    async usersWithScores(){
        const users = await this.model.find({
            'scores.0': {"$exists":true}     
        })
        return users
    }

    async usersWithFavorites(){
        const users = await this.model.find({
            'favorites.0': {"$exists":true}     
        })
        return users

    }

}



module.exports = new UserService()