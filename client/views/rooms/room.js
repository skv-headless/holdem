Template.room.helpers({
  current: function() {
    if(!Meteor.user() ||
       !Meteor.user().profile ||
       !Meteor.user().profile.room_id) {
      return false;
    }
    return Rooms.findOne({_id: Meteor.user().profile.room_id});
  }
});

