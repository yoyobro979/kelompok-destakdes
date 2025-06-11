var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
  title: 'Express',
  success: req.query.success || null
  });
  });
  
module.exports = router;