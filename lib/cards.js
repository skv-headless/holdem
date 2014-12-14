CARDS = {
  suits: ['diams', 'hearts', 'spades', 'clubs'],
  ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10',
      'j', 'q', 'k', 'a'],
  deck: function() {
    var cards = [];
    CARDS.suits.forEach(function(suit) {
      CARDS.ranks.forEach(function(rank) {
        cards.push({
          suit: suit,
          rank: rank
        })
      })
    })
    return cards;
  }
}
