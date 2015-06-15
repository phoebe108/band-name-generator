'use strict';

$(function() {

  $('#submitWords').on('submit', function(e) { // register an event handler submits a form entry
    e.preventDefault(); // stop the page from refreshing when the form is submitted

    var adjective = $('input[name=adjective]').val(); // save user-inputed adjective (from the form) into an object
    var noun = $('input[name=noun]').val();
    var verb = $('input[name=verb]').val();

    var adjPost;
    var nounPost;
    var verbPost;

    if (adjective) {
      adjPost = {word: adjective}; // save adjective as value of word property
      $.post('adjective', adjPost, function(response) {   // submit user-inputed adjective (from the form) to the server using a post request
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes); // insert the message generated from the server response in the selected element
        console.log(noun);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }
  });

  $('#generateButton').click(function() {
    var result = $('#bandNameResult');

    $.get('/adjective', function(response) {
      result.text(response.word);
    });

    $.get('/noun', function(response) {
      result.append(' ' + response.word);
    });

    $.get('/verb', function(response) {
      result.append(' ' + response.word);
    });
  });
});

