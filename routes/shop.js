var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.index);

module.exports = router;