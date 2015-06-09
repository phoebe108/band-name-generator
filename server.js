// making an endpoint
var express = require("express"); // the variable express is assigned a function
var app = express(); // we instanciated an express app
var port = process.env.PORT || 3000; // setting the port
// process.env = set of environment vairables on my computer. every time you start up node it copies this object in.
// when node runs, it has access to all of your environment variables

//app.listen(port, function () {
//  console.log("Let's get it started on port" + port);
//});
// Now we have a runnning server.

var stringArray = ['hello', 'goodbye', 'good afternoon', 'good morning'];


function getRandomString() {
  var arrayIndex = Math.floor((Math.random() * 4));
  return stringArray[arrayIndex];
}
// This returns text
app.get("/", function (req, res) {
  res.send(getRandomString());
});
// This returns a json object
app.get("/greetings", function (req, res) { // the "/greetings" is our new endpoint
  //res.send(getRandomString());
  res.json(getRandomString());
});

app.listen(port, function () {
  console.log("Let's get it started on port" + port);
});



