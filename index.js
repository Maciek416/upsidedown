var transformations = require('./lib/transformations');

module.exports = function(text) {
  return text.split('').reverse().map(function(ch) {
    return transformations.hasOwnProperty(ch) ? transformations[ch] : ch;
  }).join('');
};
