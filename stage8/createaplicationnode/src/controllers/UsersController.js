const appError = require('../utils/appError')
const sqliteConnection = require('../database/sqlite')
const { hash, compare } = require('bcryptjs')


class UsersController {
    async create(request, response) {
        const { name, email, pass } = request.body

        const database=  await sqliteConnection()
       
        const userExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

        if(userExists){
            throw new appError('This e-mail already exists')
        }

        const hashpassword = await hash(pass, 8)

        await database.run('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', [name, email, hashpassword])

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, oldpassword, newpassword} = request.body
        const { id } = request.params

        const database = await sqliteConnection()

        const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

        if(!user) {
            throw new appError('User not found')
        }

        const userWithUpdateEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new appError('This E-mail already exists')
        }

        user.name  = name ?? user.name
        user.email = email ?? user.email

        if(newpassword && !oldpassword){
            throw new appError('You need to enter your old password');
        }

        if(newpassword && oldpassword){
            const checkOldpassword = await compare(oldpassword, user.password)

            if(!checkOldpassword){
                throw new appError('Password invalid')
            }

            user.password = await hash(newpassword, 8)
        }
        
        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now','localtime')
            WHERE id = (?)
        `, [user.name, user.email, user.password, id])

        return response.status(200).json()
    }
}

module.exports = UsersController