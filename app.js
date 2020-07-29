const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const jetskiRoutes = require("./routes/jetskis");

const app = express();

const path = require("path");

const db = require("./db");
const { Jetski } = require("./db/models");
const jetskis = require("./jetskis");
const router = require("./routes/jetskis");
const { jetskiCreate, jetskiList } = require("./controller/jetskiController");

//

app.use(cors());
app.use(bodyParser.json());

router.get("/", jetskiList);

// app.use((req, res, next) => {
//   console.log("another middleware method");
//   next();
// });

console.log("hii", path.join(__dirname, "media"));

// router.post("/", jetskiCreate);

app.use("/jetskis", jetskiRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use((req, res, next) => {
  // res.status(404).json({ message: "Path not found" });
  const err = new Error("Path Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sync();
    // console.log("Connection to the database successful! YES YES YES");
    // const newJetski = await Jetski.create({ name: "Some jetski", price: 1200 });
    // console.log(newJetski.toJSON());
    // const jetski = await Jetski.findAll();
    // console.log("run -> jetskis", jetskis);
    // jetskis.forEach((jetski) => console.log(jetski.toJSON()));
  } catch (error) {
    console.error("run -> error ", error);
  }
};
run();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
