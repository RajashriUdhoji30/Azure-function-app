const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Happy Friday!");
});

app.listen(3000);