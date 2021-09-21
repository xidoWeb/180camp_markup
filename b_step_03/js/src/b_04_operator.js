// b_04_operator.js

// 산술연산자 ( +, -, *, /, %, +=,-=,*=,/=, ++, -- )

var n = 10;
console.log(n, typeof(n) );

var plus = n + 10; 
console.log( plus );

var minus = n - 10; 
console.log(minus);

var multi = n * n; 
console.log( multi );

var avg = n / 3;
console.log( avg );

var other = n % 3;
console.log( other );

var parI = parseInt(avg);
console.log('나누었을때 몫:',  parI );

// ---------------------------

var textNum = 1004 + 'px';
var textPar = parseInt(textNum);
console.log( textPar, typeof textPar );

console.clear();

console.log('n: ', n);

n = n + 10;  // 변수 n에 기존에 가지고 있던 n의값 + 10을 재대입
console.log( 'n :', n );

n = n + 5;
console.log( 'n :', n );

n +=  10; // 자기자신에게 10을 추가하겠다
console.log( 'n :', n );

n -= 5;
console.log( 'n :', n );

n *= 5;
console.log( 'n :', n );

n /= 50;
console.log( 'n :', n );

n %= 2;
console.log( 'n :', n );

console.clear();
// -----------------------------------------

console.log('n:', n );

n += 1;
console.log('n:', n );

n += 1;
console.log('n:', n );

++n; // 무조건 1을 더한다
console.log('n:', n );

++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다  , 먼저 연산 후 결과를 저장
console.log('n:', n );

n++; // 무조건 1을 더한다 , 결과를 먼저 도출 후 연산
console.log('n:', n );
n++;
n++;
n++;
console.log('n:', n );
console.log('n:', n++ );
console.log('n:', n );

console.clear();
// -------------------------------------
console.log('n:', n );
n -= 1;
console.log('n:', n );
--n;
--n;
--n;
--n;
--n;
console.log('n:', n );
n--;
n--;
n--;
n--;
console.log('n:', n ); 
console.log('n:', n-- );
console.log('n:', n );

console.clear();
// -------------------------------------
// 비교 연산자 > (왼쪽값 비교 오른쪽값) 결과 true/false

var m = 30;
var rel = n <= m;
console.log('n:' + n , 'm:' + m, 'result:' + rel);

rel = n >= m;
console.log('n:' + n , 'm:' + m, 'result:' + rel);

var n2 = '4';
var nCk = n === n2;
console.log( n, n2, nCk );

var ck1 = true && false;
console.log( ck1 );

var ck2 = true || true;
console.log( ck2 );
