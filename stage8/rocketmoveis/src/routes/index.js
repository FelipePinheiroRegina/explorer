const { Router } = require('express')
const userRoutes = require('./users.routes')
const movieNotesRoutes = require('./movieNotes.routes')

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/movieNotes', movieNotesRoutes)

module.exports = routes;