// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/
app.get("/status-info",(req,res)=>{
  const code = req.query.code
  const codes = {
    200:"OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: " the request was successfully fulfilled and resulted in one or possibly multiple new resources being created.",
    204:"the server has successfully fulfilled the request, there is no available content for this request. But the user agent might want to update its currently cached headers for this resource, for the new one. ",
    404:"Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    500:"Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    400:"Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401:"the request has not been applied because the server requires user authentication.",
    403:"the client request has been rejected because the client does not have rights to access the content. Unlike a 401 error, the client's identity is known to the server, but since they are not authorized to view the content, giving the proper response is rejected by the server.",
    405:"the server knows the request method, the method has been disabled and can not be used.",
    429:"in the given time, the user has sent too many requests.",
    502:"the server received an invalid response while working as a gateway to handle the response.",
    503:"the server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.",
    504:"the server acting as a gateway could not get a response time."
  }
  const check = res.json({
    "status": code,
    "message": codes[code]
  })
  res.send(check)
})
 


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});