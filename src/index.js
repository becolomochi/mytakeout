// CSS
import "./scss/style.scss";

const takeout = ['自炊する', 'コンビニ', 'マック', 'モス', '牛丼', 'スーパーの弁当', '居酒屋の弁当', 'ほっともっと'];

const btn = document.getElementById('button');
const box = document.getElementById('result');
const tw = document.getElementById('tweet-link');

btn.addEventListener('click', function(){
  const result = takeout[Math.floor(Math.random() * (takeout.length - 1))];
  box.textContent = result;
  tw.setAttribute('href', `https://twitter.com/intent/tweet?url=https://mytakeout.becolomochi.page&text=今日のテイクアウト先は${result}です&via=becolomochi`);
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
