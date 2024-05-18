const { Router } = require('express')
const routes = Router()

const userRoutes = require('./users.routes')
const movieNotesRoutes = require('./movieNotes.routes')
const sessionRoutes = require("./session.routes")


routes.use('/users', userRoutes)
routes.use('/movieNotes', movieNotesRoutes)
routes.use('/session', sessionRoutes)

module.exports = routes;