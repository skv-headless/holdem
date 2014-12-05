Rooms = new Mongo.Collection("rooms");

Rooms.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "name",
    max: 200
  }
}));
