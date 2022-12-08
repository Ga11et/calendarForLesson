const formattedReturn = require('./formattedReturn')
const pool = require('./client')

module.exports = logsHelpers = {
  async get (event) {
    try {
      const data = await pool.query(`select * from logs`)
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async delete (event) {
    try {
      await pool.query(`truncate table logs`)

      const data = await pool.query(`select * from logs`)
      return formattedReturn(200, data)
    } catch (error) {
      console.log(error)
      return formattedReturn(400, 'error')
    }
  }
}