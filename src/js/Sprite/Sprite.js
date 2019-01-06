class Sprite {
    /**
     * Create Sprite
     * @param {object} game target game
     * @param {number} x posotion x
     * @param {number} y position y
     */
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }
}

export default Sprite;
