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
