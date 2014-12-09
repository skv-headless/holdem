Template.room.helpers({
  current: function() {
    return currentRoom(Meteor.user())
  },
  users: function() {
    var room = currentRoom(Meteor.user());
    return Meteor.users.find({'profile.room_id': room._id})
  },
  avatar: function(user) {
    return avatar(user);
  }
});

