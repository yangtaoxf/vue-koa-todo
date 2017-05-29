/**
 * @author : Sheldon-Yee
 */
const {getUserInfo , signIn} = require('../controllers');
const router = require('koa-router')();

router.post('/user',getUserInfo)

router.post('/signin',signIn)

module.exports = router;
