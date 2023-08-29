const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

test('create a Pkayer object', () => {
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

console.log(new Potion());