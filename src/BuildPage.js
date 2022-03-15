/* eslint-disable no-unused-vars */
import { DOMManip } from "./DOMManip";
import { EventHandler } from "./EventHandler";
import { Modal } from "./Modal";
import shipArray from "./ships.json";

export const BuildPage = (() => {
    const activateBoard = id => {
        DOMManip.getElement(id).classList.add("active");
    };
    const _makeGrid = id => {
        const gridContainer = DOMManip.makeNewElement("div", id, "board");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                gridContainer.appendChild(
                    DOMManip.makeNewElement(
                        "div",
                        `space-${j}-${i}`,
                        "board-space",
                        "",
                        { "data-xPos": j },
                        { "data-yPos": i }
                    )
                );
            }
        }
        return gridContainer;
    };
    const buildStartingPage = () => {
        const header = DOMManip.makeNewElement("div", "header", "", "Battleship");
        const content = DOMManip.makeNewElement("div", "content");
        const gameContainer = DOMManip.makeNewElement("div", "game-container");
        const instructions = DOMManip.makeNewElement(
            "div",
            "game-instructions",
            "board-label",
            "The game is simple: destroy your opponent before they destroy you."
        );
        const boardsContainer = DOMManip.makeNewElement("div", "boards-container");
        const playerBoardWrapper = DOMManip.makeNewElement("div", "player-board-wrapper", "board-wrapper");
        const playerBoard = _makeGrid("player-board");
        const playerBoardLabel = DOMManip.makeNewElement(
            "div",
            "player-board-label",
            "board-label",
            "Player's Board"
        );
        DOMManip.appendChildren(playerBoardWrapper, playerBoard, playerBoardLabel);

        const computerBoardWrapper = DOMManip.makeNewElement(
            "div",
            "computer-board-wrapper",
            "board-wrapper"
        );
        const computerBoard = _makeGrid("computer-board");
        const computerBoardLabel = DOMManip.makeNewElement(
            "div",
            "computer-board-label",
            "board-label",
            "Computer's Board"
        );
        DOMManip.appendChildren(computerBoardWrapper, computerBoard, computerBoardLabel);
        const newGameButton = DOMManip.makeNewElement("button", "new-game-button", "page-button", "New Game");

        DOMManip.appendChildren(boardsContainer, playerBoardWrapper, computerBoardWrapper);

        DOMManip.appendChildren(gameContainer, instructions, boardsContainer, newGameButton);
        content.appendChild(gameContainer);
        DOMManip.appendChildren(document.body, header, content);

        EventHandler.activateNewGameButton();
    };

    const buildNewGameModal = () => {
        const newGameModal = DOMManip.makeNewElement("div", "new-game-modal", "modal content");
        const newGameTitle = DOMManip.makeNewElement(
            "div",
            "new-game-title",
            "modal-title",
            "Please place your ships on the grid"
        );
        const shipName = DOMManip.makeNewElement("div", "ship-name", "ship-name", "", {
            "data-index": 0,
        });
        const rotateButton = DOMManip.makeNewElement(
            "button",
            "ship-rotate-button",
            "modal-button",
            "Rotate",
            { "data-direction": "right" }
        );
        const setUpGrid = _makeGrid("set-up-board");

        const startGameButton = DOMManip.makeNewElement(
            "button",
            "start-game-button",
            "modal-button",
            "Start Game"
        );
        DOMManip.appendChildren(
            newGameModal,
            newGameTitle,
            shipName,
            rotateButton,
            setUpGrid,
            startGameButton
        );

        Promise.resolve(Modal.displayModal(newGameModal))
            .then(EventHandler.activateNewGameModal())
            .then(EventHandler.activateSpaces("#set-up-board"))
            .then(displayBoatSetUp())
            .then(activateBoard("#set-up-board"));
    };
    const toggleRotateButton = () => {
        const rotateButton = DOMManip.getElement("#ship-rotate-button");
        const currentState = rotateButton.dataset.direction;
        currentState == "right"
            ? (rotateButton.dataset.direction = "down")
            : (rotateButton.dataset.direction = "right");
    };
    const _badHover = (xPos, yPos, size, direction) => {
        for (let i = 0; i < size; i++) {
            let position;
            if (direction == "right") {
                let offset;
                xPos + i < 10 ? (offset = xPos + i) : (offset = xPos - (size - i));
                position = `${offset}-${yPos}`;
            } else {
                let offset;
                yPos + i < 10 ? (offset = yPos + i) : (offset = yPos - (size - i));
                position = `${xPos}-${offset}`;
            }
            DOMManip.getElement(`#set-up-board #space-${position}`).classList.toggle("bad-hover");
        }
    };

    const hoverSetUp = e => {
        const size = parseInt(DOMManip.getElement("#ship-name").dataset.size);
        const direction = DOMManip.getElement("#ship-rotate-button").dataset.direction;
        for (let i = 0; i < size; i++) {
            let xPos = parseInt(e.currentTarget.dataset.xpos);
            let yPos = parseInt(e.currentTarget.dataset.ypos);
            let position;
            if (direction == "right") {
                let offset;
                xPos + i < 10 ? (offset = xPos + i) : (offset = xPos - (size - i));
                position = `${offset}-${yPos}`;
            } else {
                let offset;
                yPos + i < 10 ? (offset = yPos + i) : (offset = yPos - (size - i));
                position = `${xPos}-${offset}`;
            }
            if (DOMManip.getElement(`#set-up-board #space-${position}`).classList.contains("boat-placed")) {
                _badHover(xPos, yPos, size, direction);
                return;
            }
            DOMManip.getElement(`#set-up-board #space-${position}`).classList.toggle("hover");
        }
    };
    const addHoverAttack = e => {
        const position = `${e.currentTarget.dataset.xpos}-${e.currentTarget.dataset.ypos}`;
        DOMManip.getElement(`#computer-board #space-${position}`).classList.add("hover");
    };
    const removeHoverAttack = e => {
        const position = `${e.currentTarget.dataset.xpos}-${e.currentTarget.dataset.ypos}`;
        DOMManip.getElement(`#computer-board #space-${position}`).classList.remove("hover");
    };
    const displayBoatSetUp = e => {
        const shipName = DOMManip.getElement("#ship-name");
        let shipIndex = parseInt(shipName.dataset.index);
        shipName.textContent = shipArray[shipIndex].shipName;
        shipName.setAttribute("data-size", shipArray[shipIndex].shipSize);
        shipName.setAttribute("data-index", ++shipIndex);
        if (e) {
            hoverSetUp(e);
        }
        if (shipIndex > 5) {
            EventHandler.deactivateSpaces("#set-up-board");
        }
    };

    const placePlayerShips = ships => {
        ships.forEach(ship => {
            ship.getPosition().forEach(position => {
                DOMManip.getElement(`#player-board #space-${position.xPos}-${position.yPos}`).classList.add(
                    "boat-placed"
                );
            });
        });
    };
    const fillInAttack = (x, y, playerName, hit) => {
        DOMManip.getElement(`#${playerName}-board #space-${x}-${y}`).classList.add("attacked");
        if (hit) {
            DOMManip.getElement(`#${playerName}-board #space-${x}-${y}`).classList.add("hit");
        }
    };
    const markDestroyedShip = (position, playerName) => {
        position.forEach(space => {
            const spaceElem = DOMManip.getElement(`#${playerName}-board #space-${space.xPos}-${space.yPos}`);
            spaceElem.classList.add("destroyed");
            spaceElem.classList.remove("hit");
        });
    };
    const displayMessage = message => {
        DOMManip.getElement("#game-instructions").textContent = message;
    };

    const rebuildBoards = () => {
        const playerBoardWrapper = DOMManip.getElement("#player-board-wrapper");
        playerBoardWrapper.firstElementChild.remove();
        playerBoardWrapper.insertBefore(_makeGrid("player-board"), playerBoardWrapper.lastElementChild);
        const computerBoardWrapper = DOMManip.getElement("#computer-board-wrapper");
        computerBoardWrapper.firstElementChild.remove();
        computerBoardWrapper.insertBefore(_makeGrid("computer-board"), computerBoardWrapper.lastElementChild);
    };

    return {
        activateBoard,
        buildStartingPage,
        buildNewGameModal,
        displayBoatSetUp,
        toggleRotateButton,
        hoverSetUp,
        addHoverAttack,
        removeHoverAttack,
        placePlayerShips,
        fillInAttack,
        markDestroyedShip,
        displayMessage,
        rebuildBoards,
    };
})();
