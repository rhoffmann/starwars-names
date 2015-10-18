var starwarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: function() {
        return starwarsNames;
    },
    random: uniqueRandomArray(starwarsNames)
};