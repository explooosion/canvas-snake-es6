import { Config } from './config';

const Media = {
    Dead: new Audio(`${Config.Prefix}/audio/dead.mp3`),
    Eat: new Audio(`${Config.Prefix}/audio/eat.mp3`),
    Up: new Audio(`${Config.Prefix}/audio/up.mp3`),
    Right: new Audio(`${Config.Prefix}/audio/right.mp3`),
    Left: new Audio(`${Config.Prefix}audio/left.mp3`),
    Down: new Audio(`${Config.Prefix}/audio/down.mp3`),
};

export default Media;
