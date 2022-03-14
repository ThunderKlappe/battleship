/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
import "./style.css";
import { BuildPage } from "./BuildPage";
import Player from "./Player";
import { DOMManip } from "./DOMManip";
import { Modal } from "./Modal";
import shipArray from "./ships.json";
import { EventHandler } from "./EventHandler";

export const Game = (() => {
    let _humanPlayer;
    let _computerPlayer;
    const newGame = () => {
        BuildPage.buildNewGameModal();
        _humanPlayer = Player();
        _computerPlayer = Player();
    };
    const spaceClicked = e => {
        e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputerPlayer(e);
    };
    const _switchTurns = () => {
        _humanPlayer.toggleTurn();
        _computerPlayer.toggleTurn();
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

    const _isAttackValid = (player, x, y) => {
        let valid = true;
        player
            .getBoard()
            .getHitList()
            .forEach(space => {
                if (space.xPos == x && space.yPos == y) {
                    valid = false;
                }
            });
        return valid;
    };

    const _isAttackHit = (player, x, y) => {
        let hit = false;
        if (
            player
                .getBoard()
                .getSpaceList()
                .some(space => space.xPos == x && space.yPos == y)
        ) {
            hit = true;
        }
        return hit;
    };

    const _checkDestroyed = (player, playerName, attackedShip) => {
        if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
            BuildPage.markDestroyedShip(player.getBoard().getShips()[attackedShip].getPosition(), playerName);
        }
    };

    const _attackPlayer = (player, x, y) => {
        let playerName;
        player == _humanPlayer ? (playerName = "player") : (playerName = "computer");

        if (_isAttackValid(player, x, y)) {
            const attackedShip = player.attack(x, y);
            let hit = _isAttackHit(player, x, y);
            BuildPage.fillInAttack(x, y, playerName, hit);
            if (attackedShip >= 0) {
                _checkDestroyed(player, playerName, attackedShip);
            }
            return true;
        }
        return false;
    };
    const _attackComputerPlayer = e => {
        const xPos = e.currentTarget.dataset.xpos;
        const yPos = e.currentTarget.dataset.ypos;
        _attackPlayer(_computerPlayer, xPos, yPos);
        EventHandler.deactivateSpaces("#computer-board");
        BuildPage.hoverAttack(e);
        _switchTurns();
        _playTurn();
    };

    //for testing only
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
        //_placeComputerShips();
    };
    const _coinFlip = () => Math.floor(Math.random() * 2);
    const _chooseTurn = () => {
        if (_coinFlip()) {
            _humanPlayer.toggleTurn();
        } else _computerPlayer.toggleTurn();
    };

    const _computerPlayersTurn = () => {
        let playedValid = false;
        while (!playedValid) {
            playedValid = _attackPlayer(
                _humanPlayer,
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            );
        }
        _switchTurns();
    };
    const _playTurn = () => {
        if (_humanPlayer.getTurn()) {
            EventHandler.activateSpaces("#computer-board");
        } else {
            _computerPlayersTurn();
            _playTurn();
        }
    };

    const startGame = () => {
        if (DOMManip.getElement("#ship-name").dataset.index == 6) {
            Promise.resolve(Modal.closeCurrentModal());

            BuildPage.rebuildBoards();
            BuildPage.placePlayerShips(_humanPlayer.getBoard().getShips());
            _generateComputerShips();
            BuildPage.activateBoard("#computer-board");
            _chooseTurn();
            _playTurn();
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
})();
