const Person = require('../models/person')
const Msg = require('../models/msg')
const ResponseObj = require('../commom/response')
const ResponseCode = require('../commom/responseCode')
const ResponseText = require('../commom/responseText')

module.exports = {
    addMsg: async (obj) => {

        let obj1 = JSON.parse(obj)

        const msg = new Msg({
            name: obj1.name,
            phone: obj1.phone,
            addr: obj1.addr
        })

        let resp = {}

        try {
            let res = await msg.save()

            resp = ResponseObj(
                {
                    code: ResponseCode.SUCCESS,
                    msg: ResponseText.SUCCESS,
                    data: res,
                    success: true
                }
            )

        } catch (e) {

            console.log('AAAAAA')
            console.log(e)
            console.log('AAAAAA')

            resp = ResponseObj(
                {
                    code: ResponseCode.SERVICEERROR,
                    msg: e.name === 'ValidationError'? e.message : ResponseText.ERROR,
                    data: '',
                    success: false
                }
            )
        }

        return resp
    },
    getList: async () => {
        let resp = {}

        try {

            let res = await Msg.find()

            resp = ResponseObj(
                {
                    code: ResponseCode.SUCCESS,
                    msg: ResponseText.SUCCESS,
                    data: res,
                    success: true
                }
            )
        } catch (e) {
            resp = ResponseObj(
                {
                    code: ResponseCode.SERVICEERROR,
                    msg: ResponseText.ERROR,
                    data: '',
                    success: false
                }
            )
        }

        return resp
    }
}