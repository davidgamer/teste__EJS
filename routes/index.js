var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teste Ejs Rocks...' });
});

router.get('/who/:name?', function(req,res){
  
  var name = req.params.name;
  res.send(name + ' Esteve aki');
  
  
  
});

module.exports = router;

