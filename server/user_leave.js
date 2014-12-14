Meteor.methods({
  userLeave: function(user) {
    var room = Rooms.findOne({_id: user.profile.room_id});

    if( room && room.owner_id == user._id) {
      //Rooms.remove({_id: room._id});
    } else {
      Meteor.users.update({_id: user._id},
                          {$unset: {'profile.room_id': 1}})
    }
  }
})

