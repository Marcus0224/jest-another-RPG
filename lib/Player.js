function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 99);
    this.agility = Math.floor(Math.random() * 10 + 5);
    this.strength = Math.floor(Math.random() * 5 + 10);
}

module.exports = Player;