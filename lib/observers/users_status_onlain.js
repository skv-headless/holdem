Meteor.users.find({ "status.online": true }).observe({
  removed: function(doc) {
    //Meteor.call('userLeave', doc);
  }
});
