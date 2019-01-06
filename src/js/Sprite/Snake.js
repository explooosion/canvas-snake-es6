import Sprite from './Sprite';
import { Config } from '../config';

class Snake extends Sprite {
    /**
     * Create snake
     * @param {object} game target game
     * @param {number} x position x
     * @param {number} y position y
     */
    constructor(
        game,
        x = 9 * Config.Box,
        y = 10 * Config.Box
    ) {
        super(game);
        this.x = x;
        this.y = y;
    }
}

export default Snake;
