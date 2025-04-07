const { Router } = require("express");
const fs = require("fs");
const path = require("path");
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

router.get("/game/play-mode/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dataPath = path.join(__dirname, "../data/data.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    const playCountry = data.find((country) => country.id === parseInt(id));

    if (!playCountry) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json(playCountry);
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;