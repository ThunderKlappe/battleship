export default function makeShip(size) {
    let _health = Array(size).fill("good");
    let _destroyed = false;
    let _coordinates = [];

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
    function setStarting(x, y, dir = "right") {
        for (let i = 0; i < size; i++) {
            if (dir == "right") {
                _coordinates.push({ xPos: x + i, yPos: y });
            } else if (dir == "left") {
                _coordinates.push({ xPos: x - i, yPos: y });
            } else if (dir == "down") {
                _coordinates.push({ xPos: x, yPos: y + i });
            } else if (dir == "up") {
                _coordinates.push({ xPos: x, yPos: y - i });
            }
        }
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

    return { getCurrentHealth, isDestroyed, setStarting, getPosition, attackSpace };
}
