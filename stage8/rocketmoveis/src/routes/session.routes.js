const { Router } = require("express")
const SessionRoutes = Router()

const SessionController = require("../controllers/SessionController")
const sessionController = new SessionController()

SessionRoutes.post('/', sessionController.create)

module.exports = SessionRoutes