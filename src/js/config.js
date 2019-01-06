const Config = {
    Box: 32, // pixel
    Prefix: process.env === 'development'
        ? '../assets/'
        : 'https://raw.githubusercontent.com/explooosion/canvas-snake-es6/master/docs/assets/',
};

const Arraw = {
    LEFT: 'LEFT',
    UP: 'UP',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
};

export {
    Config,
    Arraw,
};
