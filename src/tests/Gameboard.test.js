/* eslint-disable no-undef */
import Board from "../Gameboard";

test("have coordinates", () => {
    let board = Board();
    expect(board.getBoard().length).toBe(100);
});
test("checks the value at a given place", () => {
    let board = Board();
    expect(board.checkPlace(3, 2).attacked).toBe(false);
});
test("attacks a place", () => {
    let board = Board();
    board.attackSpace(3, 2);
    expect(board.checkPlace(3, 2).attacked).toBe(true);
});
test("attacks only a specific place", () => {
    let board = Board();
    board.attackSpace(3, 2);
    expect(board.checkPlace(3, 2).attacked).toBe(true);
    expect(board.checkPlace(2, 3).attacked).toBe(false);
});
test("ship gets added to board", () => {
    let board = Board();
    board.addShip(2, 3, 4, "down");
    expect(board.getShips()[0].getCurrentHealth()).toEqual(["good", "good"]);
});
test("multiple ships gets added to board", () => {
    let board = Board();
    board.addShip(2, 3, 4, "down");
    board.addShip(1, 7, 8);
    expect(board.getShips()[0].getPosition()).toEqual([
        { xPos: 3, yPos: 4 },
        { xPos: 3, yPos: 5 },
    ]);
    expect(board.getShips()[1].getPosition()).toEqual([{ xPos: 7, yPos: 8 }]);
});

test("ship gets placed on board and attacked", () => {
    let board = Board();
    board.addShip(1, 4, 5);
    board.attackSpace(4, 5);
    expect(board.checkPlace(4, 5).attacked).toBe(true);
    expect(board.getShips()[0].getCurrentHealth()).toEqual(["damage"]);
});

test("if all ships are not destroyed, board is not lost", () => {
    let board = Board();
    board.addShip(2, 4, 5, "Right");
    board.attackSpace(4, 5);
    expect(board.allDestroyed()).toBe(false);
});
test("if all ships are destroyed, board is lost", () => {
    let board = Board();
    board.addShip(2, 4, 5, "right");
    board.attackSpace(4, 5);
    board.attackSpace(5, 5);
    expect(board.allDestroyed()).toBe(true);
});
test("checks for all ships to be not destroyed with multiple ships", () => {
    let board = Board();
    board.addShip(2, 4, 5, "right");
    board.addShip(2, 6, 8, "up");
    board.attackSpace(4, 5);
    board.attackSpace(5, 5);
    expect(board.allDestroyed()).toBe(false);
});
test("checks for all ships to be destroyed with multiple ships", () => {
    let board = Board();
    board.addShip(2, 4, 5, "right");
    board.addShip(2, 6, 8, "up");
    board.attackSpace(4, 5);
    board.attackSpace(5, 5);
    board.attackSpace(6, 8);
    board.attackSpace(6, 7);
    expect(board.allDestroyed()).toBe(true);
});
