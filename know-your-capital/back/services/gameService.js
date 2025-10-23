const Game = require("../models/Game");
const { generateGameId } = require("../utils/idGenerator");

const gameService = {
  saveCurrentGame: async (gameData) => {
    // Generate unique gameId if not provided
    const gameWithId = {
      ...gameData,
      gameId: gameData.gameId || generateGameId(),
    };
    const game = new Game(gameWithId);
    await game.save();
    return game;
  },

  getAllGames: async () => {
    return await Game.find();
  },

  getLatestGame: async () => {
    return await Game.findOne().sort({ createdAt: -1 });
  },

  createGame: async (gameData) => {
    const game = new Game({
      gameId: generateGameId(),
      ...gameData,
    });
    await game.save();
    return game;
  },

  getGameById: async (gameId) => {
    return await Game.findOne({ gameId });
  },

  updateGame: async (gameId, updateData) => {
    return await Game.findOneAndUpdate({ gameId }, updateData, { new: true });
  },
};

module.exports = gameService;
