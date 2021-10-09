// b_02_slide_position_indicator.js

(function($){
// 기능설명
/**
 * 인디케이터를 선택시, 그에따른 이미지내용을 나타나게 만들자
 * [o] .indicator 요소 선택이 몇번째인지 인지
 * .slide_wrapper 내부의 div가 몇번째가 나타나야하는지
 * 나타나야하는 요소 외의 다른 div는 사라지게 만들기
 * .slide_wrapper 내부의 div에 .action 처리(추가/해제)
 * .indicator내부의 li에서 .action을 처리(추가/해제) 
 */

// 변수
var slideSet = $('.slide_set');
var indiWrap = slideSet.find('.indicator');
var indiUl = indiWrap.children('ul');
var indiLi = indiUl.children('li');
var iniLink = indiLi.children('a');

var slidePart = slideSet.find('.slide');
var slideWrap = slidePart.find('.slide_wrapper');
var slideDiv  = slideWrap.children('div');
var i = 0;

// 함수

// 이벤트
iniLink.on('click', function(e){
  e.preventDefault();

  i = $(this).parent().index();

  slideDiv.eq(i).addClass('action');
  slideDiv.eq(i).siblings().removeClass('action');

  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');

});

})(jQuery);
