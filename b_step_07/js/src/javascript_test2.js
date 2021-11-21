// javascript_test2.js

const nav = document.querySelector('.navigation');
let per = 100;

nav.style.width = per + '%';


let intervalAni = setInterval(function(){
  per -= 1;
  if(per >= 50){
    nav.style.width = per+'%';
  }else{
    clearInterval(intervalAni);
  }
},16);

// --------------------------------------------

const wrap = $('#wrap');
const makeP = document.createElement('p');
makeP.classList.add('js_par');
wrap.append(makeP);

const hi2 = '안녕하세요 반갑습니다. javascript를 이용하여 글자를 삽입하고 있습니다.';
const hi2Arr = hi2.split('');
// console.log(hiArr);
const jqPar = document.querySelector('.js_par');
// jqPar.innerText = hi2;

let i=0;
const iLen = hi2Arr.length;

let intervalText  = setInterval(function(){
  jqPar.append( hi2Arr[i] );
  i+=1;
  if(i >= iLen){
    clearInterval(intervalText)
  }
}, 50);

// ------------------------------------------

let a = 2;
let b = 'my name is';
let c = 'xido';

console.log( `${a}. ${b} ${c} studio` );