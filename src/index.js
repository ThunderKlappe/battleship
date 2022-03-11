/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
import "./style.css";
import { BuildPage } from "./BuildPage";
import Player from "./Player";
import { DOMManip } from "./DOMManip";
import { Modal } from "./Modal";
import shipArray from "./ships.json";

export const Game = (() => {
    let _humanPlayer;
    let _computerPlayer;
    const newGame = () => {
        BuildPage.buildNewGameModal();
        _humanPlayer = Player();
        _computerPlayer = Player();
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
    const _placeComputerShips = () => {
        _computerPlayer
            .getBoard()
            .getShips()
            .forEach(ship => {
                ship.getPosition().forEach(position => {
                    DOMManip.getElement(
                        `#computer-board #space-${position.xPos}-${position.yPos}`
                    ).classList.add("boat-placed");
                });
            });
    };
    const _generateComputerShips = () => {
        let i = 0;
        //go through each ship
        while (i < shipArray.length - 1) {
            let xPos;
            let yPos;
            let direction;
            //randomly pick a direction either right or down
            Math.floor(Math.random() * 2) == 0 ? (direction = "right") : (direction = "down");
            if (direction == "right") {
                //restrict the random so it doesn't pick a starting place that would put the pieces outside
                //of the grid
                xPos = Math.floor(Math.random() * (10 - shipArray[i].shipSize));
                yPos = Math.floor(Math.random() * 10);
            } else {
                xPos = Math.floor(Math.random() * 10);
                yPos = Math.floor(Math.random() * (10 - shipArray[i].shipSize));
            }
            let taken = false;
            let valid = true;
            _computerPlayer
                .getBoard()
                .getShips()
                .forEach(ship => {
                    ship.getPosition().forEach(pos => {
                        //look at each of the current ships
                        for (let j = 0; j < shipArray[i].shipSize; j++) {
                            //and compare their coordinates to the possible coordinates of this new ship
                            if (direction == "right") {
                                if (xPos + j == pos.xPos && yPos == pos.yPos) {
                                    //if it's already taken, can't submit the new ship
                                    taken = true;
                                }
                            }
                            if (direction == "down") {
                                if (xPos == pos.xPos && yPos + j == pos.yPos) {
                                    taken = true;
                                }
                            }
                        }
                    });
                });
            //if the space is not already taken, add the ship to the Player's board
            if (!taken) {
                _computerPlayer.addShip(shipArray[i].shipSize, xPos, yPos, direction, shipArray[i].shipName);
                console.log(_computerPlayer.getBoard().getShips()[i].getPosition());
                //go to the next ship in the array
                i++;
            }
        }
        _placeComputerShips();
    };
    const startGame = () => {
        if (DOMManip.getElement("#ship-name").dataset.index == 6) {
            Promise.resolve(Modal.closeCurrentModal());

            BuildPage.rebuildBoards();
            _placePlayerShips();
            _generateComputerShips();
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
