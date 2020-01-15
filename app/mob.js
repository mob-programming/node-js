const mob = {
  isPalindrome: function(input) {
    //clean whitespace
    input = input.replace(' ', '').toLowerCase()
    input = input.replace(/\W/g, '')
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
