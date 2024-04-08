const express = require('express');

const app = express();

// Route Params, are required
app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;
    
    response.send(`User id: ${id}, User name: ${user}`)
})

// Query Params, are optional
app.get('/users', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Page: ${page}, Limit: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log('server is running on port', + PORT))