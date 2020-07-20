const express = require("express");

const app = express();

let jetskis = require("./jetskis");

const cors = require("cors");

app.use(cors());

app.get("/jetskis", (request, response) => {
  response.json(jetskis);
});

app.delete("/jetskis/jetskiId", (req, res) => {
  const { jetskiId } = req.params;
  const foundJetski = jetskis.find((jetski) => jetski.id === +jetskiId);

  if (foundCookie) {
    jetskis = jetskis.filter((_jetski) => _jetski !== foundJetski);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "cannot find jet ski" });
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
