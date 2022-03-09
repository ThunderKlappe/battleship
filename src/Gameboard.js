import Ship from "./Ship";

export default function Board() {
    let _spaces = _initSpaces();
    let _ships = [];

    function _initSpaces() {
        let spaces = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                spaces.push({ xPos: i, yPos: j, attacked: false });
            }
        }
        return spaces;
    }
    function getBoard() {
        return _spaces.map(x => x);
    }
    function checkPlace(x, y) {
        return _spaces[_spaces.findIndex(element => element.xPos == x && element.yPos == y)];
    }
    function attackSpace(x, y) {
        _spaces[_spaces.findIndex(element => element.xPos == x && element.yPos == y)].attacked = true;
        _ships.forEach(ship => ship.attackSpace(x, y));
    }
    function addShip(size, x, y, dir) {
        _ships.push(Ship(size, x, y, dir));
    }
    function getShips() {
        return _ships.map(x => x);
    }

    return { getBoard, checkPlace, attackSpace, addShip, getShips };
}
