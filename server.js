'use strict';

var express = require('express'); // create pointer to express library, and return module.exports value
var app = express(); // store and return an application object (server)
var port = process.env.PORT || 3000; // add port to listen on
var bodyparser = require('body-parser');

var getRandomWord = require('./lib/getRandomWord.js');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var postWord = require('./lib/postWord.js');

var adjective = new Adjective(); // create new instance object of Adjective class
var noun = new Noun(); // create new instance object of Noun class
var verb = new Verb(); // create new instance object of Verb class

app.use(bodyparser.json()); // use the bodyparser module
app.use(bodyparser.urlencoded({extended: true})); // give bodyparser module some settings
app.use(express.static(__dirname + '/app/')); // tell express to serve files from the 'app' directory

// the response to a get request
app.get('/', function (req, res) {
  res.sendFile('/app/index.html');
});

// responds to the client with a random adjective in json format (a get route)
app.get('/adjective', function (req, res) {
  res.json(getRandomWord(adjective));
});

// create a post route for adjectives: run the postWord function using the adjective sent from the client and the adjective object
app.post('/adjective', function (req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

// responds to the client with a random noun in json format (a get route)
app.get('/noun', function (req, res) {
  res.json(getRandomWord(noun));
});

// create a post route for nouns: run the postWord function using the noun sent from the client and the noun object
app.post('/noun', function (req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

// responds to the client with a random verb in json format (a get route)
app.get('/verb', function (req, res) {
  res.json(getRandomWord(verb));
});

// create a post route for verbs: run the postWord function using the verb sent from the client and the verb object
app.post('/verb', function (req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});

// start a server on local machine at port 3000
app.listen(port, function () {
  console.log('server started on port ' + port);
});
