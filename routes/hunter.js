var express = require('express');
var router = express.Router();
var hunterController = require('../controller/Hunter')

/* GET users listing. */
router.get('/',hunterController.index);
router.get('/:id', hunterController.show)
router.post('/:id', hunterController.update)

module.exports = router;
