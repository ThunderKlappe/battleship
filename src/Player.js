import Board from "./Gameboard";

export default function Player(name) {
    let _name = name;
    let _board = Board();
    let _lost = false;
    let _isTurn = false;
    let lastResult = "";
    let _attackSuccess = [];
    function getName() {
        return _name;
    }
    function isLost() {
        return _lost;
    }
    function toggleTurn() {
        _isTurn = !_isTurn;
    }
    function getTurn() {
        return _isTurn;
    }
    function addShip(size, x, y, dir, name) {
        _board.addShip(size, x, y, dir, name);
    }
    function attack(x, y) {
        const hitShipIndex = _board.attackSpace(x, y);
        if (_board.allDestroyed()) {
            _lost = true;
        }
        return hitShipIndex;
    }
    function getBoard() {
        return _board;
    }
    function addSuccess(x, y) {
        _attackSuccess.push({ xPos: x, yPos: y });
    }
    function getSuccess() {
        return _attackSuccess.map(x => x);
    }
    return {
        getName,
        isLost,
        toggleTurn,
        getTurn,
        addShip,
        attack,
        getBoard,
        addSuccess,
        getSuccess,
        lastResult,
    };
}
