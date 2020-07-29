const express = require("express");

const multer = require("multer");

// let jetskis = require("../jetskis");

// const slugify = require("slugify");

const {
  jetskiCreate,
  jetskiList,
  jetskiUpdate,
  jetskiDelete,
  fetchJetski,
} = require("../controller/jetskiController");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

const router = express.Router();

router.get("/", jetskiList);

router.delete("/:jetskiId", jetskiDelete);

router.post("/", upload.single("image"), jetskiCreate);

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
