import { Game } from ".";
import { DOMManip } from "./DOMManip";

export const EventHandler = (() => {
    const activateNewGameButton = () => {
        DOMManip.getElement("#new-game-button").addEventListener("click", Game.newGame);
    };
    const activateStartGameButton = () => {
        DOMManip.getElement("#start-game-button").addEventListener("click", Game.startGame);
    };
    const activateSpaces = id => {
        DOMManip.getElements(`${id} .board-space`).forEach(space => {
            space.addEventListener("click", Game.spaceClicked);
        });
    };

    return { activateNewGameButton, activateStartGameButton, activateSpaces };
})();
