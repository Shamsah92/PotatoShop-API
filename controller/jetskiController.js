let jetskis = require("../jetskis");

const slugify = require("slugify");

const { Jetski, Factory } = require("../db/models");

exports.jetskiList = async (req, res, next) => {
  try {
    const _jetskis = await Jetski.findAll({
      attributes: { exclude: ["factoryId", "createdAt", "updatedAt"] },
      include: {
        model: Factory,
        as: "factory",
        attributes: ["name"],
      },
    });
    res.json(_jetskis);
  } catch (error) {
    next(error);
  }
};

exports.jetskiUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    await req.jetski.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
  // try {
  //   const { jetskiId } = req.params;
  //   const foundJetski = await fetchJetski(jetskiId, next);
  //   if (foundJetski) {
  //     await foundJetski.update(req.body);
  //     res.status(204).end();
  //   } else {
  //     // res.status(404).json({ message: "cannot find jet ski" });
  //     const err = new Error("Jetski Not Found");
  //     err.status = 404;
  //     next(err);
  //   }
  // } catch (error) {
  //   next(error);
  // }
};

// const foundJetski = await jetskis.find((jetski) => jetski.id === +jetskiId);
// if (foundJetski) {
//   for (const key in req.body) foundJetski[key] = req.body[key];
//   res.status(204).end();
// } else {
//   res.status(404).json({ message: "cannot find jet ski" });
//   }
// };

exports.jetskiDelete = async (req, res, next) => {
  try {
    await req.jetski.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
  // try {
  //   const { jetskiId } = req.params;
  //   const foundJetski = await Jetski.findByPk(jetskiId);
  //   if (foundJetski) {
  //     await foundJetski.destroy();
  //     res.status(204).end();
  //   } else {
  //     // res.status(404).json({ message: "cannot find jet ski" });
  //     const err = new Error("Jetski Not Found");
  //     err.status = 404;
  //     next(err);
  //   }
  // } catch (error) {
  //   next(error);
  // }
};

exports.fetchJetski = async (jetskiId, next) => {
  try {
    const jetski = await Jetski.findByPk(jetskiId);
    return jetski;
  } catch (error) {
    next(error);
  }
};
