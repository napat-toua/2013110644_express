var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const { body } = require('express-validator');

router.get('/', shopController.index);

router.get('/menu', shopController.menu);

router.get('/:id', shopController.show);

router.post('/', [
    body('name').not().isEmpty().withMessage("Name can't be Empty"),
    body('location.lat').not().isEmpty().withMessage("Location: Latitude can't be Empty").isDecimal().withMessage("Location: Latitude must be Numeric"),
    body('location.lgn').not().isEmpty().withMessage("Location: Longitude can't be Empty").isDecimal().withMessage("Location: Longitude must be Numeric")
], shopController.insert);

module.exports = router;