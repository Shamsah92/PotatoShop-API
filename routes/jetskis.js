const express = require("express");

// let jetskis = require("../jetskis");

// const slugify = require("slugify");

const {
  jetskiCreate,
  jetskiList,
  jetskiUpdate,
  jetskiDelete,
} = require("../controller/jetskiController");

const router = express.Router();

router.get("/", jetskiList);

router.delete("/:jetskiId", jetskiDelete);

router.post("/", jetskiCreate);

router.put("/:jetskiId", jetskiUpdate);

module.exports = router;
