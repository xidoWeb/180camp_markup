// b_08_etc.js

// 변수의 차이
var n = 10;
console.log( n );
n = 3; 
console.log( n );
var n2 = n; // 깊은 복사
console.log( n, n2 );
n = 30; 
console.log( n, n2 );

console.clear();
// ------------------------------
// 참조 변수
var arr = [1,2,3];
console.log( arr );
var arr2 = arr;  // 얕은복사( 주소값을 copy )
console.log( arr, arr2 );

arr.push(4);
arr[0] = 5;
console.log( arr );
console.log( arr2 );

arr.sort();
console.log( arr );
console.log( arr2 );

console.clear();
// 참조변수를 깊은 복사 ( 주소가 아닌 값 자체를 copy )
console.log( arr );

// var copyArr = [arr[0], arr[1], arr[2], arr[3]];
var copyArr = [];
var i=0;
for( ; i < arr.length; i+=1 ){
  copyArr[i] = arr[i];
}

console.log( copyArr );
arr.reverse();
console.log('arr: ', arr );
console.log('copyArr: ',  copyArr );


