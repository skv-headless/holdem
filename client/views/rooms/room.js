Template.room.helpers({
  current: function() {
    return currentRoom(Meteor.user())
  },
  users: function() {
    var room = currentRoom(Meteor.user());
    return roomUsers(room);
  },
  avatar: function(user) {
    return avatar(user);
  },
  needStart: function() {
    var user = Meteor.user(),
    room = currentRoom(user),
    usersCount = roomUsers(room).count();

    return room.owner_id == user._id &&
      room.state == 'ready' &&
      usersCount >= 2;
  }
});

Template.room.events({
  "click #startGame": function(event, template) {
    Meteor.call('toBlind', currentRoom(Meteor.user()));
  }
})

