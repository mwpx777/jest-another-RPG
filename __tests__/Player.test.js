const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion')
console.log(new Potion());

test("create a player object", ()=>{
    const player= new Player('Mark');

    expect(player.name).toBe('Mark');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])
    );

});

test('get a players stats as an object', () => {
    const player = new Player('Mark');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
})

test('get inventory from player or return false', ()=>{
    const player = new Player('Mark');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory= [];

    expect(player.getInventory()).toEqual(false);
})

test('gets a players health value', () =>{
    const player = new Player('Mark');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})

test('checks if player is alive', () =>{
    const player = new Player ('Mark');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0

    expect(player.isAlive()).toBeFalsy();
});

test('subtracts from players health', () =>{
    const player = new Player ('Mark');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5)

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

test('get players attack value', ()=>{
    const player = new Player('Mark');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test('add potion to inventory', () =>{
    const player = new Player('Mark');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('use a potion from inventory', () =>{
    const player = new Player('Mark');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThanOrEqual(oldCount);

});