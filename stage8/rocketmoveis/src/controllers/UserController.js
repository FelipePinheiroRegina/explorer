const appError = require("../utils/appError")
const sqliteConnection = require('../database/sqlite')
const { hash, compare } = require('bcryptjs')

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
        const { name, email, oldpassword, newpassword } = req.body
        const { user_id } = req.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [ user_id ])

        if(!user){
            throw new appError('User not found')
        }

        const userUpdate = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userUpdate && userUpdate.id !== user.id){
            throw new appError('E-mail is already in use')
        }

        user.name = name   ?? user.name
        user.email = email ?? user.email

        if(!oldpassword){
            throw new appError('The oldpassword is required')
        }

        const checkedOldPassword = await compare(oldpassword, user.password)

        if(!checkedOldPassword){
            throw new appError('Oldpassword invalid')
        }

        user.password =  await hash(newpassword, 8) 

        await database.run(`
            UPDATE users SET 
            name = ?, 
            email = ?,
            password = ?,
            updated_at = DATETIME('now', 'localtime')
            WHERE id = (?)
            `, [user.name, user.email, user.password, user_id])

        return res.status(201).json({msg: `User ${user.name} updated with success!`})
    }
}

module.exports = UserController