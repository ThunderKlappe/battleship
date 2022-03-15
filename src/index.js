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
        _humanPlayer = Player("player");
        _computerPlayer = Player("computer");
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
                hoverSpaces[0].dataset.xpos,
                hoverSpaces[0].dataset.ypos,
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

    const _checkDestroyed = (player, attackedShip) => {
        if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
            BuildPage.markDestroyedShip(
                player.getBoard().getShips()[attackedShip].getPosition(),
                player.getName()
            );
            return true;
        }
        return false;
    };

    const _attackPlayer = (player, x, y) => {
        const playerName = player.getName();

        if (_isAttackValid(player, x, y)) {
            const attackedShip = player.attack(x, y);
            let hit = _isAttackHit(player, x, y);
            player.lastResult = hit;
            if (hit) {
                player.addSuccess(x, y);
            }
            BuildPage.fillInAttack(x, y, playerName, hit);
            if (attackedShip >= 0) {
                if (_checkDestroyed(player, attackedShip)) {
                    player.lastResult = player.getBoard().getShips()[attackedShip].getName();
                }
            }
            return true;
        }
        return false;
    };

    const _displayLastResult = player => {
        const lastResult = player.lastResult;

        if (player == _computerPlayer) {
            lastResult == true
                ? BuildPage.displayMessage("You fire at the computer... It's a Hit!")
                : lastResult == false
                ? BuildPage.displayMessage("You fire at the computer... It's a Miss...")
                : BuildPage.displayMessage(`You sunk their ${lastResult}!`);
        } else {
            lastResult == true
                ? BuildPage.displayMessage("The computer fires at you... It's a Hit...")
                : lastResult == false
                ? BuildPage.displayMessage("The computer fires at you... It's a Miss!")
                : BuildPage.displayMessage(`They sunk your ${lastResult}!`);
        }
    };
    const _attackComputerPlayer = e => {
        const xPos = e.currentTarget.dataset.xpos;
        const yPos = e.currentTarget.dataset.ypos;
        _attackPlayer(_computerPlayer, xPos, yPos);
        _displayLastResult(_computerPlayer);
        EventHandler.deactivateSpaces("#computer-board");
        BuildPage.removeHoverAttack(e);
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

    const _isAttacked = (x, y) => {
        if (DOMManip.getElement(`#player-board #space-${x}-${y}`).classList.contains("attacked")) {
            return true;
        }
    };
    const _isHit = (x, y) => {
        if (DOMManip.getElement(`#player-board #space-${x}-${y}`).classList.contains("hit")) {
            return true;
        }
    };

    const _isDestroyed = (x, y) => {
        if (DOMManip.getElement(`#player-board #space-${x}-${y}`).classList.contains("destroyed")) {
            return true;
        }
    };

    const _checkAround = lastHit => {
        let nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos };

        if (lastHit.xPos != 9) {
            nextHit = { xPos: lastHit.xPos + 1, yPos: lastHit.yPos };
        }

        if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
            return nextHit;
        } else if (lastHit.xPos != 0) {
            nextHit = { xPos: lastHit.xPos - 1, yPos: lastHit.yPos };
        }

        if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
            return nextHit;
        } else if (lastHit.yPos != 9) {
            nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos + 1 };
        }

        if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
            return nextHit;
        } else if (lastHit.yPos != 0) {
            nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos - 1 };
        }

        if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
            return nextHit;
        }

        return false;
    };
    const _checkInLine = position => {
        let oppPos;
        let checkX;
        let checkY;
        let stop1;
        let stop2;

        let checkPos = { xPos: position.xPos + 1, yPos: position.yPos };
        if (checkPos.xPos == 10) {
            checkX = checkPos.xPos;
            checkY = checkPos.yPos;

            if (checkY + 1 < 10) {
                _isHit(checkX - 1, checkY + 1) ? (stop1 = true) : (stop1 = false);
            }
            if (checkY - 1 >= 0) {
                _isHit(checkX - 1, checkY - 1) ? (stop2 = true) : (stop2 = false);
            }
            if (!stop1 && !stop2) {
                oppPos = { xPos: position.xPos - 1, yPos: position.yPos };
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
            oppPos = { xPos: position.xPos - 1, yPos: position.yPos };
            if (oppPos.xPos >= 0) {
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        }

        checkPos = { xPos: position.xPos - 1, yPos: position.yPos };
        if (checkPos.xPos == -1) {
            checkX = checkPos.xPos;
            checkY = checkPos.yPos;

            if (checkY + 1 < 10) {
                _isHit(checkX + 1, checkY + 1) ? (stop1 = true) : (stop1 = false);
            }
            if (checkY - 1 >= 0) {
                _isHit(checkX + 1, checkY - 1) ? (stop2 = true) : (stop2 = false);
            }
            if (!stop1 && !stop2) {
                oppPos = { xPos: position.xPos + 1, yPos: position.yPos };
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
            oppPos = { xPos: position.xPos + 1, yPos: position.yPos };
            if (oppPos.xPos < 10) {
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        }

        checkPos = { xPos: position.xPos, yPos: position.yPos + 1 };
        if (checkPos.yPos == 10) {
            checkX = checkPos.xPos;
            checkY = checkPos.yPos;

            if (checkX + 1 < 10) {
                _isHit(checkX + 1, checkY - 1) ? (stop1 = true) : (stop1 = false);
            }
            if (checkX - 1 >= 0) {
                _isHit(checkX - 1, checkY - 1) ? (stop2 = true) : (stop2 = false);
            }
            if (!stop1 && !stop2) {
                oppPos = { xPos: position.xPos, yPos: position.yPos - 1 };
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
            oppPos = { xPos: position.xPos, yPos: position.yPos - 1 };
            if (oppPos.yPos >= 0) {
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        }

        checkPos = { xPos: position.xPos, yPos: position.yPos - 1 };
        if (checkPos.yPos == -1) {
            checkX = checkPos.xPos;
            checkY = checkPos.yPos;

            if (checkX + 1 < 10) {
                _isHit(checkX + 1, checkY + 1) ? (stop1 = true) : (stop1 = false);
            }
            if (checkX - 1 >= 0) {
                _isHit(checkX - 1, checkY + 1) ? (stop2 = true) : (stop2 = false);
            }
            if (!stop1 && !stop2) {
                oppPos = { xPos: position.xPos, yPos: position.yPos + 1 };
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        } else if (_isHit(checkPos.xPos, checkPos.yPos)) {
            oppPos = { xPos: position.xPos, yPos: position.yPos + 1 };
            if (oppPos.yPos < 10) {
                if (!_isAttacked(oppPos.xPos, oppPos.yPos)) {
                    return oppPos;
                }
            }
        }
    };

    // const _checkInLine = (lastHit, previousHit) => {
    //     let nextHit;
    //     if (lastHit.xPos == previousHit.xPos + 1) {
    //         nextHit = { xPos: lastHit.xPos + 1, yPos: lastHit.yPos };
    //         if (nextHit.xPos != 10) {
    //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
    //                 return nextHit;
    //             }
    //         }
    //     }
    //     if (lastHit.xPos == previousHit.xPos - 1) {
    //         nextHit = { xPos: lastHit.xPos - 1, yPos: lastHit.yPos };
    //         if (nextHit.xPos != -1) {
    //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
    //                 return nextHit;
    //             }
    //         }
    //     }
    //     if (lastHit.yPos == previousHit.yPos + 1) {
    //         nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos + 1 };
    //         if (nextHit.yPos != 10) {
    //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
    //                 return nextHit;
    //             }
    //         }
    //     }
    //     if (lastHit.yPos == previousHit.yPos - 1) {
    //         nextHit = { xPos: lastHit.xPos, yPos: lastHit.yPos - 1 };
    //         if (nextHit.yPos != -1) {
    //             if (!_isAttacked(nextHit.xPos, nextHit.yPos)) {
    //                 return nextHit;
    //             }
    //         }
    //     }
    // };

    const _chooseComputerSpot = () => {
        const successList = _humanPlayer.getSuccess();
        if (successList.length > 0) {
            let i = 1;
            while (i <= successList.length) {
                let hitCheck = successList[successList.length - i];
                let lastHit = successList[successList.length - 1];
                let nextHit;
                if (successList.length - i - 1 < 0) {
                    if (!_isDestroyed(lastHit.xPos, lastHit.yPos)) {
                        nextHit = _checkInLine(hitCheck);
                        if (!nextHit) {
                            nextHit = _checkAround(lastHit);
                        }
                    }
                } else {
                    if (!_isDestroyed(hitCheck.xPos, hitCheck.yPos)) {
                        nextHit = _checkInLine(hitCheck);
                    }
                }
                if (nextHit) {
                    return nextHit;
                } else {
                    i++;
                }
            }
        }
        const hits = DOMManip.getElements("#player-board .hit");
        if (hits.length > 0) {
            return _checkAround({
                xPos: parseInt(hits[0].dataset.xpos),
                yPos: parseInt(hits[0].dataset.ypos),
            });
        }

        return { xPos: Math.floor(Math.random() * 10), yPos: Math.floor(Math.random() * 10) };
    };

    const _computerPlayersTurn = () => {
        let playedValid = false;
        while (!playedValid) {
            let attackPosition = _chooseComputerSpot();
            playedValid = _attackPlayer(_humanPlayer, attackPosition.xPos, attackPosition.yPos);
        }
        _displayLastResult(_humanPlayer);
        _switchTurns();
    };

    const _randomPause = (minLength, maxLength) => {
        const pauseLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);
        return new Promise(resolve => setTimeout(resolve, pauseLength));
    };
    const _coinFlip = () => Math.floor(Math.random() * 2);
    const _chooseTurn = () => {
        if (_coinFlip()) {
            _humanPlayer.toggleTurn();
            BuildPage.displayMessage("Flipping Coin... Player goes first.");
        } else {
            _computerPlayer.toggleTurn();
            BuildPage.displayMessage("Flipping Coin... Computer goes first.");
        }
    };

    const _playTurn = () => {
        if (_humanPlayer.isLost()) {
            BuildPage.displayMessage("The computer has destroyed your entire fleet... Play Again?");
        } else if (_computerPlayer.isLost()) {
            BuildPage.displayMessage(
                "You've successfully destroyed all of the computer's ships! Play Again?"
            );
        } else {
            if (_humanPlayer.getTurn()) {
                EventHandler.activateSpaces("#computer-board");
            } else {
                _randomPause(500, 500)
                    .then(() => _computerPlayersTurn())
                    .then(() => _playTurn());
            }
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
