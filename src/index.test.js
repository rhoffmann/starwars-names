import { expect } from 'chai';
import * as starWars from './index';

describe('starwars-names', () => {

  describe('all', () => {

    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain "Darth Vader"', () => {
      expect(starWars.all).to.include('Darth Vader');
    });

  });

  describe('random', () => {

    it('should return a random item from starWars.all', () => {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random numbers if passed an array', () => {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });

  });

});
