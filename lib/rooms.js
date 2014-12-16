roomUsers = function(room) {
  return Meteor.users.find({'profile.room_id': room._id}, {sort: {_id: 1}});
};

Room = {
  BLIND: 2,
  SMALL_BLIND: 1
};
