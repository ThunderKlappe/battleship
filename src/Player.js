import Board from "./Gameboard";

export default function Player() {
    let _board = Board();
    let _lost = false;
    let _isTurn = false;
    function isLost() {
        return _lost;
    }
    function toggleTurn() {
        _isTurn = !_isTurn;
    }
    function getTurn() {
        return _isTurn;
    }
    function addShip(size, x, y, dir) {
        _board.addShip(size, x, y, dir);
    }
    function attack(x, y) {
        _board.attackSpace(x, y);
        if (_board.allDestroyed()) {
            _lost = true;
        }
    }
    //for testing
    function getBoard() {
        return _board;
    }
    return { isLost, toggleTurn, getTurn, addShip, attack, getBoard };
}
