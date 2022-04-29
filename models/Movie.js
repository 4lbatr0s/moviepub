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
});

//Auto-populate
MovieSchema.plugin(require("mongoose-autopopulate"));

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
