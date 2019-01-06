import { Config, Arraw } from './config';

import Engine from './engine';

import Score from './Sprite/Score';
import Ground from './Sprite/Ground';
import Food from './Sprite/Food';
import Snake from './Sprite/Snake';

import Media from './media';

class Game extends Engine {
    /**
     * Create Game
     * @param {element} container canvas element
     */
    constructor(container) {
        super(container);
        this.ground = new Ground(this.game, 0, 0);
        this.food = new Food(this.game);
        this.snake = [new Snake(this.game)];
        this.score = new Score(this.game, Config.Box * 2, Config.Box * 1.6);
        document.addEventListener('keydown', this.direction.bind(this));
    }

    /**
     * Check collision
     * @param {number} snakeX new x
     * @param {number} snakeY new y
     * @param {array} array snake array
     */
    collision(snakeX, snakeY, array) {
        for (let i = 0; i < array.length; i++) {
            if (snakeX == array[i].x && snakeY == array[i].y) {
                return true;
            }
        }
        return false;
    }

    /**
     * Keydown event handler
     * @param {object} event keydown args
     */
    direction(event) {
        const { keyCode } = event;
        if (keyCode === 37 && this.control !== Arraw.RIGHT) {
            Media.Left.play();
            this.control = Arraw.LEFT;
        } else if (keyCode === 38 && this.control !== Arraw.DOWN) {
            Media.Up.play();
            this.control = Arraw.UP;
        } else if (keyCode === 39 && this.control !== Arraw.LEFT) {
            Media.Right.play();
            this.control = Arraw.RIGHT;
        } else if (keyCode === 40 && this.control !== Arraw.UP) {
            Media.Down.play();
            this.control = Arraw.DOWN;
        }
    }

    run() {
        // Draw ground
        this.ground = new Ground(this.game, 0, 0);

        // Draw sname
        for (let i = 0; i < this.snake.length; i++) {
            this.game.fillStyle = (i === 0) ? '#0c0' : '#0f0';
            this.game.fillRect(this.snake[i].x, this.snake[i].y, Config.Box, Config.Box);
            this.game.strokeStyle = '#f00';
            this.game.strokeRect(this.snake[i].x, this.snake[i].y, Config.Box, Config.Box);
        }

        let snakeX = this.snake[0].x;
        let snakeY = this.snake[0].y;

        // Keyboad handler
        if (this.control === Arraw.LEFT) snakeX -= Config.Box;
        if (this.control === Arraw.UP) snakeY -= Config.Box;
        if (this.control === Arraw.RIGHT) snakeX += Config.Box;
        if (this.control === Arraw.DOWN) snakeY += Config.Box;

        // Check food and snake
        if (snakeX == this.food.x && snakeY == this.food.y) {
            this.score.value++;
            this.food = new Food(this.game);
            Media.Eat.play();
        } else {
            this.food = new Food(this.game, this.food.x, this.food.y);
            this.snake.pop();
        }

        // Check collision
        if (
            snakeX < Config.Box ||
            snakeX > 17 * Config.Box ||
            snakeY < 3 * Config.Box ||
            snakeY > 17 * Config.Box ||
            this.collision(snakeX, snakeY, this.snake)
        ) {
            this.stop();
        }

        // Add snake new head
        this.snake.unshift(new Snake(this.game, snakeX, snakeY));

        // Draw score
        this.score = new Score(this.game, Config.Box * 2, Config.Box * 1.6, this.score.value);
    }

    start() {
        this.timer = setInterval(this.run.bind(this), 200);
    }

    stop() {
        clearInterval(this.timer);
        Media.Dead.play();
    }
}

export default Game;