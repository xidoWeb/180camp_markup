// b_05_condition.js

// 조건문: 삼항연산자/단항/다항

var rel = !false;
var text;
(rel) ? text = '참' : text = '거짓';
console.log( text );

// --------------------------------------------
// if 
/* 
if(조건식) {
  조건이 참인경우 수행
} else {
  조건이 거짓인 경우 수행
}
*/

var result;
if(rel) {
  result = '내용이 참입니다.';
} else {
  result = '내용이 거짓입니다.';
}
console.log( result );

/* 
  if(조건){
    조건이 참인경우 수행
  } else if(다른조건) {
    다른 조건의 내용이 참인경우 수행
  } else if(또 다른조건) {
    또다른 조건의 내용이 참인경우 수행
  } else {
    위 조건과 다른내용인 경우 수행
  }
*/

var n = 80;
var nResult;

if(n >= 90){
  nResult = '점수가 매우 높습니다. 잘하셨어요';
} else if (n >= 75) {
  nResult = '점수가 높은 편입니다. 고생하셨어요.';
} else if (n >= 60) {
  nResult = '점수가 보통입니다. 잘하셨지만 조금은 아쉽네요';
} else {
  nResult = '조금만 더 분발하셔야 겠어요. 화이팅!!!';
}
console.log( nResult );