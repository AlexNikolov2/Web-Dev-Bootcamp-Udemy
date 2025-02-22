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
  const playCountries = await Country.findAll().populate(
    "countries"
  );

  res.json(playCountries);

})

router.get("/game/play-mode/:id", async (req, res) => {
  const playCountry = await Country.findAll().populate(
    "country"
  )

  res.json(playCountry);
})