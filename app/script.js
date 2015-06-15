$('#submitWords').on('submit', function(e) { // register an event handler submits a form entry
  e.preventDefault(); // stop the page from refreshing when the form is submitted

  var adjective = $('[name=adjective]').val(); // save user-inputed adjective (from the form) into an object
  var adjPost;

  // submit user-inputed adjective (from the form) to the server using a post request
  if (adjective) {
    adjPost = {word: adjective};
    $.post('adjective', adjPost, function(response) {
      var adjectiveRes = response.msg;
      $('#adjectiveRes').text(adjectiveRes);
    });
  }
});

