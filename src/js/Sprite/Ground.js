import Sprite from './Sprite';
import { Config } from '../config';

class Ground extends Sprite {
    /**
     * Create Ground
     * @param {object} game target game
     * @param {number} x positoin x
     * @param {number} y position y
     */
    constructor(game, x, y) {
        super(game, x, y);
        this.image = new Image();
        this.image.src = `${Config.Prefix}/img/ground.png`;
        this.game.drawImage(this.image, this.x, this.y);
    }
}

export default Ground;
