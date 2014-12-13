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
    }
});

Meteor.users.attachSchema(User);

