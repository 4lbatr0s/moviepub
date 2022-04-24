"use strict"

const Event = require('./Event')
const User = require('./User')
const Favorite = require('./Favorite')

module.exports = class Group{
    constructor(name, members = [], events = [], favorites = []) {
      this.name = name;
      this.members = members;
      this.events = events;
      this.favorites = favorites;
    }

    removeEvent(event) {
      let indexOfEvent = this.incomingEvents.includes(event)
        ? this.incomingEvents.indexOf(event)
        : null;
      if (indexOfEvent) {
        this.incomingEvents.slice(indexOfEvent, 1);
      } else {
        throw "no events matched";
      }
      this.incomingEvents.slice(this.incomingEvents.indexOf(event));
    }

    static create({name, members, events, favorites}){
      let group = new Group(name, members, events, favorites)
      return group;
    }
  };