const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")
const  knex = require("../database/knex")
const { compare } = require("bcryptjs")
const appError = require("../utils/appError")

class SessionController {
    async create(req, res) {
        const { email, password } = req.body 

        const [ user ] = await knex("users").where('email',email)
        
        if(!user) {
            throw new appError('Unable find user!')
        }

        const checkPassword = await compare(password, user.password)

        if(!checkPassword) {
            throw new appError('Password invalid')
        }
        
        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })
        
        return res.status(201).json({user, token})
    }
}

module.exports = SessionController