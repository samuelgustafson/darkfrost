
var express = require('express');
var server = express();
var port =process.env.PORT || 8080;
var apiKey = require('./secrets').darkskyAPIKey;
var axios = require('axios');
// apiKey
// axios

server.get('/weather/:lat,:lon', function(request, response){
  var  lat = request.params.lat;
  var  lon = request.params.lon;
  var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
  axios.get(url)
  .then(function(results){
    response.send(results.data);
  })
  .catch(function(err){
    response.send(err);
  });
  });
  //go take a look at bottom of sandbox.js

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
