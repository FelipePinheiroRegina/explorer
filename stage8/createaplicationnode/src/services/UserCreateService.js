const { hash } = require('bcryptjs')
const appError = require('../utils/appError')

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    
    async execute({ name, email, password }) {
        const userExists = await this.userRepository.findByEmail(email)

        if(userExists){
            throw new appError('This e-mail already exists')
        }

        const hashPassword = await hash(password, 8)

        const userCreated = await this.userRepository.create({name, email, password: hashPassword})

        return userCreated
    }
}

module.exports = UserCreateService