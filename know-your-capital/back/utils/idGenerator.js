/**
 * Generates a unique game ID using UUID v4
 * @returns {Promise<string>} A unique game ID in format: GAME_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
const generateGameId = async () => {
  const { v4: uuidv4 } = await import("uuid");
  return `GAME_${uuidv4()}`;
};

/**
 * Generates a short unique ID using timestamp and random characters
 * Format: GAME_1697836800_ABC123
 * @returns {string} A short unique game ID
 */
const generateShortGameId = () => {
  const timestamp = Math.floor(Date.now() / 1000);
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `GAME_${timestamp}_${randomPart}`;
};

/**
 * Generates a nanoid style unique ID (shorter and URL-friendly)
 * Requires: npm install nanoid
 * @returns {string} A URL-friendly unique game ID
 */
const generateNanoId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "GAME_";
  for (let i = 0; i < 12; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};

module.exports = {
  generateGameId, // UUID based (Recommended - guaranteed unique across all systems)
  generateShortGameId, // Timestamp + random (Shorter, good for most use cases)
  generateNanoId, // Custom nanoid style (Very short, URL-friendly)
};
