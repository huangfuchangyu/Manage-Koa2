const Person = require('../models/person')
const Msg = require('../models/msg')

module.exports = {
    test: async () => {
        // ctx.body = '<h1>hello tttt</h1>'
        
        const person = new Person({
            name: '哈哈哈',
            age: 18
        })
        
        try {
            await person.save()
            code = 20022
        } catch (e) {
            code = -1
        }

        return {
            code
        }
    },
    addMsg: async (obj) => {

        let obj1 = JSON.parse(obj)

        console.log('-------')
        console.log(obj1.name)
        console.log(obj1.phone)
        console.log(obj1.addr)
        
        const msg = new Msg({
            name: obj1.name,
            phone: obj1.phone,
            addr: obj1.addr
        })

        try {
            let res = await msg.save()

            code = res.id? 200 : -1
        } catch (e) {
            code = -1
        }

        return {
            code
        }
    }
}