"use strict"

const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  user:{ //this is a user(ref), and just push its _id value.
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User'
  }
});

//Auto-populate
ScoreSchema.plugin(require("mongoose-autopopulate"));

const ScoreModel = mongoose.model("Score", ScoreSchema);

module.exports = ScoreModel;
