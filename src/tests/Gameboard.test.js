/* eslint-disable no-undef */
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
