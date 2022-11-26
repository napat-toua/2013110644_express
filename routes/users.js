var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello world');
  res.status(200).json({
    fullname: 'Napat Touangam'
  })
});

router.get('/bio', function(req, res, next) {
  //res.send('Hello world');
  res.status(200).json({
    fullname: 'Napat Touangam',
    nickname: 'Yuu', 
    hobby: 'Sleep',
    gitusername: 'napat-toua'
  })
});

module.exports = router;
