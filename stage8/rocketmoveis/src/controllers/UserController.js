class UserController{
    create(req, res){
        const { name, email, password } = req.body

        return res.json({name, email, password})
    }
}

module.exports = UserController