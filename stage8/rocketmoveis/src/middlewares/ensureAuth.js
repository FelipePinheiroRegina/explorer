const appError = require("../utils/appError")
const { verify } = require('jsonwebtoken')
const authConfig = require("../configs/auth")

function ensureAuth(req, res, next) {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        throw new appError('JWT not informed')
    }

    const [, token ] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret)

        req.user = { id: Number(user_id)}

        return next()
    } catch {
        throw new appError("JWT invalid")
    }  
}

module.exports = ensureAuth