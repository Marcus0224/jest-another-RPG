const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //return on object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
             health: this.health,
             strenght: this.strength,
             agility: this.agility
        };
    };

    // return the inventory array or false if emoty 
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    Player.prototype.getHealth = function() {
        return `${this.name} health is now ${this.health}!`;
    };

    Player.prototype.isAlive = function() {
        if (this.health ===0) {
            return false;
        }
        return true;
    };

    Player.prototype.reducedHealth = function() {
        this.health -= this.health;

        if(this.health < 0) {
            this.health = 0;
        }
    };

    Player.prototype.getAttackValue = function() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
      };
}

module.exports = Player;