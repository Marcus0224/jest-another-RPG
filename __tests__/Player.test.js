const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

test("create a Player object", () => {
    const player = Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toBe(expect.any(Number));
    expect(player.strength).toBe(expect.any(Number));
    expect(player.agility).toBe(expect.any(Number));
    expect(player.inventory).toEqual
        expect(player.inventory).toEqual(
            expect.arrayContaining([expect.any(Object)])
          );
});

test("getz players stats as an object", () =>{
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('Potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory fromplayer or returns false', () => {
    const player = new Player('Dave');

    expect (player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

console.log(new Potion());