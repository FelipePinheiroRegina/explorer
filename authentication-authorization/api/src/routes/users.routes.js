const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UsersController = require("../controllers/UsersController");
const UsersUpdatedController = require("../controllers/UsersUpdatedController");

const usersRoutes = Router();

const usersController = new UsersController();
const usersUpdatedController = new UsersUpdatedController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersUpdatedController.index);

module.exports = usersRoutes;