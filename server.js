const express = require('express');

const app = express();


//Setting the home route
app.get('/', function(req, res){
  const customers = [{first: 'Jane', last: 'Doe'},
  {first: 'Rita', last: 'Jain'},
  {first: 'George', last: 'Smith'}];
  res.json(customers);
});

//Starting the server
app.listen(5000, function(){
  console.log('Server is running on port 5000');
});
