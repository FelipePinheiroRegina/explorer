const appError = require("../utils/appError")

class UserController{
    create(req, res){
        const { name, email, password } = req.body

        if(!name){
            throw new appError('name required')
        }

        return res.json({name, email, password})
    }
}

module.exports = UserController