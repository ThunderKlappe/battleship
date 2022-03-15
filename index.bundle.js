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

function Player(name) {
  var _name = name;

  var _board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  var _lost = false;
  var _isTurn = false;
  var lastResult = "";

  function getName() {
    return _name;
  }

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
    getName: getName,
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
    _humanPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player");
    _computerPlayer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer");
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

  var _checkDestroyed = function _checkDestroyed(player, attackedShip) {
    if (player.getBoard().getShips()[attackedShip].isDestroyed()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.markDestroyedShip(player.getBoard().getShips()[attackedShip].getPosition(), player.getName());
      return true;
    }

    return false;
  };

  var _attackPlayer = function _attackPlayer(player, x, y) {
    var playerName = player.getName();

    if (_isAttackValid(player, x, y)) {
      var attackedShip = player.attack(x, y);

      var hit = _isAttackHit(player, x, y);

      player.lastResult = hit;
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.fillInAttack(x, y, playerName, hit);

      if (attackedShip >= 0) {
        if (_checkDestroyed(player, attackedShip)) {
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

  var _computerPlayersTurn = function _computerPlayersTurn() {
    var playedValid = false;

    while (!playedValid) {
      playedValid = _attackPlayer(_humanPlayer, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    }

    _displayLastResult(_humanPlayer);

    _switchTurns();
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

  var _playTurn = function _playTurn() {
    if (_humanPlayer.isLost()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("The computer has destroyed your entire fleet... Play Again?");
    } else if (_computerPlayer.isLost()) {
      _BuildPage__WEBPACK_IMPORTED_MODULE_1__.BuildPage.displayMessage("You've successfully destroyed all of the computer's ships! Play Again?");
    } else {
      if (_humanPlayer.getTurn()) {
        _EventHandler__WEBPACK_IMPORTED_MODULE_6__.EventHandler.activateSpaces("#computer-board");
      } else {
        _randomPause(1000, 2000).then(function () {
          return _computerPlayersTurn();
        }).then(function () {
          return _playTurn();
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQnVpbGRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9FdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBzaGlwQXJyYXkgZnJvbSBcIi4vc2hpcHMuanNvblwiO1xuXG5leHBvcnQgY29uc3QgQnVpbGRQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmF0ZUJvYXJkID0gaWQgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGlkKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH07XG4gICAgY29uc3QgX21ha2VHcmlkID0gaWQgPT4ge1xuICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgaWQsIFwiYm9hcmRcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYHNwYWNlLSR7an0tJHtpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvYXJkLXNwYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcImRhdGEteFBvc1wiOiBqIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiZGF0YS15UG9zXCI6IGkgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbiAgICB9O1xuICAgIGNvbnN0IGJ1aWxkU3RhcnRpbmdQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiLCBcIkJhdHRsZXNoaXBcIik7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImdhbWUtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImdhbWUtaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgICAgICBcImJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcIlRoZSBnYW1lIGlzIHNpbXBsZTogZGVzdHJveSB5b3VyIG9wcG9uZW50IGJlZm9yZSB0aGV5IGRlc3Ryb3kgeW91LlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYm9hcmRzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwbGF5ZXItYm9hcmQtd3JhcHBlclwiLCBcImJvYXJkLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gX21ha2VHcmlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZExhYmVsID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJwbGF5ZXItYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiYm9hcmQtbGFiZWxcIixcbiAgICAgICAgICAgIFwiUGxheWVyJ3MgQm9hcmRcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwbGF5ZXJCb2FyZFdyYXBwZXIsIHBsYXllckJvYXJkLCBwbGF5ZXJCb2FyZExhYmVsKTtcblxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkV3JhcHBlciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFwiY29tcHV0ZXItYm9hcmQtd3JhcHBlclwiLFxuICAgICAgICAgICAgXCJib2FyZC13cmFwcGVyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IF9tYWtlR3JpZChcImNvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkTGFiZWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcImJvYXJkLWxhYmVsXCIsXG4gICAgICAgICAgICBcIkNvbXB1dGVyJ3MgQm9hcmRcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihjb21wdXRlckJvYXJkV3JhcHBlciwgY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZExhYmVsKTtcbiAgICAgICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwibmV3LWdhbWUtYnV0dG9uXCIsIFwicGFnZS1idXR0b25cIiwgXCJOZXcgR2FtZVwiKTtcblxuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihib2FyZHNDb250YWluZXIsIHBsYXllckJvYXJkV3JhcHBlciwgY29tcHV0ZXJCb2FyZFdyYXBwZXIpO1xuXG4gICAgICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGdhbWVDb250YWluZXIsIGluc3RydWN0aW9ucywgYm9hcmRzQ29udGFpbmVyLCBuZXdHYW1lQnV0dG9uKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbiAgICAgICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oZG9jdW1lbnQuYm9keSwgaGVhZGVyLCBjb250ZW50KTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVOZXdHYW1lQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkTmV3R2FtZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdHYW1lTW9kYWwgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm5ldy1nYW1lLW1vZGFsXCIsIFwibW9kYWwgY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgbmV3R2FtZVRpdGxlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJuZXctZ2FtZS10aXRsZVwiLFxuICAgICAgICAgICAgXCJtb2RhbC10aXRsZVwiLFxuICAgICAgICAgICAgXCJQbGVhc2UgcGxhY2UgeW91ciBzaGlwcyBvbiB0aGUgZ3JpZFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJzaGlwLW5hbWVcIiwgXCJzaGlwLW5hbWVcIiwgXCJcIiwge1xuICAgICAgICAgICAgXCJkYXRhLWluZGV4XCI6IDAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInNoaXAtcm90YXRlLWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJtb2RhbC1idXR0b25cIixcbiAgICAgICAgICAgIFwiUm90YXRlXCIsXG4gICAgICAgICAgICB7IFwiZGF0YS1kaXJlY3Rpb25cIjogXCJyaWdodFwiIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2V0VXBHcmlkID0gX21ha2VHcmlkKFwic2V0LXVwLWJvYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwic3RhcnQtZ2FtZS1idXR0b25cIixcbiAgICAgICAgICAgIFwibW9kYWwtYnV0dG9uXCIsXG4gICAgICAgICAgICBcIlN0YXJ0IEdhbWVcIlxuICAgICAgICApO1xuICAgICAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgICAgIG5ld0dhbWVNb2RhbCxcbiAgICAgICAgICAgIG5ld0dhbWVUaXRsZSxcbiAgICAgICAgICAgIHNoaXBOYW1lLFxuICAgICAgICAgICAgcm90YXRlQnV0dG9uLFxuICAgICAgICAgICAgc2V0VXBHcmlkLFxuICAgICAgICAgICAgc3RhcnRHYW1lQnV0dG9uXG4gICAgICAgICk7XG5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKE1vZGFsLmRpc3BsYXlNb2RhbChuZXdHYW1lTW9kYWwpKVxuICAgICAgICAgICAgLnRoZW4oRXZlbnRIYW5kbGVyLmFjdGl2YXRlTmV3R2FtZU1vZGFsKCkpXG4gICAgICAgICAgICAudGhlbihFdmVudEhhbmRsZXIuYWN0aXZhdGVTcGFjZXMoXCIjc2V0LXVwLWJvYXJkXCIpKVxuICAgICAgICAgICAgLnRoZW4oZGlzcGxheUJvYXRTZXRVcCgpKVxuICAgICAgICAgICAgLnRoZW4oYWN0aXZhdGVCb2FyZChcIiNzZXQtdXAtYm9hcmRcIikpO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlUm90YXRlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3NoaXAtcm90YXRlLWJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gcm90YXRlQnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICBjdXJyZW50U3RhdGUgPT0gXCJyaWdodFwiXG4gICAgICAgICAgICA/IChyb3RhdGVCdXR0b24uZGF0YXNldC5kaXJlY3Rpb24gPSBcImRvd25cIilcbiAgICAgICAgICAgIDogKHJvdGF0ZUJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwicmlnaHRcIik7XG4gICAgfTtcbiAgICBjb25zdCBfYmFkSG92ZXIgPSAoeFBvcywgeVBvcywgc2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeFBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB4UG9zICsgaSkgOiAob2Zmc2V0ID0geFBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7b2Zmc2V0fS0ke3lQb3N9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB5UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHlQb3MgKyBpKSA6IChvZmZzZXQgPSB5UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHt4UG9zfS0ke29mZnNldH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI3NldC11cC1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYmFkLWhvdmVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhvdmVyU2V0VXAgPSBlID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlSW50KERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLmRhdGFzZXQuc2l6ZSk7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHhQb3MgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zKTtcbiAgICAgICAgICAgIGxldCB5UG9zID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueXBvcyk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgeFBvcyArIGkgPCAxMCA/IChvZmZzZXQgPSB4UG9zICsgaSkgOiAob2Zmc2V0ID0geFBvcyAtIChzaXplIC0gaSkpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gYCR7b2Zmc2V0fS0ke3lQb3N9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgICAgICAgICB5UG9zICsgaSA8IDEwID8gKG9mZnNldCA9IHlQb3MgKyBpKSA6IChvZmZzZXQgPSB5UG9zIC0gKHNpemUgLSBpKSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBgJHt4UG9zfS0ke29mZnNldH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoYCNzZXQtdXAtYm9hcmQgI3NwYWNlLSR7cG9zaXRpb259YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hdC1wbGFjZWRcIikpIHtcbiAgICAgICAgICAgICAgICBfYmFkSG92ZXIoeFBvcywgeVBvcywgc2l6ZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjc2V0LXVwLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkSG92ZXJBdHRhY2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zfS0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3N9YDtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChgI2NvbXB1dGVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9ufWApLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUhvdmVyQXR0YWNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYCR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueHBvc30tJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zfWA7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoYCNjb21wdXRlci1ib2FyZCAjc3BhY2UtJHtwb3NpdGlvbn1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5Qm9hdFNldFVwID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIik7XG4gICAgICAgIGxldCBzaGlwSW5kZXggPSBwYXJzZUludChzaGlwTmFtZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwQXJyYXlbc2hpcEluZGV4XS5zaGlwTmFtZTtcbiAgICAgICAgc2hpcE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1zaXplXCIsIHNoaXBBcnJheVtzaGlwSW5kZXhdLnNoaXBTaXplKTtcbiAgICAgICAgc2hpcE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCArK3NoaXBJbmRleCk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBob3ZlclNldFVwKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwSW5kZXggPiA1KSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuZGVhY3RpdmF0ZVNwYWNlcyhcIiNzZXQtdXAtYm9hcmRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9IHNoaXBzID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjcGxheWVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9uLnhQb3N9LSR7cG9zaXRpb24ueVBvc31gKS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgICAgICBcImJvYXQtcGxhY2VkXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgZmlsbEluQXR0YWNrID0gKHgsIHksIHBsYXllck5hbWUsIGhpdCkgPT4ge1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHt4fS0ke3l9YCkuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbWFya0Rlc3Ryb3llZFNoaXAgPSAocG9zaXRpb24sIHBsYXllck5hbWUpID0+IHtcbiAgICAgICAgcG9zaXRpb24uZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZUVsZW0gPSBET01NYW5pcC5nZXRFbGVtZW50KGAjJHtwbGF5ZXJOYW1lfS1ib2FyZCAjc3BhY2UtJHtzcGFjZS54UG9zfS0ke3NwYWNlLnlQb3N9YCk7XG4gICAgICAgICAgICBzcGFjZUVsZW0uY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llZFwiKTtcbiAgICAgICAgICAgIHNwYWNlRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjZ2FtZS1pbnN0cnVjdGlvbnNcIikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWJ1aWxkQm9hcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZFdyYXBwZXIgPSBET01NYW5pcC5nZXRFbGVtZW50KFwiI3BsYXllci1ib2FyZC13cmFwcGVyXCIpO1xuICAgICAgICBwbGF5ZXJCb2FyZFdyYXBwZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIHBsYXllckJvYXJkV3JhcHBlci5pbnNlcnRCZWZvcmUoX21ha2VHcmlkKFwicGxheWVyLWJvYXJkXCIpLCBwbGF5ZXJCb2FyZFdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRXcmFwcGVyID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNjb21wdXRlci1ib2FyZC13cmFwcGVyXCIpO1xuICAgICAgICBjb21wdXRlckJvYXJkV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFdyYXBwZXIuaW5zZXJ0QmVmb3JlKF9tYWtlR3JpZChcImNvbXB1dGVyLWJvYXJkXCIpLCBjb21wdXRlckJvYXJkV3JhcHBlci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGVCb2FyZCxcbiAgICAgICAgYnVpbGRTdGFydGluZ1BhZ2UsXG4gICAgICAgIGJ1aWxkTmV3R2FtZU1vZGFsLFxuICAgICAgICBkaXNwbGF5Qm9hdFNldFVwLFxuICAgICAgICB0b2dnbGVSb3RhdGVCdXR0b24sXG4gICAgICAgIGhvdmVyU2V0VXAsXG4gICAgICAgIGFkZEhvdmVyQXR0YWNrLFxuICAgICAgICByZW1vdmVIb3ZlckF0dGFjayxcbiAgICAgICAgcGxhY2VQbGF5ZXJTaGlwcyxcbiAgICAgICAgZmlsbEluQXR0YWNrLFxuICAgICAgICBtYXJrRGVzdHJveWVkU2hpcCxcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UsXG4gICAgICAgIHJlYnVpbGRCb2FyZHMsXG4gICAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IEJ1aWxkUGFnZSB9IGZyb20gXCIuL0J1aWxkUGFnZVwiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuXG5leHBvcnQgY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBhY3RpdmF0ZU5ld0dhbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjbmV3LWdhbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLm5ld0dhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVOZXdHYW1lTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1yb3RhdGUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBCdWlsZFBhZ2UudG9nZ2xlUm90YXRlQnV0dG9uKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzdGFydC1nYW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zdGFydEdhbWUpO1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2U6bm90KC5hdHRhY2tlZClgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIiNjb21wdXRlci1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuYWRkSG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UucmVtb3ZlSG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGRlYWN0aXZhdGVTcGFjZXMgPSBpZCA9PiB7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKGAke2lkfSAuYm9hcmQtc3BhY2VgKS5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnNwYWNlQ2xpY2tlZCk7XG4gICAgICAgICAgICBpZiAoaWQgPT0gXCIjc2V0LXVwLWJvYXJkXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlclNldFVwKTtcbiAgICAgICAgICAgICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgQnVpbGRQYWdlLmhvdmVyU2V0VXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIiNjb21wdXRlci1ib2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGNvbnN0IGRlYWN0aXZhdGVBdHRhY2tlZFNwYWNlID0gc3BhY2UgPT4ge1xuICAgIC8vICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5zcGFjZUNsaWNrZWQpO1xuICAgIC8vICAgICBzcGFjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIEJ1aWxkUGFnZS5ob3ZlckF0dGFjayk7XG4gICAgLy8gICAgIHNwYWNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBCdWlsZFBhZ2UuaG92ZXJBdHRhY2spO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZU5ld0dhbWVCdXR0b24sXG4gICAgICAgIGFjdGl2YXRlTmV3R2FtZU1vZGFsLFxuICAgICAgICBhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgZGVhY3RpdmF0ZVNwYWNlcyxcbiAgICAgICAgLy9kZWFjdGl2YXRlQXR0YWNrZWRTcGFjZSxcbiAgICB9O1xufSkoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgbGV0IF9zcGFjZXMgPSBfaW5pdFNwYWNlcygpO1xuICAgIGxldCBfc2hpcHMgPSBbXTtcbiAgICBsZXQgX2hpdExpc3QgPSBbXTtcbiAgICBsZXQgX3NwYWNlTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gX2luaXRTcGFjZXMoKSB7XG4gICAgICAgIGxldCBzcGFjZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IGksIHlQb3M6IGosIGF0dGFja2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zcGFjZXMubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2UoeCwgeSkge1xuICAgICAgICByZXR1cm4gX3NwYWNlc1tfc3BhY2VzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFja1NwYWNlKHgsIHkpIHtcbiAgICAgICAgX3NwYWNlc1tfc3BhY2VzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQueFBvcyA9PSB4ICYmIGVsZW1lbnQueVBvcyA9PSB5KV0uYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICBsZXQgaGl0ID0gLTE7XG4gICAgICAgIF9zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuYXR0YWNrU3BhY2UoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBoaXQgPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9oaXRMaXN0LnB1c2goeyB4UG9zOiB4LCB5UG9zOiB5IH0pO1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkge1xuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpciA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBfc3BhY2VMaXN0LnB1c2goeyB4UG9zOiBwYXJzZUludCh4KSArIGksIHlQb3M6IHkgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zcGFjZUxpc3QucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHBhcnNlSW50KHkpICsgaSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIF9zaGlwcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SGl0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9oaXRMaXN0Lm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTcGFjZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiBfc3BhY2VMaXN0Lm1hcCh4ID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhbGxEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiBfc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzRGVzdHJveWVkKCkgPT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIGNoZWNrUGxhY2UsIGF0dGFja1NwYWNlLCBhZGRTaGlwLCBnZXRTaGlwcywgZ2V0SGl0TGlzdCwgZ2V0U3BhY2VMaXN0LCBhbGxEZXN0cm95ZWQgfTtcbn1cbiIsImltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TW9kYWwobW9kYWwpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWJhY2tncm91bmRcIiwgXCJtb2RhbCBiYWNrXCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiksIDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gY2xvc2VDdXJyZW50TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNtb2RhbC1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUobW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSkudGhlbihzZXRUaW1lb3V0KCgpID0+IG1vZGFsLnJlbW92ZSgpLCAyMDApKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZGlzcGxheU1vZGFsLCBjbG9zZUN1cnJlbnRNb2RhbCB9O1xufSkoKTtcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgICBsZXQgX25hbWUgPSBuYW1lO1xuICAgIGxldCBfYm9hcmQgPSBCb2FyZCgpO1xuICAgIGxldCBfbG9zdCA9IGZhbHNlO1xuICAgIGxldCBfaXNUdXJuID0gZmFsc2U7XG4gICAgbGV0IGxhc3RSZXN1bHQgPSBcIlwiO1xuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNMb3N0KCkge1xuICAgICAgICByZXR1cm4gX2xvc3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZVR1cm4oKSB7XG4gICAgICAgIF9pc1R1cm4gPSAhX2lzVHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VHVybigpIHtcbiAgICAgICAgcmV0dXJuIF9pc1R1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSB7XG4gICAgICAgIF9ib2FyZC5hZGRTaGlwKHNpemUsIHgsIHksIGRpciwgbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGhpdFNoaXBJbmRleCA9IF9ib2FyZC5hdHRhY2tTcGFjZSh4LCB5KTtcbiAgICAgICAgaWYgKF9ib2FyZC5hbGxEZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgX2xvc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXRTaGlwSW5kZXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROYW1lLCBpc0xvc3QsIHRvZ2dsZVR1cm4sIGdldFR1cm4sIGFkZFNoaXAsIGF0dGFjaywgZ2V0Qm9hcmQsIGxhc3RSZXN1bHQgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoc2l6ZSwgeCwgeSwgZGlyLCBuYW1lKSB7XG4gICAgbGV0IF9oZWFsdGggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+IFwiZ29vZFwiKTtcbiAgICBsZXQgX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIGxldCBfY29vcmRpbmF0ZXMgPSBfc2V0U3RhcnRpbmcoeCwgeSwgZGlyKTtcbiAgICBsZXQgX25hbWUgPSBuYW1lO1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudEhlYWx0aCgpIHtcbiAgICAgICAgcmV0dXJuIF9oZWFsdGgubWFwKHggPT4geCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gX2Rlc3Ryb3llZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RhbWFnZShsb2NhdGlvbikge1xuICAgICAgICBfaGVhbHRoW2xvY2F0aW9uXSA9IFwiZGFtYWdlXCI7XG4gICAgICAgIGlmIChfaGVhbHRoLmV2ZXJ5KHBsYWNlID0+IHBsYWNlID09IFwiZGFtYWdlXCIpKSB7XG4gICAgICAgICAgICBfZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBfc2V0U3RhcnRpbmcoaW5jb21pbmd4LCBpbmNvbWluZ3ksIGRpciA9IFwicmlnaHRcIikge1xuICAgICAgICBsZXQgc3BhY2VzID0gW107XG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoaW5jb21pbmd4KTtcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChpbmNvbWluZ3kpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpciA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHggKyBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHggLSBpLCB5UG9zOiB5IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7IHhQb3M6IHgsIHlQb3M6IHkgKyBpIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyB4UG9zOiB4LCB5UG9zOiB5IC0gaSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9jb29yZGluYXRlcy5tYXAoeCA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2tTcGFjZSh4LCB5KSB7XG4gICAgICAgIGxldCBhdHRhY2tJbmRleCA9IF9jb29yZGluYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnhQb3MgPT0geCAmJiBlbGVtZW50LnlQb3MgPT0geSk7XG4gICAgICAgIGlmIChhdHRhY2tJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBfZGFtYWdlKGF0dGFja0luZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50SGVhbHRoLCBpc0Rlc3Ryb3llZCwgZ2V0UG9zaXRpb24sIGdldE5hbWUsIGF0dGFja1NwYWNlIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBCdWlsZFBhZ2UgfSBmcm9tIFwiLi9CdWlsZFBhZ2VcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgc2hpcEFycmF5IGZyb20gXCIuL3NoaXBzLmpzb25cIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IF9odW1hblBsYXllcjtcbiAgICBsZXQgX2NvbXB1dGVyUGxheWVyO1xuICAgIGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgICAgIEJ1aWxkUGFnZS5idWlsZE5ld0dhbWVNb2RhbCgpO1xuICAgICAgICBfaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgICAgIF9jb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIH07XG4gICAgY29uc3Qgc3BhY2VDbGlja2VkID0gZSA9PiB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09IFwic2V0LXVwLWJvYXJkXCIgPyBfcGxhY2VCb2F0KGUpIDogX2F0dGFja0NvbXB1dGVyUGxheWVyKGUpO1xuICAgIH07XG4gICAgY29uc3QgX3N3aXRjaFR1cm5zID0gKCkgPT4ge1xuICAgICAgICBfaHVtYW5QbGF5ZXIudG9nZ2xlVHVybigpO1xuICAgICAgICBfY29tcHV0ZXJQbGF5ZXIudG9nZ2xlVHVybigpO1xuICAgIH07XG4gICAgY29uc3QgX3BsYWNlQm9hdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBob3ZlclNwYWNlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlLmhvdmVyXCIpO1xuICAgICAgICBjb25zdCBiYWRIb3ZlclNwYWNlcyA9IERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlLmJhZC1ob3ZlclwiKTtcbiAgICAgICAgaWYgKGJhZEhvdmVyU3BhY2VzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBob3ZlclNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwiYm9hdC1wbGFjZWRcIik7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZShcImhvdmVyXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLmRhdGFzZXQuc2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLW5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNzaGlwLXJvdGF0ZS1idXR0b25cIikuZGF0YXNldC5kaXJlY3Rpb247XG4gICAgICAgICAgICBfaHVtYW5QbGF5ZXIuYWRkU2hpcChcbiAgICAgICAgICAgICAgICBzaGlwU2l6ZSxcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54cG9zLFxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnlwb3MsXG4gICAgICAgICAgICAgICAgc2hpcERpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBzaGlwTmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5Qm9hdFNldFVwKGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9pc0F0dGFja1ZhbGlkID0gKHBsYXllciwgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAuZ2V0SGl0TGlzdCgpXG4gICAgICAgICAgICAuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlLnhQb3MgPT0geCAmJiBzcGFjZS55UG9zID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBfaXNBdHRhY2tIaXQgPSAocGxheWVyLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAuZ2V0U3BhY2VMaXN0KClcbiAgICAgICAgICAgICAgICAuc29tZShzcGFjZSA9PiBzcGFjZS54UG9zID09IHggJiYgc3BhY2UueVBvcyA9PSB5KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3QgX2NoZWNrRGVzdHJveWVkID0gKHBsYXllciwgYXR0YWNrZWRTaGlwKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRTaGlwcygpW2F0dGFja2VkU2hpcF0uaXNEZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgQnVpbGRQYWdlLm1hcmtEZXN0cm95ZWRTaGlwKFxuICAgICAgICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbYXR0YWNrZWRTaGlwXS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgICAgICAgIHBsYXllci5nZXROYW1lKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IF9hdHRhY2tQbGF5ZXIgPSAocGxheWVyLCB4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmIChfaXNBdHRhY2tWYWxpZChwbGF5ZXIsIHgsIHkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBwbGF5ZXIuYXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgbGV0IGhpdCA9IF9pc0F0dGFja0hpdChwbGF5ZXIsIHgsIHkpO1xuICAgICAgICAgICAgcGxheWVyLmxhc3RSZXN1bHQgPSBoaXQ7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZmlsbEluQXR0YWNrKHgsIHksIHBsYXllck5hbWUsIGhpdCk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrZWRTaGlwID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoZWNrRGVzdHJveWVkKHBsYXllciwgYXR0YWNrZWRTaGlwKSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdFJlc3VsdCA9IHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKClbYXR0YWNrZWRTaGlwXS5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBfZGlzcGxheUxhc3RSZXN1bHQgPSBwbGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCBsYXN0UmVzdWx0ID0gcGxheWVyLmxhc3RSZXN1bHQ7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PSBfY29tcHV0ZXJQbGF5ZXIpIHtcbiAgICAgICAgICAgIGxhc3RSZXN1bHQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiWW91IGZpcmUgYXQgdGhlIGNvbXB1dGVyLi4uIEl0J3MgYSBIaXQhXCIpXG4gICAgICAgICAgICAgICAgOiBsYXN0UmVzdWx0ID09IGZhbHNlXG4gICAgICAgICAgICAgICAgPyBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJZb3UgZmlyZSBhdCB0aGUgY29tcHV0ZXIuLi4gSXQncyBhIE1pc3MuLi5cIilcbiAgICAgICAgICAgICAgICA6IEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShgWW91IHN1bmsgdGhlaXIgJHtsYXN0UmVzdWx0fSFgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RSZXN1bHQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKFwiVGhlIGNvbXB1dGVyIGZpcmVzIGF0IHlvdS4uLiBJdCdzIGEgSGl0Li4uXCIpXG4gICAgICAgICAgICAgICAgOiBsYXN0UmVzdWx0ID09IGZhbHNlXG4gICAgICAgICAgICAgICAgPyBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJUaGUgY29tcHV0ZXIgZmlyZXMgYXQgeW91Li4uIEl0J3MgYSBNaXNzIVwiKVxuICAgICAgICAgICAgICAgIDogQnVpbGRQYWdlLmRpc3BsYXlNZXNzYWdlKGBUaGV5IHN1bmsgeW91ciAke2xhc3RSZXN1bHR9IWApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBfYXR0YWNrQ29tcHV0ZXJQbGF5ZXIgPSBlID0+IHtcbiAgICAgICAgY29uc3QgeFBvcyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lnhwb3M7XG4gICAgICAgIGNvbnN0IHlQb3MgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55cG9zO1xuICAgICAgICBfYXR0YWNrUGxheWVyKF9jb21wdXRlclBsYXllciwgeFBvcywgeVBvcyk7XG4gICAgICAgIF9kaXNwbGF5TGFzdFJlc3VsdChfY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgICBFdmVudEhhbmRsZXIuZGVhY3RpdmF0ZVNwYWNlcyhcIiNjb21wdXRlci1ib2FyZFwiKTtcbiAgICAgICAgQnVpbGRQYWdlLnJlbW92ZUhvdmVyQXR0YWNrKGUpO1xuICAgICAgICBfc3dpdGNoVHVybnMoKTtcbiAgICAgICAgX3BsYXlUdXJuKCk7XG4gICAgfTtcblxuICAgIC8vZm9yIHRlc3Rpbmcgb25seVxuICAgIGNvbnN0IF9wbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIF9jb21wdXRlclBsYXllclxuICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgIC5nZXRTaGlwcygpXG4gICAgICAgICAgICAuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBgI2NvbXB1dGVyLWJvYXJkICNzcGFjZS0ke3Bvc2l0aW9uLnhQb3N9LSR7cG9zaXRpb24ueVBvc31gXG4gICAgICAgICAgICAgICAgICAgICkuY2xhc3NMaXN0LmFkZChcImJvYXQtcGxhY2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBfZ2VuZXJhdGVDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vZ28gdGhyb3VnaCBlYWNoIHNoaXBcbiAgICAgICAgd2hpbGUgKGkgPCBzaGlwQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGV0IHhQb3M7XG4gICAgICAgICAgICBsZXQgeVBvcztcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb247XG4gICAgICAgICAgICAvL3JhbmRvbWx5IHBpY2sgYSBkaXJlY3Rpb24gZWl0aGVyIHJpZ2h0IG9yIGRvd25cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09IDAgPyAoZGlyZWN0aW9uID0gXCJyaWdodFwiKSA6IChkaXJlY3Rpb24gPSBcImRvd25cIik7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIC8vcmVzdHJpY3QgdGhlIHJhbmRvbSBzbyBpdCBkb2Vzbid0IHBpY2sgYSBzdGFydGluZyBwbGFjZSB0aGF0IHdvdWxkIHB1dCB0aGUgcGllY2VzIG91dHNpZGVcbiAgICAgICAgICAgICAgICAvL29mIHRoZSBncmlkXG4gICAgICAgICAgICAgICAgeFBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHNoaXBBcnJheVtpXS5zaGlwU2l6ZSkpO1xuICAgICAgICAgICAgICAgIHlQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHhQb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgeVBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHNoaXBBcnJheVtpXS5zaGlwU2l6ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRha2VuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgX2NvbXB1dGVyUGxheWVyXG4gICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9sb29rIGF0IGVhY2ggb2YgdGhlIGN1cnJlbnQgc2hpcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcEFycmF5W2ldLnNoaXBTaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FuZCBjb21wYXJlIHRoZWlyIGNvb3JkaW5hdGVzIHRvIHRoZSBwb3NzaWJsZSBjb29yZGluYXRlcyBvZiB0aGlzIG5ldyBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhQb3MgKyBqID09IHBvcy54UG9zICYmIHlQb3MgPT0gcG9zLnlQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgaXQncyBhbHJlYWR5IHRha2VuLCBjYW4ndCBzdWJtaXQgdGhlIG5ldyBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeFBvcyA9PSBwb3MueFBvcyAmJiB5UG9zICsgaiA9PSBwb3MueVBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vaWYgdGhlIHNwYWNlIGlzIG5vdCBhbHJlYWR5IHRha2VuLCBhZGQgdGhlIHNoaXAgdG8gdGhlIFBsYXllcidzIGJvYXJkXG4gICAgICAgICAgICBpZiAoIXRha2VuKSB7XG4gICAgICAgICAgICAgICAgX2NvbXB1dGVyUGxheWVyLmFkZFNoaXAoc2hpcEFycmF5W2ldLnNoaXBTaXplLCB4UG9zLCB5UG9zLCBkaXJlY3Rpb24sIHNoaXBBcnJheVtpXS5zaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX2NvbXB1dGVyUGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKVtpXS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAvL2dvIHRvIHRoZSBuZXh0IHNoaXAgaW4gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vX3BsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBfY29tcHV0ZXJQbGF5ZXJzVHVybiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBsYXllZFZhbGlkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghcGxheWVkVmFsaWQpIHtcbiAgICAgICAgICAgIHBsYXllZFZhbGlkID0gX2F0dGFja1BsYXllcihcbiAgICAgICAgICAgICAgICBfaHVtYW5QbGF5ZXIsXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzcGxheUxhc3RSZXN1bHQoX2h1bWFuUGxheWVyKTtcbiAgICAgICAgX3N3aXRjaFR1cm5zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IF9yYW5kb21QYXVzZSA9IChtaW5MZW5ndGgsIG1heExlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBwYXVzZUxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhMZW5ndGggLSBtaW5MZW5ndGgpICsgbWluTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBwYXVzZUxlbmd0aCkpO1xuICAgIH07XG4gICAgY29uc3QgX2NvaW5GbGlwID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgY29uc3QgX2Nob29zZVR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChfY29pbkZsaXAoKSkge1xuICAgICAgICAgICAgX2h1bWFuUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gUGxheWVyIGdvZXMgZmlyc3QuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbXB1dGVyUGxheWVyLnRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcIkZsaXBwaW5nIENvaW4uLi4gQ29tcHV0ZXIgZ29lcyBmaXJzdC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX3BsYXlUdXJuID0gKCkgPT4ge1xuICAgICAgICBpZiAoX2h1bWFuUGxheWVyLmlzTG9zdCgpKSB7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuZGlzcGxheU1lc3NhZ2UoXCJUaGUgY29tcHV0ZXIgaGFzIGRlc3Ryb3llZCB5b3VyIGVudGlyZSBmbGVldC4uLiBQbGF5IEFnYWluP1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29tcHV0ZXJQbGF5ZXIuaXNMb3N0KCkpIHtcbiAgICAgICAgICAgIEJ1aWxkUGFnZS5kaXNwbGF5TWVzc2FnZShcbiAgICAgICAgICAgICAgICBcIllvdSd2ZSBzdWNjZXNzZnVsbHkgZGVzdHJveWVkIGFsbCBvZiB0aGUgY29tcHV0ZXIncyBzaGlwcyEgUGxheSBBZ2Fpbj9cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfaHVtYW5QbGF5ZXIuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlU3BhY2VzKFwiI2NvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmFuZG9tUGF1c2UoMTAwMCwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gX2NvbXB1dGVyUGxheWVyc1R1cm4oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gX3BsYXlUdXJuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc2hpcC1uYW1lXCIpLmRhdGFzZXQuaW5kZXggPT0gNikge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKE1vZGFsLmNsb3NlQ3VycmVudE1vZGFsKCkpO1xuXG4gICAgICAgICAgICBCdWlsZFBhZ2UucmVidWlsZEJvYXJkcygpO1xuICAgICAgICAgICAgQnVpbGRQYWdlLnBsYWNlUGxheWVyU2hpcHMoX2h1bWFuUGxheWVyLmdldEJvYXJkKCkuZ2V0U2hpcHMoKSk7XG4gICAgICAgICAgICBfZ2VuZXJhdGVDb21wdXRlclNoaXBzKCk7XG4gICAgICAgICAgICBCdWlsZFBhZ2UuYWN0aXZhdGVCb2FyZChcIiNjb21wdXRlci1ib2FyZFwiKTtcbiAgICAgICAgICAgIF9jaG9vc2VUdXJuKCk7XG4gICAgICAgICAgICBfcGxheVR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IERPTU1hbmlwLmdldEVsZW1lbnQoXCIjc3RhcnQtZ2FtZS1idXR0b25cIik7XG4gICAgICAgICAgICBzdGFydEdhbWVCdXR0b24uc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgICBzdGFydEdhbWVCdXR0b24uc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgcGxhY2UgYWxsIG9mIHlvdXIgc2hpcHNcIik7XG4gICAgICAgICAgICBzdGFydEdhbWVCdXR0b24ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgbmV3R2FtZSwgc3BhY2VDbGlja2VkLCBzdGFydEdhbWUgfTtcbn0pKCk7XG5cbmNvbnN0IGluaXRQYWdlID0gKCgpID0+IHtcbiAgICBQcm9taXNlLnJlc29sdmUoQnVpbGRQYWdlLmJ1aWxkU3RhcnRpbmdQYWdlKCkpO1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmQ1Yjg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGNvbG9yOiAjMWIxYTE3O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgbWluLWhlaWdodDogNjB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNnYW1lLWluc3RydWN0aW9ucyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuI2JvYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMCUgW2NvbC1zdGFydF0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMTAlIFtyb3ctc3RhcnRdKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlYTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uYm9hcmQuYWN0aXZlIC5ob3Zlci5ib2FyZC1zcGFjZTpub3QoLmF0dGFja2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5ib2F0LXBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWQzZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YTY4ODA7XFxufVxcbi5ib2FyZC5hY3RpdmUgLmJvYXJkLXNwYWNlLmJhZC1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmOWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YzgwNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM3YzgwNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxOTJcXFwiO1xcbn1cXG4uYm9hcmQtc3BhY2UuYXR0YWNrZWQuaGl0OjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzgwNGE0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjExMVxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTllO1xcbiAgICBib3JkZXItY29sb3I6ICM4MDRhNGE7XFxufVxcbi5ib2FyZC1zcGFjZS5kZXN0cm95ZWQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDU3XFxcIjtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGFnZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbn1cXG5cXG4ubW9kYWwuYmFjayB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbC5jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWIxYTE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5tb2RhbC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDBweCA0MHB4O1xcbn1cXG4ubW9kYWwuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLm1vZGFsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxufVxcblxcbiNzaGlwLW5hbWUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQyx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDViODtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzFiMWExNztcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTgyNjtcXG4gICAgY29sb3I6ICMxYjFhMTc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGE1MDA7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNTBweDtcXG4gICAgcGFkZGluZzogNjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2dhbWUtaW5zdHJ1Y3Rpb25zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1ODI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSBbY29sLXN0YXJ0XSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUgW3Jvdy1zdGFydF0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2VhO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5ib2FyZC5hY3RpdmUgLmhvdmVyLmJvYXJkLXNwYWNlOm5vdCguYXR0YWNrZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmJvYXQtcGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllZDNmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhNjg4MDtcXG59XFxuLmJvYXJkLmFjdGl2ZSAuYm9hcmQtc3BhY2UuYmFkLWhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmY5ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdjODA0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmF0dGFja2VkOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzdjODA0YTtcXG4gICAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MlxcXCI7XFxufVxcbi5ib2FyZC1zcGFjZS5hdHRhY2tlZC5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjODA0YTRhO1xcbiAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMTExXFxcIjtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjllOWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzgwNGE0YTtcXG59XFxuLmJvYXJkLXNwYWNlLmRlc3Ryb3llZDo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICM4MDRhNGE7XFxuICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwNTdcXFwiO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wYWdlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxufVxcblxcbi5tb2RhbC5iYWNrIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGFsLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDU4MjY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYjFhMTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMHB4IDQwcHg7XFxufVxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubW9kYWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTUwMDtcXG59XFxuXFxuI3NoaXAtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiRXZlbnRIYW5kbGVyIiwiTW9kYWwiLCJzaGlwQXJyYXkiLCJCdWlsZFBhZ2UiLCJhY3RpdmF0ZUJvYXJkIiwiaWQiLCJnZXRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiX21ha2VHcmlkIiwiZ3JpZENvbnRhaW5lciIsIm1ha2VOZXdFbGVtZW50IiwiaSIsImoiLCJhcHBlbmRDaGlsZCIsImJ1aWxkU3RhcnRpbmdQYWdlIiwiaGVhZGVyIiwiY29udGVudCIsImdhbWVDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJib2FyZHNDb250YWluZXIiLCJwbGF5ZXJCb2FyZFdyYXBwZXIiLCJwbGF5ZXJCb2FyZCIsInBsYXllckJvYXJkTGFiZWwiLCJhcHBlbmRDaGlsZHJlbiIsImNvbXB1dGVyQm9hcmRXcmFwcGVyIiwiY29tcHV0ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmRMYWJlbCIsIm5ld0dhbWVCdXR0b24iLCJkb2N1bWVudCIsImJvZHkiLCJhY3RpdmF0ZU5ld0dhbWVCdXR0b24iLCJidWlsZE5ld0dhbWVNb2RhbCIsIm5ld0dhbWVNb2RhbCIsIm5ld0dhbWVUaXRsZSIsInNoaXBOYW1lIiwicm90YXRlQnV0dG9uIiwic2V0VXBHcmlkIiwic3RhcnRHYW1lQnV0dG9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkaXNwbGF5TW9kYWwiLCJ0aGVuIiwiYWN0aXZhdGVOZXdHYW1lTW9kYWwiLCJhY3RpdmF0ZVNwYWNlcyIsImRpc3BsYXlCb2F0U2V0VXAiLCJ0b2dnbGVSb3RhdGVCdXR0b24iLCJjdXJyZW50U3RhdGUiLCJkYXRhc2V0IiwiZGlyZWN0aW9uIiwiX2JhZEhvdmVyIiwieFBvcyIsInlQb3MiLCJzaXplIiwicG9zaXRpb24iLCJvZmZzZXQiLCJ0b2dnbGUiLCJob3ZlclNldFVwIiwiZSIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsInhwb3MiLCJ5cG9zIiwiY29udGFpbnMiLCJhZGRIb3ZlckF0dGFjayIsInJlbW92ZUhvdmVyQXR0YWNrIiwicmVtb3ZlIiwic2hpcEluZGV4IiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInNoaXBTaXplIiwiZGVhY3RpdmF0ZVNwYWNlcyIsInBsYWNlUGxheWVyU2hpcHMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwIiwiZ2V0UG9zaXRpb24iLCJmaWxsSW5BdHRhY2siLCJ4IiwieSIsInBsYXllck5hbWUiLCJoaXQiLCJtYXJrRGVzdHJveWVkU2hpcCIsInNwYWNlIiwic3BhY2VFbGVtIiwiZGlzcGxheU1lc3NhZ2UiLCJtZXNzYWdlIiwicmVidWlsZEJvYXJkcyIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInR5cGUiLCJIVE1MQ2xhc3MiLCJ0ZXh0IiwibmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJpbnNlcnRBZnRlciIsIm5ld05vZGUiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsImVsZW1lbnQiLCJza2lwIiwiY2hpbGROb2RlcyIsIkdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3R2FtZSIsInN0YXJ0R2FtZSIsInNwYWNlQ2xpY2tlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJob3ZlckF0dGFjayIsIlNoaXAiLCJCb2FyZCIsIl9zcGFjZXMiLCJfaW5pdFNwYWNlcyIsIl9zaGlwcyIsIl9oaXRMaXN0IiwiX3NwYWNlTGlzdCIsInNwYWNlcyIsInB1c2giLCJhdHRhY2tlZCIsImdldEJvYXJkIiwibWFwIiwiY2hlY2tQbGFjZSIsImZpbmRJbmRleCIsImF0dGFja1NwYWNlIiwiYWRkU2hpcCIsImRpciIsIm5hbWUiLCJnZXRTaGlwcyIsImdldEhpdExpc3QiLCJnZXRTcGFjZUxpc3QiLCJhbGxEZXN0cm95ZWQiLCJldmVyeSIsImlzRGVzdHJveWVkIiwibW9kYWwiLCJtb2RhbENvbnRhaW5lciIsInNldFRpbWVvdXQiLCJjbG9zZUN1cnJlbnRNb2RhbCIsIlBsYXllciIsIl9uYW1lIiwiX2JvYXJkIiwiX2xvc3QiLCJfaXNUdXJuIiwibGFzdFJlc3VsdCIsImdldE5hbWUiLCJpc0xvc3QiLCJ0b2dnbGVUdXJuIiwiZ2V0VHVybiIsImF0dGFjayIsImhpdFNoaXBJbmRleCIsIl9oZWFsdGgiLCJBcnJheSIsImZyb20iLCJfZGVzdHJveWVkIiwiX2Nvb3JkaW5hdGVzIiwiX3NldFN0YXJ0aW5nIiwiZ2V0Q3VycmVudEhlYWx0aCIsIl9kYW1hZ2UiLCJsb2NhdGlvbiIsInBsYWNlIiwiaW5jb21pbmd4IiwiaW5jb21pbmd5IiwiYXR0YWNrSW5kZXgiLCJfaHVtYW5QbGF5ZXIiLCJfY29tcHV0ZXJQbGF5ZXIiLCJwYXJlbnRFbGVtZW50IiwiX3BsYWNlQm9hdCIsIl9hdHRhY2tDb21wdXRlclBsYXllciIsIl9zd2l0Y2hUdXJucyIsImhvdmVyU3BhY2VzIiwiYmFkSG92ZXJTcGFjZXMiLCJzaGlwRGlyZWN0aW9uIiwiX2lzQXR0YWNrVmFsaWQiLCJwbGF5ZXIiLCJ2YWxpZCIsIl9pc0F0dGFja0hpdCIsInNvbWUiLCJfY2hlY2tEZXN0cm95ZWQiLCJhdHRhY2tlZFNoaXAiLCJfYXR0YWNrUGxheWVyIiwiX2Rpc3BsYXlMYXN0UmVzdWx0IiwiX3BsYXlUdXJuIiwiX3BsYWNlQ29tcHV0ZXJTaGlwcyIsIl9nZW5lcmF0ZUNvbXB1dGVyU2hpcHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YWtlbiIsInBvcyIsImNvbnNvbGUiLCJsb2ciLCJfY29tcHV0ZXJQbGF5ZXJzVHVybiIsInBsYXllZFZhbGlkIiwiX3JhbmRvbVBhdXNlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGF1c2VMZW5ndGgiLCJfY29pbkZsaXAiLCJfY2hvb3NlVHVybiIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJpbml0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=