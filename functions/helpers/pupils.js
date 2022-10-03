const pool = require('./client')
const formattedReturn = require('./formattedReturn')

module.exports = pupilsHelpers = {
  async getPupils (event) {
    try {
      const data = await pool.query(`select * from pupils order by id`)

      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async updateDebt (event) {
    try {
      const { id, newDebt } = JSON.parse(event.body)
      await pool.query(`update pupils set debt = ${newDebt} where id = ${id}`)
      const data = await pool.query('select * from pupils order by id')
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async post (event) {
    try {
      const { name, price } = JSON.parse(event.body)
      await pool.query(`insert into pupils (name, price, debt) values ('${name}', ${price}, 0)`)
      const data = await pool.query('select * from pupils order by id')
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  },
  async delete (event) {
    try {
      const { id } = JSON.parse(event.body)
      await pool.query(`delete from pupils where id = ${id}`)
      const data = await pool.query('select * from pupils order by id')
      return formattedReturn(200, data)
    } catch (error) {
      return formattedReturn(400, 'error')
    }
  }
}