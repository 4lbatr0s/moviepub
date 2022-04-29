"use strict"

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  user:{ //this is a user(ref), and just push its _id value.
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User'
  },
  content:{
    type:String,
    required:true,
    minlength:1 //prevent empty.
  }

});

//Auto-populate
CommentSchema.plugin(require("mongoose-autopopulate"));

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;
