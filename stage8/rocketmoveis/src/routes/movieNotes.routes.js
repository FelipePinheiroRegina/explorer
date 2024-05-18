const { Router } = require('express')
const movieNotesRoutes = Router()

const MovieNotesController = require('../controllers/MovieNotesController')
const movieNotesController = new MovieNotesController()

const ensureAuth = require("../middlewares/ensureAuth")
movieNotesRoutes.use(ensureAuth)

movieNotesRoutes.post('/', movieNotesController.create)

movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.get('/', movieNotesController.index)

movieNotesRoutes.delete('/:id', movieNotesController.delete)

module.exports = movieNotesRoutes