Rooms = new Mongo.Collection("rooms");

Rooms.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  state: {
    type: String,
    allowedValues: ['start', 'flop', 'turn', 'river', 'showdown'],
    defaultValue: 'start'
  },
  bank: {
    type: Number,
    defaultValue: 0
  }
}));

