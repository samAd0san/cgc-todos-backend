const express = require('express');
const todosCtrl = require('../controllers/todosCtrl');

const router = express.Router();

router.post('/',todosCtrl.post);
router.get('/',todosCtrl.get);
router.get('/page/:page/size/:size',todosCtrl.get);
router.get('/:id',todosCtrl.getById);
router.delete('/:id',todosCtrl.remove);
router.put('/:id',todosCtrl.put);
router.patch('/:id',todosCtrl.patch);

module.exports = router;