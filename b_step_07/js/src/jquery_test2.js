// jquery_test2.js

(function($){
  var h1 = $('h1');
  h1.animate({textIndent:'400px'}, 5000);

  var wrap = $('#wrap');
  wrap.append('<p class="jq_par"></p>');

  var hi = '안녕하세요 반갑습니다. jquery를 이용하여 글자를 삽입하고 있습니다.';
  var hiArr = hi.split('');
  console.log(hiArr);
  var jqPar = $('.jq_par');
  // jqPar.text( hi );
  var i=0;
  var iLen = hiArr.length;

  var intervalText = setInterval(function(){
    jqPar.append( hiArr[i] );
    i+=1;
    if(i >= iLen){
      clearInterval(intervalText)
    }
  }, 50);

// --------------------------------------------
console.clear();

var a = 1;
var b = 'my name is';
var c = 'xido';

console.log( a + '. ' + b + ' ' + c + ' ' +'studio');





})(jQuery);