/* eslint-disable no-undef */
import makeShip from "../Ship";

test("makes a ship with correct health", () => {
    expect(makeShip(3).getCurrentHealth()).toEqual(["good", "good", "good"]);
});

test("ship has a location", () => {
    let ship = makeShip(1);
    ship.setStarting(3, 2);
    expect(ship.getPosition()).toEqual([{ xPos: 3, yPos: 2 }]);
});
test("ship has a location and a direction", () => {
    let ship = makeShip(2);
    ship.setStarting(3, 2, "left");
    expect(ship.getPosition()).toEqual([
        { xPos: 3, yPos: 2 },
        { xPos: 2, yPos: 2 },
    ]);
});
test("get the destroyed status of a ship", () => {
    expect(makeShip(3).isDestroyed()).toBe(false);
});
test("attacks a ship and hits", () => {
    let ship = makeShip(1);
    ship.setStarting(3, 2);
    ship.attackSpace(3, 2);
    expect(ship.getCurrentHealth()).toEqual(["damage"]);
});
test("attacks a larger ship and hits", () => {
    let ship = makeShip(2);
    ship.setStarting(3, 2, "right");
    ship.attackSpace(4, 2);
    expect(ship.getCurrentHealth()).toEqual(["good", "damage"]);
});

test("when ship is all damaged, destroy ship", () => {
    let ship = makeShip(3);
    ship.setStarting(3, 2, "down");
    ship.attackSpace(3, 2);
    ship.attackSpace(3, 3);
    ship.attackSpace(3, 4);
    expect(ship.isDestroyed()).toBe(true);
});
