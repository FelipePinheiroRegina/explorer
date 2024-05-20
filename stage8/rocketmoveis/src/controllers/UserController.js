const appError = require("../utils/appError")
const sqliteConnection = require('../database/sqlite')
const { hash, compare } = require('bcryptjs')
const DiskStorage = require("../providers/DiskStorage")

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
        const { name, email, oldPassword, newPassword } = req.body
        const user_id = req.user.id

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

        if(oldPassword && newPassword) {
            if(!oldPassword){
                throw new appError('The oldpassword is required')
            }

            const checkedOldPassword = await compare(oldPassword, user.password)

            if(!checkedOldPassword){
                throw new appError('Oldpassword invalid')
            }

            user.password =  await hash(newPassword, 8) 
        }
        

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

    async avatar(req, res) {
        const user_id = req.user.id
        const avatarFilename = req.file.filename
        const diskStorage = new DiskStorage()
        const database = await sqliteConnection()

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [ user_id ])

        if(!user) {
            throw new appError('User not found')
        }

        if(user.avatar) {
            await diskStorage.deleteFile(user.avatar)
        }

        const fileName = await diskStorage.saveFile(avatarFilename)
        user.avatar = fileName
        
        await database.run("UPDATE users SET avatar = ? WHERE id = (?)", [user.avatar, user_id])

        return res.json(user)
    }
}

module.exports = UserController