let jetskis = require("../jetskis");

const slugify = require("slugify");

const { Jetski } = require("../db/models");

exports.jetskiList = async (request, response) => {
  try {
    const _jetskis = await Jetski.findAll();
    response.json(_jetskis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.jetskiCreate = async (req, res) => {
  try {
    const newJetski = await Jetski.create(req.body);
    res.status(201).json(newJetski);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // const id = jetskis[jetskis.length - 1].id + 1;
  // const slug = slugify(req.body.name, { lower: true });
  // const newJetski = { id, slug, ...req.body };
  // jetskis.push(newJetski);
};

exports.jetskiUpdate = (req, res) => {
  try{
  const { jetskiId } = req.params;
  const foundJetski = await Jetski.findByPk(jetskiId);
  if (foundJetski) {
    await foundJetski.update(req.body);
    res.status(204).end();
  }else {
    res.status(404).json({ message: "cannot find jet ski" });
  }
  }catch (error) {
    res.status(500).json({message: error.message})
  }
};


  // const foundJetski = await jetskis.find((jetski) => jetski.id === +jetskiId);
  // if (foundJetski) {
  //   for (const key in req.body) foundJetski[key] = req.body[key];
  //   res.status(204).end();
  // } else {
  //   res.status(404).json({ message: "cannot find jet ski" });
//   }
// };

exports.jetskiDelete = (req, res) => {
  const { jetskiId } = req.params;
  const foundJetski = jetskis.find((jetski) => jetski.id === +jetskiId);

  if (foundJetski) {
    jetskis = jetskis.filter((_jetski) => _jetski !== foundJetski);
    console.log(jetskis);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "cannot find jet ski" });
  }
};
