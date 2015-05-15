function Grinder() {

    this.grind = function() {
        console.log('grinding...');
    }

}

Grinder.inject = function() {
    return [];
};

module.exports = Grinder;

