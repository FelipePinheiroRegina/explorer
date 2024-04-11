require('express-async-errors')
const appError = require('./utils/appError')
const migrationsRun = require('./database/sqlite/migrations')

const express = require('express')
const routes = require('./routes')

migrationsRun()

const app = express()
// When go treat data's JSON, need speak to node. syntax below
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
    if(error instanceof appError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: 'error',
        message: 'Internal error server'
    })
})

// My PORT
const PORT = 3333
app.listen(PORT, () => console.log('server is running on port', + PORT))