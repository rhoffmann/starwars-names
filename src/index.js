var starwarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

var getRandomItem = uniqueRandomArray(starwarsNames);

module.exports = {
  all: starwarsNames,
  random: random
};

function random(num) {

  var randomItems = [];

  if (num === undefined) {
    return getRandomItem();
  }

  for (var i = 0; i < num; i++) {
    randomItems.push(getRandomItem());
  }

  return randomItems;

}
