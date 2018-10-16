const express = require('express');
// const path = require('path');

const app = express();

app.use(express.static('public'));

//Setting the home route
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//Starting the server
app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
