import Sprite from './Sprite';

class Score extends Sprite {
    /**
     * Create Score
     * @param {object} game target game 
     * @param {number} x position x
     * @param {number} y position y
     * @param {number} value score value, default 0
     */
    constructor(game, x, y, value = 0) {
        super(game, x, y);
        this.value = value;
        this.game.fillStyle = '#fff';
        this.game.font = '45px Changa one';
        this.game.fillText(this.value, this.x, this.y);
    }
}

export default Score;
