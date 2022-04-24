"use strict";

//node api
const fs = require('fs');


//modules
const User = require('./models/User');
const Movie = require('./models/Movie')
const Comment = require('./models/Comment')
const Score = require('./models/Score')
const Favorite = require('./models/Favorite')
const Event = require('./models/Event')
const MovieNight = require('./models/MovieNight')
const Group = require('./models/Group')

//services
const CommentService = require('./services/comment-service')
const EventService = require('./services/event-service')
const FavoriteService = require('./services/favorite-service')
const GroupService = require('./services/group-service')
const MovieNightService = require('./services/movie-night-service')
const ScoreService = require('./services/score-service')
const UserService = require('./services/user-service');
const MovieService = require('./services/movie-service')
const Flatted = require('flatted');

async function main(){
   const serhat = 
   
}



(async () => {
    try {
        await main()
    } catch (e) {
        console.log(e)
    }
})()