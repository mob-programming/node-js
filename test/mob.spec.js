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
describe("The mob says", () => {
  it("simple palindromes are palindromes", () => {
    expect(mob.isPalindrome('bob')).to.be.true;
  });

  it("non-palindromes are not palindromes", () => {
    expect(mob.isPalindrome('linda')).to.be.false;
  });

  it("palindromes ignore whitespace", () => {
    expect(mob.isPalindrome('race car')).to.be.true;
  });

  it("palindromes ignore capitalization", () => {
    expect(mob.isPalindrome('RaceCar')).to.be.true;
  })

  it("palindromes ignore special characters", () => {
    expect(mob.isPalindrome('r;a?c:**e#$@c@ar👍')).to.be.true;
  })

  it("empty string is a palindrome", () => {
    expect(mob.isPalindrome('')).to.be.true;
  })
  
  it("null is not a palindrome", () => {
    expect(mob.isPalindrome(null)).to.be.false;
  })



});
 