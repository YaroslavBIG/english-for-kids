/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Cards */ "./src/js/Cards.js");
/* harmony import */ var _js_IndexHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/IndexHeader */ "./src/js/IndexHeader.js");


Object(_js_IndexHeader__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/js/Cards.js":
/*!*************************!*\
  !*** ./src/js/Cards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [// Action (A)
{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [// Action Set (B)
{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [// Action (C)
{
  word: 'argue',
  translation: 'спорить',
  image: 'img/argue.jpg',
  audioSrc: 'audio/argue.mp3'
}, {
  word: 'build',
  translation: 'строить',
  image: 'img/build.jpg',
  audioSrc: 'audio/build.mp3'
}, {
  word: 'carry',
  translation: 'нести',
  image: 'img/carry.jpg',
  audioSrc: 'audio/carry.mp3'
}, {
  word: 'catch',
  translation: 'ловить',
  image: 'img/catch.jpg',
  audioSrc: 'audio/catch.mp3'
}, {
  word: 'drive',
  translation: 'водить',
  image: 'img/drive.jpg',
  audioSrc: 'audio/drive.mp3'
}, {
  word: 'drop',
  translation: 'падать',
  image: 'img/drop.jpg',
  audioSrc: 'audio/drop.mp3'
}, {
  word: 'pull',
  translation: 'тянуть',
  image: 'img/pull.jpg',
  audioSrc: 'audio/pull.mp3'
}, {
  word: 'push',
  translation: 'толкать',
  image: 'img/push.jpg',
  audioSrc: 'audio/push.mp3'
}], [// Adjective
{
  word: 'big',
  translation: 'большой',
  image: 'img/big.jpg',
  audioSrc: 'audio/big.mp3'
}, {
  word: 'small',
  translation: 'маленький',
  image: 'img/small.jpg',
  audioSrc: 'audio/small.mp3'
}, {
  word: 'fast',
  translation: 'быстрый',
  image: 'img/fast.jpg',
  audioSrc: 'audio/fast.mp3'
}, {
  word: 'slow',
  translation: 'медленный',
  image: 'img/slow.jpg',
  audioSrc: 'audio/slow.mp3'
}, {
  word: 'friendly',
  translation: 'дружелюбный',
  image: 'img/friendly.jpg',
  audioSrc: 'audio/friendly.mp3'
}, {
  word: 'unfriendly',
  translation: 'недружелюбный',
  image: 'img/unfriendly.jpg',
  audioSrc: 'audio/unfriendly.mp3'
}, {
  word: 'young',
  translation: 'молодой',
  image: 'img/young.jpg',
  audioSrc: 'audio/young.mp3'
}, {
  word: 'old',
  translation: 'старый',
  image: 'img/old.jpg',
  audioSrc: 'audio/old.mp3'
}], [// Animals (A)
{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [// Animals (B)
{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [// Clothes
{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [// Emotion
{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/IndexHeader.js":
/*!*******************************!*\
  !*** ./src/js/IndexHeader.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable import/prefer-default-export */

/* eslint-disable no-unused-vars */
function indexHeader() {
  var fragment = document.createDocumentFragment();

  var liCostr = function liCostr(text) {
    var liFragment = document.createDocumentFragment();
    var li = document.createElement('li');
    li.classList.add('menu-mobile_item');
    liFragment.appendChild(li);
    var link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerText = text;
    liFragment.querySelector('li').appendChild(link);
    return liFragment;
  };

  var header = document.createElement('div');
  header.classList.add('header');
  fragment.append(header);
  var headerNavigation = document.createElement('nav');
  headerNavigation.classList.add('header__menu-mobile');
  fragment.querySelector('.header').append(headerNavigation);
  var hamburgerButton = document.createElement('span');
  hamburgerButton.classList.add('header__hamburger');
  hamburgerButton.classList.add('hamburger');
  hamburgerButton.setAttribute('id', 'hamburgerButton');
  fragment.querySelector('.header__menu-mobile').append(hamburgerButton);
  var hamburgerLine = document.createElement('span');
  hamburgerLine.classList.add('hamburger__line');
  fragment.querySelector('#hamburgerButton').append(hamburgerLine);
  var menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-mobile__wrapper');
  menuWrapper.setAttribute('id', 'hamburger__menu');
  fragment.querySelector('.header__menu-mobile').appendChild(menuWrapper);
  var menuMobile = document.createElement('ul');
  menuMobile.classList.add('menu-mobile_table');
  fragment.querySelector('#hamburger__menu').appendChild(menuMobile); // UL

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Main Page')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Action(set B)')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Action(set C)')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Adjective')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Animal(set A)')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Animal(set B)')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Clothes')); // LI

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Emotion')); // LI

  var switcher = document.createElement('div');
  switcher.classList.add('switcher');
  fragment.querySelector('.header').append(switcher);
  document.body.append(fragment); // add in body
}

/* harmony default export */ __webpack_exports__["default"] = (indexHeader);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map