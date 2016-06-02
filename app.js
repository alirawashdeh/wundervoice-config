var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = process.env.client_id || '03ffe0cac0a0401aa6673c3cf6d02ced';// Your client id
var client_secret = process.env.client_secret || 'a57c43efb9644574a96d6623fb8bfbc2'; // Your client secret
var redirect_uri = process.env.redirect_uri || 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'wunderlist_auth_state';

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/authredirect', function(req, res) {

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
