Template.rooms.helpers({
  all: function() {
    return Rooms.find();
  }
});


Template.rooms.events({
  'click .event': function(event, template) {
    var id = $(event.target).attr('data');

    changeRoom(Meteor.user(), id);
  }
});
