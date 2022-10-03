const formattedReturn = require('./helpers/formattedReturn')
const lessonsHelpers = require('./helpers/lessons')

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return lessonsHelpers.get(event)
  }
  if (event.httpMethod === 'POST') {
    return lessonsHelpers.add(event)
  }
  if (event.httpMethod === 'PUT') {
  }
  if (event.httpMethod === 'DELETE') {
    return lessonsHelpers.delete(event)
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