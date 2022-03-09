export default function makeShip(size, x, y, dir) {
    let _health = Array(size).fill("good");
    let _destroyed = false;
    let _coordinates = _setStarting(x, y, dir);

    function getCurrentHealth() {
        return _health.map(x => x);
    }
    function isDestroyed() {
        return _destroyed;
    }
    function _damage(location) {
        _health[location] = "damage";
        if (_health.every(place => place == "damage")) {
            _destroyed = true;
        }
    }
    function _setStarting(x, y, dir = "right") {
        let spaces = [];
        for (let i = 0; i < size; i++) {
            if (dir == "right") {
                spaces.push({ xPos: x + i, yPos: y });
            } else if (dir == "left") {
                spaces.push({ xPos: x - i, yPos: y });
            } else if (dir == "down") {
                spaces.push({ xPos: x, yPos: y + i });
            } else if (dir == "up") {
                spaces.push({ xPos: x, yPos: y - i });
            }
        }
        return spaces;
    }
    function getPosition() {
        return _coordinates.map(x => x);
    }
    function attackSpace(x, y) {
        let attackIndex = _coordinates.findIndex(element => element.xPos == x && element.yPos == y);
        if (attackIndex >= 0) {
            _damage(attackIndex);
        }
    }

    return { getCurrentHealth, isDestroyed, getPosition, attackSpace };
}
