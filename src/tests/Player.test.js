/* eslint-disable no-undef */
import Player from "../Player";

test("player doesnt lose if all of their ships are not destroyed", () => {
    let player = Player();
    player.addShip(2, 4, 5, "right");
    player.addShip(1, 2, 1);
    expect(player.isLost()).toBe(false);
    player.attack(4, 5);
    player.attack(2, 1);
    expect(player.isLost()).toBe(false);
});

test("player loses if all of their ships are destroyed", () => {
    let player = Player();
    player.addShip(2, 4, 5, "right");
    player.addShip(1, 2, 1);
    player.attack(4, 5);
    player.attack(5, 5);
    player.attack(2, 1);
    expect(player.isLost()).toBe(true);
});
test("hitting a player's ship returns what index of ship was hit", () => {
    let player = Player();
    player.addShip(2, 4, 5, "right");
    expect(player.attack(4, 5)).toBe(0);
    expect(player.attack(0, 0)).toBe(-1);
});
