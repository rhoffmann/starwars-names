'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.random = random;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _starwarsNamesJson = require('./starwars-names.json');

var _starwarsNamesJson2 = _interopRequireDefault(_starwarsNamesJson);

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

exports.all = _starwarsNamesJson2['default'];

var getRandomItem = (0, _uniqueRandomArray2['default'])(_starwarsNamesJson2['default']);

// module.exports = {
//   all: starwarsNames,
//   random: random
// };

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
