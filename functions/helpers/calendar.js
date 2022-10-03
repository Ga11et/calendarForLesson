const formattedReturn = require('./formattedReturn')
const pool = require('./client')

module.exports = calendarHelpers = {
  async getCalendar (event) {
    try {
      const data = await pool.query(`select * from calendar`)
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async getLessons (event) {
    
  }
}