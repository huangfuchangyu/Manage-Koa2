const Person = require('../models/person')
const Msg = require('../models/msg')
const ResponseObj = require('../commom/response')
const ResponseCode = require('../commom/responseCode')
const ResponseText = require('../commom/responseText')
const Sd = require('silly-datetime')

module.exports = {
    addMsg: async (obj) => {

        let obj1 = JSON.parse(obj)

        const msg = new Msg({
            name: obj1.name,
            phone: obj1.phone,
            addr: obj1.addr,
            createTime: Sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
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

            resp = ResponseObj(
                {
                    code: ResponseCode.SERVICEERROR,
                    msg: e.name === 'ValidationError' ? e.message : ResponseText.ERROR,
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

            let res = await Msg.find({ valid: 1 })

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
    },
    del: async (obj) => {
        let obj1 = JSON.parse(obj)
        let resp = {}

        try {

            console.log('-----入参----')
            console.log(obj1.id)

            // let res = await Msg.update({ _id: `ObjectId(${obj1.id})` }, { valid: 0 })
            let res = await Msg.updateOne({ _id: obj1.id }, { valid: 0 })

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