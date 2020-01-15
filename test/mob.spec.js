const expect = require("chai").expect;
const mob = require("../app/mob");

/*
As a creative content writer and user,
I would like a way to submit any string and determine whether it is a palindrome.

Note: Spaces, case, and special characters should be ignored. So I would expect the following behavior:

> isPalindrome 'Race Car' 
> True

> isPalindrome 'Do pies use iPod?'
> True
*/
describe("The mob", () => {
  it("can make a test pass", () => {
    expect(mob.canMakeTestPass()).to.be.true;
  });

});
 