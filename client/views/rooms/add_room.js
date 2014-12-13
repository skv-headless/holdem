AutoForm.hooks({
  insertRoomForm: {
    before: {
      insert: function(doc, template) {
        doc.owner_id = Meteor.userId()
        return doc;
      }
    },
    onSuccess: function(operation, result, template) {
      Meteor.users.update({_id: Meteor.user()._id},
                          {$set: {'profile.room_id': result}})
    }
  }
})
