const express = require("express");

const app = express();

app.get('/', (request, response) => response.sendFile( __dirname + '/index.html')); // if the server gets a get request on the root folder then send index.html to the client
app.post('/',function (request, response) {
   response.send('<br><br><br><br><center><h1>' + 'Your love percentage is    : ' + Math.floor(Math.random()* 100) + ' %' + '</h></center>')
}) // if the server gets post request on the root folder from the client then send him the result


app.listen(8000, () => console.log("Server is running on port 800")); 