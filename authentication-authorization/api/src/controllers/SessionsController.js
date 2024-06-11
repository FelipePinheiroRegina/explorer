const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const knex = require("../database/knex");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn
    });

    response.cookie('token', token, {
      httpOnly: true, // previne scripts maliciosos, como xss. o cookie só pode ser acessado através de requisições http
      sameSite: 'Strict', // o navegador enviara cookies apenas se a requisição for enviada do website que configurou este cookie
      secure: true,
      maxAge: 15 * 60 * 1000 // define o tempo de expiração do cookie
    })

    delete user.password

    response.status(201).json({ user });
  }
}

module.exports = SessionsController;