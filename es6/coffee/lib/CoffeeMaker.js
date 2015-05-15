var Grinder = require('./Grinder');

class CoffeeMaker {

    static inject() {
        return [Grinder];
    }

    constructor(grinder) {
        this.grinder = grinder;
    }

    brew() {
        this.grinder.grind();
        console.log('brewing...');
    }
}

module.exports = CoffeeMaker;