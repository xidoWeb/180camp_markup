// b_04_slide_hofizontal_swipe.js

(function($){
// 기능설명


// 변수 -----------------------------------------
var slideSet = $('.slide_set');
var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var originDivLen = horizontalDiv.length;

var i = 0;
var permission = true;

// 함수 -----------------------------------------
var nextSwipeFn = function(){
  if(permission){
    permission = false;
    i += 1;
    if(i >= originDivLen){
      horizontal.css({marginLeft: 100+'%' });  
      i = 0;
    }
    horizontal.stop().animate({marginLeft: -100 * i +'%'}, function(){
      permission = true;
    });    
  }// if(permission)
}; // nextSwipeFn();

var prevSwipeFn = function(){
  if(permission){
    permission = false;
    i -= 1;
    horizontal.stop().animate({marginLeft: -100 * i +'%'}, function(){
      if(i < 0) {
        i = originDivLen - 1;
        horizontal.css({marginLeft: -100 * i +'%'});
      }
      permission = true;
    });
  }// f(permission)
};// prevSwipeFn()

// 기능 -----------------------------------------
var cloneDiv = horizontalDiv.eq(-1).clone();
horizontal.prepend(cloneDiv);

var newHorizontalDiv = horizontal.children('div');
var newDivLen = newHorizontalDiv.length;

horizontal.css({width:(100 * newDivLen) + '%', left: -100 +'%'});
newHorizontalDiv.css({width:(100 / newDivLen) + '%'});


// 이벤트 --------------------------------------
slideSet.on('touchstart', function(e){
  console.log(e);
});

})(jQuery);
