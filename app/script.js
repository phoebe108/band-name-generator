
$('#adjective').click(function () { // register an event handler
  $.get('http://localhost:3000/adjective', function (data) { // Ajax get request accessing the endpoint
    $('#ajax-text').text(data.word); // add requested data to element
    });
  });


