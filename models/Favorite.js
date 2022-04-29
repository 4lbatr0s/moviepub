"use strict"

const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  user:{ //this is a user(ref), and just push its _id value.
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User'
  }

});

//Auto-populate
FavoriteSchema.plugin(require("mongoose-autopopulate"));

const FavoriteModel = mongoose.model("Favorite", FavoriteSchema);

module.exports = FavoriteModel;
