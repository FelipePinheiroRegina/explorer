const express = require('express')
const routes = require('./routes')

const app = express()
// When go treat data's JSON, need speak to node. syntax below
app.use(express.json())

app.use(routes)

// My PORT
const PORT = 3333
app.listen(PORT, () => console.log('server is running on port', + PORT))