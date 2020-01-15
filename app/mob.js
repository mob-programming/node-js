const mob = {
  isPalindrome: function(input) {
    //clean whitespace
    input = input.replace(' ', '')
    
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
