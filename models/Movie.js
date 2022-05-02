"use strict"

const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  trailer:{//TODO: Implement imdb api here to fetch the trailer.
    type:String,
    default:"https://www.youtube.com/watch?v=pKwQlm-wldA"
  },
  comments: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Comment',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
  scores: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Score',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
  favorites: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Favorite',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    } 
  }],
});

//Auto-populate
MovieSchema.plugin(require("mongoose-autopopulate"));
// MovieSchema.plugin(require('mongoose-unique-validator'));
const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
