var expect    = require("chai").expect;
var mob = require("../app/mob");

describe("The mob", function(){

    describe("mobTest", function(){
        it("makes this test pass", function() {
            var actual = mob.mobTest();
            expect(actual).to.be.true;
            

        });
    });

});

