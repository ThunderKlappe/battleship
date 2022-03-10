import { DOMManip } from "./DOMManip";
import { EventHandler } from "./EventHandler";
import { Modal } from "./Modal";

export const BuildPage = (() => {
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
            "Rotate"
        );
        const setUpGrid = _makeGrid("set-up-board");
        setUpGrid.classList.add("active");
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
            .then(EventHandler.activateStartGameButton())
            .then(EventHandler.activateSpaces("#set-up-board"))
            .then(displayBoatSetUp());
    };
    const displayBoatSetUp = () => {
        const shipArray = [
            { shipName: "Carrier", shipSize: 5 },
            { shipName: "Battleship", shipSize: 4 },
            { shipName: "Cruiser", shipSize: 3 },
            { shipName: "Submarine", shipSize: 3 },
            { shipName: "Destroyer", shipSize: 2 },
        ];
        const shipName = DOMManip.getElement("#ship-name");
        let shipIndex = parseInt(shipName.dataset.index);
        shipName.textContent = shipArray[shipIndex].shipName;
        shipName.setAttribute("data-size", shipArray[shipIndex].shipSize);
        shipName.setAttribute("data-index", ++shipIndex);
    };

    return { buildStartingPage, buildNewGameModal, displayBoatSetUp };
})();
