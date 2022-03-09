/* eslint-disable no-undef */
import makeShip from "../Ship";
import makeBoard from "../Gameboard";

test("have coordinates", () => {
    let board = makeBoard();
    expect(board.getBoard().length).toBe(100);
});
test("checks the value at a given place", () => {
    let board = makeBoard();
    expect(board.checkPlace(3, 2).attacked).toBe(false);
});
test("attacks a place", () => {
    let board = makeBoard();
    board.attackSpace(3, 2);
    expect(board.checkPlace(3, 2).attacked).toBe(true);
});
test("attacks only a specific place", () => {
    let board = makeBoard();
    board.attackSpace(3, 2);
    expect(board.checkPlace(3, 2).attacked).toBe(true);
    expect(board.checkPlace(2, 3).attacked).toBe(false);
});
test("ship gets placed on board and attacked", () => {
    let board = makeBoard();
    let ship = makeShip(1);
    ship.setStarting(4, 5);
    board.attackSpace(4, 5);
    ship.attackSpace(4, 5);
    expect(board.checkPlace(4, 5).attacked).toBe(true);
    expect(ship.getCurrentHealth()).toEqual(["damage"]);
});
