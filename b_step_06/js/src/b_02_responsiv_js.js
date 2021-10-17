// b_02_responsiv_js.js

(function($){
// 기능설명
/**
 * = 사용하고있는 브라우저 또는 디바이스 환경의 가로크기를 기준으로 움직을 파악하겠다.
 * 1. 현재의 크기에서 브라우저의 크기가 변화했는지 파악 -> $(window), on('resize')
 * 2. 현재의 가로값 체크, 변화된 내용에서 가로값이 변화했는지 여부 파악 width(); 
*- 요소의 가로값을 파악 :                            선택자.width()
*- 요소의 가로값(padding을 포함한)을 파악:            선택자.innerWidth()
*- 요소의 가로값(padding+border을 포함한)을 파악:     선택자.outerWidth()
*- 요소의 가로값(paddin+border+margin을포함)을 파악:  선택자.outerWidth(true)
 */


// 변수
var win = $(window); // $(document)
var beforeW = win.width();
// console.log(beforeW);

// 이벤트
win.on('resize', function(){
  // console.log('브라우저 사이즈가 변화했습니다.');
  var afterW = win.width();
  if(beforeW !== afterW){
    console.log(beforeW, afterW);
  }
}); 



})(jQuery);
