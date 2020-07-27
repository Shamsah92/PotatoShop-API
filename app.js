const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const jetskiRoutes = require("./routes/jetskis");

const app = express();

const db = require("./db");
const { Jetski } = require("./db/models");

//

app.use(cors());
app.use(bodyParser.json());

app.use("/jetskis", jetskiRoutes);

const run = async () => {
  try {
    await db.sync();
    console.log("Connection to the database successful! YES YES YES");
    // const newJetski = await Jetski.create({ name: "Some jetski", price: 1200 });
    // console.log(newJetski.toJSON());
    const jetski = await Jetski.findAll();
    jetskis.forEach((jetski) => console.log(jetski.toJSON()));
  } catch (error) {
    console.error("run -> error ", error);
  }
};
run();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
