const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const jetskiRoutes = require("./routes/jetskis");

const app = express();

// const db = require("./db/db");

//

app.use(cors());
app.use(bodyParser.json());

app.use("/jetskis", jetskiRoutes);

const run = async () => {
  try {
    await db.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
