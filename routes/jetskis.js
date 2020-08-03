const express = require("express");

const upload = require("../middleware/multer");

// let jetskis = require("../jetskis");

// const slugify = require("slugify");

const {
  jetskiList,
  jetskiUpdate,
  jetskiDelete,
  fetchJetski,
} = require("../controller/jetskiController");

const router = express.Router();

router.get("/", jetskiList);

router.delete("/:jetskiId", jetskiDelete);

router.put("/:jetskiId", upload.single("image"), jetskiUpdate);

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
