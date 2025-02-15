const { Router } = require("express");
const Country = require("../models/Country");

const router = Router();

router.get("/game/learn-mode", async (req, res) => {
  const countries = await Country.findAll().populate(
    "country",
    "capital",
    "description",
    "flag",
    "population",
    "founded"
  );

  res.send(countries);
});
