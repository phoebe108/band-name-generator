'use strict';

module.exports = function (object) {
  var propArray = Object.keys(object); // get an array of the object's keys
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)]; // get a property (word) at a random index
  return {word: randomProp};
};
