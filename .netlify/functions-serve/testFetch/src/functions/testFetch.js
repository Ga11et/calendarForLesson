// functions/helpers/formattedReturn.js
var formattedReturn_default = (statusCode, body) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  };
};

// functions/helpers/calendar.js
var calendarHelpers = {
  async test(event) {
    try {
      return formattedReturn_default(200, "ok");
    } catch (error) {
      return formattedReturn_default(400, "error");
    }
  }
};

// functions/testFetch.js
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return calendarHelpers.test(event);
  }
  if (event.httpMethod === "POST") {
  }
  if (event.httpMethod === "PUT") {
  }
  if (event.httpMethod === "DELETE") {
  }
  if (event.httpMethod === "OPTIONS") {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    };
    return {
      statusCode: 200,
      headers,
      body: "This was a preflight call!"
    };
  }
  return formattedReturn_default(405, { error: "worrry!!!!" });
};
//# sourceMappingURL=testFetch.js.map
