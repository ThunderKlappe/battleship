import { Game } from ".";
import { BuildPage } from "./BuildPage";
import { DOMManip } from "./DOMManip";

export const EventHandler = (() => {
    const activateNewGameButton = () => {
        DOMManip.getElement("#new-game-button").addEventListener("click", Game.newGame);
    };
    const activateNewGameModal = () => {
        DOMManip.getElement("#ship-rotate-button").addEventListener("click", BuildPage.toggleRotateButton);
        DOMManip.getElement("#start-game-button").addEventListener("click", Game.startGame);
    };
    const activateSpaces = id => {
        DOMManip.getElements(`${id} .board-space`).forEach(space => {
            space.addEventListener("click", Game.spaceClicked);
            if (id == "#set-up-board") {
                space.addEventListener("mouseover", BuildPage.hoverSetUp);
                space.addEventListener("mouseout", BuildPage.hoverSetUp);
            }
        });
    };
    const deactivateSpaces = id => {
        DOMManip.getElements(`${id} .board-space`).forEach(space => {
            space.removeEventListener("click", Game.spaceClicked);
            if (id == "#set-up-board") {
                space.removeEventListener("mouseover", BuildPage.hoverSetUp);
                space.removeEventListener("mouseout", BuildPage.hoverSetUp);
            }
        });
    };

    return { activateNewGameButton, activateNewGameModal, activateSpaces, deactivateSpaces };
})();
