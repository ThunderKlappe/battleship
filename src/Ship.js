export default function makeShip(size) {
    let _health = Array(size).fill("good");
    let _destroyed = false;

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

    return { getCurrentHealth, isDestroyed, damage };
}
