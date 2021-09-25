// b_02_jQuery_selector.js

(function($){
  // console.log( $.fn );
  
  /* 
    body { background-color:#cdf;}
  */

  // var body = document.getElementsByTagName('body')[0];
  // var body = document.querySelector('body');
  var body = $('body');
  body.css({ 'backgroundColor' : '#adf' });
// -----------------------------------------------------
// 선택자1: $('css선택자')
// css표현:  선택자.css({속성명:값, 속성명:값, 속성명:값});

 $('.ex_wrap').css({
   'backgroundColor':'#fff',
   'border':'1px solid #777'
 });

var box = $('#box');
box.css({ 'backgroundColor': '#fd7', 'padding': 20 + 'px'});

// box > h3 {}
$('#box > h3').css({ 'fontSize': 1.3+'rem'});
var boxH3 = box.children('h3');
boxH3.css({ 'fontWeight' : 700, 'marginBottom': 20+'px' });

// box  h3 {}
$('#box h3').css({'textIndent': 15+'px'});
var boxFindH3 = box.find('h3');
boxFindH3.css({ 'color': '#f05'});

// 메소드체인:  선택자.메소드().메소드().....


})(jQuery);