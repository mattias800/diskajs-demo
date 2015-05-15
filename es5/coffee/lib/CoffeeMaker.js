var Grinder = require('./Grinder');

function CoffeeMaker(grinder) {

    this.grinder = grinder;
    this.brew = function() {
        this.grinder.grind();
        console.log('brewing...');
    }
}


CoffeeMaker.inject = function() {
    return [Grinder];
};

module.exports = CoffeeMaker;
