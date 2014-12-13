AutoForm.hooks({
  insertRoomForm: {
    before: {
      insert: function(doc, template) {
        doc.owner_id = Meteor.userId()
        return doc;
      }
    },
    onSuccess: function(operation, result, template) {
      changeRoom(Meteor.user(), result);
    }
  }
})
