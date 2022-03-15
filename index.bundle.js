/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/BuildPage.js":
/*!**************************!*\
  !*** ./src/BuildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildPage": () => (/* binding */ BuildPage)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/Modal.js");
/* harmony import */ var _ships_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ships.json */ "./src/ships.json");
/* eslint-disable no-unused-vars */




var BuildPage = function () {
  var activateBoard = function activateBoard(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement(id).classList.add("active");
  };

  var _makeGrid = function _makeGrid(id) {
    var gridContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", id, "board");

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        gridContainer.appendChild(_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "space-".concat(j, "-").concat(i), "board-space", "", {
          "data-xPos": j
        }, {
          "data-yPos": i
        }));
      }
    }

    return gridContainer;
  };

  var buildStartingPage = function buildStartingPage() {
    var header = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "header", "", "Battleship");
    var content = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "content");
    var gameContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "game-container");
    var instructions = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "game-instructions", "board-label", "The game is simple: destroy your opponent before they destroy you.");
    var boardsContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "boards-container");
    var playerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "player-board-wrapper", "board-wrapper");

    var playerBoard = _makeGrid("player-board");

    var playerBoardLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "player-board-label", "board-label", "Player's Board");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(playerBoardWrapper, playerBoard, playerBoardLabel);
    var computerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "computer-board-wrapper", "board-wrapper");

    var computerBoard = _makeGrid("computer-board");

    var computerBoardLabel = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "computer-board-label", "board-label", "Computer's Board");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(computerBoardWrapper, computerBoard, computerBoardLabel);
    var newGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "new-game-button", "page-button", "New Game");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(boardsContainer, playerBoardWrapper, computerBoardWrapper);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(gameContainer, instructions, boardsContainer, newGameButton);
    content.appendChild(gameContainer);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(document.body, header, content);
    _EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateNewGameButton();
  };

  var buildNewGameModal = function buildNewGameModal() {
    var newGameModal = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "new-game-modal", "modal content");
    var newGameTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "new-game-title", "modal-title", "Please place your ships on the grid");
    var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("div", "ship-name", "ship-name", "", {
      "data-index": 0
    });
    var rotateButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "ship-rotate-button", "modal-button", "Rotate", {
      "data-direction": "right"
    });

    var setUpGrid = _makeGrid("set-up-board");

    var startGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.makeNewElement("button", "start-game-button", "modal-button", "Start Game");
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.appendChildren(newGameModal, newGameTitle, shipName, rotateButton, setUpGrid, startGameButton);
    Promise.resolve(_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal.displayModal(newGameModal)).then(_EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateNewGameModal()).then(_EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.activateSpaces("#set-up-board")).then(displayBoatSetUp()).then(activateBoard("#set-up-board"));
  };

  var toggleRotateButton = function toggleRotateButton() {
    var rotateButton = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-rotate-button");
    var currentState = rotateButton.dataset.direction;
    currentState == "right" ? rotateButton.dataset.direction = "down" : rotateButton.dataset.direction = "right";
  };

  var _badHover = function _badHover(xPos, yPos, size, direction) {
    for (var i = 0; i < size; i++) {
      var position = void 0;

      if (direction == "right") {
        var offset = void 0;
        xPos + i < 10 ? offset = xPos + i : offset = xPos - (size - i);
        position = "".concat(offset, "-").concat(yPos);
      } else {
        var _offset = void 0;

        yPos + i < 10 ? _offset = yPos + i : _offset = yPos - (size - i);
        position = "".concat(xPos, "-").concat(_offset);
      }

      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.toggle("bad-hover");
    }
  };

  var hoverSetUp = function hoverSetUp(e) {
    var size = parseInt(_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-name").dataset.size);
    var direction = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-rotate-button").dataset.direction;

    for (var i = 0; i < size; i++) {
      var xPos = parseInt(e.currentTarget.dataset.xpos);
      var yPos = parseInt(e.currentTarget.dataset.ypos);
      var position = void 0;

      if (direction == "right") {
        var offset = void 0;
        xPos + i < 10 ? offset = xPos + i : offset = xPos - (size - i);
        position = "".concat(offset, "-").concat(yPos);
      } else {
        var _offset2 = void 0;

        yPos + i < 10 ? _offset2 = yPos + i : _offset2 = yPos - (size - i);
        position = "".concat(xPos, "-").concat(_offset2);
      }

      if (_DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.contains("boat-placed")) {
        _badHover(xPos, yPos, size, direction);

        return;
      }

      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#set-up-board #space-".concat(position)).classList.toggle("hover");
    }
  };

  var addHoverAttack = function addHoverAttack(e) {
    var position = "".concat(e.currentTarget.dataset.xpos, "-").concat(e.currentTarget.dataset.ypos);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board #space-".concat(position)).classList.add("hover");
  };

  var removeHoverAttack = function removeHoverAttack(e) {
    var position = "".concat(e.currentTarget.dataset.xpos, "-").concat(e.currentTarget.dataset.ypos);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board #space-".concat(position)).classList.remove("hover");
  };

  var displayBoatSetUp = function displayBoatSetUp(e) {
    var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#ship-name");
    var shipIndex = parseInt(shipName.dataset.index);
    shipName.textContent = _ships_json__WEBPACK_IMPORTED_MODULE_3__[shipIndex].shipName;
    shipName.setAttribute("data-size", _ships_json__WEBPACK_IMPORTED_MODULE_3__[shipIndex].shipSize);
    shipName.setAttribute("data-index", ++shipIndex);

    if (e) {
      hoverSetUp(e);
    }

    if (shipIndex > 5) {
      _EventHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler.deactivateSpaces("#set-up-board");
    }
  };

  var placePlayerShips = function placePlayerShips(ships) {
    ships.forEach(function (ship) {
      ship.getPosition().forEach(function (position) {
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#player-board #space-".concat(position.xPos, "-").concat(position.yPos)).classList.add("boat-placed");
      });
    });
  };

  var fillInAttack = function fillInAttack(x, y, playerName, hit) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(x, "-").concat(y)).classList.add("attacked");

    if (hit) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(x, "-").concat(y)).classList.add("hit");
    }
  };

  var markDestroyedShip = function markDestroyedShip(position, playerName) {
    position.forEach(function (space) {
      var spaceElem = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#".concat(playerName, "-board #space-").concat(space.xPos, "-").concat(space.yPos));
      spaceElem.classList.add("destroyed");
      spaceElem.classList.remove("hit");
    });
  };

  var displayMessage = function displayMessage(message) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#game-instructions").textContent = message;
  };

  var rebuildBoards = function rebuildBoards() {
    var playerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#player-board-wrapper");
    playerBoardWrapper.firstElementChild.remove();
    playerBoardWrapper.insertBefore(_makeGrid("player-board"), playerBoardWrapper.lastElementChild);
    var computerBoardWrapper = _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board-wrapper");
    computerBoardWrapper.firstElementChild.remove();
    computerBoardWrapper.insertBefore(_makeGrid("computer-board"), computerBoardWrapper.lastElementChild);
  };

  return {
    activateBoard: activateBoard,
    buildStartingPage: buildStartingPage,
    buildNewGameModal: buildNewGameModal,
    displayBoatSetUp: displayBoatSetUp,
    toggleRotateButton: toggleRotateButton,
    hoverSetUp: hoverSetUp,
    addHoverAttack: addHoverAttack,
    removeHoverAttack: removeHoverAttack,
    placePlayerShips: placePlayerShips,
    fillInAttack: fillInAttack,
    markDestroyedShip: markDestroyedShip,
    displayMessage: displayMessage,
    rebuildBoards: rebuildBoards
  };
}();

/***/ }),

/***/ "./src/DOMManip.js":
/*!*************************!*\
  !*** ./src/DOMManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManip": () => (/* binding */ DOMManip)
/* harmony export */ });
var DOMManip = function () {
  //shorthand to get elements easier
  var getElement = function getElement(selector) {
    return document.querySelector(selector);
  };

  var getElements = function getElements(selector) {
    return document.querySelectorAll(selector);
  }; //shorthand to make a new element and add attributes to it


  var makeNewElement = function makeNewElement(type) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var HTMLClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var newElem = document.createElement(type);

    if (id != "") {
      newElem.setAttribute("id", id);
    }

    if (HTMLClass != "") {
      newElem.setAttribute("class", HTMLClass);
    }

    newElem.textContent = text;

    for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      attributes[_key - 4] = arguments[_key];
    }

    if (attributes.length > 0) {
      attributes.forEach(function (att) {
        return newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]);
      });
    }

    return newElem;
  }; //adds all of the DOM elements to a parent


  var appendChildren = function appendChildren(parent) {
    for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      children[_key2 - 1] = arguments[_key2];
    }

    children.forEach(function (child) {
      return parent.appendChild(child);
    });
  }; //inserts a DOM element after another element


  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }; //clears out all child nodes of an element, skips as many elements as requested


  var removeAllChildren = function removeAllChildren(element) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = element.childNodes.length; i > skip; i--) {
      element.childNodes[i - 1].remove();
    }
  };

  return {
    getElement: getElement,
    getElements: getElements,
    makeNewElement: makeNewElement,
    appendChildren: appendChildren,
    insertAfter: insertAfter,
    removeAllChildren: removeAllChildren
  };
}();

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandler": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _BuildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildPage */ "./src/BuildPage.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");



var EventHandler = function () {
  var activateNewGameButton = function activateNewGameButton() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#new-game-button").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.newGame);
  };

  var activateNewGameModal = function activateNewGameModal() {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#ship-rotate-button").addEventListener("click", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.toggleRotateButton);
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#start-game-button").addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.startGame);
  };

  var activateSpaces = function activateSpaces(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space:not(.attacked)")).forEach(function (space) {
      space.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      } else if (id == "#computer-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.addHoverAttack);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.removeHoverAttack);
      }
    });
  };

  var deactivateSpaces = function deactivateSpaces(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space")).forEach(function (space) {
      space.removeEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      } else if (id == "#computer-board") {
        space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
        space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
      }
    });
  }; // const deactivateAttackedSpace = space => {
  //     space.removeEventListener("click", Game.spaceClicked);
  //     space.removeEventListener("mouseover", BuildPage.hoverAttack);
  //     space.removeEventListener("mouseout", BuildPage.hoverAttack);
  // };


  return {
    activateNewGameButton: activateNewGameButton,
    activateNewGameModal: activateNewGameModal,
    activateSpaces: activateSpaces,
    deactivateSpaces: deactivateSpaces //deactivateAttackedSpace,

  };
}();

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");

function Board() {
  var _spaces = _initSpaces();

  var _ships = [];
  var _hitList = [];
  var _spaceList = [];

  function _initSpaces() {
    var spaces = [];

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        spaces.push({
          xPos: i,
          yPos: j,
          attacked: false
        });
      }
    }

    return spaces;
  }

  function getBoard() {
    return _spaces.map(function (x) {
      return x;
    });
  }

  function checkPlace(x, y) {
    return _spaces[_spaces.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    })];
  }

  function attackSpace(x, y) {
    _spaces[_spaces.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    })].attacked = true;
    var hit = -1;

    _ships.forEach(function (ship, index) {
      if (ship.attackSpace(x, y)) {
        hit = index;
      }
    });

    _hitList.push({
      xPos: x,
      yPos: y
    });

    return hit;
  }

  function addShip(size, x, y, dir, name) {
    _ships.push((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(size, x, y, dir, name));

    for (var i = 0; i < size; i++) {
      if (dir == "right") {
        _spaceList.push({
          xPos: parseInt(x) + i,
          yPos: y
        });
      } else {
        _spaceList.push({
          xPos: x,
          yPos: parseInt(y) + i
        });
      }
    }
  }

  function getShips() {
    return _ships.map(function (x) {
      return x;
    });
  }

  function getHitList() {
    return _hitList.map(function (x) {
      return x;
    });
  }

  function getSpaceList() {
    return _spaceList.map(function (x) {
      return x;
    });
  }

  function allDestroyed() {
    return _ships.every(function (ship) {
      return ship.isDestroyed() == true;
    });
  }

  return {
    getBoard: getBoard,
    checkPlace: checkPlace,
    attackSpace: attackSpace,
    addShip: addShip,
    getShips: getShips,
    getHitList: getHitList,
    getSpaceList: getSpaceList,
    allDestroyed: allDestroyed
  };
}

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");



