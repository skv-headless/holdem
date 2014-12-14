Meteor.methods({
  toBlind: function(room) {
    Rooms.update({_id: room._id}, {$set: {state: 'blind'}});
  },
  giveCards: function(room) {

  }
})
