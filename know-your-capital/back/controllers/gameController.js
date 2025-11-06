const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Country = require("../models/Country");
const Game = require("../models/Game");
const gameService = require("../services/gameService");

const router = Router();

// ==================== COUNTRIES ENDPOINTS ====================

router.get("/play-mode", async (req, res) => {
  try {
    const playCountries = await Country.find();
    if (playCountries.length === 0) {
      return res.status(404).json({ error: "No countries found" });
    }
    res.json(playCountries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

router.get("/games/:gameId/countries/:countryId", async (req, res) => {
  const { gameId, countryId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(countryId)) {
    return res.status(400).json({ error: "Invalid country ID format" });
  }

  try {
    const game = await Game.findOne({ gameId });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    const allCountries = await Country.find();
    if (allCountries.length === 0) {
      return res.status(404).json({ error: "No countries found" });
    }

    const currentCountry = await Country.findById(countryId);
    if (!currentCountry) {
      return res.status(404).json({ error: "Country not found" });
    }

    const currentIndex = allCountries.findIndex(
      (country) => country._id.toString() === countryId
    );

    const nextCountryId = allCountries[currentIndex + 1]?._id || null;

    res.json({ ...currentCountry.toObject(), nextCountryId });
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

// ==================== GAMES ENDPOINTS ====================

router.get("/games/top", async (req, res) => {
  try {
    const topGames = await gameService.getTopGames();
    res.status(200).json(topGames);
  } catch (error) {
    console.error("Error fetching top games:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

router.get("/games/:gameId", async (req, res) => {
  const { gameId } = req.params;

  console.log("Game ID: ", gameId);

  try {
    const game = await Game.findOne({ gameId });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json(game);
  } catch (error) {
    console.error("Error fetching game:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

router.post("/games", async (req, res) => {
  const { game } = req.body;
  try {
    console.log("Saving game with data:", game);
    const newGame = await gameService.saveCurrentGame(game);
    console.log("Game saved successfully:", newGame);
    res.status(201).json(newGame);
  } catch (error) {
    console.error("Error saving game:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

router.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const country = await Country.findOne({
      $or: [
        { country: { $regex: query, $options: "i" } },
        { capital: { $regex: query, $options: "i" } },
      ],
    });

    if (!country) {
      return res.status(404).json({ error: "Country or capital not found" });
    }

    res.json(country);
  } catch (error) {
    console.error("Error searching for country or capital:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
