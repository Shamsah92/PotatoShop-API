const express = require("express");

const upload = require("../middleware/multer");

// let factorys = require("../jetskis");

// const slugify = require("slugify");

const {
  factoryCreate,
  factoryList,
  factoryUpdate,
  factoryDelete,
  fetchFactory,
  jetskiCreate,
} = require("../controller/factoryController");
const passport = require("passport");

const router = express.Router();

router.get("/", factoryList);

router.delete("/:factoryId", factoryDelete);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  factoryCreate
);

router.put("/:factoryId", upload.single("image"), factoryUpdate);

router.param("factoryId", async (req, res, next, factoryId) => {
  const factory = await fetchFactory(factoryId, next);
  if (factory) {
    req.factory = factory;
    next();
  } else {
    const err = new Error("factory Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/:factoryId/jetskis", upload.single("image"), jetskiCreate);

module.exports = router;
