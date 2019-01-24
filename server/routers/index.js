// import Router from 'koa-router'
// import controllers from '../controllers'
const router = require('koa-router')()
const controllers = require('../controllers')

router
    .post('/addMsg', controllers.addMsg)
    .post('/list', controllers.getList)
    .post('/del', controllers.del)


module.exports = router
