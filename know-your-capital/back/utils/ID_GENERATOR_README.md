# Game ID Generator Documentation

## Overview

The Game ID generator provides multiple strategies for generating unique IDs for game records.

## Implemented Strategies

### 1. **generateGameId()** - UUID v4 (Recommended)

- **Format**: `GAME_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- **Example**: `GAME_550e8400-e29b-41d4-a716-446655440000`
- **Length**: 41 characters
- **Pros**:
  - Guaranteed globally unique
  - Industry standard
  - Works in distributed systems
  - Cryptographically random
- **Cons**:
  - Longer string
  - Less human-readable

### 2. **generateShortGameId()** - Timestamp + Random

- **Format**: `GAME_[timestamp]_[random]`
- **Example**: `GAME_1697836800_ABC123`
- **Length**: 23 characters
- **Pros**:
  - Shorter than UUID
  - Time-sortable (can determine generation order)
  - Good balance between uniqueness and readability
- **Cons**:
  - Less collision-proof than UUID (though still very safe)
  - Timestamp resolution is 1 second

### 3. **generateNanoId()** - Nano ID Style

- **Format**: `GAME_[12 random chars]`
- **Example**: `GAME_V1StGXR_Z5j3`
- **Length**: 17 characters
- **Pros**:
  - Very short and URL-friendly
  - Good for APIs
  - Fast generation
- **Cons**:
  - Requires custom implementation

## Usage Examples

```javascript
const {
  generateGameId,
  generateShortGameId,
  generateNanoId,
} = require("../utils/idGenerator");

// Using UUID (default in gameService)
const game1 = await gameService.createGame({
  userId: "user123",
  score: 100,
  timeTaken: 300,
});
// game1.gameId = "GAME_550e8400-e29b-41d4-a716-446655440000"

// Using short ID
const game2 = await gameService.saveCurrentGame({
  userId: "user456",
  score: 85,
  timeTaken: 450,
  gameId: generateShortGameId(),
});
// game2.gameId = "GAME_1697836800_ABC123"
```

## Database Requirements

The Game model already has:

```javascript
gameId: {
  type: String,
  required: true,
  unique: true,  // MongoDB ensures uniqueness
}
```

The `unique: true` constraint ensures that no two games can have the same ID.

## Which Strategy to Use?

- **Use `generateGameId()` if**: You need guaranteed uniqueness across all systems (default)
- **Use `generateShortGameId()` if**: You want shorter IDs that are also time-sortable
- **Use `generateNanoId()` if**: You need the shortest possible IDs for URLs/APIs

## Switching Strategies

To switch to a different strategy, simply change the import in `gameService.js`:

```javascript
// Change from this:
const { generateGameId } = require("../utils/idGenerator");

// To this:
const { generateShortGameId } = require("../utils/idGenerator");

// Then use it:
gameId: generateShortGameId();
```

## Testing

```javascript
// Generate 5 unique IDs
const ids = new Set();
for (let i = 0; i < 5; i++) {
  ids.add(generateGameId());
}
console.log(ids.size === 5); // Should be true (all unique)
```
