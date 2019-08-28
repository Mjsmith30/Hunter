var express = require('express');
var router = express.Router();
var itemController = require('../controller/items')

/* GET users listing. */
// router.post('/',itemController.create)
router.get('/', itemController.index)
router.get('/new', itemController.new)
router.post('/', itemController.create)
// router.get('/:id', itemController.show)
router.get('/:id/edit', itemController.edit)
router.post('/:id/edit', itemController.update)
router.delete('/:id', itemController.delete)
module.exports = router;