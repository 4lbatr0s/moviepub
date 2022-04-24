const User = require('./User')


module.exports = class Event{
    constructor(name, content, date, attendees = []) {
      this.name = name;
      this.content = content;
      this.date = date;
      this.attendees = attendees
    }

    static create({name, content, date, attendees}){
      let event = new Event(name, content, date, attendees)
      return event;
    }
  };
  