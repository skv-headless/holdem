Meteor.methods({
  userLeave: function(doc) {
    Meteor.users.update({_id: doc._id},
                        {$unset: {'profile.room_id': 1}})
  }
})

