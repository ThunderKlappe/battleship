import Ship from "./Ship";

export default function Board() {
    let _spaces = _initSpaces();
    let _ships = [];
    let _hitList = [];
    let _spaceList = [];

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
        let hit = -1;
        _ships.forEach((ship, index) => {
            if (ship.attackSpace(x, y)) {
                hit = index;
            }
        });
        _hitList.push({ xPos: x, yPos: y });
        return hit;
    }
    function addShip(size, x, y, dir, name) {
        _ships.push(Ship(size, x, y, dir, name));
        for (let i = 0; i < size; i++) {
            if (dir == "right") {
                _spaceList.push({ xPos: parseInt(x) + i, yPos: y });
            } else {
                _spaceList.push({ xPos: x, yPos: parseInt(y) + i });
            }
        }
    }
    function getShips() {
        return _ships.map(x => x);
    }
    function getHitList() {
        return _hitList.map(x => x);
    }
    function getSpaceList() {
        return _spaceList.map(x => x);
    }
    function allDestroyed() {
        return _ships.every(ship => ship.isDestroyed() == true);
    }

    return { getBoard, checkPlace, attackSpace, addShip, getShips, getHitList, getSpaceList, allDestroyed };
}
