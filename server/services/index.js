const Person = require('../models/person')

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
    }
}