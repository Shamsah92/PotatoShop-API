const express = require("express");

const app = express();

const jetskis = require("./jetskis");

const cors = require("cors");

app.use(cors());

app.get("/jetskis", (request, response) => {
  response.json(jetskis);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
