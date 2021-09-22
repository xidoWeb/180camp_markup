// b_05_repeat.js

// for
// for( 변수의최초의값 ; 조건 ; 변수의값 변경 ){ 수행하는 내용 }

for( var i = 0; i < 5 ; i+=1){
  console.log( i );
}

for (var j = 2023; j > 1800; j-=1) {
  console.log( j );
}

console.clear();
// ------------------------------------
// 이중 for문

  var k, l;
  for( k = 2 ; k <= 9; k+=1 ){
    for( l = 1; l <= k; l+=1 ){
      console.log( k + ' x ' + l + ' = ' + (k*l) );
    }
  }

console.clear();
  // ------------------------------------
// for-in


// ------------------------------------
// forEach