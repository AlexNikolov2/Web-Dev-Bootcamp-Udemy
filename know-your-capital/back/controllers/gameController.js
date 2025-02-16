const { Router } = require("express");
const Country = require("../models/Country");

const router = Router();

router.get("/game/learn-mode", async (req, res) => {
  const query = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const countries = await Country.findAll().populate(
    "country",
    "capital",
    "description",
    "flag",
    "population",
    "founded"
  );

  res.json(countries);
});

router.get("/game/learn-mode/:id", async (req, res) => {
  const countries = await Country.find().populate(
    "country",
    "capital",
    "description",
    "flag",
    "population",
    "founded"
  );

  res.json(countries);
});


router.get("/game/play-mode", async (req, res) => {
  const countries = await Country.findAll().populate(
    "country",
    "capital",
    "flag",
  );

  res.json(countries);

})

router.get("/game/play-mode/:id", async (req, res) => {
  const countries = await Country.findAll().populate(
    "country",
    "capital",
    "flag",
  )
})