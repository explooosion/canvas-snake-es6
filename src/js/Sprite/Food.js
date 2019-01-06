import Sprite from './Sprite';
import { Config } from '../config';

class Food extends Sprite {

    /**
     * Create Food
     * @param {object} game target game
     * @param {number} x default random
     * @param {number} y default random
     */
    constructor(
        game,
        x = Math.floor(Math.random() * 17 + 1) * Config.Box,
        y = Math.floor(Math.random() * 15 + 3) * Config.Box
    ) {
        super(game, x, y);
        this.image = new Image();
        this.image.src = `${Config.Prefix}/img/food.png`;
        this.game.drawImage(this.image, this.x, this.y);
    }
}

export default Food;
