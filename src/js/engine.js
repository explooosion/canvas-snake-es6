class Engine {
    /**
     * Create Engine
     * @param {element} container canvas element
     */
    constructor(container) {
        this.game = container.getContext('2d');
        this.control = '';
    }
}

export default Engine;
