Template.card.helpers({
  visibleForCurrentUser: function(owner) {
    if(owner) {
      return owner._id == Meteor.userId();
    } else {
      return true;
    }
  }
})
