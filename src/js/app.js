// import sayHello from './lib/sayHello.js';
import DomLib from './lib/DomLib.js';
import Menu from './lib/Menu.js';
import {smooth} from './lib/smoothscroll.min.js';
import App from './lib/App.js';

Menu.init();
App.init();

document.addEventListener("hashLinkClicked", function(e) {
  let el = document.querySelector('body');
  if (DomLib.hasClass(el, Menu.activeState)) DomLib.removeClass(el, Menu.activeState)
});

// setTimeout(function(){
//   testBodyStatus();
// }, 4000)

// function testBodyStatus(){
//   const LOADED_CLASS = 'loaded';
//   let el = document.querySelector('.out');
//   DomLib.triggerClass(el, LOADED_CLASS);
// }
