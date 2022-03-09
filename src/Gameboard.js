export default function makeBoard() {
    let _spaces = _initSpaces();

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
    }

    return { getBoard, checkPlace, attackSpace };
}
