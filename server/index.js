const express = require("express");

const app = express();

app.get('/', (request, response) => response.sendFile( __dirname + '/index.html'));
app.post('/',function (request, response) {

    response.send('<br><br><br><br><center><h1>' + 'Your love percentage is    : ' + Math.floor(Math.random() * 100) + ' %' + '</h></center>') 
})

app.listen(8000, () => console.log("Server is running on port 800")); 