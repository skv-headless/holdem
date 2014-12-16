function selectRandomCards(deck, count) {
  return _.sample(deck, count);
}

function removeCardsFromDeck(deck, cards) {
  return _.reject(deck, function(card){ return _.include(cards, card);})
}


Meteor.methods({
  toBlind: function(room) {
    var deck = CARDS.deck();
    var users = roomUsers(room).fetch();
    var ids = users.map(function(user) { return user._id });
    //TODO rename current and next
    var currentUserIndex = ids.indexOf(room.owner_id) + 1;
    var currentUser = users[currentUserIndex];
    var nextUser = users[(currentUserIndex + 1) % users.length];

    Meteor.users.update({_id: currentUser._id},
        {$inc: {'profile.account': (-1) * Room.BLIND}});

    Meteor.users.update({_id: nextUser._id},
        {$inc: {'profile.account': (-1) * Room.SMALL_BLIND}});

    users.forEach(function(user) {
      var cards = selectRandomCards(deck, 2);
      deck = removeCardsFromDeck(deck, cards);
      Meteor.users.update({_id: user._id}, {$set: {'profile.cards': cards}})
    });

    var communityCards = selectRandomCards(deck, 5);
    deck = removeCardsFromDeck(deck, communityCards);

    Rooms.update({_id: room._id}, {$set: {
      state: 'blind',
      cards: deck,
      communityCards: communityCards,
      dealer_id: room.owner_id,
      current_user_id: currentUser._id,
      bank: Room.BLIND + Room.SMALL_BLIND
    }});
  }
});
