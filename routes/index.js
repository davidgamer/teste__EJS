var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teste Ejs Rocks...',
  users:0
  
  });
});

module.exports = router;

