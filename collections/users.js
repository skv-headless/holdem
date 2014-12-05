Meteor.users.allow({
  update: function (userId, user, fields, modifier) {
    if (user._id !== userId) {
      return false;
    }
    return true;
  },
  fetch: ['_id']
});
