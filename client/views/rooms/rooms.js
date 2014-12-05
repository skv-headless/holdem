Template.rooms.helpers({
  all: function() {
    return Rooms.find();
  }
});


Template.rooms.events({
  'click .event': function(event, template) {
    var id = $(event.target).attr('data');

    Meteor.users.update({_id: Meteor.user()._id},
                        {$set: {'profile.room_id': id}})
  }
});
