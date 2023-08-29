const Player = require('../lib/Player');

test('create a Pkayer object', () => {
    const player = Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toBe(expect.any(Number));
    expect(player.agility).toBe(expect.any(Number));
    expect(player.strength).toBe(expect.any(Number));
});