const Game = require("../models/Game");
const { generateGameId } = require("../utils/idGenerator");

const gameService = {
  createGame: async (gameData) => {
    const gameWithId = {
      ...gameData,
      gameId: gameData.gameId || (await generateGameId()),
    };
    const game = new Game(gameWithId);
    await game.save();
    return game;
  },

  saveCurrentGame: async (gameData) => {
    if (gameData.gameId) {
      return await Game.findOneAndUpdate(
        { gameId: gameData.gameId },
        gameData,
        { new: true }
      );
    } else {
      const gameWithId = {
        ...gameData,
        gameId: await generateGameId(),
      };
      const game = new Game(gameWithId);
      await game.save();
      return game;
    }
  },

  getAllGames: async () => {
    return await Game.find();
  },

  getLatestGameByUserId: async (userId) => {
    return await Game.findOne({ userId }).sort({ date: -1 });
  },

  getGameById: async (gameId) => {
    return await Game.findOne({ gameId });
  },

  updateGame: async (gameId, updateData) => {
    return await Game.findOneAndUpdate({ gameId }, updateData, { new: true });
  },
};

module.exports = gameService;
