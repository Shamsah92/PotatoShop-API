const express = require("express");

// let jetskis = require("../jetskis");

// const slugify = require("slugify");

const {
  jetskiCreate,
  jetskiList,
  jetskiUpdate,
  jetskiDelete,
  fetchJetski,
} = require("../controller/jetskiController");

const router = express.Router();

router.get("/", jetskiList);

router.delete("/:jetskiId", jetskiDelete);

router.post("/", jetskiCreate);

router.put("/:jetskiId", jetskiUpdate);

router.param("jetskiId", async (req, res, next, jetskiId) => {
  const jetski = await fetchJetski(jetskiId, next);
  if (jetski) {
    req.jetski = jetski;
    next();
  } else {
    const err = new Error("jetski Not Found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
