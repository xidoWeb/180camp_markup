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


})(jQuery);