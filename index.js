require('dotenv').config();
const express = require("express");
const app = express(); // app is most important thing
const port = 5000;


app.get("/", (request, response) => {
  response.send("Hello World!!");
});

app.get("/twitter", (request, response) => {
  response.send("<h1>Welcome to twitter</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${port}`);
});
