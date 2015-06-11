var express = require('express'); // create pointer to express library, and return module.exports value
var app = express(); // store and return an application object (server)
var port = process.env.PORT || 3000; // add port to listen on

app.use(express.static(__dirname + '/app/')); // tell express to serve files from the 'app' directory

// response to a get request in the following way
app.get('/', function (req, res) {
  res.sendFile('/app/index.html');
});

// start a server on local machine at port 3000
app.listen(port, function () {
  console.log('server started on port ' + port);
})

var adjectives = ['funny', 'fuzzy', 'hungry', 'charming'];

var adj = {
  word: adjectives[Math.floor(Math.random() * adjectives.length)]
};

app.get('/adjective', function (req, res) {
  res.json(adj); // returns a key-value pairing
});
