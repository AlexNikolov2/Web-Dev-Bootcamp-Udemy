const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  gameId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  score: {
    type: Number,
    default: 0,
  },
  timeTaken: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
