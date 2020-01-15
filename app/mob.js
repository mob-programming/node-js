const mob = {
  isPalindrome: function(input) {
    if (input === null) {
      return false;
    }
    input = input.replace(/\W/g, '').toLowerCase()
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
