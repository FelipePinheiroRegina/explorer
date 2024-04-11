const appError = require('../utils/appError')
const sqliteConnection = require('../database/sqlite')


class UsersController {
    async create(request, response) {
        const { name, email, pass } = request.body

        const database=  await sqliteConnection()
       
        const userExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

        if(userExists){
            throw new appError('This e-mail already exists')
        }

        await database.run('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', [name, email, pass])

        return response.status(201).json()
    }
}

module.exports = UsersController