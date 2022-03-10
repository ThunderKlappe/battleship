/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
import "./style.css";
import { BuildPage } from "./BuildPage";
import Player from "./Player";
import { DOMManip } from "./DOMManip";
import { Modal } from "./Modal";

export const Game = (() => {
    const _humanPlayer = Player();
    const _computerPlayer = Player();
    const newGame = () => {
        BuildPage.buildNewGameModal();
    };
    const spaceClicked = e => {
        e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputer(e);
    };
    const _placeBoat = e => {
        const hoverSpaces = DOMManip.getElements(".board-space.hover");
        const badHoverSpaces = DOMManip.getElements(".board-space.bad-hover");
        if (badHoverSpaces.length == 0) {
            hoverSpaces.forEach(space => {
                space.classList.add("boat-placed");
                space.classList.toggle("hover");
            });
            const shipSize = DOMManip.getElement("#ship-name").dataset.size;
            const shipName = DOMManip.getElement("#ship-name").textContent;
            const shipDirection = DOMManip.getElement("#ship-rotate-button").dataset.direction;
            _humanPlayer.addShip(
                shipSize,
                e.currentTarget.dataset.xpos,
                e.currentTarget.dataset.ypos,
                shipDirection,
                shipName
            );
            BuildPage.displayBoatSetUp(e);
            console.log(
                _humanPlayer
                    .getBoard()
                    .getShips()
                    [_humanPlayer.getBoard().getShips().length - 1].getPosition()
            );
        }
    };
    const _attackComputer = e => {};

    const _placePlayerShips = () => {
        _humanPlayer
            .getBoard()
            .getShips()
            .forEach(ship => {
                ship.getPosition().forEach(position => {
                    DOMManip.getElement(
                        `#player-board #space-${position.xPos}-${position.yPos}`
                    ).classList.add("boat-placed");
                });
            });
    };
    const startGame = () => {
        if (DOMManip.getElement("#ship-name").dataset.index == 6) {
            Modal.closeCurrentModal();
            _placePlayerShips();
        } else {
            const startGameButton = DOMManip.getElement("#start-game-button");
            startGameButton.setCustomValidity("");
            startGameButton.setCustomValidity("Please place all of your ships");
            startGameButton.reportValidity();
        }
    };
    return { newGame, spaceClicked, startGame };
})();

const initPage = (() => {
    Promise.resolve(BuildPage.buildStartingPage());
    // .then(Promise.resolve(BuildPage.buildNewGameModal()));
})();
