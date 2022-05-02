"use strict"

const mongoose = require("mongoose");

const MovieNightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  attendees: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'User',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
  movies: [{//TODO: pass only the id of the movie.
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Movie',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
});

//Auto-populate
MovieNightSchema.plugin(require("mongoose-autopopulate"));

const MovieNightModel = mongoose.model("MovieNight", MovieNightSchema);

module.exports = MovieNightModel;
