var express = require('express');
var app = express();

var sequences = require('./sequences.js');

app.use('/sequences/', sequences);

/*app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});*/

 
app.listen(8000, function (){
    console.log('Express server listening on port 8000');
});