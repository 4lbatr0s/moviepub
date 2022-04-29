"use strict"

const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
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
  content:{
    type:String
  }
});

//Auto-populate
EventSchema.plugin(require("mongoose-autopopulate"));

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
