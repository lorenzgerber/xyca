var express = require('express');
var app = express();

var sequence = require(__dirname + '/app/sequence.js');

app.use('/sequences/', sequence);

/*app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});*/

 
app.listen(8000, function (){
    console.log('Express server listening on port 8000');
});