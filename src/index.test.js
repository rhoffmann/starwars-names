var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {

  describe('all', function() {

    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain "Darth Vader"', function() {
      expect(starWars.all).to.include('Darth Vader');
    });

  });

  describe('random', function() {

    it('should return a random item from starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random numbers if passed an array', function() {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });

  });

});
