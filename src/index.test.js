var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function () {
  it('should work', function() {
    expect(true).to.be.true;
  });

  it('should have a getAll method', function() {
    expect(starWars.getAll).to.be.defined;
  });

  it('should have the correct length', function() {
    expect(starWars.getAll()).to.have.length(93);
  });

  it('should contain darth vader', function() {
    expect(starWars.getAll()).to.include('Darth Vader');
  });
});
