let jetskis = require("../jetskis");

const slugify = require("slugify");

exports.jetskiList = (request, response) => {
  response.json(jetskis);
};

exports.jetskiCreate = (req, res) => {
  const id = jetskis[jetskis.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newJetski = { id, slug, ...req.body };
  jetskis.push(newJetski);
  res.status(201).json(newJetski);
};

exports.jetskiUpdate = (req, res) => {
  const { jetskiId } = req.params;
  const foundJetski = jetskis.find((jetski) => jetski.id === +jetskiId);
  if (foundJetski) {
    for (const key in req.body) foundJetski[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "cannot find jet ski" });
  }
};

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
