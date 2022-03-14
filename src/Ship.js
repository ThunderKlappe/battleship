export default function Ship(size, x, y, dir, name) {
    let _health = Array.from({ length: size }, () => "good");
    let _destroyed = false;
    let _coordinates = _setStarting(x, y, dir);
    let _name = name;

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
    function _setStarting(incomingx, incomingy, dir = "right") {
        let spaces = [];
        let x = parseInt(incomingx);
        let y = parseInt(incomingy);
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
    function getName() {
        return _name;
    }
    function attackSpace(x, y) {
        let attackIndex = _coordinates.findIndex(element => element.xPos == x && element.yPos == y);
        if (attackIndex >= 0) {
            _damage(attackIndex);
            return true;
        }
        return false;
    }

    return { getCurrentHealth, isDestroyed, getPosition, getName, attackSpace };
}
