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

test( 'gets player health value', () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContainer(player.health.toString()));
});

test( 'checks if player is alive or dead', () => {
    const player = new Player('Dave');

    expect(player.IsAlive()).toBeTruthy();

    player.health = 0;

    expect(player.IsAlive()).toBeFalsy();
});

test('subtract from players health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reducedHealth(5);
    
    expect(player.health).toBe(oldHealth - 5);

    player.reducedHealth(99999);

    expect(player.health).toBe(0);
});

test("gets players attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

console.log(new Potion());