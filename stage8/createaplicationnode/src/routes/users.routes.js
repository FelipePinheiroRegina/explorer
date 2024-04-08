const { Router } = require('express')

const usersRoutes = Router()

// Route POST
usersRoutes.post('/', (req, res) => {
    const { name, email, pass } = req.body

    res.json({name, email, pass})
    // res.send(`Name: ${name} - E-mail: ${email} - Pass: ${pass}`)
})

module.exports = usersRoutes