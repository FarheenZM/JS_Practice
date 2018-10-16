npm init - installs package.json file

app.js - server file that will run

node app - runs the file

"scripts": {
  "start": "node app.js"
},
- change to this in package.json which enables to use 'npm start' command to run the file

npm install --save express
- to install Express web framework, this adds node_modules folder which has all the modules that can be used. You will also notice express is added in dependencies in package.json.

- html & css files have to be in public folder

const path = require('path');
- you don't need to install path module because its a core module of node already available.

npm install -g nodemon
- this eliminates the pain to restart the server every time you make any changes in the code. Now run the server using 'nodemon' command.
