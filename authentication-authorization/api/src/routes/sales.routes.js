const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UserAuthorization = require("../middlewares/UserAuthorization")

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(UserAuthorization(["admin", "sale"]))

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;