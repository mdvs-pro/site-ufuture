// import sayHello from './lib/sayHello.js';
import DomLib from './lib/DomLib.js';

setTimeout(function(){
  testBodyStatus();
}, 4000)

function testBodyStatus(){
  const LOADED_CLASS = 'loaded';
  let el = document.querySelector('.out');
  DomLib.triggerClass(el, LOADED_CLASS);
}