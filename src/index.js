import './scss/main.scss';

import Game from './js/game';

const container = document.getElementById('snake');
const game = new Game(container);

game.start();
