function selectRandomCards(deck, count) {
  return _.sample(deck, count);
};

function removeCardsFromDeck(deck, cards) {
  return _.reject(deck, function(card){ return _.include(cards, card);})
};

Meteor.methods({
  toBlind: function(room) {
    var deck = CARDS.deck();
    var users = roomUsers(room);

    users.forEach(function(user) {
      var cards = selectRandomCards(deck, 2);
      deck = removeCardsFromDeck(deck, cards);
      Meteor.users.update({_id: user._id}, {$set: {'profile.cards': cards}})
    })

    var communityCards = selectRandomCards(deck, 5);
    deck = removeCardsFromDeck(deck, communityCards);

    Rooms.update({_id: room._id}, {$set: {
      state: 'blind',
      cards: deck,
      communityCards: communityCards
    }});
  }
})
