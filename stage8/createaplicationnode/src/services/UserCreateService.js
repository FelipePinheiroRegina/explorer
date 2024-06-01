const { hash } = require('bcryptjs')

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

        await this.userRepository.create({name, email, password: hashPassword})
    }
}

module.exports = UserCreateService