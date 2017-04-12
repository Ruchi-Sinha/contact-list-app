const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api.js');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/contactlist');
mongoose.Promise = global.Promise;
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use('/api',routes);

//Error handler
app.use(function(err, req, res, next){
  res.status(422).send({error: err.msg});
})

app.listen(4000, function(){
  console.log('listening to port 4000');
});
