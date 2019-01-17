// import Router from 'koa-router'
// import controllers from '../controllers'
const router = require('koa-router')()
const controllers = require('../controllers')

router
    .get('/', controllers.home)


module.exports = router
