const Client = require('pg').Client

const pool = new Client({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
pool.connect()

module.exports = pool