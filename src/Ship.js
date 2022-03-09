export default function makeShip(size) {
    let _health = Array(size).fill("good");
    let _destroyed = false;
    let _startingX;
    let _startingY;
    let _direction;

    function getCurrentHealth() {
        return _health.map(x => x);
    }
    function isDestroyed() {
        return _destroyed;
    }
    function damage(location) {
        _health[location] = "damage";
        if (_health.every(place => place == "damage")) {
            _destroyed = true;
        }
    }
    function setStarting(x, y, dir = "right") {
        _startingX = x;
        _startingY = y;
        _direction = dir;
    }
    function getPosition() {
        return { xPos: _startingX, yPos: _startingY, dir: _direction };
    }

    return { getCurrentHealth, isDestroyed, damage, setStarting, getPosition };
}
