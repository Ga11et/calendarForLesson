const calendarHelpers = require('./helpers/calendar')
const formattedReturn = require('./helpers/formattedReturn')

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await calendarHelpers.getPupils(event)
  }
  if (event.httpMethod === 'POST') {
    return await calendarHelpers.post(event)
  }
  if (event.httpMethod === 'PUT') {
    return await calendarHelpers.updateDebt(event)
  }
  if (event.httpMethod === 'DELETE') {
    return await calendarHelpers.delete(event)
  }
  if (event.httpMethod === 'OPTIONS') {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };
    return {
      statusCode: 200,
      headers,
      body: 'This was a preflight call!'
    };
  }
  return formattedReturn(405, { error: 'worrry!!!!' });
};