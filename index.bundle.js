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

  var hoverAttack = function hoverAttack(e) {
    var position = "".concat(e.currentTarget.dataset.xpos, "-").concat(e.currentTarget.dataset.ypos);
    _DOMManip__WEBPACK_IMPORTED_MODULE_0__.DOMManip.getElement("#computer-board #space-".concat(position)).classList.toggle("hover");
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
    hoverAttack: hoverAttack,
    placePlayerShips: placePlayerShips,
    fillInAttack: fillInAttack,
    markDestroyedShip: markDestroyedShip,
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
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space")).forEach(function (space) {
      space.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      } else if (id == "#computer-board") {
        space.addEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
        space.addEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
      }
    });
  };

  var deactivateSpaces = function deactivateSpaces(id) {
    _DOMManip__WEBPACK_IMPORTED_MODULE_2__.DOMManip.getElements("".concat(id, " .board-space")).forEach(function (space) {
      space.removeEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);

      if (id == "#set-up-board") {
        space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
        space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverSetUp);
      }
    });
  };

  var deactivateAttackedSpace = function deactivateAttackedSpace(space) {
    space.removeEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.Game.spaceClicked);
    space.removeEventListener("mouseover", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
    space.removeEventListener("mouseout", _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack);
  };

  return {
    activateNewGameButton: activateNewGameButton,
    activateNewGameModal: activateNewGameModal,
    activateSpaces: activateSpaces,
    deactivateSpaces: deactivateSpaces,
    deactivateAttackedSpace: deactivateAttackedSpace
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
  } //for testing


  function getBoard() {
    return _board;
  }

  return {
    isLost: isLost,
    toggleTurn: toggleTurn,
    getTurn: getTurn,
    addShip: addShip,
    attack: attack,
    getBoard: getBoard
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
  var _health = Array(size).fill("good");

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

  var _attackPlayer = function _attackPlayer(player, x, y) {
    var playerName;
    player == _humanPlayer ? playerName = "player" : playerName = "computer";
    var valid = true;
    player.getBoard().getHitList().forEach(function (space) {
      if (space.xPos == x && space.yPos == y) {
        valid = false;
        return false;
      }
    });
    var attackedShip = player.attack(x, y);
    var hit = false;

    if (player.getBoard().getSpaceList().some(function (space) {
      return space.xPos == x && space.yPos == y;
    })) {
      hit = true;
    }

    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.fillInAttack(x, y, playerName, hit);

    if (attackedShip >= 0) {
      if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
        _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.markDestroyedShip(player.getBoard().getShips()[attackedShip].getPosition(), playerName);
      }
    }

    return true;
  };

  var _attackComputerPlayer = function _attackComputerPlayer(e) {
    var xPos = e.currentTarget.dataset.xpos;
    var yPos = e.currentTarget.dataset.ypos;

    _attackPlayer(_computerPlayer, xPos, yPos);

    _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.deactivateAttackedSpace(e.currentTarget);
    _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.hoverAttack(e);
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

  var startGame = function startGame() {
    if (_DOMManip__WEBPACK_IMPORTED_MODULE_3__.DOMManip.getElement("#ship-name").dataset.index == 6) {
      Promise.resolve(_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal.closeCurrentModal());
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.rebuildBoards();
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.placePlayerShips(_humanPlayer.getBoard().getShips());

      _generateComputerShips();

      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.activateBoard("#computer-board");
      _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.activateSpaces("#computer-board");
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
  Promise.resolve(_BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.buildStartingPage()); // .then(Promise.resolve(BuildPage.buildNewGameModal()));
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,cAAc;IACd,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,yBAAyB;IACzB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,UAAU;AACd;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #e6d5b8;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #1b1a17;\n}\n\n#header {\n    height: 72px;\n    background-color: #e45826;\n    color: #1b1a17;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: -webkit-fill-available;\n    background-color: inherit;\n    min-height: inherit;\n}\n\nbutton {\n    border: 2px solid #1b1a17;\n    border-radius: 20px;\n    font-size: 20px;\n    padding: 4px 16px;\n}\nbutton:hover {\n    filter: brightness(80%);\n}\nbutton:active {\n    filter: brightness(60%);\n}\n\n#game-container {\n    background-color: #f0a500;\n    width: 70vw;\n    min-height: 60vh;\n    margin-top: 150px;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 50px;\n    padding: 60px;\n    align-items: center;\n}\n#game-instructions {\n    text-align: center;\n    background-color: #e45826;\n    border-radius: 30px;\n    padding: 10px;\n}\n#boards-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: inherit;\n    justify-content: space-evenly;\n}\n.board-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.board {\n    width: 300px;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 10% [col-start]);\n    grid-template-rows: repeat(10, 10% [row-start]);\n    background-color: #fff7ea;\n    border: 2px solid black;\n}\n.board-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.board.active .hover.board-space {\n    background-color: #9eff9e;\n    border: 1px solid #4a804a;\n}\n.board-space.boat-placed {\n    background-color: #9ed3ff;\n    border: 1px solid #4a6880;\n}\n.board.active .board-space.bad-hover {\n    background-color: #ff9e9e;\n    border: 1px solid #804a4a;\n}\n.board-space.attacked {\n    background-color: #fdff9e;\n    border: 1px solid #7c804a;\n}\n.board-space.attacked::before {\n    color: #7c804a;\n    font: var(--fa-font-solid);\n    content: \"\\f192\";\n}\n.board-space.attacked.hit::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f111\";\n}\n.board-space.destroyed {\n    background-color: #ff9e9e;\n    border-color: #804a4a;\n}\n.board-space.destroyed::before {\n    color: #804a4a;\n    font: var(--fa-font-solid);\n    content: \"\\f057\";\n}\n\n.board-label {\n    font-size: 30px;\n    margin-top: 10px;\n}\n.page-button {\n    background-color: #e45826;\n}\n\n.modal.back {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.6);\n    transition: 0.2s linear;\n    display: flex;\n    justify-content: center;\n}\n.modal.content {\n    margin-top: 50px;\n    width: 600px;\n    background-color: #e45826;\n    border: 2px solid #1b1a17;\n    border-radius: 30px;\n    height: fit-content;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.modal-title {\n    text-align: center;\n    background-color: #f0a500;\n    border-radius: 30px;\n    padding: 10px;\n    font-size: 24px;\n    margin: 0px 40px;\n}\n.modal.active {\n    opacity: 1;\n    z-index: 2;\n}\n.modal-button {\n    background-color: #f0a500;\n}\n\n#ship-name {\n    font-size: 22px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9CdWlsZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01NYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHNoaXBBcnJheSBmcm9tIFwiLi9zaGlwcy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBCdWlsZFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2YXRlQm9hcmQgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoaWQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcbiAgICBjb25zdCBfbWFrZUdyaWQgPSBpZCA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBpZCwgXCJib2FyZFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3BhY2UtJHtqfS0ke2l9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9hcmQtc3BhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiZGF0YS14UG9zXCI6IGogfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJkYXRhLXlQb3NcIjogaSB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xuICAgIH07XG4gICAgY29uc3QgYnVpbGRTdGFydGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiXCIsIFwiQmF0dGxlc2hpcFwiKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiZ2FtZS1pbnN0cnVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiVGhlIGdhbWUgaXMgc2ltcGxlOiBkZXN0cm95IHlvdXIgb3Bwb25lbnQgYmVmb3JlIHRoZXkgZGVzdHJveSB5b3UuXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJib2FyZHMtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBsYXllci1ib2FyZC13cmFwcGVyXCIsIFwiYm9hcmQtd3JhcHBlclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBfbWFrZUdyaWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcInBsYXllci1ib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJib2FyZC1sYWJlbFwiLFxuICAgICAgICAgICAgXCJQbGF5ZXIncyBCb2FyZFwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKHBsYXllckJvYXJkV3JhcHBlciwgcGxheWVyQm9hcmQsIHBsYXllckJvYXJkTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJjb21wdXRlci1ib2FyZC13cmFwcGVyXCIsXG4gICAgICAgICAgICBcImJvYXJkLXdyYXBwZXJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gX21ha2VHcmlkKFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRMYWJlbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiY29tcHV0ZXItYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiQ29tcHV0ZXIncyBCb2FyZFwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGNvbXB1dGVyQm9hcmRXcmFwcGVyLCBjb21wdXRlckJvYXJkLCBjb21wdXRlckJvYXJkTGFiZWwpO1xuICAgICAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJuZXctZ2FtZS1idXR0b25cIiwgXCJwYWdlLWJ1dHRvblwiLCBcIk5ldyBHYW1lXCIpO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGJvYXJkc0NvbnRhaW5lciwgcGxheWVyQm9hcmRXcmFwcGVyLCBjb21wdXRlckJvYXJkV3JhcHBlcik7XG5cbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZ2FtZUNvbnRhaW5lciwgaW5zdHJ1Y3Rpb25zLCBib2FyZHNDb250YWluZXIsIG5ld0dhbWVCdXR0b24pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihkb2N1bWVudC5ib2R5LCBoZWFkZXIsIGNvbnRlbnQpO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZU5ld0dhbWVCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGROZXdHYW1lTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0dhbWVNb2RhbCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwibmV3LWdhbWUtbW9kYWxcIiwgXCJtb2RhbCBjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBuZXdHYW1lVGl0bGUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcIm5ldy1nYW1lLXRpdGxlXCIsXG4gICAgICAgICAgICBcIm1vZGFsLXRpdGxlXCIsXG4gICAgICAgICAgICBcIlBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBncmlkXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInNoaXAtbmFtZVwiLCBcInNoaXAtbmFtZVwiLCBcIlwiLCB7XG4gICAgICAgICAgICBcImRhdGEtaW5kZXhcIjogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwic2hpcC1yb3RhdGUtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIm1vZGFsLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJSb3RhdGVcIixcbiAgICAgICAgICAgIHsgXCJkYXRhLWRpcmVjdGlvblwiOiBcInJpZ2h0XCIgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZXRVcEdyaWQgPSBfbWFrZUdyaWQoXCJzZXQtdXAtYm9hcmRcIik7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJzdGFydC1nYW1lLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJtb2RhbC1idXR0b25cIixcbiAgICAgICAgICAgIFwiU3RhcnQgR2FtZVwiXG4gICAgICAgICk7XG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKFxuICAgICAgICAgICAgbmV3R2FtZU1vZGFsLFxuICAgICAgICAgICAgbmV3R2FtZVRpdGxlLFxuICAgICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgICByb3RhdGVCdXR0b24sXG4gICAgICAgICAgICBzZXRVcEdyaWQsXG4gICAgICAgICAgICBzdGFydEdhbWVCdXR0b25cbiAgICAgICAgKTtcblxuICAgICAgICBQcm9taXNlLnJlc29sdmUoTW9kYWwuZGlzcGxheU1vZGFsKG5ld0dhbWVNb2RhbCkpXG4gICAgICAgICAgICAudGhlbihFdmVudEhhbmRsZXIuYWN0aXZhdGVOZXdHYW1lTW9kYWwoKSlcbiAgICAgICAgICAgIC50aGVuKEV2ZW50SGFuZGxlci5hY3RpdmF0ZVNwYWNlcyhcIiNzZXQtdXAtYm9hcmRcIikpXG4gICAgICAgICAgICAudGhlbihkaXNwbGF5Qm9hdFNldFVwKCkpXG4gICAgICAgICAgICAudGhlbihhY3RpdmF0ZUJvYXJkKFwiI3NldC11cC1ib2FyZFwiKSk7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSByb3RhdGVCdXR0b24uZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9PSBcInJpZ2h0XCJcbiAgICAgICAgICAgID8gKHJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiZG93blwiKVxuICAgICAgICAgICAgOiAocm90YXRlQnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uID0gXCJyaWdodFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IF9iYWRIb3ZlciA9ICh4UG9zLCB5UG9zLCBzaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB4UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHhQb3MgKyBpKSA6IChvZmZzZXQgPSB4UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHtvZmZzZXR9LSR7eVBvc31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHlQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geVBvcyArIGkpIDogKG9mZnNldCA9IHlQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke3hQb3N9LSR7b2Zmc2V0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjc2V0LXVwLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC50b2dnbGUoXCJiYWQtaG92ZXJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaG92ZXJTZXRVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikuZGF0YXNldC5zaXplKTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIikuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgeFBvcyA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3MpO1xuICAgICAgICAgICAgbGV0IHlQb3MgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB4UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHhQb3MgKyBpKSA6IChvZmZzZXQgPSB4UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHtvZmZzZXR9LSR7eVBvc31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHlQb3MgKyBpIDwgMTAgPyAob2Zmc2V0ID0geVBvcyArIGkpIDogKG9mZnNldCA9IHlQb3MgLSAoc2l6ZSAtIGkpKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGAke3hQb3N9LSR7b2Zmc2V0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoRE9NTWFuaXAuZ2V0RWxlbWVudChgI3NldC11cC1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2F0LXBsYWNlZFwiKSkge1xuICAgICAgICAgICAgICAgIF9iYWRIb3Zlcih4UG9zLCB5UG9zLCBzaXplLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNzZXQtdXAtYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBob3ZlckF0dGFjayA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGAke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3N9LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvc31gO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjY29tcHV0ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUJvYXRTZXRVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpO1xuICAgICAgICBsZXQgc2hpcEluZGV4ID0gcGFyc2VJbnQoc2hpcE5hbWUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIHNoaXBOYW1lLnRleHRDb250ZW50ID0gc2hpcEFycmF5W3NoaXBJbmRleF0uc2hpcE5hbWU7XG4gICAgICAgIHNoaXBOYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtc2l6ZVwiLCBzaGlwQXJyYXlbc2hpcEluZGV4XS5zaGlwU2l6ZSk7XG4gICAgICAgIHNoaXBOYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgKytzaGlwSW5kZXgpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgaG92ZXJTZXRVcChlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcEluZGV4ID4gNSkge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGVTcGFjZXMoXCIjc2V0LXVwLWJvYXJkXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSBzaGlwcyA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3BsYXllci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbi54UG9zfS0ke3Bvc2l0aW9uLnlQb3N9YCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJib2F0LXBsYWNlZFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGZpbGxJbkF0dGFjayA9ICh4LCB5LCBwbGF5ZXJOYW1lLCBoaXQpID0+IHtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tlZFwiKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7eH0tJHt5fWApLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1hcmtEZXN0cm95ZWRTaGlwID0gKHBvc2l0aW9uLCBwbGF5ZXJOYW1lKSA9PiB7XG4gICAgICAgIHBvc2l0aW9uLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VFbGVtID0gRE9NTWFuaXAuZ2V0RWxlbWVudChgIyR7cGxheWVyTmFtZX0tYm9hcmQgI3NwYWNlLSR7c3BhY2UueFBvc30tJHtzcGFjZS55UG9zfWApO1xuICAgICAgICAgICAgc3BhY2VFbGVtLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZWRcIik7XG4gICAgICAgICAgICBzcGFjZUVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlYnVpbGRCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjcGxheWVyLWJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIHBsYXllckJvYXJkV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgcGxheWVyQm9hcmRXcmFwcGVyLmluc2VydEJlZm9yZShfbWFrZUdyaWQoXCJwbGF5ZXItYm9hcmRcIiksIHBsYXllckJvYXJkV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI2NvbXB1dGVyLWJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRXcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICBjb21wdXRlckJvYXJkV3JhcHBlci5pbnNlcnRCZWZvcmUoX21ha2VHcmlkKFwiY29tcHV0ZXItYm9hcmRcIiksIGNvbXB1dGVyQm9hcmRXcmFwcGVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZUJvYXJkLFxuICAgICAgICBidWlsZFN0YXJ0aW5nUGFnZSxcbiAgICAgICAgYnVpbGROZXdHYW1lTW9kYWwsXG4gICAgICAgIGRpc3BsYXlCb2F0U2V0VXAsXG4gICAgICAgIHRvZ2dsZVJvdGF0ZUJ1dHRvbixcbiAgICAgICAgaG92ZXJTZXRVcCxcbiAgICAgICAgaG92ZXJBdHRhY2ssXG4gICAgICAgIHBsYWNlUGxheWVyU2hpcHMsXG4gICAgICAgIGZpbGxJbkF0dGFjayxcbiAgICAgICAgbWFya0Rlc3Ryb3llZFNoaXAsXG4gICAgICAgIHJlYnVpbGRCb2FyZHMsXG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuXG5leHBvcnQgY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmF0ZU5ld0dhbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjbmV3LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLm5ld0dhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVOZXdHYW1lTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBCdWlsZFBhZ2UudG9nZ2xlUm90YXRlQnV0dG9uKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zdGFydEdhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2VgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIiNjb21wdXRlci1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRlYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2VgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRlYWN0aXZhdGVBdHRhY2tlZFNwYWNlID0gc3BhY2UgPT4ge1xuICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zcGFjZUNsaWNrZWQpO1xuICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZU5ld0dhbWVCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlTmV3R2FtZU1vZGFsLFxuICAgICAgICBhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgZGVhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgZGVhY3RpdmF0ZUF0dGFja2VkU3BhY2UsXG4gICAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xuICAgIGxldCBfc3BhY2VzID0gX2luaXRTcGFjZXMoKTtcbiAgICBsZXQgX3NoaXBzID0gW107XG4gICAgbGV0IF9oaXRMaXN0ID0gW107XG4gICAgbGV0IF9zcGFjZUxpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIF9pbml0U3BhY2VzKCkge1xuICAgICAgICBsZXQgc3BhY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiBpLCB5UG9zOiBqLCBhdHRhY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBfc3BhY2VzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIF9zcGFjZXNbX3NwYWNlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSldO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2tTcGFjZSh4LCB5KSB7XG4gICAgICAgIF9zcGFjZXNbX3NwYWNlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSldLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGhpdCA9IC0xO1xuICAgICAgICBfc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmF0dGFja1NwYWNlKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfaGl0TGlzdC5wdXNoKHsgeFBvczogeCwgeVBvczogeSB9KTtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXIgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgX3NwYWNlTGlzdC5wdXNoKHsgeFBvczogcGFyc2VJbnQoeCkgKyBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc3BhY2VMaXN0LnB1c2goeyB4UG9zOiB4LCB5UG9zOiBwYXJzZUludCh5KSArIGkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2hpcHMoKSB7XG4gICAgICAgIHJldHVybiBfc2hpcHMubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEhpdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBfaGl0TGlzdC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3BhY2VMaXN0KCkge1xuICAgICAgICByZXR1cm4gX3NwYWNlTGlzdC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWxsRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gX3NoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc0Rlc3Ryb3llZCgpID09IHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEJvYXJkLCBjaGVja1BsYWNlLCBhdHRhY2tTcGFjZSwgYWRkU2hpcCwgZ2V0U2hpcHMsIGdldEhpdExpc3QsIGdldFNwYWNlTGlzdCwgYWxsRGVzdHJveWVkIH07XG59XG4iLCJpbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9ICgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbC1iYWNrZ3JvdW5kXCIsIFwibW9kYWwgYmFja1wiKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcikpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGNsb3NlQ3VycmVudE1vZGFsKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjbW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpLnRoZW4oc2V0VGltZW91dCgoKSA9PiBtb2RhbC5yZW1vdmUoKSwgMjAwKSk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpc3BsYXlNb2RhbCwgY2xvc2VDdXJyZW50TW9kYWwgfTtcbn0pKCk7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgICBsZXQgX2JvYXJkID0gQm9hcmQoKTtcbiAgICBsZXQgX2xvc3QgPSBmYWxzZTtcbiAgICBsZXQgX2lzVHVybiA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGlzTG9zdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sb3N0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVUdXJuKCkge1xuICAgICAgICBfaXNUdXJuID0gIV9pc1R1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFR1cm4oKSB7XG4gICAgICAgIHJldHVybiBfaXNUdXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkge1xuICAgICAgICBfYm9hcmQuYWRkU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBoaXRTaGlwSW5kZXggPSBfYm9hcmQuYXR0YWNrU3BhY2UoeCwgeSk7XG4gICAgICAgIGlmIChfYm9hcmQuYWxsRGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgIF9sb3N0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGl0U2hpcEluZGV4O1xuICAgIH1cbiAgICAvL2ZvciB0ZXN0aW5nXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBfYm9hcmQ7XG4gICAgfVxuICAgIHJldHVybiB7IGlzTG9zdCwgdG9nZ2xlVHVybiwgZ2V0VHVybiwgYWRkU2hpcCwgYXR0YWNrLCBnZXRCb2FyZCB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaXplLCB4LCB5LCBkaXIsIG5hbWUpIHtcbiAgICBsZXQgX2hlYWx0aCA9IEFycmF5KHNpemUpLmZpbGwoXCJnb29kXCIpO1xuICAgIGxldCBfZGVzdHJveWVkID0gZmFsc2U7XG4gICAgbGV0IF9jb29yZGluYXRlcyA9IF9zZXRTdGFydGluZyh4LCB5LCBkaXIpO1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50SGVhbHRoKCkge1xuICAgICAgICByZXR1cm4gX2hlYWx0aC5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiBfZGVzdHJveWVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGFtYWdlKGxvY2F0aW9uKSB7XG4gICAgICAgIF9oZWFsdGhbbG9jYXRpb25dID0gXCJkYW1hZ2VcIjtcbiAgICAgICAgaWYgKF9oZWFsdGguZXZlcnkocGxhY2UgPT4gcGxhY2UgPT0gXCJkYW1hZ2VcIikpIHtcbiAgICAgICAgICAgIF9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zZXRTdGFydGluZyhpbmNvbWluZ3gsIGluY29taW5neSwgZGlyID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGxldCBzcGFjZXMgPSBbXTtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChpbmNvbWluZ3gpO1xuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGluY29taW5neSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCArIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCAtIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHsgeFBvczogeCwgeVBvczogeSArIGkgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PSBcInVwXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgLSBpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFjZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2Nvb3JkaW5hdGVzLm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFja1NwYWNlKHgsIHkpIHtcbiAgICAgICAgbGV0IGF0dGFja0luZGV4ID0gX2Nvb3JkaW5hdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KTtcbiAgICAgICAgaWYgKGF0dGFja0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIF9kYW1hZ2UoYXR0YWNrSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEN1cnJlbnRIZWFsdGgsIGlzRGVzdHJveWVkLCBnZXRQb3NpdGlvbiwgZ2V0TmFtZSwgYXR0YWNrU3BhY2UgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBzaGlwQXJyYXkgZnJvbSBcIi4vc2hpcHMuanNvblwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgICBsZXQgX2h1bWFuUGxheWVyO1xuICAgIGxldCBfY29tcHV0ZXJQbGF5ZXI7XG4gICAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICAgICAgQnVpbGRQYWdlLmJ1aWxkTmV3R2FtZU1vZGFsKCk7XG4gICAgICAgIF9odW1hblBsYXllciA9IFBsYXllcigpO1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICB9O1xuICAgIGNvbnN0IHNwYWNlQ2xpY2tlZCA9IGUgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSBcInNldC11cC1ib2FyZFwiID8gX3BsYWNlQm9hdChlKSA6IF9hdHRhY2tDb21wdXRlclBsYXllcihlKTtcbiAgICB9O1xuICAgIGNvbnN0IF9wbGFjZUJvYXQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgaG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5ob3ZlclwiKTtcbiAgICAgICAgY29uc3QgYmFkSG92ZXJTcGFjZXMgPSBET01NYW5pcC5nZXRFbGVtZW50cyhcIi5ib2FyZC1zcGFjZS5iYWQtaG92ZXJcIik7XG4gICAgICAgIGlmIChiYWRIb3ZlclNwYWNlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaG92ZXJTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXQtcGxhY2VkXCIpO1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LnNpemU7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLmFkZFNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcFNpemUsXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvcyxcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zLFxuICAgICAgICAgICAgICAgIHNoaXBEaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2hpcE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheUJvYXRTZXRVcChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgX2F0dGFja1BsYXllciA9IChwbGF5ZXIsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHBsYXllck5hbWU7XG4gICAgICAgIHBsYXllciA9PSBfaHVtYW5QbGF5ZXIgPyAocGxheWVyTmFtZSA9IFwicGxheWVyXCIpIDogKHBsYXllck5hbWUgPSBcImNvbXB1dGVyXCIpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAuZ2V0SGl0TGlzdCgpXG4gICAgICAgICAgICAuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlLnhQb3MgPT0geCAmJiBzcGFjZS55UG9zID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBwbGF5ZXIuYXR0YWNrKHgsIHkpO1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllclxuICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmdldFNwYWNlTGlzdCgpXG4gICAgICAgICAgICAgICAgLnNvbWUoc3BhY2UgPT4gc3BhY2UueFBvcyA9PSB4ICYmIHNwYWNlLnlQb3MgPT0geSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIEJ1aWxkUGFnZS5maWxsSW5BdHRhY2soeCwgeSwgcGxheWVyTmFtZSwgaGl0KTtcbiAgICAgICAgaWYgKGF0dGFja2VkU2hpcCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVthdHRhY2tlZFNoaXBdLmlzRGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICBCdWlsZFBhZ2UubWFya0Rlc3Ryb3llZFNoaXAoXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbYXR0YWNrZWRTaGlwXS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IF9hdHRhY2tDb21wdXRlclBsYXllciA9IGUgPT4ge1xuICAgICAgICBjb25zdCB4UG9zID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvcztcbiAgICAgICAgY29uc3QgeVBvcyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3M7XG4gICAgICAgIF9hdHRhY2tQbGF5ZXIoX2NvbXB1dGVyUGxheWVyLCB4UG9zLCB5UG9zKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGVBdHRhY2tlZFNwYWNlKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayhlKTtcbiAgICB9O1xuXG4gICAgLy9mb3IgdGVzdGluZyBvbmx5XG4gICAgY29uc3QgX3BsYWNlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgX2NvbXB1dGVyUGxheWVyXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIGAjY29tcHV0ZXItYm9hcmQgI3NwYWNlLSR7cG9zaXRpb24ueFBvc30tJHtwb3NpdGlvbi55UG9zfWBcbiAgICAgICAgICAgICAgICAgICAgKS5jbGFzc0xpc3QuYWRkKFwiYm9hdC1wbGFjZWRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IF9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGVhY2ggc2hpcFxuICAgICAgICB3aGlsZSAoaSA8IHNoaXBBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBsZXQgeFBvcztcbiAgICAgICAgICAgIGxldCB5UG9zO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vcmFuZG9tbHkgcGljayBhIGRpcmVjdGlvbiBlaXRoZXIgcmlnaHQgb3IgZG93blxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT0gMCA/IChkaXJlY3Rpb24gPSBcInJpZ2h0XCIpIDogKGRpcmVjdGlvbiA9IFwiZG93blwiKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgLy9yZXN0cmljdCB0aGUgcmFuZG9tIHNvIGl0IGRvZXNuJ3QgcGljayBhIHN0YXJ0aW5nIHBsYWNlIHRoYXQgd291bGQgcHV0IHRoZSBwaWVjZXMgb3V0c2lkZVxuICAgICAgICAgICAgICAgIC8vb2YgdGhlIGdyaWRcbiAgICAgICAgICAgICAgICB4UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcEFycmF5W2ldLnNoaXBTaXplKSk7XG4gICAgICAgICAgICAgICAgeVBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeFBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB5UG9zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcEFycmF5W2ldLnNoaXBTaXplKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBfY29tcHV0ZXJQbGF5ZXJcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xvb2sgYXQgZWFjaCBvZiB0aGUgY3VycmVudCBzaGlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwQXJyYXlbaV0uc2hpcFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYW5kIGNvbXBhcmUgdGhlaXIgY29vcmRpbmF0ZXMgdG8gdGhlIHBvc3NpYmxlIGNvb3JkaW5hdGVzIG9mIHRoaXMgbmV3IHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcyArIGogPT0gcG9zLnhQb3MgJiYgeVBvcyA9PSBwb3MueVBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBpdCdzIGFscmVhZHkgdGFrZW4sIGNhbid0IHN1Ym1pdCB0aGUgbmV3IHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4UG9zID09IHBvcy54UG9zICYmIHlQb3MgKyBqID09IHBvcy55UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9pZiB0aGUgc3BhY2UgaXMgbm90IGFscmVhZHkgdGFrZW4sIGFkZCB0aGUgc2hpcCB0byB0aGUgUGxheWVyJ3MgYm9hcmRcbiAgICAgICAgICAgIGlmICghdGFrZW4pIHtcbiAgICAgICAgICAgICAgICBfY29tcHV0ZXJQbGF5ZXIuYWRkU2hpcChzaGlwQXJyYXlbaV0uc2hpcFNpemUsIHhQb3MsIHlQb3MsIGRpcmVjdGlvbiwgc2hpcEFycmF5W2ldLnNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfY29tcHV0ZXJQbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2ldLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhlIG5leHQgc2hpcCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9fcGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgfTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtbmFtZVwiKS5kYXRhc2V0LmluZGV4ID09IDYpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShNb2RhbC5jbG9zZUN1cnJlbnRNb2RhbCgpKTtcblxuICAgICAgICAgICAgQnVpbGRQYWdlLnJlYnVpbGRCb2FyZHMoKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5wbGFjZVBsYXllclNoaXBzKF9odW1hblBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkpO1xuICAgICAgICAgICAgX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICAgICAgQnVpbGRQYWdlLmFjdGl2YXRlQm9hcmQoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVTcGFjZXMoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3N0YXJ0LWdhbWUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHBsYWNlIGFsbCBvZiB5b3VyIHNoaXBzXCIpO1xuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IG5ld0dhbWUsIHNwYWNlQ2xpY2tlZCwgc3RhcnRHYW1lIH07XG59KSgpO1xuXG5jb25zdCBpbml0UGFnZSA9ICgoKSA9PiB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKEJ1aWxkUGFnZS5idWlsZFN0YXJ0aW5nUGFnZSgpKTtcbiAgICAvLyAudGhlbihQcm9taXNlLnJlc29sdmUoQnVpbGRQYWdlLmJ1aWxkTmV3R2FtZU1vZGFsKCkpKTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkNWI4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBjb2xvcjogIzFiMWExNztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZ2FtZS1pbnN0cnVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNib2FyZHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlIFtjb2wtc3RhcnRdKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSBbcm93LXN0YXJ0XSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLmJvYXJkLmFjdGl2ZSAuaG92ZXIuYm9hcmQtc3BhY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYm9hdC1wbGFjZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkM2ZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGE2ODgwO1xcbn1cXG4uYm9hcmQuYWN0aXZlIC5ib2FyZC1zcGFjZS5iYWQtaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZjllO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2M4MDRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjN2M4MDRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTkyXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkLmhpdDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODA0YTRhO1xcbn1cXG4uYm9hcmQtc3BhY2UuZGVzdHJveWVkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBhZ2UtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG59XFxuXFxuLm1vZGFsLmJhY2sge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwuY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFiMWExNztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubW9kYWwtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAwcHggNDBweDtcXG59XFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi5tb2RhbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbn1cXG5cXG4jc2hpcC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmQ1Yjg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgbWluLWhlaWdodDogNjB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNnYW1lLWluc3RydWN0aW9ucyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuI2JvYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMCUgW2NvbC1zdGFydF0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMTAlIFtyb3ctc3RhcnRdKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uYm9hcmQuYWN0aXZlIC5ob3Zlci5ib2FyZC1zcGFjZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5ib2F0LXBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWQzZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTY4ODA7XFxufVxcbi5ib2FyZC5hY3RpdmUgLmJvYXJkLXNwYWNlLmJhZC1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YzgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM3YzgwNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxOTJcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQuaGl0OjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjExMVxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXItY29sb3I6ICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDU3XFxcIjtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGFnZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbn1cXG5cXG4ubW9kYWwuYmFjayB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbC5jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5tb2RhbC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDBweCA0MHB4O1xcbn1cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLm1vZGFsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxufVxcblxcbiNzaGlwLW5hbWUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJET01NYW5pcCIsIkV2ZW50SGFuZGxlciIsIk1vZGFsIiwic2hpcEFycmF5IiwiQnVpbGRQYWdlIiwiYWN0aXZhdGVCb2FyZCIsImlkIiwiZ2V0RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIl9tYWtlR3JpZCIsImdyaWRDb250YWluZXIiLCJtYWtlTmV3RWxlbWVudCIsImkiLCJqIiwiYXBwZW5kQ2hpbGQiLCJidWlsZFN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImNvbnRlbnQiLCJnYW1lQ29udGFpbmVyIiwiaW5zdHJ1Y3Rpb25zIiwiYm9hcmRzQ29udGFpbmVyIiwicGxheWVyQm9hcmRXcmFwcGVyIiwicGxheWVyQm9hcmQiLCJwbGF5ZXJCb2FyZExhYmVsIiwiYXBwZW5kQ2hpbGRyZW4iLCJjb21wdXRlckJvYXJkV3JhcHBlciIsImNvbXB1dGVyQm9hcmQiLCJjb21wdXRlckJvYXJkTGFiZWwiLCJuZXdHYW1lQnV0dG9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYWN0aXZhdGVOZXdHYW1lQnV0dG9uIiwiYnVpbGROZXdHYW1lTW9kYWwiLCJuZXdHYW1lTW9kYWwiLCJuZXdHYW1lVGl0bGUiLCJzaGlwTmFtZSIsInJvdGF0ZUJ1dHRvbiIsInNldFVwR3JpZCIsInN0YXJ0R2FtZUJ1dHRvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGlzcGxheU1vZGFsIiwidGhlbiIsImFjdGl2YXRlTmV3R2FtZU1vZGFsIiwiYWN0aXZhdGVTcGFjZXMiLCJkaXNwbGF5Qm9hdFNldFVwIiwidG9nZ2xlUm90YXRlQnV0dG9uIiwiY3VycmVudFN0YXRlIiwiZGF0YXNldCIsImRpcmVjdGlvbiIsIl9iYWRIb3ZlciIsInhQb3MiLCJ5UG9zIiwic2l6ZSIsInBvc2l0aW9uIiwib2Zmc2V0IiwidG9nZ2xlIiwiaG92ZXJTZXRVcCIsImUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJ4cG9zIiwieXBvcyIsImNvbnRhaW5zIiwiaG92ZXJBdHRhY2siLCJzaGlwSW5kZXgiLCJpbmRleCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwic2hpcFNpemUiLCJkZWFjdGl2YXRlU3BhY2VzIiwicGxhY2VQbGF5ZXJTaGlwcyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXAiLCJnZXRQb3NpdGlvbiIsImZpbGxJbkF0dGFjayIsIngiLCJ5IiwicGxheWVyTmFtZSIsImhpdCIsIm1hcmtEZXN0cm95ZWRTaGlwIiwic3BhY2UiLCJzcGFjZUVsZW0iLCJyZW1vdmUiLCJyZWJ1aWxkQm9hcmRzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHlwZSIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImluc2VydEFmdGVyIiwibmV3Tm9kZSIsImV4aXN0aW5nTm9kZSIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInJlbW92ZUFsbENoaWxkcmVuIiwiZWxlbWVudCIsInNraXAiLCJjaGlsZE5vZGVzIiwiR2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdHYW1lIiwic3RhcnRHYW1lIiwic3BhY2VDbGlja2VkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGVBdHRhY2tlZFNwYWNlIiwiU2hpcCIsIkJvYXJkIiwiX3NwYWNlcyIsIl9pbml0U3BhY2VzIiwiX3NoaXBzIiwiX2hpdExpc3QiLCJfc3BhY2VMaXN0Iiwic3BhY2VzIiwicHVzaCIsImF0dGFja2VkIiwiZ2V0Qm9hcmQiLCJtYXAiLCJjaGVja1BsYWNlIiwiZmluZEluZGV4IiwiYXR0YWNrU3BhY2UiLCJhZGRTaGlwIiwiZGlyIiwibmFtZSIsImdldFNoaXBzIiwiZ2V0SGl0TGlzdCIsImdldFNwYWNlTGlzdCIsImFsbERlc3Ryb3llZCIsImV2ZXJ5IiwiaXNEZXN0cm95ZWQiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwic2V0VGltZW91dCIsImNsb3NlQ3VycmVudE1vZGFsIiwiUGxheWVyIiwiX2JvYXJkIiwiX2xvc3QiLCJfaXNUdXJuIiwiaXNMb3N0IiwidG9nZ2xlVHVybiIsImdldFR1cm4iLCJhdHRhY2siLCJoaXRTaGlwSW5kZXgiLCJfaGVhbHRoIiwiQXJyYXkiLCJmaWxsIiwiX2Rlc3Ryb3llZCIsIl9jb29yZGluYXRlcyIsIl9zZXRTdGFydGluZyIsIl9uYW1lIiwiZ2V0Q3VycmVudEhlYWx0aCIsIl9kYW1hZ2UiLCJsb2NhdGlvbiIsInBsYWNlIiwiaW5jb21pbmd4IiwiaW5jb21pbmd5IiwiZ2V0TmFtZSIsImF0dGFja0luZGV4IiwiX2h1bWFuUGxheWVyIiwiX2NvbXB1dGVyUGxheWVyIiwicGFyZW50RWxlbWVudCIsIl9wbGFjZUJvYXQiLCJfYXR0YWNrQ29tcHV0ZXJQbGF5ZXIiLCJob3ZlclNwYWNlcyIsImJhZEhvdmVyU3BhY2VzIiwic2hpcERpcmVjdGlvbiIsIl9hdHRhY2tQbGF5ZXIiLCJwbGF5ZXIiLCJ2YWxpZCIsImF0dGFja2VkU2hpcCIsInNvbWUiLCJfcGxhY2VDb21wdXRlclNoaXBzIiwiX2dlbmVyYXRlQ29tcHV0ZXJTaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRha2VuIiwicG9zIiwiY29uc29sZSIsImxvZyIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJpbml0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=