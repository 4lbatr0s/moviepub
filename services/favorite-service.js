const BaseService = require("./base-service");
const userService = require("./user-service");
const movieService = require("./movie-service");
const FavoriteModel = require("../models/Favorite")

class FavoriteService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(FavoriteModel)
    // }
    model = FavoriteModel //this line and line from 6 to 8 are same.

    // async saveFavoriteModel() {
    //     await this.model.save();
    //   }

    async userFavoriteMovie(userId, movieId){
        const favoriterUser = await userService.find(userId);
        const favoritedMovie = await movieService.find(movieId);
        const favoriteCreated = await this.add({user:userId})
        console.log(favoriteCreated._id)
        favoriterUser.favorites.push(favoriteCreated)
        favoritedMovie.favorites.push(favoriteCreated)
        await favoriterUser.save()
        await favoritedMovie.save()
    } 
}

module.exports = new FavoriteService()