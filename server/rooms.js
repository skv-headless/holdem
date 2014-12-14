Meteor.methods({
  toBlind: function(room) {
    var deck = CARDS.deck();
    var users = roomUsers(room);

    users.forEach(function(user) {
      var cardIndex, card = [];
      cardIndex = _.random(0, deck.length);
      card.push(deck.splice(cardIndex, 1)[0]);

      cardIndex = _.random(0, deck.length);
      card.push(deck.splice(cardIndex, 1)[0]);
      Meteor.users.update({_id: user._id}, {$set: {'profile.cards': card}})
    })

    Rooms.update({_id: room._id}, {$set: {
      state: 'blind',
      cards: deck
    }});
  }
})
