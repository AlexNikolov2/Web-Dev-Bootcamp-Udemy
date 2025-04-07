const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Country = require("../models/Country");

const router = Router();

router.get("/learn-mode", async (req, res) => {
  const query = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const learnCountries = await Country.findAll().populate(
    "countries"
  );

  res.json(learnCountries);
});

router.get("/learn-mode/:id", async (req, res) => {
  const learnCountry = await Country.find().populate(
    "country"
  );

  res.json(learnCountry);
});

router.get("/play-mode", async (req, res) => {
  try {
    const playCountries = await Country.find();
    if (playCountries.length === 0) {
      return res.status(404).json({ error: "No countries found" });
    }
    res.json(playCountries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/play-mode/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid country ID format" });
  }

  try {
    const playCountries = await Country.find();
    const currentIndex = playCountries.findIndex(country => country._id.toString() === id);
    if (currentIndex === -1) {
      return res.status(404).json({ error: "Country not found" });
    }

    const playCountry = playCountries[currentIndex];
    const nextCountryId = playCountries[currentIndex + 1]?._id || null;

    res.json({ ...playCountry.toObject(), nextCountryId });
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;