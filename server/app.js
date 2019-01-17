
// import Koa from 'koa'
const Koa = require('koa')
const routes = require('./routers/index.js')
// import routes from './routers'
const mongoose = require('mongoose')
const dbConfig = require('./dbs/config')

const app = new Koa()

// console.log('-----')
// console.log(routes)

app.use(routes.routes())

mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
})

// app.use(async(ctx)=>{
//     ctx.body = '<h1>hello bbb</h1>'
// })

app.listen(3000, () => {
    console.log('[Server] starting at port 3000')
})