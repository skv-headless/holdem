Rooms = new Mongo.Collection("rooms");

Rooms.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  state: {
    type: String,
    allowedValues: ['ready', 'blind', 'flop', 'turn', 'river', 'showdown'],
    defaultValue: 'ready'
  },
  bank: {
    type: Number,
    defaultValue: 0
  },
  owner_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  cards: {
    type: [CardsSchema],
    minCount: 0,
    maxCount: 52,
    optional: true
  },
  communityCards: {
    type: [CardsSchema],
    minCount: 0,
    maxCount: 5,
    optional: true
  },
  dealer_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  current_user_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
}));

