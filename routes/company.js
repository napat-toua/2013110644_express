var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')

router.get('/', companyController.index);

module.exports = router;