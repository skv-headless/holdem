avatar = function(user) {
  //TODO another services
  if(user.services.twitter) {
    return user.services.twitter.profile_image_url
  } else {
    return "https://assets.servedby-buysellads.com/p/manage/asset/id/17313"
  }
}

currentRoom = function(user) {
    if(!user ||
       !user.profile ||
       !user.profile.room_id) {
      return false;
    }
    return Rooms.findOne({_id: Meteor.user().profile.room_id});
}