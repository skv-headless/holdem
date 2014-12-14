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
                            {multi: true})
        Meteor.call('toBlind', room);
        done();
      });

      it("should give cards to players", function(){
        var room = Rooms.findOne({_id: this.room._id});
        var user1 = Meteor.users.findOne({_id: this.user1._id})
        var user2 = Meteor.users.findOne({_id: this.user2._id})

        chai.assert.equal(Rooms.find().count(), 1, 'not one room');
        chai.assert.equal(room.state, 'blind', 'not blind state');
        chai.assert.lengthOf(room.cards, 48, 'rest deck');
        chai.assert.lengthOf(user1.profile.cards, 2, 'user cards');
        chai.assert.lengthOf(user2.profile.cards, 2, 'user cards');
      });

    });
  });
}

