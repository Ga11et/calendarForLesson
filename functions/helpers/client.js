const Client = require('pg').Client

const pool = new Client({
  // connectionString: process.env.DB_CONNECTION_STRING,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 5432,
  ssl: { rejectUnauthorized: false }
}) 
pool.connect()

module.exports = pool