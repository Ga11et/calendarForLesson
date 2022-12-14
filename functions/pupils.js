const pupilsHelpers = require('./helpers/pupils')
const formattedReturn = require('./helpers/formattedReturn')

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await pupilsHelpers.getPupils(event)
  }
  if (event.httpMethod === 'POST') {
    return await pupilsHelpers.post(event)
  }
  if (event.httpMethod === 'PUT') {
    return await pupilsHelpers.updateDebt(event)
  }
  if (event.httpMethod === 'DELETE') {
    return await pupilsHelpers.delete(event)
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