"use strict"

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  comments: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Comment',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
  events: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Event',
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
  scores: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Score',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
  movieNights: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'MovieNight',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
});

//Auto-populate
UserSchema.plugin(require("mongoose-autopopulate"));

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
