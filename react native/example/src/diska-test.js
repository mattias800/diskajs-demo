var Module = require('diskajs').Module;
var Provider = require('diskajs').Provider;
var Injector = require('diskajs').Injector;

var injector = new Injector(new Module());

class TextSource {

    static inject() {
        return [];
    }

    getText() {
        return 'Hello, I was injected!';
    }
}

class TextFetcher {

    static inject() {
        return [TextSource];
    }

    constructor(textSource) {
        this.textSource = textSource;
    }

    getText() {
        return this.textSource.getText();
    }

}

function getTextFetcher() {
    return injector.get(TextFetcher);
}

module.exports = {
    getTextFetcher: getTextFetcher
};

