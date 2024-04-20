const path = require('path')
const sqlite3 = require('sqlite3')

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, "src", "database", "database.db")
        },

        migrations: {
            directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
        },

        useNullAsDefault: true
    }
}