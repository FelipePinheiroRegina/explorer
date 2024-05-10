const { Router } = require('express')
const usersRoutes = Router()

const UsersController = require('../controllers/UsersController')
const usersController = new UsersController()

const ensureAuth = require('../middlewares/ensureAuth')

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuth, usersController.update)

module.exports = usersRoutes