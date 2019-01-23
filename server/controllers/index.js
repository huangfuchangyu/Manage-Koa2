const service = require('../services')

module.exports = {
    addMsg: async (ctx) => {
        
        // let { body } = ctx.request
        console.log(ctx.request.body)
        
        let res = await service.addMsg(JSON.stringify(ctx.request.body))

        ctx.body = res
    },
    getList: async (ctx) => {
        let res = await service.getList()
        ctx.body = res
    }
}