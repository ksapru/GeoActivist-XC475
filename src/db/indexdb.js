const pgp = require('pg-promise')()
const connectionString =
    "postgresql://postgres:1234@localhost:5432/myDB"

const db = pgp(connectString)

module.exports = db;