/* eslint-disable no-unused-vars */
import "./style.css";
import { BuildPage } from "./BuildPage";
import Player from "./Player";

export const Game = (() => {
    const _humanPlayer = Player();
    const newGame = () => {
        BuildPage.buildNewGameModal();
    };
    const spaceClicked = e => {
        e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputer(e);
    };
    const _placeBoat = e => {
        e.currentTarget.classList.add("boat-placed");
        _humanPlayer.addShip(1, e.currentTarget.dataset.xpos, e.currentTarget.dataset.ypos);
        BuildPage.displayBoatSetUp();
    };
    const _attackComputer = e => {};
    const startGame = () => {};
    return { newGame, spaceClicked, startGame };
})();

const initPage = (() => {
    Promise.resolve(BuildPage.buildStartingPage());
    // .then(Promise.resolve(BuildPage.buildNewGameModal()));
})();
