const express = require('express');

const app = express();

const {  config } = require('./config/index');

app.get('/', function (req, res){
  res.send('index');
})


app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`)
});