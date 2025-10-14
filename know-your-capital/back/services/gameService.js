import Game from "../models/Game";

const gameService = {
  saveCurrentGame: async (gameData) => {
    const game = new Game(gameData);
    await game.save();
    return game;
  },

  getAllGames: async () => {
    return await Game.find();
  },

  getLatestGame: async () => {
    return await Game.findOne().sort({ createdAt: -1 });
  },
};

export default gameService;
