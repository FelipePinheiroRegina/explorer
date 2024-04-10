const appError = require('../utils/appError')

class UsersController {
    create(request, response) {
        const { name, email, pass } = request.body

        if(!name){
            throw new appError('Name is required')
        }

        response.status(201).json({name, email, pass})
    }
}

module.exports = UsersController