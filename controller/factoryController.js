// let jetskis = require("../jetskis");

// const slugify = require("slugify");

const { Factory, Jetski } = require("../db/models");

exports.factoryList = async (req, res, next) => {
  try {
    const factoies = await Factory.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Jetski,
        as: "jetskis",
        attributes: ["id"],
      },
    });
    res.json(factories);
  } catch (error) {
    next(error);
  }
};

exports.factoryCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    req.body.factoryId = req.factory.id;
    const newJetski = await Jetski.create(req.body);
    res.status(201).json(newFactory);
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
  // const id = jetskis[jetskis.length - 1].id + 1;
  // const slug = slugify(req.body.name, { lower: true });
  // const newJetski = { id, slug, ...req.body };
  // jetskis.push(newJetski);
};

exports.factoryUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    await req.factory.update(req.body);
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

exports.factoryDelete = async (req, res, next) => {
  try {
    await req.factory.destroy();
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

exports.fetchFactory = async (factoryId, next) => {
  try {
    const factory = await Factory.findByPk(factoryId);
    return factory;
  } catch (error) {
    next(error);
  }
};

exports.jetskiCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    res.status(201).json(newJetski);
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
  // const id = jetskis[jetskis.length - 1].id + 1;
  // const slug = slugify(req.body.name, { lower: true });
  // const newJetski = { id, slug, ...req.body };
  // jetskis.push(newJetski);
};
