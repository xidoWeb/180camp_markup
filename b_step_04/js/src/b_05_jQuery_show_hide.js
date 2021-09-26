// b_05_jQuery_show_hide.js

(function($){
// jQuery
  
var exWrap = $('.ex_wrap');
var galleryImg = exWrap.find('.gallery_img');
var btnArea = exWrap.find('.btn');
// var btnList = btnArea.children('li');
var view = btnArea.find('.view');
var fade = btnArea.find('.fade');
var slide = btnArea.find('.slide');
var classSet = btnArea.find('.class_set');
var timed = 0;

// galleryImg.css({'display' : 'block'});

// view( show/hide/toggle )
var viewBtn = view.children('button');

viewBtn.eq(0).on('click', function(e){  
  e.preventDefault();
  galleryImg.show( timed );
});

viewBtn.eq(1).on('click', function(e){
  e.preventDefault();
  galleryImg.hide( timed );
});

viewBtn.eq(2).on('click', function(e){
  e.preventDefault();
  galleryImg.toggle( timed );
});

// -------------------------------------


})(jQuery);
