// b_09_modal.js

(function($){
// 기능설명
// 사용자 속성( attr([속성명]) )값을 가져오는 방법

var testLi = $('.modal_list').find('li').eq(0);
var checkAtttr = testLi.attr('data-img');
var checkAtttr2 = testLi.attr('data-narr');
console.log( checkAtttr, ' : ' , checkAtttr2 );


// 변수

// 이벤트

})(jQuery);
