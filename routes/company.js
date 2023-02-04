var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')

router.get('/', [passportJWT.isLogin, checkAdmin.isAdmin], companyController.index);
router.get('/:id', companyController.show);
router.post('/', companyController.insert);
router.delete('/:id', companyController.drop);
router.put('/:id', companyController.update);

module.exports = router;