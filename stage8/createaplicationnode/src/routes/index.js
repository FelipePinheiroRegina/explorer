const { Router } = require('express')
const usersRoutes = require('./users.routes')
const notesRoutes = require('../routes/notes.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)

module.exports = routes