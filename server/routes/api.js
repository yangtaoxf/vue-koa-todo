/**
 * author : SheldonYee
 */
const api = require('../controllers');
const router = require('koa-router')();

router.get('/todolist/:user',api.getTodoList);
router.post('/todolist',api.createTodoList);
router.delete('/todolist/:user/:content',api.removeTodoList);
router.put('/todolist/:user/:content/:status',api.updateStatus);
module.exports = router;