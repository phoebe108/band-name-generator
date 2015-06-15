'use strict';

module.exports = function(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) { // check if the word exists in a property of our object
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  return {msg: 'Thanks for submitting ' + word + '!'};
};
