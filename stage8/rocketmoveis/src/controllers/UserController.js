const appError = require("../utils/appError")
const sqliteConnection = require('../database/sqlite')
const { hash } = require('bcryptjs')

class UserController{
    async create(req, res){
        const { name, email, password } = req.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new appError('E-mail already exists')
        }
        
        const hashPassword = await hash(password, 8)

        await database.run("INSERT INTO users(name, email, password) VALUES (?, ?, ?)", [name, email, hashPassword])
        
        return res.status(201).json({
            msg: 'User ' + name + ' created with success!'
        })
    }

    async update(req, res){
        const { name, email, password } = req.body
        const { id } = req.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [ id ])

        if(!user){
            throw new appError('User not found')
        }

        const userUpdate = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userUpdate && userUpdate.id !== user_id){
            throw new appError('E-mail is already in use')
        }

        user.name = name   ?? user.name
        user.email = email ?? user.email

        await database.run(`
            UPDATE users SET 
            name = ?, 
            email = ?,
            updated_at = DATETIME('now', 'localtime')
            WHERE id = (?)
            `, [user.name, user.email, id])

        return res.status(201).json({msg: `User ${user.name} updated with success!`})
    }
}

module.exports = UserController