const mongoose = require('mongoose')

let msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '姓名 必填项'],
        // enum:['created','success','failed'],
        validate: function (decs) {
            return decs.length <= 5
        }
    },
    phone: {
        type: String,
        required: true,
        validate: function (decs) {
            return decs.length === 11
        }
    },
    addr: {
        type: String,
        required: true,
        validate: function (decs) {
            return decs.length <= 25
        }
    },
    createTime: {
        type: String,
        required: true
    },
    valid: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Msg', msgSchema)