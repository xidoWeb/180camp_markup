// jquery_test.js

(function($){

// 1. var ,  const/let
/*
var a = 10;
console.log( 10 );

var str = 'text';
console.log( str );

var b = a + str;
console.log(b);

var c = a / str;
console.log( c );

a = 100;
console.log( a );

var arr = [];
arr.push(1);
console.log( arr );


console.log( a1 );
var a1 = 10;
*/


var win = $(window);
// console.log( win );

var wrap = $('#wrap');
// console.log( wrap[0] );

var headBox = $('#headBox');
// console.log( headBox );

var navi = $('.navigation');
// console.log( navi );

var naviChild = navi.children();
// console.log( naviChild );

// console.clear();
var link = naviChild.eq(0).find('a').attr('href');
// console.log( link );
naviChild.eq(1).find('a').attr('href', 'http://google.com');

// naviChild.eq(3).attr('class','on');
naviChild.eq(3).addClass('on');

navi.removeClass('act');

console.clear();

// console.log( naviChild );
// -----------------------------------------
// li여러개 중 하나를 클릭, 
// 선택한 요소가 무엇인지, 순서가 몇번째인지
// li의  순번째에 기능 할당('border','1px solid #333' )

naviChild.on('click', function(e){
  e.preventDefault();
  var el = $(this);
  var elI = el.index();
  // console.log($(this),  $(this).index() );
  naviChild.eq(elI).css('border','1px solid #333');
});


})(jQuery);
