"use strict"

const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
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
  events: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Event',
    autopopulate:{
      maxDepth:1 //prevent population looping.
    }
  }],
});

//Auto-populate
GroupSchema.plugin(require("mongoose-autopopulate"));

const GroupModel = mongoose.model("Group", GroupSchema);

module.exports = GroupModel;
