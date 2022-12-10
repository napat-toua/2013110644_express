var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

router.get('/', staffController.index);

/* http://localhost:3000/staff/63942dcdce93112134c280f8 */
router.get('/:id', staffController.show);

router.post('/', staffController.insert);

router.delete('/:id', staffController.drop);

router.put('/:id', staffController.update);

module.exports = router;