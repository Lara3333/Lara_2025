// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';

class GameLevelSquares {
  constructor(path) {
    this.objects = [
      { class: Background, data: {} },
      { class: PlayerTwo },
      { class: PlayerOne },
    ];
  }

  // Add any methods to manipulate the game level data here
}

export default GameLevelSquares;