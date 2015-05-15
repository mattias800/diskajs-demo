var Injector = require('diskajs').Injector;
var Module = require('diskajs').Module;

var Grinder = require('./lib/Grinder');
var CoffeeMaker = require('./lib/CoffeeMaker');

class CoffeeApp {
    constructor() {
        var module = new Module();
        module.bind(Grinder).to(Grinder);
        module.bind(CoffeeMaker).to(CoffeeMaker);

        var injector = new Injector(module);
        var coffeeMaker = injector.get(CoffeeMaker);
        coffeeMaker.brew();
    }
}

var app = new CoffeeApp();
