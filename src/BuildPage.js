import { DOMManip } from "./DOMManip";

export const BuildPage = (() => {
    const _makeGrid = () => {
        const gridContainer = DOMManip.makeNewElement("div", "", "board");
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
        const boardContainer = DOMManip.makeNewElement("div", "board-container");
        const playerBoardWrapper = DOMManip.makeNewElement("div", "player-board-wrapper", "board-wrapper");
        const playerBoard = _makeGrid();
        playerBoard.setAttribute("id", "player-board");
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
        const computerBoard = _makeGrid();
        computerBoard.setAttribute("id", "computer-board");
        const computerBoardLabel = DOMManip.makeNewElement(
            "div",
            "computer-board-label",
            "board-label",
            "Computer's Board"
        );
        DOMManip.appendChildren(computerBoardWrapper, computerBoard, computerBoardLabel);

        DOMManip.appendChildren(boardContainer, playerBoardWrapper, computerBoardWrapper);
        content.appendChild(boardContainer);
        DOMManip.appendChildren(document.body, header, content);
    };

    return { buildStartingPage };
})();
