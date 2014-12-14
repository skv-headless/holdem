if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("Give cards", function(){
      before(function(done) {
        //TODO find some helper
        Meteor.users.remove({});
        Rooms.remove({});

        var user1 = Factory.create('user');
        var user2 = Factory.create('user');
        var room = Factory.create('room', {owner_id: user1._id});
        Meteor.call('toBlind', room);
        done();
      });

      it("should give cards to players", function(){
        var room = Rooms.findOne();
        chai.assert.equal(Rooms.find().count(), 1, 'not one room');
        chai.assert.equal(room.state, 'blind', 'not blind state');
      });

    });
  });
}

