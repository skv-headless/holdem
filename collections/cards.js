CardsSchema = new SimpleSchema({
  suit: {
    type: String,
    allowedValues: CARDS.suits
  },
  rank: {
    type: String,
    allowedValues: CARDS.ranks
  }
});
