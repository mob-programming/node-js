var expect = require("chai").expect;
var mob = require("../app/mob");

describe("The mob", () => {
  it("can make a test pass", () => {
    expect(mob.canMakeTestPass()).to.be.true;
  });
});
