var express = require('express');
var router = express.Router();
var hunterController = require('../controller/Hunter')

/* GET users listing. */
router.get('/',hunterController.index);

module.exports = router;
