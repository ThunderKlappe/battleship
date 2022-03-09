/* eslint-disable no-undef */
import makeShip from "../Ship";

test("makes a ship with correct health", () => {
    expect(makeShip(3).getCurrentHealth()).toEqual(["good", "good", "good"]);
});
test("damage a ship in a given spot", () => {
    let ship = makeShip(3);
    ship.damage(1);
    expect(ship.getCurrentHealth()).toEqual(["good", "damage", "good"]);
});
test("ship damage is maintained", () => {
    let ship = makeShip(3);
    ship.damage(0);
    ship.damage(1);
    ship.damage(2);
    expect(ship.getCurrentHealth()).toEqual(["damage", "damage", "damage"]);
});
test("get the destroyed status of a ship", () => {
    expect(makeShip(3).isDestroyed()).toBe(false);
});
test("when ship is all damaged, destroy ship", () => {
    let ship = makeShip(3);
    ship.damage(0);
    ship.damage(1);
    ship.damage(2);
    expect(ship.isDestroyed()).toBe(true);
});
