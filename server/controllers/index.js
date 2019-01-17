const service = require('../services')

module.exports = {
    home: async (ctx) => {
        
        let res = await service.test()

        ctx.body = res
    }
}