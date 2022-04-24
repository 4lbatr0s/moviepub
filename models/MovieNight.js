const Event = require('./Event');
const Movie = require('./Movie');
const User = require('./User');

module.exports = class MovieNight extends Event{
    constructor(name, content, date, attendees =[], movies = []) {
      super(name, content, date, attendees);
      this.movies = movies
    }

    static create({name, content, date, attendees}){
      let movieNight = new MovieNight(name, content, date, attendees) //TODO:there we take attendees or movies as json objects
      movieNight.attendees = attendees.map(User.create) //TODO: then here we create attendee and movie types from this objects.
      movieNight.movies = attendees.map(Movie.create)
      return movieNight;
    }
};
