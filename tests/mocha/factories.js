Factory.define('room', Rooms, {
    name: 'room1',
    owner_id: ''
}).after(function(room) {
});

Factory.define('user', Meteor.users, {
    profile: {
      name: 'user1'
    },
    createdAt: new Date()
}).after(function(room) {
});

