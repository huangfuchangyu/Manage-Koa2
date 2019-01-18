const mongoose = require('mongoose')

let msgSchema = new mongoose.Schema({
    name: String,
    phone: String,
    addr: String
})

module.exports = mongoose.model('Msg', msgSchema)