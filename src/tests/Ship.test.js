/* eslint-disable no-undef */
import Ship from "../Ship";

test("makes a ship with correct health", () => {
    expect(Ship(3).getCurrentHealth()).toEqual(["good", "good", "good"]);
});

test("ship has a location", () => {
    let ship = Ship(1, 3, 2);
    expect(ship.getPosition()).toEqual([{ xPos: 3, yPos: 2 }]);
});
test("ship has a location and a direction", () => {
    let ship = Ship(2, 3, 2, "left");
    expect(ship.getPosition()).toEqual([
        { xPos: 3, yPos: 2 },
        { xPos: 2, yPos: 2 },
    ]);
});
test("get the destroyed status of a ship", () => {
    expect(Ship(3).isDestroyed()).toBe(false);
});
test("attacks a ship and hits", () => {
    let ship = Ship(1, 3, 2);
    ship.attackSpace(3, 2);
    expect(ship.getCurrentHealth()).toEqual(["damage"]);
});
test("attacks a larger ship and hits", () => {
    let ship = Ship(2, 3, 2, "right");
    ship.attackSpace(4, 2);
    expect(ship.getCurrentHealth()).toEqual(["good", "damage"]);
});

test("when ship is all damaged, destroy ship", () => {
    let ship = Ship(3, 3, 2, "down");
    ship.attackSpace(3, 2);
    ship.attackSpace(3, 3);
    ship.attackSpace(3, 4);
    expect(ship.isDestroyed()).toBe(true);
});
test("ship can have a name", () => {
    let ship = Ship(3, 3, 2, "down", "Carrier");
    expect(ship.getName()).toBe("Carrier");
});
test("attacking a ship returns if it was hit or not", () => {
    let ship = Ship(3, 3, 2, "down");
    expect(ship.attackSpace(3, 2)).toBe(true);
    expect(ship.attackSpace(7, 8)).toBe(false);
});
