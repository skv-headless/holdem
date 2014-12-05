AutoForm.hooks({
  insertRoomForm: {
    onSuccess: function(operation, result, template) {
      Meteor.users.update({_id: Meteor.user()._id},
                          {$set: {'profile.room_id': result}})
    }
  }
})
