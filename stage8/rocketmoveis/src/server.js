require('express-async-errors')
const migrationRun = require('./database/sqlite/migration/index')
const express = require('express')
const routes = require("./routes")
const appError = require('./utils/appError')
const uploadConfig = require("./configs/upload")
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())
app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

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