var Modal = function () {
  function displayModal(_x) {
    return _displayModal.apply(this, arguments);
  }

  function _displayModal() {
    _displayModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(modal) {
      var modalContainer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              modalContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.makeNewElement("div", "modal-background", "modal back");
              modalContainer.appendChild(modal);
              Promise.resolve(document.body.appendChild(modalContainer)).then(function () {
                setTimeout(function () {
                  return modalContainer.classList.add("active");
                }, 0);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _displayModal.apply(this, arguments);
  }

  function closeCurrentModal() {
    return _closeCurrentModal.apply(this, arguments);
  }

  function _closeCurrentModal() {
    _closeCurrentModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var modal;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              modal = _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElement("#modal-background");
              Promise.resolve(modal.classList.remove("active")).then(setTimeout(function () {
                return modal.remove();
              }, 200));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _closeCurrentModal.apply(this, arguments);
  }

  return {
    displayModal: displayModal,
    closeCurrentModal: closeCurrentModal
  };
}();

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");

function Player() {
  var _board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var _lost = false;
  var _isTurn = false;
  var lastResult = "";

  function isLost() {
    return _lost;
  }

  function toggleTurn() {
    _isTurn = !_isTurn;
  }

  function getTurn() {
    return _isTurn;
  }

  function addShip(size, x, y, dir, name) {
    _board.addShip(size, x, y, dir, name);
  }

  function attack(x, y) {
    var hitShipIndex = _board.attackSpace(x, y);

    if (_board.allDestroyed()) {
      _lost = true;
    }

    return hitShipIndex;
  }

  function getBoard() {
    return _board;
  }

  return {
    isLost: isLost,
    toggleTurn: toggleTurn,
    getTurn: getTurn,
    addShip: addShip,
    attack: attack,
    getBoard: getBoard,
    lastResult: lastResult
  };
}

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(size, x, y, dir, name) {
  var _health = Array.from({
    length: size
  }, function () {
    return "good";
  });

  var _destroyed = false;

  var _coordinates = _setStarting(x, y, dir);

  var _name = name;

  function getCurrentHealth() {
    return _health.map(function (x) {
      return x;
    });
  }

  function isDestroyed() {
    return _destroyed;
  }

  function _damage(location) {
    _health[location] = "damage";

    if (_health.every(function (place) {
      return place == "damage";
    })) {
      _destroyed = true;
    }
  }

  function _setStarting(incomingx, incomingy) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "right";
    var spaces = [];
    var x = parseInt(incomingx);
    var y = parseInt(incomingy);

    for (var i = 0; i < size; i++) {
      if (dir == "right") {
        spaces.push({
          xPos: x + i,
          yPos: y
        });
      } else if (dir == "left") {
        spaces.push({
          xPos: x - i,
          yPos: y
        });
      } else if (dir == "down") {
        spaces.push({
          xPos: x,
          yPos: y + i
        });
      } else if (dir == "up") {
        spaces.push({
          xPos: x,
          yPos: y - i
        });
      }
    }

    return spaces;
  }

  function getPosition() {
    return _coordinates.map(function (x) {
      return x;
    });
  }

  function getName() {
    return _name;
  }

  function attackSpace(x, y) {
    var attackIndex = _coordinates.findIndex(function (element) {
      return element.xPos == x && element.yPos == y;
    });

    if (attackIndex >= 0) {
      _damage(attackIndex);

      return true;
    }

    return false;
  }

  return {
    getCurrentHealth: getCurrentHealth,
    isDestroyed: isDestroyed,
    getPosition: getPosition,
    getName: getName,
    attackSpace: attackSpace
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _BuildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildPage */ "./src/BuildPage.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./src/Modal.js");
/* harmony import */ var _ships_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ships.json */ "./src/ships.json");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");
/* eslint-disable no-unexpected-multiline */

/* eslint-disable no-unused-vars */







var Game = function () {
  var _humanPlayer;

  var _computerPlayer;

  var newGame = function newGame() {
    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.buildNewGameModal();
    _humanPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _computerPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };

  var spaceClicked = function spaceClicked(e) {
    e.currentTarget.parentElement.id == "set-up-board" ? _placeBoat(e) : _attackComputerPlayer(e);
  };

  var _switchTurns = function _switchTurns() {
    _humanPlayer.toggleTurn();

    _computerPlayer.toggleTurn();
  };

  var _placeBoat = function _placeBoat(e) {
    var hoverSpaces = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElements(".board-space.hover");
    var badHoverSpaces = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElements(".board-space.bad-hover");

    if (badHoverSpaces.length == 0) {
      hoverSpaces.forEach(function (space) {
        space.classList.add("boat-placed");
        space.classList.toggle("hover");
      });
      var shipSize = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").dataset.size;
      var shipName = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").textContent;
      var shipDirection = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-rotate-button").dataset.direction;

      _humanPlayer.addShip(shipSize, e.currentTarget.dataset.xpos, e.currentTarget.dataset.ypos, shipDirection, shipName);

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayBoatSetUp(e);
    }
  };

  var _isAttackValid = function _isAttackValid(player, x, y) {
    var valid = true;
    player.getBoard().getHitList().forEach(function (space) {
      if (space.xPos == x && space.yPos == y) {
        valid = false;
      }
    });
    return valid;
  };

  var _isAttackHit = function _isAttackHit(player, x, y) {
    var hit = false;

    if (player.getBoard().getSpaceList().some(function (space) {
      return space.xPos == x && space.yPos == y;
    })) {
      hit = true;
    }

    return hit;
  };

  var _checkDestroyed = function _checkDestroyed(player, playerName, attackedShip) {
    if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.markDestroyedShip(player.getBoard().getShips()[attackedShip].getPosition(), playerName);
      return true;
    }

    return false;
  };

  var _attackPlayer = function _attackPlayer(player, x, y) {
    var playerName;
    player == _humanPlayer ? playerName = "player" : playerName = "computer";

    if (_isAttackValid(player, x, y)) {
      var attackedShip = player.attack(x, y);

      var hit = _isAttackHit(player, x, y);

      player.lastResult = hit;
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.fillInAttack(x, y, playerName, hit);

      if (attackedShip >= 0) {
        if (_checkDestroyed(player, playerName, attackedShip)) {
          player.lastResult = player.getBoard().getShips()[attackedShip].getName();
        }
      }

      return true;
    }

    return false;
  };

  var _displayLastResult = function _displayLastResult(player) {
    var lastResult = player.lastResult;

    if (player == _computerPlayer) {
      lastResult == true ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You fire at the computer... It's a Hit!") : lastResult == false ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You fire at the computer... It's a Miss...") : _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You sunk their ".concat(lastResult, "!"));
    } else {
      lastResult == true ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer fires at you... It's a Hit...") : lastResult == false ? _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer fires at you... It's a Miss!") : _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("They sunk your ".concat(lastResult, "!"));
    }
  };

  var _attackComputerPlayer = function _attackComputerPlayer(e) {
    var xPos = e.currentTarget.dataset.xpos;
    var yPos = e.currentTarget.dataset.ypos;

    _attackPlayer(_computerPlayer, xPos, yPos);

    _displayLastResult(_computerPlayer);

    _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.deactivateSpaces("#computer-board");
    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.removeHoverAttack(e);

    _switchTurns();

    _playTurn();
  }; //for testing only


  var _placeComputerShips = function _placeComputerShips() {
    _computerPlayer.getBoard().getShips().forEach(function (ship) {
      ship.getPosition().forEach(function (position) {
        _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#computer-board #space-".concat(position.xPos, "-").concat(position.yPos)).classList.add("boat-placed");
      });
    });
  };

  var _generateComputerShips = function _generateComputerShips() {
    var i = 0; //go through each ship

    var _loop = function _loop() {
      var xPos = void 0;
      var yPos = void 0;
      var direction = void 0; //randomly pick a direction either right or down

      Math.floor(Math.random() * 2) == 0 ? direction = "right" : direction = "down";

      if (direction == "right") {
        //restrict the random so it doesn't pick a starting place that would put the pieces outside
        //of the grid
        xPos = Math.floor(Math.random() * (10 - _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize));
        yPos = Math.floor(Math.random() * 10);
      } else {
        xPos = Math.floor(Math.random() * 10);
        yPos = Math.floor(Math.random() * (10 - _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize));
      }

      var taken = false;
      var valid = true;

      _computerPlayer.getBoard().getShips().forEach(function (ship) {
        ship.getPosition().forEach(function (pos) {
          //look at each of the current ships
          for (var j = 0; j < _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize; j++) {
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
      }); //if the space is not already taken, add the ship to the Player's board


      if (!taken) {
        _computerPlayer.addShip(_ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipSize, xPos, yPos, direction, _ships_json__WEBPACK_IMPORTED_MODULE_5__[i].shipName);

        console.log(_computerPlayer.getBoard().getShips()[i].getPosition()); //go to the next ship in the array

        i++;
      }
    };

    while (i < _ships_json__WEBPACK_IMPORTED_MODULE_5__.length - 1) {
      _loop();
    } //_placeComputerShips();

  };

  var _randomPause = function _randomPause(minLength, maxLength) {
    var pauseLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);
    return new Promise(function (resolve) {
      return setTimeout(resolve, pauseLength);
    });
  };

  var _coinFlip = function _coinFlip() {
    return Math.floor(Math.random() * 2);
  };

  var _chooseTurn = function _chooseTurn() {
    if (_coinFlip()) {
      _humanPlayer.toggleTurn();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("Flipping Coin... Player goes first.");
    } else {
      _computerPlayer.toggleTurn();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("Flipping Coin... Computer goes first.");
    }
  };

  var _computerPlayersTurn = function _computerPlayersTurn() {
    var playedValid = false;

    while (!playedValid) {
      playedValid = _attackPlayer(_humanPlayer, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    }

    _displayLastResult(_humanPlayer);

    _switchTurns();
  };

  var _playTurn = function _playTurn() {
    if (_humanPlayer.getTurn()) {
      _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.activateSpaces("#computer-board");
    } else {
      _randomPause(1000, 3000).then(function () {
        return _computerPlayersTurn();
      }).then(function () {
        return _playTurn();
      });
    }
  };

  var startGame = function startGame() {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").dataset.index == 6) {
      Promise.resolve(_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal.closeCurrentModal());
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.rebuildBoards();
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.placePlayerShips(_humanPlayer.getBoard().getShips());

      _generateComputerShips();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.activateBoard("#computer-board");

      _chooseTurn();

      _playTurn();
    } else {
      var startGameButton = _DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#start-game-button");
      startGameButton.setCustomValidity("");
      startGameButton.setCustomValidity("Please place all of your ships");
      startGameButton.reportValidity();
    }
  };

  return {
    newGame: newGame,
    spaceClicked: spaceClicked,
    startGame: startGame
  };
}();

var initPage = function () {
  Promise.resolve(_BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.buildStartingPage());
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,cAAc;IACd,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space:not(.attacked) {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./src/ships.json":
/*!************************!*\
  !*** ./src/ships.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"shipName":"Carrier","shipSize":5},{"shipName":"Battleship","shipSize":4},{"shipName":"Cruiser","shipSize":3},{"shipName":"Submarine","shipSize":3},{"shipName":"Destroyer","shipSize":2},{"shipName":"All Ships Placed","shipSize":0}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1JLFNBQVMsR0FBSSxZQUFNO0FBQzVCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsRUFBRSxFQUFJO0FBQ3hCTixJQUFBQSwwREFBQSxDQUFvQk0sRUFBcEIsRUFBd0JFLFNBQXhCLENBQWtDQyxHQUFsQyxDQUFzQyxRQUF0QztBQUNILEdBRkQ7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUosRUFBRSxFQUFJO0FBQ3BCLFFBQU1LLGFBQWEsR0FBR1gsOERBQUEsQ0FBd0IsS0FBeEIsRUFBK0JNLEVBQS9CLEVBQW1DLE9BQW5DLENBQXRCOztBQUNBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekJILFFBQUFBLGFBQWEsQ0FBQ0ksV0FBZCxDQUNJZiw4REFBQSxDQUNJLEtBREosa0JBRWFjLENBRmIsY0FFa0JELENBRmxCLEdBR0ksYUFISixFQUlJLEVBSkosRUFLSTtBQUFFLHVCQUFhQztBQUFmLFNBTEosRUFNSTtBQUFFLHVCQUFhRDtBQUFmLFNBTkosQ0FESjtBQVVIO0FBQ0o7O0FBQ0QsV0FBT0YsYUFBUDtBQUNILEdBakJEOztBQWtCQSxNQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsUUFBTUMsTUFBTSxHQUFHakIsOERBQUEsQ0FBd0IsS0FBeEIsRUFBK0IsUUFBL0IsRUFBeUMsRUFBekMsRUFBNkMsWUFBN0MsQ0FBZjtBQUNBLFFBQU1rQixPQUFPLEdBQUdsQiw4REFBQSxDQUF3QixLQUF4QixFQUErQixTQUEvQixDQUFoQjtBQUNBLFFBQU1tQixhQUFhLEdBQUduQiw4REFBQSxDQUF3QixLQUF4QixFQUErQixnQkFBL0IsQ0FBdEI7QUFDQSxRQUFNb0IsWUFBWSxHQUFHcEIsOERBQUEsQ0FDakIsS0FEaUIsRUFFakIsbUJBRmlCLEVBR2pCLGFBSGlCLEVBSWpCLG9FQUppQixDQUFyQjtBQU1BLFFBQU1xQixlQUFlLEdBQUdyQiw4REFBQSxDQUF3QixLQUF4QixFQUErQixrQkFBL0IsQ0FBeEI7QUFDQSxRQUFNc0Isa0JBQWtCLEdBQUd0Qiw4REFBQSxDQUF3QixLQUF4QixFQUErQixzQkFBL0IsRUFBdUQsZUFBdkQsQ0FBM0I7O0FBQ0EsUUFBTXVCLFdBQVcsR0FBR2IsU0FBUyxDQUFDLGNBQUQsQ0FBN0I7O0FBQ0EsUUFBTWMsZ0JBQWdCLEdBQUd4Qiw4REFBQSxDQUNyQixLQURxQixFQUVyQixvQkFGcUIsRUFHckIsYUFIcUIsRUFJckIsZ0JBSnFCLENBQXpCO0FBTUFBLElBQUFBLDhEQUFBLENBQXdCc0Isa0JBQXhCLEVBQTRDQyxXQUE1QyxFQUF5REMsZ0JBQXpEO0FBRUEsUUFBTUUsb0JBQW9CLEdBQUcxQiw4REFBQSxDQUN6QixLQUR5QixFQUV6Qix3QkFGeUIsRUFHekIsZUFIeUIsQ0FBN0I7O0FBS0EsUUFBTTJCLGFBQWEsR0FBR2pCLFNBQVMsQ0FBQyxnQkFBRCxDQUEvQjs7QUFDQSxRQUFNa0Isa0JBQWtCLEdBQUc1Qiw4REFBQSxDQUN2QixLQUR1QixFQUV2QixzQkFGdUIsRUFHdkIsYUFIdUIsRUFJdkIsa0JBSnVCLENBQTNCO0FBTUFBLElBQUFBLDhEQUFBLENBQXdCMEIsb0JBQXhCLEVBQThDQyxhQUE5QyxFQUE2REMsa0JBQTdEO0FBQ0EsUUFBTUMsYUFBYSxHQUFHN0IsOERBQUEsQ0FBd0IsUUFBeEIsRUFBa0MsaUJBQWxDLEVBQXFELGFBQXJELEVBQW9FLFVBQXBFLENBQXRCO0FBRUFBLElBQUFBLDhEQUFBLENBQXdCcUIsZUFBeEIsRUFBeUNDLGtCQUF6QyxFQUE2REksb0JBQTdEO0FBRUExQixJQUFBQSw4REFBQSxDQUF3Qm1CLGFBQXhCLEVBQXVDQyxZQUF2QyxFQUFxREMsZUFBckQsRUFBc0VRLGFBQXRFO0FBQ0FYLElBQUFBLE9BQU8sQ0FBQ0gsV0FBUixDQUFvQkksYUFBcEI7QUFDQW5CLElBQUFBLDhEQUFBLENBQXdCOEIsUUFBUSxDQUFDQyxJQUFqQyxFQUF1Q2QsTUFBdkMsRUFBK0NDLE9BQS9DO0FBRUFqQixJQUFBQSw2RUFBQTtBQUNILEdBM0NEOztBQTZDQSxNQUFNZ0MsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQU1DLFlBQVksR0FBR2xDLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLGdCQUEvQixFQUFpRCxlQUFqRCxDQUFyQjtBQUNBLFFBQU1tQyxZQUFZLEdBQUduQyw4REFBQSxDQUNqQixLQURpQixFQUVqQixnQkFGaUIsRUFHakIsYUFIaUIsRUFJakIscUNBSmlCLENBQXJCO0FBTUEsUUFBTW9DLFFBQVEsR0FBR3BDLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLFdBQS9CLEVBQTRDLFdBQTVDLEVBQXlELEVBQXpELEVBQTZEO0FBQzFFLG9CQUFjO0FBRDRELEtBQTdELENBQWpCO0FBR0EsUUFBTXFDLFlBQVksR0FBR3JDLDhEQUFBLENBQ2pCLFFBRGlCLEVBRWpCLG9CQUZpQixFQUdqQixjQUhpQixFQUlqQixRQUppQixFQUtqQjtBQUFFLHdCQUFrQjtBQUFwQixLQUxpQixDQUFyQjs7QUFPQSxRQUFNc0MsU0FBUyxHQUFHNUIsU0FBUyxDQUFDLGNBQUQsQ0FBM0I7O0FBRUEsUUFBTTZCLGVBQWUsR0FBR3ZDLDhEQUFBLENBQ3BCLFFBRG9CLEVBRXBCLG1CQUZvQixFQUdwQixjQUhvQixFQUlwQixZQUpvQixDQUF4QjtBQU1BQSxJQUFBQSw4REFBQSxDQUNJa0MsWUFESixFQUVJQyxZQUZKLEVBR0lDLFFBSEosRUFJSUMsWUFKSixFQUtJQyxTQUxKLEVBTUlDLGVBTko7QUFTQUMsSUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCdkMsc0RBQUEsQ0FBbUJnQyxZQUFuQixDQUFoQixFQUNLUyxJQURMLENBQ1UxQyw0RUFBQSxFQURWLEVBRUswQyxJQUZMLENBRVUxQyxzRUFBQSxDQUE0QixlQUE1QixDQUZWLEVBR0swQyxJQUhMLENBR1VHLGdCQUFnQixFQUgxQixFQUlLSCxJQUpMLENBSVV0QyxhQUFhLENBQUMsZUFBRCxDQUp2QjtBQUtILEdBeENEOztBQXlDQSxNQUFNMEMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLFFBQU1WLFlBQVksR0FBR3JDLDBEQUFBLENBQW9CLHFCQUFwQixDQUFyQjtBQUNBLFFBQU1nRCxZQUFZLEdBQUdYLFlBQVksQ0FBQ1ksT0FBYixDQUFxQkMsU0FBMUM7QUFDQUYsSUFBQUEsWUFBWSxJQUFJLE9BQWhCLEdBQ09YLFlBQVksQ0FBQ1ksT0FBYixDQUFxQkMsU0FBckIsR0FBaUMsTUFEeEMsR0FFT2IsWUFBWSxDQUFDWSxPQUFiLENBQXFCQyxTQUFyQixHQUFpQyxPQUZ4QztBQUdILEdBTkQ7O0FBT0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLElBQWIsRUFBbUJKLFNBQW5CLEVBQWlDO0FBQy9DLFNBQUssSUFBSXJDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5QyxJQUFwQixFQUEwQnpDLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsVUFBSTBDLFFBQVEsU0FBWjs7QUFDQSxVQUFJTCxTQUFTLElBQUksT0FBakIsRUFBMEI7QUFDdEIsWUFBSU0sTUFBTSxTQUFWO0FBQ0FKLFFBQUFBLElBQUksR0FBR3ZDLENBQVAsR0FBVyxFQUFYLEdBQWlCMkMsTUFBTSxHQUFHSixJQUFJLEdBQUd2QyxDQUFqQyxHQUF1QzJDLE1BQU0sR0FBR0osSUFBSSxJQUFJRSxJQUFJLEdBQUd6QyxDQUFYLENBQXBEO0FBQ0EwQyxRQUFBQSxRQUFRLGFBQU1DLE1BQU4sY0FBZ0JILElBQWhCLENBQVI7QUFDSCxPQUpELE1BSU87QUFDSCxZQUFJRyxPQUFNLFNBQVY7O0FBQ0FILFFBQUFBLElBQUksR0FBR3hDLENBQVAsR0FBVyxFQUFYLEdBQWlCMkMsT0FBTSxHQUFHSCxJQUFJLEdBQUd4QyxDQUFqQyxHQUF1QzJDLE9BQU0sR0FBR0gsSUFBSSxJQUFJQyxJQUFJLEdBQUd6QyxDQUFYLENBQXBEO0FBQ0EwQyxRQUFBQSxRQUFRLGFBQU1ILElBQU4sY0FBY0ksT0FBZCxDQUFSO0FBQ0g7O0FBQ0R4RCxNQUFBQSwwREFBQSxnQ0FBNEN1RCxRQUE1QyxHQUF3RC9DLFNBQXhELENBQWtFaUQsTUFBbEUsQ0FBeUUsV0FBekU7QUFDSDtBQUNKLEdBZEQ7O0FBZ0JBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLENBQUMsRUFBSTtBQUNwQixRQUFNTCxJQUFJLEdBQUdNLFFBQVEsQ0FBQzVELDBEQUFBLENBQW9CLFlBQXBCLEVBQWtDaUQsT0FBbEMsQ0FBMENLLElBQTNDLENBQXJCO0FBQ0EsUUFBTUosU0FBUyxHQUFHbEQsMERBQUEsQ0FBb0IscUJBQXBCLEVBQTJDaUQsT0FBM0MsQ0FBbURDLFNBQXJFOztBQUNBLFNBQUssSUFBSXJDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5QyxJQUFwQixFQUEwQnpDLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsVUFBSXVDLElBQUksR0FBR1EsUUFBUSxDQUFDRCxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JaLE9BQWhCLENBQXdCYSxJQUF6QixDQUFuQjtBQUNBLFVBQUlULElBQUksR0FBR08sUUFBUSxDQUFDRCxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JaLE9BQWhCLENBQXdCYyxJQUF6QixDQUFuQjtBQUNBLFVBQUlSLFFBQVEsU0FBWjs7QUFDQSxVQUFJTCxTQUFTLElBQUksT0FBakIsRUFBMEI7QUFDdEIsWUFBSU0sTUFBTSxTQUFWO0FBQ0FKLFFBQUFBLElBQUksR0FBR3ZDLENBQVAsR0FBVyxFQUFYLEdBQWlCMkMsTUFBTSxHQUFHSixJQUFJLEdBQUd2QyxDQUFqQyxHQUF1QzJDLE1BQU0sR0FBR0osSUFBSSxJQUFJRSxJQUFJLEdBQUd6QyxDQUFYLENBQXBEO0FBQ0EwQyxRQUFBQSxRQUFRLGFBQU1DLE1BQU4sY0FBZ0JILElBQWhCLENBQVI7QUFDSCxPQUpELE1BSU87QUFDSCxZQUFJRyxRQUFNLFNBQVY7O0FBQ0FILFFBQUFBLElBQUksR0FBR3hDLENBQVAsR0FBVyxFQUFYLEdBQWlCMkMsUUFBTSxHQUFHSCxJQUFJLEdBQUd4QyxDQUFqQyxHQUF1QzJDLFFBQU0sR0FBR0gsSUFBSSxJQUFJQyxJQUFJLEdBQUd6QyxDQUFYLENBQXBEO0FBQ0EwQyxRQUFBQSxRQUFRLGFBQU1ILElBQU4sY0FBY0ksUUFBZCxDQUFSO0FBQ0g7O0FBQ0QsVUFBSXhELDBEQUFBLGdDQUE0Q3VELFFBQTVDLEdBQXdEL0MsU0FBeEQsQ0FBa0V3RCxRQUFsRSxDQUEyRSxhQUEzRSxDQUFKLEVBQStGO0FBQzNGYixRQUFBQSxTQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxJQUFiLEVBQW1CSixTQUFuQixDQUFUOztBQUNBO0FBQ0g7O0FBQ0RsRCxNQUFBQSwwREFBQSxnQ0FBNEN1RCxRQUE1QyxHQUF3RC9DLFNBQXhELENBQWtFaUQsTUFBbEUsQ0FBeUUsT0FBekU7QUFDSDtBQUNKLEdBdEJEOztBQXVCQSxNQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFOLENBQUMsRUFBSTtBQUN4QixRQUFNSixRQUFRLGFBQU1JLENBQUMsQ0FBQ0UsYUFBRixDQUFnQlosT0FBaEIsQ0FBd0JhLElBQTlCLGNBQXNDSCxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JaLE9BQWhCLENBQXdCYyxJQUE5RCxDQUFkO0FBQ0EvRCxJQUFBQSwwREFBQSxrQ0FBOEN1RCxRQUE5QyxHQUEwRC9DLFNBQTFELENBQW9FQyxHQUFwRSxDQUF3RSxPQUF4RTtBQUNILEdBSEQ7O0FBSUEsTUFBTXlELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQVAsQ0FBQyxFQUFJO0FBQzNCLFFBQU1KLFFBQVEsYUFBTUksQ0FBQyxDQUFDRSxhQUFGLENBQWdCWixPQUFoQixDQUF3QmEsSUFBOUIsY0FBc0NILENBQUMsQ0FBQ0UsYUFBRixDQUFnQlosT0FBaEIsQ0FBd0JjLElBQTlELENBQWQ7QUFDQS9ELElBQUFBLDBEQUFBLGtDQUE4Q3VELFFBQTlDLEdBQTBEL0MsU0FBMUQsQ0FBb0UyRCxNQUFwRSxDQUEyRSxPQUEzRTtBQUNILEdBSEQ7O0FBSUEsTUFBTXJCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQWEsQ0FBQyxFQUFJO0FBQzFCLFFBQU12QixRQUFRLEdBQUdwQywwREFBQSxDQUFvQixZQUFwQixDQUFqQjtBQUNBLFFBQUlvRSxTQUFTLEdBQUdSLFFBQVEsQ0FBQ3hCLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQm9CLEtBQWxCLENBQXhCO0FBQ0FqQyxJQUFBQSxRQUFRLENBQUNrQyxXQUFULEdBQXVCbkUsd0NBQVMsQ0FBQ2lFLFNBQUQsQ0FBVCxDQUFxQmhDLFFBQTVDO0FBQ0FBLElBQUFBLFFBQVEsQ0FBQ21DLFlBQVQsQ0FBc0IsV0FBdEIsRUFBbUNwRSx3Q0FBUyxDQUFDaUUsU0FBRCxDQUFULENBQXFCSSxRQUF4RDtBQUNBcEMsSUFBQUEsUUFBUSxDQUFDbUMsWUFBVCxDQUFzQixZQUF0QixFQUFvQyxFQUFFSCxTQUF0Qzs7QUFDQSxRQUFJVCxDQUFKLEVBQU87QUFDSEQsTUFBQUEsVUFBVSxDQUFDQyxDQUFELENBQVY7QUFDSDs7QUFDRCxRQUFJUyxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZm5FLE1BQUFBLHdFQUFBLENBQThCLGVBQTlCO0FBQ0g7QUFDSixHQVpEOztBQWNBLE1BQU15RSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEtBQUssRUFBSTtBQUM5QkEsSUFBQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xCQSxNQUFBQSxJQUFJLENBQUNDLFdBQUwsR0FBbUJGLE9BQW5CLENBQTJCLFVBQUFyQixRQUFRLEVBQUk7QUFDbkN2RCxRQUFBQSwwREFBQSxnQ0FBNEN1RCxRQUFRLENBQUNILElBQXJELGNBQTZERyxRQUFRLENBQUNGLElBQXRFLEdBQThFN0MsU0FBOUUsQ0FBd0ZDLEdBQXhGLENBQ0ksYUFESjtBQUdILE9BSkQ7QUFLSCxLQU5EO0FBT0gsR0FSRDs7QUFTQSxNQUFNc0UsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLFVBQVAsRUFBbUJDLEdBQW5CLEVBQTJCO0FBQzVDbkYsSUFBQUEsMERBQUEsWUFBd0JrRixVQUF4QiwyQkFBbURGLENBQW5ELGNBQXdEQyxDQUF4RCxHQUE2RHpFLFNBQTdELENBQXVFQyxHQUF2RSxDQUEyRSxVQUEzRTs7QUFDQSxRQUFJMEUsR0FBSixFQUFTO0FBQ0xuRixNQUFBQSwwREFBQSxZQUF3QmtGLFVBQXhCLDJCQUFtREYsQ0FBbkQsY0FBd0RDLENBQXhELEdBQTZEekUsU0FBN0QsQ0FBdUVDLEdBQXZFLENBQTJFLEtBQTNFO0FBQ0g7QUFDSixHQUxEOztBQU1BLE1BQU0yRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUM3QixRQUFELEVBQVcyQixVQUFYLEVBQTBCO0FBQ2hEM0IsSUFBQUEsUUFBUSxDQUFDcUIsT0FBVCxDQUFpQixVQUFBUyxLQUFLLEVBQUk7QUFDdEIsVUFBTUMsU0FBUyxHQUFHdEYsMERBQUEsWUFBd0JrRixVQUF4QiwyQkFBbURHLEtBQUssQ0FBQ2pDLElBQXpELGNBQWlFaUMsS0FBSyxDQUFDaEMsSUFBdkUsRUFBbEI7QUFDQWlDLE1BQUFBLFNBQVMsQ0FBQzlFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0E2RSxNQUFBQSxTQUFTLENBQUM5RSxTQUFWLENBQW9CMkQsTUFBcEIsQ0FBMkIsS0FBM0I7QUFDSCxLQUpEO0FBS0gsR0FORDs7QUFPQSxNQUFNb0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxPQUFPLEVBQUk7QUFDOUJ4RixJQUFBQSwwREFBQSxDQUFvQixvQkFBcEIsRUFBMENzRSxXQUExQyxHQUF3RGtCLE9BQXhEO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsUUFBTW5FLGtCQUFrQixHQUFHdEIsMERBQUEsQ0FBb0IsdUJBQXBCLENBQTNCO0FBQ0FzQixJQUFBQSxrQkFBa0IsQ0FBQ29FLGlCQUFuQixDQUFxQ3ZCLE1BQXJDO0FBQ0E3QyxJQUFBQSxrQkFBa0IsQ0FBQ3FFLFlBQW5CLENBQWdDakYsU0FBUyxDQUFDLGNBQUQsQ0FBekMsRUFBMkRZLGtCQUFrQixDQUFDc0UsZ0JBQTlFO0FBQ0EsUUFBTWxFLG9CQUFvQixHQUFHMUIsMERBQUEsQ0FBb0IseUJBQXBCLENBQTdCO0FBQ0EwQixJQUFBQSxvQkFBb0IsQ0FBQ2dFLGlCQUFyQixDQUF1Q3ZCLE1BQXZDO0FBQ0F6QyxJQUFBQSxvQkFBb0IsQ0FBQ2lFLFlBQXJCLENBQWtDakYsU0FBUyxDQUFDLGdCQUFELENBQTNDLEVBQStEZ0Isb0JBQW9CLENBQUNrRSxnQkFBcEY7QUFDSCxHQVBEOztBQVNBLFNBQU87QUFDSHZGLElBQUFBLGFBQWEsRUFBYkEsYUFERztBQUVIVyxJQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZHO0FBR0hpQixJQUFBQSxpQkFBaUIsRUFBakJBLGlCQUhHO0FBSUhhLElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBSkc7QUFLSEMsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFMRztBQU1IVyxJQUFBQSxVQUFVLEVBQVZBLFVBTkc7QUFPSE8sSUFBQUEsY0FBYyxFQUFkQSxjQVBHO0FBUUhDLElBQUFBLGlCQUFpQixFQUFqQkEsaUJBUkc7QUFTSFEsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFURztBQVVISyxJQUFBQSxZQUFZLEVBQVpBLFlBVkc7QUFXSEssSUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFYRztBQVlIRyxJQUFBQSxjQUFjLEVBQWRBLGNBWkc7QUFhSEUsSUFBQUEsYUFBYSxFQUFiQTtBQWJHLEdBQVA7QUFlSCxDQWxPd0IsRUFBbEI7Ozs7Ozs7Ozs7Ozs7OztBQ05BLElBQU16RixRQUFRLEdBQUksWUFBTTtBQUMzQjtBQUNBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFzRixRQUFRO0FBQUEsV0FBSS9ELFFBQVEsQ0FBQ2dFLGFBQVQsQ0FBdUJELFFBQXZCLENBQUo7QUFBQSxHQUEzQjs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBRixRQUFRO0FBQUEsV0FBSS9ELFFBQVEsQ0FBQ2tFLGdCQUFULENBQTBCSCxRQUExQixDQUFKO0FBQUEsR0FBNUIsQ0FIMkIsQ0FLM0I7OztBQUNBLE1BQU1qRixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNxRixJQUFELEVBQTZEO0FBQUEsUUFBdEQzRixFQUFzRCx1RUFBakQsRUFBaUQ7QUFBQSxRQUE3QzRGLFNBQTZDLHVFQUFqQyxFQUFpQztBQUFBLFFBQTdCQyxJQUE2Qix1RUFBdEIsRUFBc0I7QUFDaEYsUUFBTUMsT0FBTyxHQUFHdEUsUUFBUSxDQUFDdUUsYUFBVCxDQUF1QkosSUFBdkIsQ0FBaEI7O0FBQ0EsUUFBSTNGLEVBQUUsSUFBSSxFQUFWLEVBQWM7QUFDVjhGLE1BQUFBLE9BQU8sQ0FBQzdCLFlBQVIsQ0FBcUIsSUFBckIsRUFBMkJqRSxFQUEzQjtBQUNIOztBQUNELFFBQUk0RixTQUFTLElBQUksRUFBakIsRUFBcUI7QUFDakJFLE1BQUFBLE9BQU8sQ0FBQzdCLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIyQixTQUE5QjtBQUNIOztBQUNERSxJQUFBQSxPQUFPLENBQUM5QixXQUFSLEdBQXNCNkIsSUFBdEI7O0FBUmdGLHNDQUFmRyxVQUFlO0FBQWZBLE1BQUFBLFVBQWU7QUFBQTs7QUFTaEYsUUFBSUEsVUFBVSxDQUFDQyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCRCxNQUFBQSxVQUFVLENBQUMxQixPQUFYLENBQW1CLFVBQUE0QixHQUFHO0FBQUEsZUFBSUosT0FBTyxDQUFDN0IsWUFBUixDQUFxQmtDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCLENBQWpCLENBQXJCLEVBQTBDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLENBQUQsQ0FBN0MsQ0FBSjtBQUFBLE9BQXRCO0FBQ0g7O0FBRUQsV0FBT0osT0FBUDtBQUNILEdBZEQsQ0FOMkIsQ0FzQjNCOzs7QUFDQSxNQUFNM0UsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDa0YsTUFBRCxFQUF5QjtBQUFBLHVDQUFiQyxRQUFhO0FBQWJBLE1BQUFBLFFBQWE7QUFBQTs7QUFDNUNBLElBQUFBLFFBQVEsQ0FBQ2hDLE9BQVQsQ0FBaUIsVUFBQWlDLEtBQUs7QUFBQSxhQUFJRixNQUFNLENBQUM1RixXQUFQLENBQW1COEYsS0FBbkIsQ0FBSjtBQUFBLEtBQXRCO0FBQ0gsR0FGRCxDQXZCMkIsQ0EyQjNCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLFlBQVYsRUFBMkI7QUFDM0NBLElBQUFBLFlBQVksQ0FBQ0MsVUFBYixDQUF3QnRCLFlBQXhCLENBQXFDb0IsT0FBckMsRUFBOENDLFlBQVksQ0FBQ0UsV0FBM0Q7QUFDSCxHQUZELENBNUIyQixDQWdDM0I7OztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsT0FBRCxFQUF1QjtBQUFBLFFBQWJDLElBQWEsdUVBQU4sQ0FBTTs7QUFDN0MsU0FBSyxJQUFJeEcsQ0FBQyxHQUFHdUcsT0FBTyxDQUFDRSxVQUFSLENBQW1CZixNQUFoQyxFQUF3QzFGLENBQUMsR0FBR3dHLElBQTVDLEVBQWtEeEcsQ0FBQyxFQUFuRCxFQUF1RDtBQUNuRHVHLE1BQUFBLE9BQU8sQ0FBQ0UsVUFBUixDQUFtQnpHLENBQUMsR0FBRyxDQUF2QixFQUEwQnNELE1BQTFCO0FBQ0g7QUFDSixHQUpEOztBQU1BLFNBQU87QUFBRTVELElBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjd0YsSUFBQUEsV0FBVyxFQUFYQSxXQUFkO0FBQTJCbkYsSUFBQUEsY0FBYyxFQUFkQSxjQUEzQjtBQUEyQ2EsSUFBQUEsY0FBYyxFQUFkQSxjQUEzQztBQUEyRHFGLElBQUFBLFdBQVcsRUFBWEEsV0FBM0Q7QUFBd0VLLElBQUFBLGlCQUFpQixFQUFqQkE7QUFBeEUsR0FBUDtBQUNILENBeEN1QixFQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBRU8sSUFBTWxILFlBQVksR0FBSSxZQUFNO0FBQy9CLE1BQU0rQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDaENoQyxJQUFBQSwwREFBQSxDQUFvQixrQkFBcEIsRUFBd0N3SCxnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0VELDJDQUFsRTtBQUNILEdBRkQ7O0FBR0EsTUFBTTNFLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUMvQjVDLElBQUFBLDBEQUFBLENBQW9CLHFCQUFwQixFQUEyQ3dILGdCQUEzQyxDQUE0RCxPQUE1RCxFQUFxRXBILG9FQUFyRTtBQUNBSixJQUFBQSwwREFBQSxDQUFvQixvQkFBcEIsRUFBMEN3SCxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0VELDZDQUFwRTtBQUNILEdBSEQ7O0FBSUEsTUFBTTFFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQXZDLEVBQUUsRUFBSTtBQUN6Qk4sSUFBQUEsMkRBQUEsV0FBd0JNLEVBQXhCLG1DQUEwRHNFLE9BQTFELENBQWtFLFVBQUFTLEtBQUssRUFBSTtBQUN2RUEsTUFBQUEsS0FBSyxDQUFDbUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NELGdEQUFoQzs7QUFDQSxVQUFJakgsRUFBRSxJQUFJLGVBQVYsRUFBMkI7QUFDdkIrRSxRQUFBQSxLQUFLLENBQUNtQyxnQkFBTixDQUF1QixXQUF2QixFQUFvQ3BILDREQUFwQztBQUNBaUYsUUFBQUEsS0FBSyxDQUFDbUMsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUNwSCw0REFBbkM7QUFDSCxPQUhELE1BR08sSUFBSUUsRUFBRSxJQUFJLGlCQUFWLEVBQTZCO0FBQ2hDK0UsUUFBQUEsS0FBSyxDQUFDbUMsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NwSCxnRUFBcEM7QUFDQWlGLFFBQUFBLEtBQUssQ0FBQ21DLGdCQUFOLENBQXVCLFVBQXZCLEVBQW1DcEgsbUVBQW5DO0FBQ0g7QUFDSixLQVREO0FBVUgsR0FYRDs7QUFZQSxNQUFNcUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBbkUsRUFBRSxFQUFJO0FBQzNCTixJQUFBQSwyREFBQSxXQUF3Qk0sRUFBeEIsb0JBQTJDc0UsT0FBM0MsQ0FBbUQsVUFBQVMsS0FBSyxFQUFJO0FBQ3hEQSxNQUFBQSxLQUFLLENBQUN1QyxtQkFBTixDQUEwQixPQUExQixFQUFtQ0wsZ0RBQW5DOztBQUNBLFVBQUlqSCxFQUFFLElBQUksZUFBVixFQUEyQjtBQUN2QitFLFFBQUFBLEtBQUssQ0FBQ3VDLG1CQUFOLENBQTBCLFdBQTFCLEVBQXVDeEgsNERBQXZDO0FBQ0FpRixRQUFBQSxLQUFLLENBQUN1QyxtQkFBTixDQUEwQixVQUExQixFQUFzQ3hILDREQUF0QztBQUNILE9BSEQsTUFHTyxJQUFJRSxFQUFFLElBQUksaUJBQVYsRUFBNkI7QUFDaEMrRSxRQUFBQSxLQUFLLENBQUN1QyxtQkFBTixDQUEwQixXQUExQixFQUF1Q3hILDZEQUF2QztBQUNBaUYsUUFBQUEsS0FBSyxDQUFDdUMsbUJBQU4sQ0FBMEIsVUFBMUIsRUFBc0N4SCw2REFBdEM7QUFDSDtBQUNKLEtBVEQ7QUFVSCxHQVhELENBcEIrQixDQWdDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBTztBQUNINEIsSUFBQUEscUJBQXFCLEVBQXJCQSxxQkFERztBQUVIWSxJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUZHO0FBR0hDLElBQUFBLGNBQWMsRUFBZEEsY0FIRztBQUlINEIsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFKRyxDQUtIOztBQUxHLEdBQVA7QUFPSCxDQTdDMkIsRUFBckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUVlLFNBQVNzRCxLQUFULEdBQWlCO0FBQzVCLE1BQUlDLE9BQU8sR0FBR0MsV0FBVyxFQUF6Qjs7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUVBLFdBQVNILFdBQVQsR0FBdUI7QUFDbkIsUUFBSUksTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSyxJQUFJeEgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekJ1SCxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWTtBQUFFbEYsVUFBQUEsSUFBSSxFQUFFdkMsQ0FBUjtBQUFXd0MsVUFBQUEsSUFBSSxFQUFFdkMsQ0FBakI7QUFBb0J5SCxVQUFBQSxRQUFRLEVBQUU7QUFBOUIsU0FBWjtBQUNIO0FBQ0o7O0FBQ0QsV0FBT0YsTUFBUDtBQUNIOztBQUNELFdBQVNHLFFBQVQsR0FBb0I7QUFDaEIsV0FBT1IsT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQXpELENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FBYixDQUFQO0FBQ0g7O0FBQ0QsV0FBUzBELFVBQVQsQ0FBb0IxRCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDdEIsV0FBTytDLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDVyxTQUFSLENBQWtCLFVBQUF2QixPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDaEUsSUFBUixJQUFnQjRCLENBQWhCLElBQXFCb0MsT0FBTyxDQUFDL0QsSUFBUixJQUFnQjRCLENBQXpDO0FBQUEsS0FBekIsQ0FBRCxDQUFkO0FBQ0g7O0FBQ0QsV0FBUzJELFdBQVQsQ0FBcUI1RCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkIrQyxJQUFBQSxPQUFPLENBQUNBLE9BQU8sQ0FBQ1csU0FBUixDQUFrQixVQUFBdkIsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ2hFLElBQVIsSUFBZ0I0QixDQUFoQixJQUFxQm9DLE9BQU8sQ0FBQy9ELElBQVIsSUFBZ0I0QixDQUF6QztBQUFBLEtBQXpCLENBQUQsQ0FBUCxDQUE4RXNELFFBQTlFLEdBQXlGLElBQXpGO0FBQ0EsUUFBSXBELEdBQUcsR0FBRyxDQUFDLENBQVg7O0FBQ0ErQyxJQUFBQSxNQUFNLENBQUN0RCxPQUFQLENBQWUsVUFBQ0MsSUFBRCxFQUFPUixLQUFQLEVBQWlCO0FBQzVCLFVBQUlRLElBQUksQ0FBQytELFdBQUwsQ0FBaUI1RCxDQUFqQixFQUFvQkMsQ0FBcEIsQ0FBSixFQUE0QjtBQUN4QkUsUUFBQUEsR0FBRyxHQUFHZCxLQUFOO0FBQ0g7QUFDSixLQUpEOztBQUtBOEQsSUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWM7QUFBRWxGLE1BQUFBLElBQUksRUFBRTRCLENBQVI7QUFBVzNCLE1BQUFBLElBQUksRUFBRTRCO0FBQWpCLEtBQWQ7O0FBQ0EsV0FBT0UsR0FBUDtBQUNIOztBQUNELFdBQVMwRCxPQUFULENBQWlCdkYsSUFBakIsRUFBdUIwQixDQUF2QixFQUEwQkMsQ0FBMUIsRUFBNkI2RCxHQUE3QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcENiLElBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZUixpREFBSSxDQUFDeEUsSUFBRCxFQUFPMEIsQ0FBUCxFQUFVQyxDQUFWLEVBQWE2RCxHQUFiLEVBQWtCQyxJQUFsQixDQUFoQjs7QUFDQSxTQUFLLElBQUlsSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUMsSUFBcEIsRUFBMEJ6QyxDQUFDLEVBQTNCLEVBQStCO0FBQzNCLFVBQUlpSSxHQUFHLElBQUksT0FBWCxFQUFvQjtBQUNoQlYsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCO0FBQUVsRixVQUFBQSxJQUFJLEVBQUVRLFFBQVEsQ0FBQ29CLENBQUQsQ0FBUixHQUFjbkUsQ0FBdEI7QUFBeUJ3QyxVQUFBQSxJQUFJLEVBQUU0QjtBQUEvQixTQUFoQjtBQUNILE9BRkQsTUFFTztBQUNIbUQsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCO0FBQUVsRixVQUFBQSxJQUFJLEVBQUU0QixDQUFSO0FBQVczQixVQUFBQSxJQUFJLEVBQUVPLFFBQVEsQ0FBQ3FCLENBQUQsQ0FBUixHQUFjcEU7QUFBL0IsU0FBaEI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBU21JLFFBQVQsR0FBb0I7QUFDaEIsV0FBT2QsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQXpELENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FBWixDQUFQO0FBQ0g7O0FBQ0QsV0FBU2lFLFVBQVQsR0FBc0I7QUFDbEIsV0FBT2QsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQXpELENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FBZCxDQUFQO0FBQ0g7O0FBQ0QsV0FBU2tFLFlBQVQsR0FBd0I7QUFDcEIsV0FBT2QsVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQXpELENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FBaEIsQ0FBUDtBQUNIOztBQUNELFdBQVNtRSxZQUFULEdBQXdCO0FBQ3BCLFdBQU9qQixNQUFNLENBQUNrQixLQUFQLENBQWEsVUFBQXZFLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUN3RSxXQUFMLE1BQXNCLElBQTFCO0FBQUEsS0FBakIsQ0FBUDtBQUNIOztBQUVELFNBQU87QUFBRWIsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlFLElBQUFBLFVBQVUsRUFBVkEsVUFBWjtBQUF3QkUsSUFBQUEsV0FBVyxFQUFYQSxXQUF4QjtBQUFxQ0MsSUFBQUEsT0FBTyxFQUFQQSxPQUFyQztBQUE4Q0csSUFBQUEsUUFBUSxFQUFSQSxRQUE5QztBQUF3REMsSUFBQUEsVUFBVSxFQUFWQSxVQUF4RDtBQUFvRUMsSUFBQUEsWUFBWSxFQUFaQSxZQUFwRTtBQUFrRkMsSUFBQUEsWUFBWSxFQUFaQTtBQUFsRixHQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFERDtBQUVPLElBQU1qSixLQUFLLEdBQUksWUFBTTtBQUFBLFdBQ1R3QyxZQURTO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZMQUN4QixpQkFBNEI0RyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUMsY0FBQUEsY0FEVixHQUMyQnZKLDhEQUFBLENBQXdCLEtBQXhCLEVBQStCLGtCQUEvQixFQUFtRCxZQUFuRCxDQUQzQjtBQUVJdUosY0FBQUEsY0FBYyxDQUFDeEksV0FBZixDQUEyQnVJLEtBQTNCO0FBQ0E5RyxjQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JYLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjaEIsV0FBZCxDQUEwQndJLGNBQTFCLENBQWhCLEVBQTJENUcsSUFBM0QsQ0FBZ0UsWUFBTTtBQUNsRTZHLGdCQUFBQSxVQUFVLENBQUM7QUFBQSx5QkFBTUQsY0FBYyxDQUFDL0ksU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0IsQ0FBTjtBQUFBLGlCQUFELEVBQStDLENBQS9DLENBQVY7QUFDSCxlQUZEOztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRHdCO0FBQUE7QUFBQTs7QUFBQSxXQVFUZ0osaUJBUlM7QUFBQTtBQUFBOztBQUFBO0FBQUEsa01BUXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNVSCxjQUFBQSxLQURWLEdBQ2tCdEosMERBQUEsQ0FBb0IsbUJBQXBCLENBRGxCO0FBRUl3QyxjQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I2RyxLQUFLLENBQUM5SSxTQUFOLENBQWdCMkQsTUFBaEIsQ0FBdUIsUUFBdkIsQ0FBaEIsRUFBa0R4QixJQUFsRCxDQUF1RDZHLFVBQVUsQ0FBQztBQUFBLHVCQUFNRixLQUFLLENBQUNuRixNQUFOLEVBQU47QUFBQSxlQUFELEVBQXVCLEdBQXZCLENBQWpFOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUndCO0FBQUE7QUFBQTs7QUFZeEIsU0FBTztBQUFFekIsSUFBQUEsWUFBWSxFQUFaQSxZQUFGO0FBQWdCK0csSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUFoQixHQUFQO0FBQ0gsQ0Fib0IsRUFBZDs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBRWUsU0FBU0MsTUFBVCxHQUFrQjtBQUM3QixNQUFJQyxNQUFNLEdBQUc1QixzREFBSyxFQUFsQjs7QUFDQSxNQUFJNkIsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDtBQUNBLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxXQUFTQyxNQUFULEdBQWtCO0FBQ2QsV0FBT0gsS0FBUDtBQUNIOztBQUNELFdBQVNJLFVBQVQsR0FBc0I7QUFDbEJILElBQUFBLE9BQU8sR0FBRyxDQUFDQSxPQUFYO0FBQ0g7O0FBQ0QsV0FBU0ksT0FBVCxHQUFtQjtBQUNmLFdBQU9KLE9BQVA7QUFDSDs7QUFDRCxXQUFTaEIsT0FBVCxDQUFpQnZGLElBQWpCLEVBQXVCMEIsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCNkQsR0FBN0IsRUFBa0NDLElBQWxDLEVBQXdDO0FBQ3BDWSxJQUFBQSxNQUFNLENBQUNkLE9BQVAsQ0FBZXZGLElBQWYsRUFBcUIwQixDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI2RCxHQUEzQixFQUFnQ0MsSUFBaEM7QUFDSDs7QUFDRCxXQUFTbUIsTUFBVCxDQUFnQmxGLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNsQixRQUFNa0YsWUFBWSxHQUFHUixNQUFNLENBQUNmLFdBQVAsQ0FBbUI1RCxDQUFuQixFQUFzQkMsQ0FBdEIsQ0FBckI7O0FBQ0EsUUFBSTBFLE1BQU0sQ0FBQ1IsWUFBUCxFQUFKLEVBQTJCO0FBQ3ZCUyxNQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNIOztBQUNELFdBQU9PLFlBQVA7QUFDSDs7QUFDRCxXQUFTM0IsUUFBVCxHQUFvQjtBQUNoQixXQUFPbUIsTUFBUDtBQUNIOztBQUNELFNBQU87QUFBRUksSUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVDLElBQUFBLFVBQVUsRUFBVkEsVUFBVjtBQUFzQkMsSUFBQUEsT0FBTyxFQUFQQSxPQUF0QjtBQUErQnBCLElBQUFBLE9BQU8sRUFBUEEsT0FBL0I7QUFBd0NxQixJQUFBQSxNQUFNLEVBQU5BLE1BQXhDO0FBQWdEMUIsSUFBQUEsUUFBUSxFQUFSQSxRQUFoRDtBQUEwRHNCLElBQUFBLFVBQVUsRUFBVkE7QUFBMUQsR0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUM5QmMsU0FBU2hDLElBQVQsQ0FBY3hFLElBQWQsRUFBb0IwQixDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI2RCxHQUExQixFQUErQkMsSUFBL0IsRUFBcUM7QUFDaEQsTUFBSXFCLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVc7QUFBRS9ELElBQUFBLE1BQU0sRUFBRWpEO0FBQVYsR0FBWCxFQUE2QjtBQUFBLFdBQU0sTUFBTjtBQUFBLEdBQTdCLENBQWQ7O0FBQ0EsTUFBSWlILFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxNQUFJQyxZQUFZLEdBQUdDLFlBQVksQ0FBQ3pGLENBQUQsRUFBSUMsQ0FBSixFQUFPNkQsR0FBUCxDQUEvQjs7QUFDQSxNQUFJNEIsS0FBSyxHQUFHM0IsSUFBWjs7QUFFQSxXQUFTNEIsZ0JBQVQsR0FBNEI7QUFDeEIsV0FBT1AsT0FBTyxDQUFDM0IsR0FBUixDQUFZLFVBQUF6RCxDQUFDO0FBQUEsYUFBSUEsQ0FBSjtBQUFBLEtBQWIsQ0FBUDtBQUNIOztBQUNELFdBQVNxRSxXQUFULEdBQXVCO0FBQ25CLFdBQU9rQixVQUFQO0FBQ0g7O0FBQ0QsV0FBU0ssT0FBVCxDQUFpQkMsUUFBakIsRUFBMkI7QUFDdkJULElBQUFBLE9BQU8sQ0FBQ1MsUUFBRCxDQUFQLEdBQW9CLFFBQXBCOztBQUNBLFFBQUlULE9BQU8sQ0FBQ2hCLEtBQVIsQ0FBYyxVQUFBMEIsS0FBSztBQUFBLGFBQUlBLEtBQUssSUFBSSxRQUFiO0FBQUEsS0FBbkIsQ0FBSixFQUErQztBQUMzQ1AsTUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDSDtBQUNKOztBQUNELFdBQVNFLFlBQVQsQ0FBc0JNLFNBQXRCLEVBQWlDQyxTQUFqQyxFQUEyRDtBQUFBLFFBQWZsQyxHQUFlLHVFQUFULE9BQVM7QUFDdkQsUUFBSVQsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJckQsQ0FBQyxHQUFHcEIsUUFBUSxDQUFDbUgsU0FBRCxDQUFoQjtBQUNBLFFBQUk5RixDQUFDLEdBQUdyQixRQUFRLENBQUNvSCxTQUFELENBQWhCOztBQUNBLFNBQUssSUFBSW5LLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5QyxJQUFwQixFQUEwQnpDLENBQUMsRUFBM0IsRUFBK0I7QUFDM0IsVUFBSWlJLEdBQUcsSUFBSSxPQUFYLEVBQW9CO0FBQ2hCVCxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWTtBQUFFbEYsVUFBQUEsSUFBSSxFQUFFNEIsQ0FBQyxHQUFHbkUsQ0FBWjtBQUFld0MsVUFBQUEsSUFBSSxFQUFFNEI7QUFBckIsU0FBWjtBQUNILE9BRkQsTUFFTyxJQUFJNkQsR0FBRyxJQUFJLE1BQVgsRUFBbUI7QUFDdEJULFFBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQUVsRixVQUFBQSxJQUFJLEVBQUU0QixDQUFDLEdBQUduRSxDQUFaO0FBQWV3QyxVQUFBQSxJQUFJLEVBQUU0QjtBQUFyQixTQUFaO0FBQ0gsT0FGTSxNQUVBLElBQUk2RCxHQUFHLElBQUksTUFBWCxFQUFtQjtBQUN0QlQsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVk7QUFBRWxGLFVBQUFBLElBQUksRUFBRTRCLENBQVI7QUFBVzNCLFVBQUFBLElBQUksRUFBRTRCLENBQUMsR0FBR3BFO0FBQXJCLFNBQVo7QUFDSCxPQUZNLE1BRUEsSUFBSWlJLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0FBQ3BCVCxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWTtBQUFFbEYsVUFBQUEsSUFBSSxFQUFFNEIsQ0FBUjtBQUFXM0IsVUFBQUEsSUFBSSxFQUFFNEIsQ0FBQyxHQUFHcEU7QUFBckIsU0FBWjtBQUNIO0FBQ0o7O0FBQ0QsV0FBT3dILE1BQVA7QUFDSDs7QUFDRCxXQUFTdkQsV0FBVCxHQUF1QjtBQUNuQixXQUFPMEYsWUFBWSxDQUFDL0IsR0FBYixDQUFpQixVQUFBekQsQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQSxLQUFsQixDQUFQO0FBQ0g7O0FBQ0QsV0FBU2lHLE9BQVQsR0FBbUI7QUFDZixXQUFPUCxLQUFQO0FBQ0g7O0FBQ0QsV0FBUzlCLFdBQVQsQ0FBcUI1RCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkIsUUFBSWlHLFdBQVcsR0FBR1YsWUFBWSxDQUFDN0IsU0FBYixDQUF1QixVQUFBdkIsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ2hFLElBQVIsSUFBZ0I0QixDQUFoQixJQUFxQm9DLE9BQU8sQ0FBQy9ELElBQVIsSUFBZ0I0QixDQUF6QztBQUFBLEtBQTlCLENBQWxCOztBQUNBLFFBQUlpRyxXQUFXLElBQUksQ0FBbkIsRUFBc0I7QUFDbEJOLE1BQUFBLE9BQU8sQ0FBQ00sV0FBRCxDQUFQOztBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU8sS0FBUDtBQUNIOztBQUVELFNBQU87QUFBRVAsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFBRjtBQUFvQnRCLElBQUFBLFdBQVcsRUFBWEEsV0FBcEI7QUFBaUN2RSxJQUFBQSxXQUFXLEVBQVhBLFdBQWpDO0FBQThDbUcsSUFBQUEsT0FBTyxFQUFQQSxPQUE5QztBQUF1RHJDLElBQUFBLFdBQVcsRUFBWEE7QUFBdkQsR0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNckIsSUFBSSxHQUFJLFlBQU07QUFDdkIsTUFBSTRELFlBQUo7O0FBQ0EsTUFBSUMsZUFBSjs7QUFDQSxNQUFNM0QsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQnJILElBQUFBLG1FQUFBO0FBQ0ErSyxJQUFBQSxZQUFZLEdBQUd6QixtREFBTSxFQUFyQjtBQUNBMEIsSUFBQUEsZUFBZSxHQUFHMUIsbURBQU0sRUFBeEI7QUFDSCxHQUpEOztBQUtBLE1BQU0vQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBaEUsQ0FBQyxFQUFJO0FBQ3RCQSxJQUFBQSxDQUFDLENBQUNFLGFBQUYsQ0FBZ0J3SCxhQUFoQixDQUE4Qi9LLEVBQTlCLElBQW9DLGNBQXBDLEdBQXFEZ0wsVUFBVSxDQUFDM0gsQ0FBRCxDQUEvRCxHQUFxRTRILHFCQUFxQixDQUFDNUgsQ0FBRCxDQUExRjtBQUNILEdBRkQ7O0FBR0EsTUFBTTZILFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJMLElBQUFBLFlBQVksQ0FBQ25CLFVBQWI7O0FBQ0FvQixJQUFBQSxlQUFlLENBQUNwQixVQUFoQjtBQUNILEdBSEQ7O0FBSUEsTUFBTXNCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUEzSCxDQUFDLEVBQUk7QUFDcEIsUUFBTThILFdBQVcsR0FBR3pMLDJEQUFBLENBQXFCLG9CQUFyQixDQUFwQjtBQUNBLFFBQU0wTCxjQUFjLEdBQUcxTCwyREFBQSxDQUFxQix3QkFBckIsQ0FBdkI7O0FBQ0EsUUFBSTBMLGNBQWMsQ0FBQ25GLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDNUJrRixNQUFBQSxXQUFXLENBQUM3RyxPQUFaLENBQW9CLFVBQUFTLEtBQUssRUFBSTtBQUN6QkEsUUFBQUEsS0FBSyxDQUFDN0UsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsYUFBcEI7QUFDQTRFLFFBQUFBLEtBQUssQ0FBQzdFLFNBQU4sQ0FBZ0JpRCxNQUFoQixDQUF1QixPQUF2QjtBQUNILE9BSEQ7QUFJQSxVQUFNZSxRQUFRLEdBQUd4RSwwREFBQSxDQUFvQixZQUFwQixFQUFrQ2lELE9BQWxDLENBQTBDSyxJQUEzRDtBQUNBLFVBQU1sQixRQUFRLEdBQUdwQywwREFBQSxDQUFvQixZQUFwQixFQUFrQ3NFLFdBQW5EO0FBQ0EsVUFBTXFILGFBQWEsR0FBRzNMLDBEQUFBLENBQW9CLHFCQUFwQixFQUEyQ2lELE9BQTNDLENBQW1EQyxTQUF6RTs7QUFDQWlJLE1BQUFBLFlBQVksQ0FBQ3RDLE9BQWIsQ0FDSXJFLFFBREosRUFFSWIsQ0FBQyxDQUFDRSxhQUFGLENBQWdCWixPQUFoQixDQUF3QmEsSUFGNUIsRUFHSUgsQ0FBQyxDQUFDRSxhQUFGLENBQWdCWixPQUFoQixDQUF3QmMsSUFINUIsRUFJSTRILGFBSkosRUFLSXZKLFFBTEo7O0FBT0FoQyxNQUFBQSxrRUFBQSxDQUEyQnVELENBQTNCO0FBQ0g7QUFDSixHQXBCRDs7QUFzQkEsTUFBTWlJLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFTN0csQ0FBVCxFQUFZQyxDQUFaLEVBQWtCO0FBQ3JDLFFBQUk2RyxLQUFLLEdBQUcsSUFBWjtBQUNBRCxJQUFBQSxNQUFNLENBQ0RyRCxRQURMLEdBRUtTLFVBRkwsR0FHS3JFLE9BSEwsQ0FHYSxVQUFBUyxLQUFLLEVBQUk7QUFDZCxVQUFJQSxLQUFLLENBQUNqQyxJQUFOLElBQWM0QixDQUFkLElBQW1CSyxLQUFLLENBQUNoQyxJQUFOLElBQWM0QixDQUFyQyxFQUF3QztBQUNwQzZHLFFBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0g7QUFDSixLQVBMO0FBUUEsV0FBT0EsS0FBUDtBQUNILEdBWEQ7O0FBYUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsTUFBRCxFQUFTN0csQ0FBVCxFQUFZQyxDQUFaLEVBQWtCO0FBQ25DLFFBQUlFLEdBQUcsR0FBRyxLQUFWOztBQUNBLFFBQ0kwRyxNQUFNLENBQ0RyRCxRQURMLEdBRUtVLFlBRkwsR0FHSzhDLElBSEwsQ0FHVSxVQUFBM0csS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ2pDLElBQU4sSUFBYzRCLENBQWQsSUFBbUJLLEtBQUssQ0FBQ2hDLElBQU4sSUFBYzRCLENBQXJDO0FBQUEsS0FIZixDQURKLEVBS0U7QUFDRUUsTUFBQUEsR0FBRyxHQUFHLElBQU47QUFDSDs7QUFDRCxXQUFPQSxHQUFQO0FBQ0gsR0FYRDs7QUFhQSxNQUFNOEcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSixNQUFELEVBQVMzRyxVQUFULEVBQXFCZ0gsWUFBckIsRUFBc0M7QUFDMUQsUUFBSUwsTUFBTSxDQUFDckQsUUFBUCxHQUFrQlEsUUFBbEIsR0FBNkJrRCxZQUE3QixFQUEyQzdDLFdBQTNDLEVBQUosRUFBOEQ7QUFDMURqSixNQUFBQSxtRUFBQSxDQUE0QnlMLE1BQU0sQ0FBQ3JELFFBQVAsR0FBa0JRLFFBQWxCLEdBQTZCa0QsWUFBN0IsRUFBMkNwSCxXQUEzQyxFQUE1QixFQUFzRkksVUFBdEY7QUFDQSxhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSCxHQU5EOztBQVFBLE1BQU1pSCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNOLE1BQUQsRUFBUzdHLENBQVQsRUFBWUMsQ0FBWixFQUFrQjtBQUNwQyxRQUFJQyxVQUFKO0FBQ0EyRyxJQUFBQSxNQUFNLElBQUlWLFlBQVYsR0FBMEJqRyxVQUFVLEdBQUcsUUFBdkMsR0FBb0RBLFVBQVUsR0FBRyxVQUFqRTs7QUFFQSxRQUFJMEcsY0FBYyxDQUFDQyxNQUFELEVBQVM3RyxDQUFULEVBQVlDLENBQVosQ0FBbEIsRUFBa0M7QUFDOUIsVUFBTWlILFlBQVksR0FBR0wsTUFBTSxDQUFDM0IsTUFBUCxDQUFjbEYsQ0FBZCxFQUFpQkMsQ0FBakIsQ0FBckI7O0FBQ0EsVUFBSUUsR0FBRyxHQUFHNEcsWUFBWSxDQUFDRixNQUFELEVBQVM3RyxDQUFULEVBQVlDLENBQVosQ0FBdEI7O0FBQ0E0RyxNQUFBQSxNQUFNLENBQUMvQixVQUFQLEdBQW9CM0UsR0FBcEI7QUFDQS9FLE1BQUFBLDhEQUFBLENBQXVCNEUsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCQyxVQUE3QixFQUF5Q0MsR0FBekM7O0FBQ0EsVUFBSStHLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUNuQixZQUFJRCxlQUFlLENBQUNKLE1BQUQsRUFBUzNHLFVBQVQsRUFBcUJnSCxZQUFyQixDQUFuQixFQUF1RDtBQUNuREwsVUFBQUEsTUFBTSxDQUFDL0IsVUFBUCxHQUFvQitCLE1BQU0sQ0FBQ3JELFFBQVAsR0FBa0JRLFFBQWxCLEdBQTZCa0QsWUFBN0IsRUFBMkNqQixPQUEzQyxFQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0gsR0FqQkQ7O0FBbUJBLE1BQU1tQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFQLE1BQU0sRUFBSTtBQUNqQyxRQUFNL0IsVUFBVSxHQUFHK0IsTUFBTSxDQUFDL0IsVUFBMUI7O0FBRUEsUUFBSStCLE1BQU0sSUFBSVQsZUFBZCxFQUErQjtBQUMzQnRCLE1BQUFBLFVBQVUsSUFBSSxJQUFkLEdBQ00xSixnRUFBQSxDQUF5Qix5Q0FBekIsQ0FETixHQUVNMEosVUFBVSxJQUFJLEtBQWQsR0FDQTFKLGdFQUFBLENBQXlCLDRDQUF6QixDQURBLEdBRUFBLGdFQUFBLDBCQUEyQzBKLFVBQTNDLE9BSk47QUFLSCxLQU5ELE1BTU87QUFDSEEsTUFBQUEsVUFBVSxJQUFJLElBQWQsR0FDTTFKLGdFQUFBLENBQXlCLDRDQUF6QixDQUROLEdBRU0wSixVQUFVLElBQUksS0FBZCxHQUNBMUosZ0VBQUEsQ0FBeUIsMkNBQXpCLENBREEsR0FFQUEsZ0VBQUEsMEJBQTJDMEosVUFBM0MsT0FKTjtBQUtIO0FBQ0osR0FoQkQ7O0FBaUJBLE1BQU15QixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUE1SCxDQUFDLEVBQUk7QUFDL0IsUUFBTVAsSUFBSSxHQUFHTyxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JaLE9BQWhCLENBQXdCYSxJQUFyQztBQUNBLFFBQU1ULElBQUksR0FBR00sQ0FBQyxDQUFDRSxhQUFGLENBQWdCWixPQUFoQixDQUF3QmMsSUFBckM7O0FBQ0FvSSxJQUFBQSxhQUFhLENBQUNmLGVBQUQsRUFBa0JoSSxJQUFsQixFQUF3QkMsSUFBeEIsQ0FBYjs7QUFDQStJLElBQUFBLGtCQUFrQixDQUFDaEIsZUFBRCxDQUFsQjs7QUFDQW5MLElBQUFBLHdFQUFBLENBQThCLGlCQUE5QjtBQUNBRyxJQUFBQSxtRUFBQSxDQUE0QnVELENBQTVCOztBQUNBNkgsSUFBQUEsWUFBWTs7QUFDWmEsSUFBQUEsU0FBUztBQUNaLEdBVEQsQ0EzR3VCLENBc0h2Qjs7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQzlCbEIsSUFBQUEsZUFBZSxDQUNWNUMsUUFETCxHQUVLUSxRQUZMLEdBR0twRSxPQUhMLENBR2EsVUFBQUMsSUFBSSxFQUFJO0FBQ2JBLE1BQUFBLElBQUksQ0FBQ0MsV0FBTCxHQUFtQkYsT0FBbkIsQ0FBMkIsVUFBQXJCLFFBQVEsRUFBSTtBQUNuQ3ZELFFBQUFBLDBEQUFBLGtDQUM4QnVELFFBQVEsQ0FBQ0gsSUFEdkMsY0FDK0NHLFFBQVEsQ0FBQ0YsSUFEeEQsR0FFRTdDLFNBRkYsQ0FFWUMsR0FGWixDQUVnQixhQUZoQjtBQUdILE9BSkQ7QUFLSCxLQVRMO0FBVUgsR0FYRDs7QUFZQSxNQUFNOEwsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLFFBQUkxTCxDQUFDLEdBQUcsQ0FBUixDQURpQyxDQUVqQzs7QUFGaUM7QUFJN0IsVUFBSXVDLElBQUksU0FBUjtBQUNBLFVBQUlDLElBQUksU0FBUjtBQUNBLFVBQUlILFNBQVMsU0FBYixDQU42QixDQU83Qjs7QUFDQXNKLE1BQUFBLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsS0FBaUMsQ0FBakMsR0FBc0N4SixTQUFTLEdBQUcsT0FBbEQsR0FBOERBLFNBQVMsR0FBRyxNQUExRTs7QUFDQSxVQUFJQSxTQUFTLElBQUksT0FBakIsRUFBMEI7QUFDdEI7QUFDQTtBQUNBRSxRQUFBQSxJQUFJLEdBQUdvSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLEtBQUt2TSx3Q0FBUyxDQUFDVSxDQUFELENBQVQsQ0FBYTJELFFBQW5DLENBQVgsQ0FBUDtBQUNBbkIsUUFBQUEsSUFBSSxHQUFHbUosSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFQO0FBQ0gsT0FMRCxNQUtPO0FBQ0h0SixRQUFBQSxJQUFJLEdBQUdvSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVA7QUFDQXJKLFFBQUFBLElBQUksR0FBR21KLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsS0FBS3ZNLHdDQUFTLENBQUNVLENBQUQsQ0FBVCxDQUFhMkQsUUFBbkMsQ0FBWCxDQUFQO0FBQ0g7O0FBQ0QsVUFBSW1JLEtBQUssR0FBRyxLQUFaO0FBQ0EsVUFBSWIsS0FBSyxHQUFHLElBQVo7O0FBQ0FWLE1BQUFBLGVBQWUsQ0FDVjVDLFFBREwsR0FFS1EsUUFGTCxHQUdLcEUsT0FITCxDQUdhLFVBQUFDLElBQUksRUFBSTtBQUNiQSxRQUFBQSxJQUFJLENBQUNDLFdBQUwsR0FBbUJGLE9BQW5CLENBQTJCLFVBQUFnSSxHQUFHLEVBQUk7QUFDOUI7QUFDQSxlQUFLLElBQUk5TCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCx3Q0FBUyxDQUFDVSxDQUFELENBQVQsQ0FBYTJELFFBQWpDLEVBQTJDMUQsQ0FBQyxFQUE1QyxFQUFnRDtBQUM1QztBQUNBLGdCQUFJb0MsU0FBUyxJQUFJLE9BQWpCLEVBQTBCO0FBQ3RCLGtCQUFJRSxJQUFJLEdBQUd0QyxDQUFQLElBQVk4TCxHQUFHLENBQUN4SixJQUFoQixJQUF3QkMsSUFBSSxJQUFJdUosR0FBRyxDQUFDdkosSUFBeEMsRUFBOEM7QUFDMUM7QUFDQXNKLGdCQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNIO0FBQ0o7O0FBQ0QsZ0JBQUl6SixTQUFTLElBQUksTUFBakIsRUFBeUI7QUFDckIsa0JBQUlFLElBQUksSUFBSXdKLEdBQUcsQ0FBQ3hKLElBQVosSUFBb0JDLElBQUksR0FBR3ZDLENBQVAsSUFBWThMLEdBQUcsQ0FBQ3ZKLElBQXhDLEVBQThDO0FBQzFDc0osZ0JBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0g7QUFDSjtBQUNKO0FBQ0osU0FoQkQ7QUFpQkgsT0FyQkwsRUFwQjZCLENBMEM3Qjs7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUnZCLFFBQUFBLGVBQWUsQ0FBQ3ZDLE9BQWhCLENBQXdCMUksd0NBQVMsQ0FBQ1UsQ0FBRCxDQUFULENBQWEyRCxRQUFyQyxFQUErQ3BCLElBQS9DLEVBQXFEQyxJQUFyRCxFQUEyREgsU0FBM0QsRUFBc0UvQyx3Q0FBUyxDQUFDVSxDQUFELENBQVQsQ0FBYXVCLFFBQW5GOztBQUNBeUssUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkxQixlQUFlLENBQUM1QyxRQUFoQixHQUEyQlEsUUFBM0IsR0FBc0NuSSxDQUF0QyxFQUF5Q2lFLFdBQXpDLEVBQVosRUFGUSxDQUdSOztBQUNBakUsUUFBQUEsQ0FBQztBQUNKO0FBaEQ0Qjs7QUFHakMsV0FBT0EsQ0FBQyxHQUFHViwrQ0FBQSxHQUFtQixDQUE5QixFQUFpQztBQUFBO0FBOENoQyxLQWpEZ0MsQ0FrRGpDOztBQUNILEdBbkREOztBQW9EQSxNQUFNNE0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLEVBQTBCO0FBQzNDLFFBQU1DLFdBQVcsR0FBR1YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQk8sU0FBUyxHQUFHRCxTQUE3QixJQUEwQ0EsU0FBckQsQ0FBcEI7QUFDQSxXQUFPLElBQUl4SyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLGFBQUkrRyxVQUFVLENBQUMvRyxPQUFELEVBQVV5SyxXQUFWLENBQWQ7QUFBQSxLQUFuQixDQUFQO0FBQ0gsR0FIRDs7QUFJQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1YLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBTjtBQUFBLEdBQWxCOztBQUNBLE1BQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSUQsU0FBUyxFQUFiLEVBQWlCO0FBQ2JoQyxNQUFBQSxZQUFZLENBQUNuQixVQUFiOztBQUNBNUosTUFBQUEsZ0VBQUEsQ0FBeUIscUNBQXpCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hnTCxNQUFBQSxlQUFlLENBQUNwQixVQUFoQjs7QUFDQTVKLE1BQUFBLGdFQUFBLENBQXlCLHVDQUF6QjtBQUNIO0FBQ0osR0FSRDs7QUFVQSxNQUFNaU4sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQy9CLFFBQUlDLFdBQVcsR0FBRyxLQUFsQjs7QUFDQSxXQUFPLENBQUNBLFdBQVIsRUFBcUI7QUFDakJBLE1BQUFBLFdBQVcsR0FBR25CLGFBQWEsQ0FDdkJoQixZQUR1QixFQUV2QnFCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FGdUIsRUFHdkJGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FIdUIsQ0FBM0I7QUFLSDs7QUFDRE4sSUFBQUEsa0JBQWtCLENBQUNqQixZQUFELENBQWxCOztBQUNBSyxJQUFBQSxZQUFZO0FBQ2YsR0FYRDs7QUFZQSxNQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUlsQixZQUFZLENBQUNsQixPQUFiLEVBQUosRUFBNEI7QUFDeEJoSyxNQUFBQSxzRUFBQSxDQUE0QixpQkFBNUI7QUFDSCxLQUZELE1BRU87QUFDSDhNLE1BQUFBLFlBQVksQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFaLENBQ0twSyxJQURMLENBQ1U7QUFBQSxlQUFNMEssb0JBQW9CLEVBQTFCO0FBQUEsT0FEVixFQUVLMUssSUFGTCxDQUVVO0FBQUEsZUFBTTBKLFNBQVMsRUFBZjtBQUFBLE9BRlY7QUFHSDtBQUNKLEdBUkQ7O0FBVUEsTUFBTTNFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBSTFILDBEQUFBLENBQW9CLFlBQXBCLEVBQWtDaUQsT0FBbEMsQ0FBMENvQixLQUExQyxJQUFtRCxDQUF2RCxFQUEwRDtBQUN0RDdCLE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnZDLDJEQUFBLEVBQWhCO0FBRUFFLE1BQUFBLCtEQUFBO0FBQ0FBLE1BQUFBLGtFQUFBLENBQTJCK0ssWUFBWSxDQUFDM0MsUUFBYixHQUF3QlEsUUFBeEIsRUFBM0I7O0FBQ0F1RCxNQUFBQSxzQkFBc0I7O0FBQ3RCbk0sTUFBQUEsK0RBQUEsQ0FBd0IsaUJBQXhCOztBQUNBZ04sTUFBQUEsV0FBVzs7QUFDWGYsTUFBQUEsU0FBUztBQUNaLEtBVEQsTUFTTztBQUNILFVBQU05SixlQUFlLEdBQUd2QywwREFBQSxDQUFvQixvQkFBcEIsQ0FBeEI7QUFDQXVDLE1BQUFBLGVBQWUsQ0FBQ2dMLGlCQUFoQixDQUFrQyxFQUFsQztBQUNBaEwsTUFBQUEsZUFBZSxDQUFDZ0wsaUJBQWhCLENBQWtDLGdDQUFsQztBQUNBaEwsTUFBQUEsZUFBZSxDQUFDaUwsY0FBaEI7QUFDSDtBQUNKLEdBaEJEOztBQWlCQSxTQUFPO0FBQUUvRixJQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0UsSUFBQUEsWUFBWSxFQUFaQSxZQUFYO0FBQXlCRCxJQUFBQSxTQUFTLEVBQVRBO0FBQXpCLEdBQVA7QUFDSCxDQTlPbUIsRUFBYjs7QUFnUFAsSUFBTStGLFFBQVEsR0FBSSxZQUFNO0FBQ3BCakwsRUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCckMsbUVBQUEsRUFBaEI7QUFDSCxDQUZnQixFQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDZCQUE2QixnQkFBZ0Isd0JBQXdCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHFFQUFxRSxxQkFBcUIsR0FBRyxhQUFhLG1CQUFtQixnQ0FBZ0MscUJBQXFCLHNCQUFzQix1QkFBdUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsc0JBQXNCLGFBQWEsa0JBQWtCLGlCQUFpQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0NBQW9DLGdDQUFnQywwQkFBMEIsR0FBRyxZQUFZLGdDQUFnQywwQkFBMEIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQiw4QkFBOEIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcscUJBQXFCLGdDQUFnQyxrQkFBa0IsdUJBQXVCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLDZCQUE2QixvQkFBb0Isb0JBQW9CLDBCQUEwQixHQUFHLHNCQUFzQix5QkFBeUIsZ0NBQWdDLDBCQUEwQixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsb0NBQW9DLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsVUFBVSxtQkFBbUIsb0JBQW9CLG9CQUFvQix5REFBeUQsc0RBQXNELGdDQUFnQyw4QkFBOEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLEdBQUcscURBQXFELGdDQUFnQyxnQ0FBZ0MsR0FBRyw0QkFBNEIsZ0NBQWdDLGdDQUFnQyxHQUFHLHdDQUF3QyxnQ0FBZ0MsZ0NBQWdDLEdBQUcseUJBQXlCLGdDQUFnQyxnQ0FBZ0MsR0FBRyxpQ0FBaUMscUJBQXFCLGlDQUFpQywwQkFBMEIsR0FBRyxxQ0FBcUMscUJBQXFCLGlDQUFpQywwQkFBMEIsR0FBRywwQkFBMEIsZ0NBQWdDLDRCQUE0QixHQUFHLGtDQUFrQyxxQkFBcUIsaUNBQWlDLDBCQUEwQixHQUFHLGtCQUFrQixzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLGlCQUFpQixpQkFBaUIsc0JBQXNCLGtCQUFrQix5QkFBeUIsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLDJDQUEyQyw4QkFBOEIsb0JBQW9CLDhCQUE4QixHQUFHLGtCQUFrQix1QkFBdUIsbUJBQW1CLGdDQUFnQyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQixvQkFBb0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLG9CQUFvQixzQkFBc0IsdUJBQXVCLEdBQUcsaUJBQWlCLGlCQUFpQixpQkFBaUIsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsZ0JBQWdCLHNCQUFzQix3QkFBd0IsR0FBRyxTQUFTLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGdDQUFnQyw2QkFBNkIsZ0JBQWdCLHdCQUF3QixvQkFBb0IsNkJBQTZCLGdDQUFnQyxxRUFBcUUscUJBQXFCLEdBQUcsYUFBYSxtQkFBbUIsZ0NBQWdDLHFCQUFxQixzQkFBc0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIseUJBQXlCLHNCQUFzQixhQUFhLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxnQ0FBZ0MsMEJBQTBCLEdBQUcsWUFBWSxnQ0FBZ0MsMEJBQTBCLHNCQUFzQix3QkFBd0IsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLHFCQUFxQixnQ0FBZ0Msa0JBQWtCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0IseUJBQXlCLGdDQUFnQywwQkFBMEIsb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixzQkFBc0IscUJBQXFCLG9DQUFvQyxHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixvQkFBb0IseURBQXlELHNEQUFzRCxnQ0FBZ0MsOEJBQThCLEdBQUcsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixHQUFHLHFEQUFxRCxnQ0FBZ0MsZ0NBQWdDLEdBQUcsNEJBQTRCLGdDQUFnQyxnQ0FBZ0MsR0FBRyx3Q0FBd0MsZ0NBQWdDLGdDQUFnQyxHQUFHLHlCQUF5QixnQ0FBZ0MsZ0NBQWdDLEdBQUcsaUNBQWlDLHFCQUFxQixpQ0FBaUMsMEJBQTBCLEdBQUcscUNBQXFDLHFCQUFxQixpQ0FBaUMsMEJBQTBCLEdBQUcsMEJBQTBCLGdDQUFnQyw0QkFBNEIsR0FBRyxrQ0FBa0MscUJBQXFCLGlDQUFpQywwQkFBMEIsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1QixHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxpQkFBaUIsaUJBQWlCLHNCQUFzQixrQkFBa0IseUJBQXlCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLHFCQUFxQiwyQ0FBMkMsOEJBQThCLG9CQUFvQiw4QkFBOEIsR0FBRyxrQkFBa0IsdUJBQXVCLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLGdCQUFnQix5QkFBeUIsZ0NBQWdDLDBCQUEwQixvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLGlCQUFpQixpQkFBaUIsaUJBQWlCLEdBQUcsaUJBQWlCLGdDQUFnQyxHQUFHLGdCQUFnQixzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCO0FBQzl5UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHZCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0J1aWxkUGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTU1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgc2hpcEFycmF5IGZyb20gXCIuL3NoaXBzLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IEJ1aWxkUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZhdGVCb2FyZCA9IGlkID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChpZCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9O1xuICAgIGNvbnN0IF9tYWtlR3JpZCA9IGlkID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIGlkLCBcImJvYXJkXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzcGFjZS0ke2p9LSR7aX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib2FyZC1zcGFjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLXhQb3NcIjogaiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcImRhdGEteVBvc1wiOiBpIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG4gICAgfTtcbiAgICBjb25zdCBidWlsZFN0YXJ0aW5nUGFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJCYXR0bGVzaGlwXCIpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJnYW1lLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJnYW1lLWluc3RydWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJUaGUgZ2FtZSBpcyBzaW1wbGU6IGRlc3Ryb3kgeW91ciBvcHBvbmVudCBiZWZvcmUgdGhleSBkZXN0cm95IHlvdS5cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImJvYXJkcy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicGxheWVyLWJvYXJkLXdyYXBwZXJcIiwgXCJib2FyZC13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IF9tYWtlR3JpZChcInBsYXllci1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwicGxheWVyLWJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcImJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcIlBsYXllcidzIEJvYXJkXCJcbiAgICAgICAgKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4ocGxheWVyQm9hcmRXcmFwcGVyLCBwbGF5ZXJCb2FyZCwgcGxheWVyQm9hcmRMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkLXdyYXBwZXJcIixcbiAgICAgICAgICAgIFwiYm9hcmQtd3JhcHBlclwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBfbWFrZUdyaWQoXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZExhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJjb21wdXRlci1ib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJDb21wdXRlcidzIEJvYXJkXCJcbiAgICAgICAgKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oY29tcHV0ZXJCb2FyZFdyYXBwZXIsIGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyQm9hcmRMYWJlbCk7XG4gICAgICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIm5ldy1nYW1lLWJ1dHRvblwiLCBcInBhZ2UtYnV0dG9uXCIsIFwiTmV3IEdhbWVcIik7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oYm9hcmRzQ29udGFpbmVyLCBwbGF5ZXJCb2FyZFdyYXBwZXIsIGNvbXB1dGVyQm9hcmRXcmFwcGVyKTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihnYW1lQ29udGFpbmVyLCBpbnN0cnVjdGlvbnMsIGJvYXJkc0NvbnRhaW5lciwgbmV3R2FtZUJ1dHRvbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlTmV3R2FtZUJ1dHRvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZE5ld0dhbWVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3R2FtZU1vZGFsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJuZXctZ2FtZS1tb2RhbFwiLCBcIm1vZGFsIGNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IG5ld0dhbWVUaXRsZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwibmV3LWdhbWUtdGl0bGVcIixcbiAgICAgICAgICAgIFwibW9kYWwtdGl0bGVcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMgb24gdGhlIGdyaWRcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwic2hpcC1uYW1lXCIsIFwic2hpcC1uYW1lXCIsIFwiXCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiOiAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgcm90YXRlQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJzaGlwLXJvdGF0ZS1idXR0b25cIixcbiAgICAgICAgICAgIFwibW9kYWwtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIlJvdGF0ZVwiLFxuICAgICAgICAgICAgeyBcImRhdGEtZGlyZWN0aW9uXCI6IFwicmlnaHRcIiB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNldFVwR3JpZCA9IF9tYWtlR3JpZChcInNldC11cC1ib2FyZFwiKTtcblxuICAgICAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInN0YXJ0LWdhbWUtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIm1vZGFsLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJTdGFydCBHYW1lXCJcbiAgICAgICAgKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgICAgICBuZXdHYW1lTW9kYWwsXG4gICAgICAgICAgICBuZXdHYW1lVGl0bGUsXG4gICAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICAgIHJvdGF0ZUJ1dHRvbixcbiAgICAgICAgICAgIHNldFVwR3JpZCxcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvblxuICAgICAgICApO1xuXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShNb2RhbC5kaXNwbGF5TW9kYWwobmV3R2FtZU1vZGFsKSlcbiAgICAgICAgICAgIC50aGVuKEV2ZW50SGFuZGxlci5hY3RpdmF0ZU5ld0dhbWVNb2RhbCgpKVxuICAgICAgICAgICAgLnRoZW4oRXZlbnRIYW5kbGVyLmFjdGl2YXRlU3BhY2VzKFwiI3NldC11cC1ib2FyZFwiKSlcbiAgICAgICAgICAgIC50aGVuKGRpc3BsYXlCb2F0U2V0VXAoKSlcbiAgICAgICAgICAgIC50aGVuKGFjdGl2YXRlQm9hcmQoXCIjc2V0LXVwLWJvYXJkXCIpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm90YXRlQnV0dG9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbjtcbiAgICAgICAgY3VycmVudFN0YXRlID09IFwicmlnaHRcIlxuICAgICAgICAgICAgPyAocm90YXRlQnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uID0gXCJkb3duXCIpXG4gICAgICAgICAgICA6IChyb3RhdGVCdXR0b24uZGF0YXNldC5kaXJlY3Rpb24gPSBcInJpZ2h0XCIpO1xuICAgIH07XG4gICAgY29uc3QgX2JhZEhvdmVyID0gKHhQb3MsIHlQb3MsIHNpemUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHhQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geFBvcyArIGkpIDogKG9mZnNldCA9IHhQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke29mZnNldH0tJHt5UG9zfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeVBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB5UG9zICsgaSkgOiAob2Zmc2V0ID0geVBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7eFBvc30tJHtvZmZzZXR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNzZXQtdXAtYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LnRvZ2dsZShcImJhZC1ob3ZlclwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBob3ZlclNldFVwID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUludChET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LnNpemUpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtcm90YXRlLWJ1dHRvblwiKS5kYXRhc2V0LmRpcmVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4UG9zID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvcyk7XG4gICAgICAgICAgICBsZXQgeVBvcyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3MpO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHhQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geFBvcyArIGkpIDogKG9mZnNldCA9IHhQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke29mZnNldH0tJHt5UG9zfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeVBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB5UG9zICsgaSkgOiAob2Zmc2V0ID0geVBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7eFBvc30tJHtvZmZzZXR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChET01NYW5pcC5nZXRFbGVtZW50KGAjc2V0LXVwLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC5jb250YWlucyhcImJvYXQtcGxhY2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgX2JhZEhvdmVyKHhQb3MsIHlQb3MsIHNpemUsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3NldC11cC1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiaG92ZXJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZEhvdmVyQXR0YWNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYCR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvc30tJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zfWA7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNjb21wdXRlci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVIb3ZlckF0dGFjayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGAke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3N9LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvc31gO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjY29tcHV0ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUJvYXRTZXRVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpO1xuICAgICAgICBsZXQgc2hpcEluZGV4ID0gcGFyc2VJbnQoc2hpcE5hbWUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHNoaXBOYW1lLnRleHRDb250ZW50ID0gc2hpcEFycmF5W3NoaXBJbmRleF0uc2hpcE5hbWU7XG4gICAgICAgIHNoaXBOYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtc2l6ZVwiLCBzaGlwQXJyYXlbc2hpcEluZGV4XS5zaGlwU2l6ZSk7XG4gICAgICAgIHNoaXBOYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgKytzaGlwSW5kZXgpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgaG92ZXJTZXRVcChlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcEluZGV4ID4gNSkge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGVTcGFjZXMoXCIjc2V0LXVwLWJvYXJkXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSBzaGlwcyA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3BsYXllci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbi54UG9zfS0ke3Bvc2l0aW9uLnlQb3N9YCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJib2F0LXBsYWNlZFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGZpbGxJbkF0dGFjayA9ICh4LCB5LCBwbGF5ZXJOYW1lLCBoaXQpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1hcmtEZXN0cm95ZWRTaGlwID0gKHBvc2l0aW9uLCBwbGF5ZXJOYW1lKSA9PiB7XG4gICAgICAgIHBvc2l0aW9uLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VFbGVtID0gRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7c3BhY2UueFBvc30tJHtzcGFjZS55UG9zfWApO1xuICAgICAgICAgICAgc3BhY2VFbGVtLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZWRcIik7XG4gICAgICAgICAgICBzcGFjZUVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5TWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2dhbWUtaW5zdHJ1Y3Rpb25zXCIpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVidWlsZEJvYXJkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNwbGF5ZXItYm9hcmQtd3JhcHBlclwiKTtcbiAgICAgICAgcGxheWVyQm9hcmRXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICBwbGF5ZXJCb2FyZFdyYXBwZXIuaW5zZXJ0QmVmb3JlKF9tYWtlR3JpZChcInBsYXllci1ib2FyZFwiKSwgcGxheWVyQm9hcmRXcmFwcGVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjY29tcHV0ZXItYm9hcmQtd3JhcHBlclwiKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFdyYXBwZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRXcmFwcGVyLmluc2VydEJlZm9yZShfbWFrZUdyaWQoXCJjb21wdXRlci1ib2FyZFwiKSwgY29tcHV0ZXJCb2FyZFdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2YXRlQm9hcmQsXG4gICAgICAgIGJ1aWxkU3RhcnRpbmdQYWdlLFxuICAgICAgICBidWlsZE5ld0dhbWVNb2RhbCxcbiAgICAgICAgZGlzcGxheUJvYXRTZXRVcCxcbiAgICAgICAgdG9nZ2xlUm90YXRlQnV0dG9uLFxuICAgICAgICBob3ZlclNldFVwLFxuICAgICAgICBhZGRIb3ZlckF0dGFjayxcbiAgICAgICAgcmVtb3ZlSG92ZXJBdHRhY2ssXG4gICAgICAgIHBsYWNlUGxheWVyU2hpcHMsXG4gICAgICAgIGZpbGxJbkF0dGFjayxcbiAgICAgICAgbWFya0Rlc3Ryb3llZFNoaXAsXG4gICAgICAgIGRpc3BsYXlNZXNzYWdlLFxuICAgICAgICByZWJ1aWxkQm9hcmRzLFxuICAgIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IERPTU1hbmlwID0gKCgpID0+IHtcbiAgICAvL3Nob3J0aGFuZCB0byBnZXQgZWxlbWVudHMgZWFzaWVyXG4gICAgY29uc3QgZ2V0RWxlbWVudCA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IGdldEVsZW1lbnRzID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICAvL3Nob3J0aGFuZCB0byBtYWtlIGEgbmV3IGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzIHRvIGl0XG4gICAgY29uc3QgbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQgPSBcIlwiLCBIVE1MQ2xhc3MgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgLi4uYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChIVE1MQ2xhc3MgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBIVE1MQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfTtcblxuICAgIC8vYWRkcyBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyB0byBhIHBhcmVudFxuICAgIGNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudCwgLi4uY2hpbGRyZW4pID0+IHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICB9O1xuXG4gICAgLy9pbnNlcnRzIGEgRE9NIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBlbGVtZW50XG4gICAgY29uc3QgaW5zZXJ0QWZ0ZXIgPSAobmV3Tm9kZSwgZXhpc3RpbmdOb2RlKSA9PiB7XG4gICAgICAgIGV4aXN0aW5nTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBleGlzdGluZ05vZGUubmV4dFNpYmxpbmcpO1xuICAgIH07XG5cbiAgICAvL2NsZWFycyBvdXQgYWxsIGNoaWxkIG5vZGVzIG9mIGFuIGVsZW1lbnQsIHNraXBzIGFzIG1hbnkgZWxlbWVudHMgYXMgcmVxdWVzdGVkXG4gICAgY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudCwgc2tpcCA9IDApID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiBza2lwOyBpLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgZ2V0RWxlbWVudHMsIG1ha2VOZXdFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiwgaW5zZXJ0QWZ0ZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBCdWlsZFBhZ2UgfSBmcm9tIFwiLi9CdWlsZFBhZ2VcIjtcbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcblxuZXhwb3J0IGNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZhdGVOZXdHYW1lQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI25ldy1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5uZXdHYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGFjdGl2YXRlTmV3R2FtZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtcm90YXRlLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQnVpbGRQYWdlLnRvZ2dsZVJvdGF0ZUJ1dHRvbik7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc3RhcnQtZ2FtZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdhbWUuc3RhcnRHYW1lKTtcbiAgICB9O1xuICAgIGNvbnN0IGFjdGl2YXRlU3BhY2VzID0gaWQgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhgJHtpZH0gLmJvYXJkLXNwYWNlOm5vdCguYXR0YWNrZWQpYCkuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zcGFjZUNsaWNrZWQpO1xuICAgICAgICAgICAgaWYgKGlkID09IFwiI3NldC11cC1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJTZXRVcCk7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gXCIjY29tcHV0ZXItYm9hcmRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgQnVpbGRQYWdlLmFkZEhvdmVyQXR0YWNrKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLnJlbW92ZUhvdmVyQXR0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBkZWFjdGl2YXRlU3BhY2VzID0gaWQgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50cyhgJHtpZH0gLmJvYXJkLXNwYWNlYCkuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zcGFjZUNsaWNrZWQpO1xuICAgICAgICAgICAgaWYgKGlkID09IFwiI3NldC11cC1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJTZXRVcCk7XG4gICAgICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gXCIjY29tcHV0ZXItYm9hcmRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgQnVpbGRQYWdlLmhvdmVyQXR0YWNrKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyQXR0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBjb25zdCBkZWFjdGl2YXRlQXR0YWNrZWRTcGFjZSA9IHNwYWNlID0+IHtcbiAgICAvLyAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdhbWUuc3BhY2VDbGlja2VkKTtcbiAgICAvLyAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgIC8vICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyQXR0YWNrKTtcbiAgICAvLyB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGVOZXdHYW1lQnV0dG9uLFxuICAgICAgICBhY3RpdmF0ZU5ld0dhbWVNb2RhbCxcbiAgICAgICAgYWN0aXZhdGVTcGFjZXMsXG4gICAgICAgIGRlYWN0aXZhdGVTcGFjZXMsXG4gICAgICAgIC8vZGVhY3RpdmF0ZUF0dGFja2VkU3BhY2UsXG4gICAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xuICAgIGxldCBfc3BhY2VzID0gX2luaXRTcGFjZXMoKTtcbiAgICBsZXQgX3NoaXBzID0gW107XG4gICAgbGV0IF9oaXRMaXN0ID0gW107XG4gICAgbGV0IF9zcGFjZUxpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIF9pbml0U3BhY2VzKCkge1xuICAgICAgICBsZXQgc3BhY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiBpLCB5UG9zOiBqLCBhdHRhY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBfc3BhY2VzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIF9zcGFjZXNbX3NwYWNlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSldO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2tTcGFjZSh4LCB5KSB7XG4gICAgICAgIF9zcGFjZXNbX3NwYWNlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSldLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGhpdCA9IC0xO1xuICAgICAgICBfc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmF0dGFja1NwYWNlKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfaGl0TGlzdC5wdXNoKHsgeFBvczogeCwgeVBvczogeSB9KTtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgX3NwYWNlTGlzdC5wdXNoKHsgeFBvczogcGFyc2VJbnQoeCkgKyBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc3BhY2VMaXN0LnB1c2goeyB4UG9zOiB4LCB5UG9zOiBwYXJzZUludCh5KSArIGkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2hpcHMoKSB7XG4gICAgICAgIHJldHVybiBfc2hpcHMubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEhpdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBfaGl0TGlzdC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3BhY2VMaXN0KCkge1xuICAgICAgICByZXR1cm4gX3NwYWNlTGlzdC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWxsRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc0Rlc3Ryb3llZCgpID09IHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEJvYXJkLCBjaGVja1BsYWNlLCBhdHRhY2tTcGFjZSwgYWRkU2hpcCwgZ2V0U2hpcHMsIGdldEhpdExpc3QsIGdldFNwYWNlTGlzdCwgYWxsRGVzdHJveWVkIH07XG59XG4iLCJpbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9ICgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbC1iYWNrZ3JvdW5kXCIsIFwibW9kYWwgYmFja1wiKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcikpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGNsb3NlQ3VycmVudE1vZGFsKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjbW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpLnRoZW4oc2V0VGltZW91dCgoKSA9PiBtb2RhbC5yZW1vdmUoKSwgMjAwKSk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpc3BsYXlNb2RhbCwgY2xvc2VDdXJyZW50TW9kYWwgfTtcbn0pKCk7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgICBsZXQgX2JvYXJkID0gQm9hcmQoKTtcbiAgICBsZXQgX2xvc3QgPSBmYWxzZTtcbiAgICBsZXQgX2lzVHVybiA9IGZhbHNlO1xuICAgIGxldCBsYXN0UmVzdWx0ID0gXCJcIjtcbiAgICBmdW5jdGlvbiBpc0xvc3QoKSB7XG4gICAgICAgIHJldHVybiBfbG9zdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlVHVybigpIHtcbiAgICAgICAgX2lzVHVybiA9ICFfaXNUdXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gX2lzVHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICAgICAgX2JvYXJkLmFkZFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgaGl0U2hpcEluZGV4ID0gX2JvYXJkLmF0dGFja1NwYWNlKHgsIHkpO1xuICAgICAgICBpZiAoX2JvYXJkLmFsbERlc3Ryb3llZCgpKSB7XG4gICAgICAgICAgICBfbG9zdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpdFNoaXBJbmRleDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBfYm9hcmQ7XG4gICAgfVxuICAgIHJldHVybiB7IGlzTG9zdCwgdG9nZ2xlVHVybiwgZ2V0VHVybiwgYWRkU2hpcCwgYXR0YWNrLCBnZXRCb2FyZCwgbGFzdFJlc3VsdCB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICBsZXQgX2hlYWx0aCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gXCJnb29kXCIpO1xuICAgIGxldCBfZGVzdHJveWVkID0gZmFsc2U7XG4gICAgbGV0IF9jb29yZGluYXRlcyA9IF9zZXRTdGFydGluZyh4LCB5LCBkaXIpO1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50SGVhbHRoKCkge1xuICAgICAgICByZXR1cm4gX2hlYWx0aC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveWVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGFtYWdlKGxvY2F0aW9uKSB7XG4gICAgICAgIF9oZWFsdGhbbG9jYXRpb25dID0gXCJkYW1hZ2VcIjtcbiAgICAgICAgaWYgKF9oZWFsdGguZXZlcnkocGxhY2UgPT4gcGxhY2UgPT0gXCJkYW1hZ2VcIikpIHtcbiAgICAgICAgICAgIF9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zZXRTdGFydGluZyhpbmNvbWluZ3gsIGluY29taW5neSwgZGlyID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGxldCBzcGFjZXMgPSBbXTtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChpbmNvbWluZ3gpO1xuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGluY29taW5neSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCArIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCAtIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCwgeVBvczogeSArIGkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcInVwXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgLSBpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFjZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Nvb3JkaW5hdGVzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFja1NwYWNlKHgsIHkpIHtcbiAgICAgICAgbGV0IGF0dGFja0luZGV4ID0gX2Nvb3JkaW5hdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KTtcbiAgICAgICAgaWYgKGF0dGFja0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIF9kYW1hZ2UoYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEN1cnJlbnRIZWFsdGgsIGlzRGVzdHJveWVkLCBnZXRQb3NpdGlvbiwgZ2V0TmFtZSwgYXR0YWNrU3BhY2UgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBzaGlwQXJyYXkgZnJvbSBcIi4vc2hpcHMuanNvblwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgICBsZXQgX2h1bWFuUGxheWVyO1xuICAgIGxldCBfY29tcHV0ZXJQbGF5ZXI7XG4gICAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICAgICAgQnVpbGRQYWdlLmJ1aWxkTmV3R2FtZU1vZGFsKCk7XG4gICAgICAgIF9odW1hblBsYXllciA9IFBsYXllcigpO1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICB9O1xuICAgIGNvbnN0IHNwYWNlQ2xpY2tlZCA9IGUgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSBcInNldC11cC1ib2FyZFwiID8gX3BsYWNlQm9hdChlKSA6IF9hdHRhY2tDb21wdXRlclBsYXllcihlKTtcbiAgICB9O1xuICAgIGNvbnN0IF9zd2l0Y2hUdXJucyA9ICgpID0+IHtcbiAgICAgICAgX2h1bWFuUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgX2NvbXB1dGVyUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICB9O1xuICAgIGNvbnN0IF9wbGFjZUJvYXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgaG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5ob3ZlclwiKTtcbiAgICAgICAgY29uc3QgYmFkSG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5iYWQtaG92ZXJcIik7XG4gICAgICAgIGlmIChiYWRIb3ZlclNwYWNlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaG92ZXJTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXQtcGxhY2VkXCIpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LnNpemU7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLmFkZFNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcFNpemUsXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvcyxcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zLFxuICAgICAgICAgICAgICAgIHNoaXBEaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2hpcE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheUJvYXRTZXRVcChlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfaXNBdHRhY2tWYWxpZCA9IChwbGF5ZXIsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLmdldEhpdExpc3QoKVxuICAgICAgICAgICAgLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZS54UG9zID09IHggJiYgc3BhY2UueVBvcyA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgX2lzQXR0YWNrSGl0ID0gKHBsYXllciwgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmdldFNwYWNlTGlzdCgpXG4gICAgICAgICAgICAgICAgLnNvbWUoc3BhY2UgPT4gc3BhY2UueFBvcyA9PSB4ICYmIHNwYWNlLnlQb3MgPT0geSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IF9jaGVja0Rlc3Ryb3llZCA9IChwbGF5ZXIsIHBsYXllck5hbWUsIGF0dGFja2VkU2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVthdHRhY2tlZFNoaXBdLmlzRGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5tYXJrRGVzdHJveWVkU2hpcChwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2F0dGFja2VkU2hpcF0uZ2V0UG9zaXRpb24oKSwgcGxheWVyTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IF9hdHRhY2tQbGF5ZXIgPSAocGxheWVyLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZXJOYW1lO1xuICAgICAgICBwbGF5ZXIgPT0gX2h1bWFuUGxheWVyID8gKHBsYXllck5hbWUgPSBcInBsYXllclwiKSA6IChwbGF5ZXJOYW1lID0gXCJjb21wdXRlclwiKTtcblxuICAgICAgICBpZiAoX2lzQXR0YWNrVmFsaWQocGxheWVyLCB4LCB5KSkge1xuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRTaGlwID0gcGxheWVyLmF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIGxldCBoaXQgPSBfaXNBdHRhY2tIaXQocGxheWVyLCB4LCB5KTtcbiAgICAgICAgICAgIHBsYXllci5sYXN0UmVzdWx0ID0gaGl0O1xuICAgICAgICAgICAgQnVpbGRQYWdlLmZpbGxJbkF0dGFjayh4LCB5LCBwbGF5ZXJOYW1lLCBoaXQpO1xuICAgICAgICAgICAgaWYgKGF0dGFja2VkU2hpcCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGVja0Rlc3Ryb3llZChwbGF5ZXIsIHBsYXllck5hbWUsIGF0dGFja2VkU2hpcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmxhc3RSZXN1bHQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2F0dGFja2VkU2hpcF0uZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgX2Rpc3BsYXlMYXN0UmVzdWx0ID0gcGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbGFzdFJlc3VsdCA9IHBsYXllci5sYXN0UmVzdWx0O1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gX2NvbXB1dGVyUGxheWVyKSB7XG4gICAgICAgICAgICBsYXN0UmVzdWx0ID09IHRydWVcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIllvdSBmaXJlIGF0IHRoZSBjb21wdXRlci4uLiBJdCdzIGEgSGl0IVwiKVxuICAgICAgICAgICAgICAgIDogbGFzdFJlc3VsdCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiWW91IGZpcmUgYXQgdGhlIGNvbXB1dGVyLi4uIEl0J3MgYSBNaXNzLi4uXCIpXG4gICAgICAgICAgICAgICAgOiBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoYFlvdSBzdW5rIHRoZWlyICR7bGFzdFJlc3VsdH0hYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UmVzdWx0ID09IHRydWVcbiAgICAgICAgICAgICAgICA/IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIlRoZSBjb21wdXRlciBmaXJlcyBhdCB5b3UuLi4gSXQncyBhIEhpdC4uLlwiKVxuICAgICAgICAgICAgICAgIDogbGFzdFJlc3VsdCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiVGhlIGNvbXB1dGVyIGZpcmVzIGF0IHlvdS4uLiBJdCdzIGEgTWlzcyFcIilcbiAgICAgICAgICAgICAgICA6IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShgVGhleSBzdW5rIHlvdXIgJHtsYXN0UmVzdWx0fSFgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2F0dGFja0NvbXB1dGVyUGxheWVyID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHhQb3MgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zO1xuICAgICAgICBjb25zdCB5UG9zID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvcztcbiAgICAgICAgX2F0dGFja1BsYXllcihfY29tcHV0ZXJQbGF5ZXIsIHhQb3MsIHlQb3MpO1xuICAgICAgICBfZGlzcGxheUxhc3RSZXN1bHQoX2NvbXB1dGVyUGxheWVyKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGVTcGFjZXMoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIEJ1aWxkUGFnZS5yZW1vdmVIb3ZlckF0dGFjayhlKTtcbiAgICAgICAgX3N3aXRjaFR1cm5zKCk7XG4gICAgICAgIF9wbGF5VHVybigpO1xuICAgIH07XG5cbiAgICAvL2ZvciB0ZXN0aW5nIG9ubHlcbiAgICBjb25zdCBfcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgYCNjb21wdXRlci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbi54UG9zfS0ke3Bvc2l0aW9uLnlQb3N9YFxuICAgICAgICAgICAgICAgICAgICApLmNsYXNzTGlzdC5hZGQoXCJib2F0LXBsYWNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAvL2dvIHRocm91Z2ggZWFjaCBzaGlwXG4gICAgICAgIHdoaWxlIChpIDwgc2hpcEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGxldCB4UG9zO1xuICAgICAgICAgICAgbGV0IHlQb3M7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy9yYW5kb21seSBwaWNrIGEgZGlyZWN0aW9uIGVpdGhlciByaWdodCBvciBkb3duXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAwID8gKGRpcmVjdGlvbiA9IFwicmlnaHRcIikgOiAoZGlyZWN0aW9uID0gXCJkb3duXCIpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAvL3Jlc3RyaWN0IHRoZSByYW5kb20gc28gaXQgZG9lc24ndCBwaWNrIGEgc3RhcnRpbmcgcGxhY2UgdGhhdCB3b3VsZCBwdXQgdGhlIHBpZWNlcyBvdXRzaWRlXG4gICAgICAgICAgICAgICAgLy9vZiB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgIHhQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwQXJyYXlbaV0uc2hpcFNpemUpKTtcbiAgICAgICAgICAgICAgICB5UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHlQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwQXJyYXlbaV0uc2hpcFNpemUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0YWtlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9jb21wdXRlclBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9vayBhdCBlYWNoIG9mIHRoZSBjdXJyZW50IHNoaXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBBcnJheVtpXS5zaGlwU2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hbmQgY29tcGFyZSB0aGVpciBjb29yZGluYXRlcyB0byB0aGUgcG9zc2libGUgY29vcmRpbmF0ZXMgb2YgdGhpcyBuZXcgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zICsgaiA9PSBwb3MueFBvcyAmJiB5UG9zID09IHBvcy55UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGl0J3MgYWxyZWFkeSB0YWtlbiwgY2FuJ3Qgc3VibWl0IHRoZSBuZXcgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MgPT0gcG9zLnhQb3MgJiYgeVBvcyArIGogPT0gcG9zLnlQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2lmIHRoZSBzcGFjZSBpcyBub3QgYWxyZWFkeSB0YWtlbiwgYWRkIHRoZSBzaGlwIHRvIHRoZSBQbGF5ZXIncyBib2FyZFxuICAgICAgICAgICAgaWYgKCF0YWtlbikge1xuICAgICAgICAgICAgICAgIF9jb21wdXRlclBsYXllci5hZGRTaGlwKHNoaXBBcnJheVtpXS5zaGlwU2l6ZSwgeFBvcywgeVBvcywgZGlyZWN0aW9uLCBzaGlwQXJyYXlbaV0uc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF9jb21wdXRlclBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbaV0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGUgbmV4dCBzaGlwIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL19wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICB9O1xuICAgIGNvbnN0IF9yYW5kb21QYXVzZSA9IChtaW5MZW5ndGgsIG1heExlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBwYXVzZUxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhMZW5ndGggLSBtaW5MZW5ndGgpICsgbWluTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBwYXVzZUxlbmd0aCkpO1xuICAgIH07XG4gICAgY29uc3QgX2NvaW5GbGlwID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgY29uc3QgX2Nob29zZVR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChfY29pbkZsaXAoKSkge1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gUGxheWVyIGdvZXMgZmlyc3QuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbXB1dGVyUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gQ29tcHV0ZXIgZ29lcyBmaXJzdC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2NvbXB1dGVyUGxheWVyc1R1cm4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZWRWYWxpZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXBsYXllZFZhbGlkKSB7XG4gICAgICAgICAgICBwbGF5ZWRWYWxpZCA9IF9hdHRhY2tQbGF5ZXIoXG4gICAgICAgICAgICAgICAgX2h1bWFuUGxheWVyLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgX2Rpc3BsYXlMYXN0UmVzdWx0KF9odW1hblBsYXllcik7XG4gICAgICAgIF9zd2l0Y2hUdXJucygpO1xuICAgIH07XG4gICAgY29uc3QgX3BsYXlUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2h1bWFuUGxheWVyLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlU3BhY2VzKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3JhbmRvbVBhdXNlKDEwMDAsIDMwMDApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gX2NvbXB1dGVyUGxheWVyc1R1cm4oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBfcGxheVR1cm4oKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikuZGF0YXNldC5pbmRleCA9PSA2KSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoTW9kYWwuY2xvc2VDdXJyZW50TW9kYWwoKSk7XG5cbiAgICAgICAgICAgIEJ1aWxkUGFnZS5yZWJ1aWxkQm9hcmRzKCk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UucGxhY2VQbGF5ZXJTaGlwcyhfaHVtYW5QbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpKTtcbiAgICAgICAgICAgIF9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5hY3RpdmF0ZUJvYXJkKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICAgICAgX2Nob29zZVR1cm4oKTtcbiAgICAgICAgICAgIF9wbGF5VHVybigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzdGFydC1nYW1lLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBwbGFjZSBhbGwgb2YgeW91ciBzaGlwc1wiKTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbi5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4geyBuZXdHYW1lLCBzcGFjZUNsaWNrZWQsIHN0YXJ0R2FtZSB9O1xufSkoKTtcblxuY29uc3QgaW5pdFBhZ2UgPSAoKCkgPT4ge1xuICAgIFByb21pc2UucmVzb2x2ZShCdWlsZFBhZ2UuYnVpbGRTdGFydGluZ1BhZ2UoKSk7XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDViODtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzFiMWExNztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNTBweDtcXG4gICAgcGFkZGluZzogNjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2dhbWUtaW5zdHJ1Y3Rpb25zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSBbY29sLXN0YXJ0XSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUgW3Jvdy1zdGFydF0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VhO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5ib2FyZC5hY3RpdmUgLmhvdmVyLmJvYXJkLXNwYWNlOm5vdCguYXR0YWNrZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmJvYXQtcGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZDNmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhNjg4MDtcXG59XFxuLmJvYXJkLmFjdGl2ZSAuYm9hcmQtc3BhY2UuYmFkLWhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdjODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzdjODA0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MlxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZC5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTExXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wYWdlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxufVxcblxcbi5tb2RhbC5iYWNrIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGFsLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMHB4IDQwcHg7XFxufVxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubW9kYWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG59XFxuXFxuI3NoaXAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsK0NBQStDO0lBQy9DLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkNWI4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBjb2xvcjogIzFiMWExNztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZ2FtZS1pbnN0cnVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlIFtjb2wtc3RhcnRdKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSBbcm93LXN0YXJ0XSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmJvYXJkLmFjdGl2ZSAuaG92ZXIuYm9hcmQtc3BhY2U6bm90KC5hdHRhY2tlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYm9hdC1wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkM2ZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE2ODgwO1xcbn1cXG4uYm9hcmQuYWN0aXZlIC5ib2FyZC1zcGFjZS5iYWQtaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2M4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjN2M4MDRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTkyXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkLmhpdDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBhZ2UtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG59XFxuXFxuLm1vZGFsLmJhY2sge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwuY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubW9kYWwtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAwcHggNDBweDtcXG59XFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi5tb2RhbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbn1cXG5cXG4jc2hpcC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJFdmVudEhhbmRsZXIiLCJNb2RhbCIsInNoaXBBcnJheSIsIkJ1aWxkUGFnZSIsImFjdGl2YXRlQm9hcmQiLCJpZCIsImdldEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfbWFrZUdyaWQiLCJncmlkQ29udGFpbmVyIiwibWFrZU5ld0VsZW1lbnQiLCJpIiwiaiIsImFwcGVuZENoaWxkIiwiYnVpbGRTdGFydGluZ1BhZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwiZ2FtZUNvbnRhaW5lciIsImluc3RydWN0aW9ucyIsImJvYXJkc0NvbnRhaW5lciIsInBsYXllckJvYXJkV3JhcHBlciIsInBsYXllckJvYXJkIiwicGxheWVyQm9hcmRMYWJlbCIsImFwcGVuZENoaWxkcmVuIiwiY29tcHV0ZXJCb2FyZFdyYXBwZXIiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJCb2FyZExhYmVsIiwibmV3R2FtZUJ1dHRvbiIsImRvY3VtZW50IiwiYm9keSIsImFjdGl2YXRlTmV3R2FtZUJ1dHRvbiIsImJ1aWxkTmV3R2FtZU1vZGFsIiwibmV3R2FtZU1vZGFsIiwibmV3R2FtZVRpdGxlIiwic2hpcE5hbWUiLCJyb3RhdGVCdXR0b24iLCJzZXRVcEdyaWQiLCJzdGFydEdhbWVCdXR0b24iLCJQcm9taXNlIiwicmVzb2x2ZSIsImRpc3BsYXlNb2RhbCIsInRoZW4iLCJhY3RpdmF0ZU5ld0dhbWVNb2RhbCIsImFjdGl2YXRlU3BhY2VzIiwiZGlzcGxheUJvYXRTZXRVcCIsInRvZ2dsZVJvdGF0ZUJ1dHRvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFzZXQiLCJkaXJlY3Rpb24iLCJfYmFkSG92ZXIiLCJ4UG9zIiwieVBvcyIsInNpemUiLCJwb3NpdGlvbiIsIm9mZnNldCIsInRvZ2dsZSIsImhvdmVyU2V0VXAiLCJlIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwieHBvcyIsInlwb3MiLCJjb250YWlucyIsImFkZEhvdmVyQXR0YWNrIiwicmVtb3ZlSG92ZXJBdHRhY2siLCJyZW1vdmUiLCJzaGlwSW5kZXgiLCJpbmRleCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwic2hpcFNpemUiLCJkZWFjdGl2YXRlU3BhY2VzIiwicGxhY2VQbGF5ZXJTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJnZXRQb3NpdGlvbiIsImZpbGxJbkF0dGFjayIsIngiLCJ5IiwicGxheWVyTmFtZSIsImhpdCIsIm1hcmtEZXN0cm95ZWRTaGlwIiwic3BhY2UiLCJzcGFjZUVsZW0iLCJkaXNwbGF5TWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWJ1aWxkQm9hcmRzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImluc2VydEFmdGVyIiwibmV3Tm9kZSIsImV4aXN0aW5nTm9kZSIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInJlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJjaGlsZE5vZGVzIiwiR2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdHYW1lIiwic3RhcnRHYW1lIiwic3BhY2VDbGlja2VkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhvdmVyQXR0YWNrIiwiU2hpcCIsIkJvYXJkIiwiX3NwYWNlcyIsIl9pbml0U3BhY2VzIiwiX3NoaXBzIiwiX2hpdExpc3QiLCJfc3BhY2VMaXN0Iiwic3BhY2VzIiwicHVzaCIsImF0dGFja2VkIiwiZ2V0Qm9hcmQiLCJtYXAiLCJjaGVja1BsYWNlIiwiZmluZEluZGV4IiwiYXR0YWNrU3BhY2UiLCJhZGRTaGlwIiwiZGlyIiwibmFtZSIsImdldFNoaXBzIiwiZ2V0SGl0TGlzdCIsImdldFNwYWNlTGlzdCIsImFsbERlc3Ryb3llZCIsImV2ZXJ5IiwiaXNEZXN0cm95ZWQiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwic2V0VGltZW91dCIsImNsb3NlQ3VycmVudE1vZGFsIiwiUGxheWVyIiwiX2JvYXJkIiwiX2xvc3QiLCJfaXNUdXJuIiwibGFzdFJlc3VsdCIsImlzTG9zdCIsInRvZ2dsZVR1cm4iLCJnZXRUdXJuIiwiYXR0YWNrIiwiaGl0U2hpcEluZGV4IiwiX2hlYWx0aCIsIkFycmF5IiwiZnJvbSIsIl9kZXN0cm95ZWQiLCJfY29vcmRpbmF0ZXMiLCJfc2V0U3RhcnRpbmciLCJfbmFtZSIsImdldEN1cnJlbnRIZWFsdGgiLCJfZGFtYWdlIiwibG9jYXRpb24iLCJwbGFjZSIsImluY29taW5neCIsImluY29taW5neSIsImdldE5hbWUiLCJhdHRhY2tJbmRleCIsIl9odW1hblBsYXllciIsIl9jb21wdXRlclBsYXllciIsInBhcmVudEVsZW1lbnQiLCJfcGxhY2VCb2F0IiwiX2F0dGFja0NvbXB1dGVyUGxheWVyIiwiX3N3aXRjaFR1cm5zIiwiaG92ZXJTcGFjZXMiLCJiYWRIb3ZlclNwYWNlcyIsInNoaXBEaXJlY3Rpb24iLCJfaXNBdHRhY2tWYWxpZCIsInBsYXllciIsInZhbGlkIiwiX2lzQXR0YWNrSGl0Iiwic29tZSIsIl9jaGVja0Rlc3Ryb3llZCIsImF0dGFja2VkU2hpcCIsIl9hdHRhY2tQbGF5ZXIiLCJfZGlzcGxheUxhc3RSZXN1bHQiLCJfcGxheVR1cm4iLCJfcGxhY2VDb21wdXRlclNoaXBzIiwiX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRha2VuIiwicG9zIiwiY29uc29sZSIsImxvZyIsIl9yYW5kb21QYXVzZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBhdXNlTGVuZ3RoIiwiX2NvaW5GbGlwIiwiX2Nob29zZVR1cm4iLCJfY29tcHV0ZXJQbGF5ZXJzVHVybiIsInBsYXllZFZhbGlkIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsImluaXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==