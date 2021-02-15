const Potion = require('../lib/Potion');
const Character = require('./Character');

// constructor function
// this function is creating a new player object
class Player extends Character {
    constructor(name = ''){

    // call parent constructor here
    super();

   
    this.inventory = [new Potion('health'), new Potion()];
    // console.log(this.inventory);


    // inherit prototype methods from Character here
    // Player.prototype = Object.create(Character.prototype);
}
    // returns and object with various player properties
    // this is a method!
    getStats() {
        return{
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

  
    // returns the inventory array or false if empty
   getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }else{
            return false;
        };
    };

    // // returns player health
    // Player.prototype.getHealth = function() {
    //     return `${this.name}'s health is now ${this.health}! FINISH HIM!`;
    // };

    // Player.prototype.isAlive = function() {
    //     if (this.health === 0) {
    //         return false;
    //     }
    //         return true;
    //     };

    // Player.prototype.reduceHealth = function(health) {
    //     this.health -= health;

    //     if (this.health <0){
    //         this.health = 0
    //     };
    // };

    // Player.prototype.getAttackValue = function () {
    //     const min = this.strength - 5;
    //     const max = this.strength + 5;

    //     return Math.floor(Math.random() * (max - min) + min);
    // };

   addPotion (potion) {
        // this will push a potion to the end of inventory array
        this.inventory.push(potion);

    };

   usePotion(index){
        // splice will remove 1 item from array and add to new array
        // then potion at index 0 will get saved as potion.name
        const potion = this.getInventory().splice(index, 1)[0];

        switch(potion.name){
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength' :
                this.strength += potion.value;
                break;    
        };
    };
};



module.exports = Player;