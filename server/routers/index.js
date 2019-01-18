// import Router from 'koa-router'
// import controllers from '../controllers'
const router = require('koa-router')()
const controllers = require('../controllers')

router
    .get('/', controllers.home)
    .post('/addMsg', controllers.addMsg)


module.exports = router
