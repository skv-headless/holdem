if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("Give cards", function(){
      before(function(done) {
        //TODO find some helper
        Meteor.users.remove({});
        Rooms.remove({});

        this.user1 = Factory.create('user');
        this.user2 = Factory.create('user');
        this.room = Factory.create('room', {owner_id: user1._id});
        Meteor.users.update({}, {$set: {'profile.room_id': room._id}},
          {multi: true}, function() {
            Meteor.call('toBlind', room);
            done();
          });
      });

      it("should give cards to players", function(){
        var room = Rooms.findOne({_id: this.room._id});
        var user1 = Meteor.users.findOne({_id: this.user1._id});
        var user2 = Meteor.users.findOne({_id: this.user2._id});
        var assert = chai.assert;

        assert.equal(Rooms.find().count(), 1, 'one room');
        assert.equal(room.state, 'blind', 'blind state');
        assert.lengthOf(room.cards, 43, 'rest deck');
        assert.lengthOf(room.communityCards, 5, 'community cards');
        assert.lengthOf(user1.profile.cards, 2, 'user cards');
        assert.lengthOf(user2.profile.cards, 2, 'user cards');
        assert.equal(room.dealer_id, user1._id, 'owner is a dealer');
        assert.equal(room.current_user_id, user2._id, 'next to dealer is current');
        assert.equal(room.bank, Room.SMALL_BLIND + Room.BLIND, 'bet blinds');
        assert.equal(user2.profile.account, User.DEFAULT_ACCOUNT - Room.BLIND, 'bet blind');
        assert.equal(user1.profile.account, User.DEFAULT_ACCOUNT - Room.SMALL_BLIND, 'bet blind');
      });

    });
  });
}

