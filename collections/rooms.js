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
  }
}));

