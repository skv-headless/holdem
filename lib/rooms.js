roomUsers = function(room) {
  return Meteor.users.find({'profile.room_id': room._id});
}
