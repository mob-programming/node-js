const mob = {
  isPalindrome: function(input) {
    //clean whitespace
    input = input.replace(' ', '').toLowerCase()
    
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
