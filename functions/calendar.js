const formattedReturn = require('./helpers/formattedReturn')
const calendarHelpers = require('./helpers/calendar')

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return calendarHelpers.getCalendar(event)
  }
  if (event.httpMethod === 'POST') {
  }
  if (event.httpMethod === 'PUT') {
  }
  if (event.httpMethod === 'DELETE') {
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