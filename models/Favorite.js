"use strict"

const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const FavoriteSchema = new mongoose.Schema({
  user:{ //this is a user(ref), and just push its _id value.
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User'
    }

});

//Auto-populate
FavoriteSchema.plugin(require("mongoose-autopopulate"));
//TODO:check if something is unique.
FavoriteSchema.plugin(uniqueValidator)

const FavoriteModel = mongoose.model("Favorite", FavoriteSchema);

module.exports = FavoriteModel;
