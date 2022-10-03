const formattedReturn = require('./formattedReturn')
const pool = require('./client')

module.exports = lessonsHelpers = {
  async get (event) {
    try {
      const data = await pool.query('select * from lessons order by startTime')      
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async add (event) {
    try {
      const { startTime, endTime, name, day } = JSON.parse(event.body)
      console.log(startTime, endTime, name, day)
      await pool.query(`insert into lessons (starttime, endtime, pupil_name, day) values ('${startTime}', '${endTime}', '${name}', '${day}')`)
      const data = await pool.query('select * from lessons order by startTime')      
      return formattedReturn(200, data)
    } catch (error) {
      console.log(error)
      return formattedReturn(400, 'error')
    }
  },
  async delete (event) {
    try {
      const { id } = JSON.parse(event.body)
      console.log(JSON.parse(event.body))
      await pool.query(`delete from lessons where id = ${id}`)
      const data = await pool.query('select * from lessons order by startTime')      
      return formattedReturn(200, data)
    } catch (error) {
      console.log(error)
      return formattedReturn(400, 'error')
    }
  }
}