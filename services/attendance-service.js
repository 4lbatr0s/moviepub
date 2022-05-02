const BaseService = require('./base-service')
const userService = require('./user-service')
const groupService = require('./group-service')
const movieNightService = require('./movie-night-service')
const eventService = require('./event-service')


//TODO: Why here?, because we do not want to give person service the power to change group vice versa.
class AttendanceService{

async userAttendGroup(userId, groupId) {
    const user = await userService.find(userId);
    const group = await groupService.find(groupId); 
    user.groups.push(group);
    group.attendees.push(user);
    await user.save();
    await group.save();
  };

  async userAttendMovieNight(userId, movieNightId) {
    const user = await userService.find(userId);
    const movieNight = await movieNightService.find(movieNightId); 
    user.movieNights.push(movieNight);
    movieNight.attendes.push(user);
    await user.save();
    await movieNight.save();
  };

  async userAttendEvent(personId, eventId) {
    const user = await userService.find(personId);
    const event = await eventService.find(eventId); 
    user.events.push(event);
    event.attendes.push(user);
    await user.save();
    await event.save();
  };



}

module.exports = new AttendanceService()
