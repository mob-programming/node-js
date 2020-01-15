const mob = {
  isPalindrome: function(input) {
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
