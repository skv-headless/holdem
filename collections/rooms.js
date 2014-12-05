Rooms = new Mongo.Collection("rooms");

Rooms.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  }
}));

