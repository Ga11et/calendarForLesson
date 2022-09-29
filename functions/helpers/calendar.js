const formattedReturn = require('./formattedReturn')
const Client = require('pg').Client

module.exports = calendarHelpers = {
  async test (event) {
    try {
      const pool = new Client({
        connectionString: process.env.DB_CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
      })


      await pool.connect()
      const data = await pool.query('SELECT * FROM tabledata')

      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  }
}