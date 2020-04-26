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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
// CSS


const takeout = ['自炊する', 'コンビニ', 'マック', 'モス', '牛丼', 'スーパーの弁当', '居酒屋の弁当', 'ほっともっと'];

const btn = document.getElementById('button');
const box = document.getElementById('result');
const tw = document.getElementById('tweet-link');

btn.addEventListener('click', function(){
  const result = takeout[Math.floor(Math.random() * (takeout.length - 1))];
  box.textContent = result;
  tw.setAttribute('href', `https://twitter.com/intent/tweet?url=https://becobento.netlify.app&text=今日のテイクアウト先は${result}です&via=becolomochi`);
  tw.classList.remove('is-hidden');
});


// JS
// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();

// // ロードしたら実行
// window.onload = () => {
//   loading();
//   let positions = getSectionHeight();
//   navCurrent(positions);
//   navToggle();
//   smmothScroll();
// }

// // スクロールしたら実行
// var isRunning = false;
// window.addEventListener('scroll', () => {
//   // 呼び出されるまで何もしない
//   if (!isRunning) {
//     isRunning = true
//     // 描画する前のタイミングで呼び出し
//     window.requestAnimationFrame(() => {
//       let positions = getSectionHeight();
//       navCurrent(positions);
//       isRunning = false
//     })
//   }
// });

// // Common
// const navItems = document.querySelectorAll('a[href^="#"]:not([href="#"]');

// // ローディング
// function loading() {
//   const spinner = document.getElementById('loading');
//   spinner.classList.add('is-loaded');
// }

// // アニメーションスクロール
// function smmothScroll() {
//   const toTopItems = document.querySelectorAll('[href="#"]');

//   for(let i = 0; i < toTopItems.length; i++) {
//     toTopItems[i].addEventListener('click', (e) => {
//       e.preventDefault();
//       window.scroll({
//         top: 0,
//         behavior: 'smooth'
//       });
//     });
//   }

//   for(let j = 0; j < navItems.length; j++) {
//     navItems[j].addEventListener('click', (e) => {
//       e.preventDefault();
//       const target = navItems[j].getAttribute('href').replace('#', '');
//       const targetPosition = document.getElementById(target).getBoundingClientRect().top;
//       const scrollPosition = window.pageYOffset;
//       let top = targetPosition + scrollPosition;
//       window.scrollTo({
//         top: top,
//         behavior: 'smooth'
//       });
//     });
//   }
// }

// // 各セクションの高さを取得
// function getSectionHeight() {
//   let boxPositions = [];
//   for(let i=0; i<navItems.length; i++) {
//     boxPositions.push(document.getElementsByClassName('section')[i].getBoundingClientRect().top);
//   }
//   // console.log(boxPositions);
//   return boxPositions;
// }

// // ナビゲーションアイテムのカレント表示
// function navCurrent(positions) {
//   let scroll = window.pageYOffset;

//   for(let i=0; i<navItems.length; i++) {
//     if(scroll >= scroll+positions[i]-40) {
//       if(i > 0) {
//         navItems[i-1].classList.remove('is-current');
//       }
//       if(i < navItems.length - 1) {
//         navItems[i+1].classList.remove('is-current');
//       }
//       navItems[i].classList.add('is-current');
//     }
//   }
//   if(scroll < 40) { // 上に戻ってきたときの対策
//     navItems[0].classList.remove('is-current');
//   }
// }

// // ナビゲーションの開閉
// function navToggle() {
//   const button = document.getElementById('nav-button');
//   const menu = document.getElementById('nav-menu');

//   button.setAttribute('aria-expanded', 'false');
//   button.addEventListener('click', () => {
//     let expanded = button.getAttribute('aria-expanded') === 'true';
//     button.setAttribute('aria-expanded', String(!expanded));
//     button.classList.toggle('is-open');
//     menu.classList.toggle('is-open');
//   });
//   menu.addEventListener('click', () => {
//     let expanded = button.getAttribute('aria-expanded') === 'true';
//     button.setAttribute('aria-expanded', String(!expanded));
//     button.classList.toggle('is-open');
//     menu.classList.toggle('is-open');
//   });
// }


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map