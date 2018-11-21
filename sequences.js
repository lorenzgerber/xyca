var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res){
    var fileName = __dirname + '/sequence' + req.params.id + '.html'
   res.sendFile(fileName);
});

//export this router to use in our index.js
module.exports = router;