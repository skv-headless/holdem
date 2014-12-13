Meteor.users.allow({
  update: function (userId, user, fields, modifier) {
    if (user._id !== userId) {
      return false;
    }
    return true;
  },
  fetch: ['_id']
});

UserProfile = new SimpleSchema({
  room_id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  name: {
    type: String
  },
  account: {
    type: Number,
    defaultValue: 100
  },
  bet: {
    type: Number,
    defaultValue: 0
  },
  cards: {
    type: [Object],
    minCount: 2,
    maxCount: 2,
    optional: true
  },
  "cards.$.suit": {
    type: String,
    allowedValues: ['diams', 'hearts', 'spades', 'clubs']
  },
  "cards.$.rank": {
    type: String,
    allowedValues: ['2', '3', '4', '5', '6', '7', '8', '9', '10',
      'j', 'q', 'k', 'a']
  }
});

User = new SimpleSchema({
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    status: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(User);

