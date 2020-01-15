const mob = {
  isPalindrome: function(input) {
    input = input.replace(/\W/g, '').toLowerCase()
    return input === input.split('').reverse().join('');
  }
};

 module.exports = mob;
