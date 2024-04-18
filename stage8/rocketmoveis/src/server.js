require('express-async-errors')
const migrationRun = require('./database/sqlite/migration/index')
const express = require('express')
const routes = require("./routes")
const appError = require('./utils/appError')


const app = express()

app.use(express.json())

migrationRun()

app.use(routes)


app.use((error, request, response, next) => {
    if(error instanceof appError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.log(error)

    return response.status(500).json({
        status: 'error',
        message: 'Internal error server'
    })
})

const PORT = 3000
app.listen(PORT, console.log(`I'm listening on port ${PORT}`))