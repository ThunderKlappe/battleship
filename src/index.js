/* eslint-disable no-unused-vars */
import "./style.css";
import { BuildPage } from "./BuildPage";
import Player from "./Player";
import { DOMManip } from "./DOMManip";

export const Game = (() => {
    const _humanPlayer = Player();
    const newGame = () => {
        BuildPage.buildNewGameModal();
    };
    const spaceClicked = e => {
        e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputer(e);
    };
    const _placeBoat = e => {
        const hoverSpaces = DOMManip.getElements(".board-space.hover");
        hoverSpaces.forEach(space => {
            space.classList.add("boat-placed");
            space.classList.toggle("hover");
        });
        const shipSize = DOMManip.getElement("#ship-name").dataset.size;
        const shipDirection = DOMManip.getElement("#ship-rotate-button").dataset.direction;
        _humanPlayer.addShip(
            shipSize,
            e.currentTarget.dataset.xpos,
            e.currentTarget.dataset.ypos,
            shipDirection
        );
        BuildPage.displayBoatSetUp();
        console.log(
            _humanPlayer.getBoard().getShips()[_humanPlayer.getBoard().getShips().length - 1].getPosition()
        );
    };
    const _attackComputer = e => {};
    const startGame = () => {};
    return { newGame, spaceClicked, startGame };
})();

const initPage = (() => {
    Promise.resolve(BuildPage.buildStartingPage());
    // .then(Promise.resolve(BuildPage.buildNewGameModal()));
})();
