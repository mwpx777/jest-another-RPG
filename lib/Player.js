const Potion = require('../lib/Potion');

// constructor function
// this function is creating a new player object
function Player(name=''){
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
    // console.log(this.inventory);

    // returns and object with various player properties
    // this is a method!
    Player.prototype.getStats = function(){
        return{
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility:this.agility
        };
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory = function () {
        if(this.inventory.length) {
            return this.inventory;
        }else{
            return false;
        };
    };

    // returns player health
    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    Player.prototype.isAlive = function() {
        if (this.health === 0) {
            return false;
        }
            return true;
        };

    Player.prototype.reduceHealth = function(health) {
        this.health -= health;

        if (this.health <0){
            this.health = 0
        };
    };
};



module.exports = Player;