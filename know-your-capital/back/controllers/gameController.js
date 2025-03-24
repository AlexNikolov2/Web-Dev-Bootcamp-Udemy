const { Router } = require("express");
const Country = require("../models/Country");

const router = Router();

router.get("/game/learn-mode", async (req, res) => {
  const query = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const learnCountries = await Country.findAll().populate(
    "countries"
  );

  res.json(learnCountries);
});

router.get("/game/learn-mode/:id", async (req, res) => {
  const learnCountry = await Country.find().populate(
    "country"
  );

  res.json(learnCountry);
});


router.get("/game/play-mode", async (req, res) => {
  const playCountries = await Country.find().populate(
    "countries"
  );

  res.json(playCountries);

})

router.get("/game/play-mode/:id", async (req, res) => {
  const { id } = req.params;
  const playCountry = await Country.findById(id);

  if (!playCountry) {
    return res.status(404).json({ error: "Country not found" });
  }

  res.json(playCountry);
});

module.exports = router;