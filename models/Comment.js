"use strict"

const mongoose = require("mongoose");
const Sentiment = require("sentiment");

const CommentSchema = new mongoose.Schema({
  user:{ //this is a user(ref), and just push its _id value.
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User',
  },
  content:{
    type:String,
    required:true,
    minlength:1 //prevent empty.
  }, 
  sentimentAnalysis:{
    type:Object  //sentiment analysis.
  }
});

//Auto-populate
CommentSchema.plugin(require("mongoose-autopopulate"));

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;
