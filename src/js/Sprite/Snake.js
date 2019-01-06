import Sprite from './Sprite';
import { Config } from '../config';

class Snake extends Sprite {
    /**
     * Create snake
     * @param {object} game target game
     * @param {number} x position x
     * @param {number} y position y
     */
    constructor(game, x, y) {
        super(game);
        this.x = x === undefined ? 9 * Config.Box : x;
        this.y = y === undefined ? 10 * Config.Box : y;
    }
}

export default Snake;
