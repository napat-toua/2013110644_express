var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.index);

router.get('/menu', shopController.menu);


module.exports = router;