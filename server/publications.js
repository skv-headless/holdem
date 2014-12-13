Meteor.publish('users', function(){
  return Meteor.users.find();
});

Meteor.publish('rooms', function(){
  return Rooms.find();
});

