import starwarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';

var getRandomItem = uniqueRandomArray(starwarsNames);

export { starwarsNames as all };

export function random(num) {

  var randomItems = [];

  if (num === undefined) {
    return getRandomItem();
  }

  for (var i = 0; i < num; i++) {
    randomItems.push(getRandomItem());
  }

  return randomItems;

}
