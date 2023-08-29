const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;
    this.inventory = [new Potion('health'), new Potion()];

    this.health = Math.floor(Math.random() * 10 + 99);
    this.strength = Math.floor(Math.random() * 10 + 5);
    this.agility = Math.floor(Math.random() * 5 + 10);
}

module.exports = Player;