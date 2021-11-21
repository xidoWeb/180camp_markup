"use strict";

// javascript_test.js

/*
let i = 10;
console.log( i );

let str2 = 'javascript';
console.log( str2 );

let j = i + str2;
console.log( j );

let k = i / str2;
console.log( k );

i = 100;
console.log( i );

let arr2 = [];
arr2.push(2);
console.log( arr2 );



let i1 = 10;
console.log( i1 );

// const box = 'box1';
// console.log( box );
// box = 'box2';

const ar3 = [1,2,3,4];
const ar4 = ar3;
ar3.push(100, 10);
console.log( ar3, ar4);
*/
// console.clear();
// #wrap 
// const wrap = document.getElementById('wrap');
// console.log( wrap );
// const navi = document.getElementsByClassName('navigation')[0];
// console.log( navi );
// const naviChild = navi.children;
// console.log( naviChild );
// 배열, 유사배열
var win = window; // console.log( win );

var wrap2 = document.querySelector('#wrap'); // console.log( wrap2 );

var navi2 = document.querySelector('.navigation'); // console.log( navi2 );
// const naviChild2 = navi2.querySelectorAll('li');

var naviChild2 = navi2.children;
var linkData = naviChild2[0].querySelector('a').getAttribute('href'); // console.log( linkData );

naviChild2[2].querySelector('a').setAttribute('href', 'http://kakao.com'); // naviChild2[4].setAttribute('class','on');

var na4 = naviChild2[4].classList;
na4.add('on');
navi2.classList.remove('list'); // --------------------------------------------------------
// li여러개 중 하나를 클릭, 
// 선택한 요소가 무엇인지, 순서가 몇번째인지
// li의  순번째에 기능 할당('border','1px solid #333' )

console.log(naviChild2);
var len = naviChild2.length; // for(let i =0; i<len; i+=1){
//   // console.log(i);
//   naviChild2[i].addEventListener('click', function(e){
//     e.preventDefault();
//     console.log( naviChild2[i], i );
//   });
// }
// 배열, 유사배열

var navLi = Array.from(naviChild2);
navLi.forEach(function (element, index) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(element, index); // element.style = 'border:1px solid #f00; border-radius:3px';

    navLi.at(index).style = 'border:1px solid #f00; border-radius:3px';
  });
}); // -----------------------------------------