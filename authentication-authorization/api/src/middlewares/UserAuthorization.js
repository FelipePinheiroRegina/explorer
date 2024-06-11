const AppError = require('../utils/AppError')

function UserAuthorization(roleVerify) {
    return (req, res, next) => {
        const { role } = req.user
        
        if(!roleVerify.includes(role)) {
            throw new AppError('Unauthorized', 401)
        }

        return next()
    }
}

module.exports = UserAuthorization