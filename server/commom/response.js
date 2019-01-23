const respCode = require('./responseCode')

module.exports = (obj) => {
    let respObj = {
        success: false,
        data: {},
        code: respCode.SERVICEERROR,
        msg: 'response message'
    }

    return Object.assign(respObj, obj)
}