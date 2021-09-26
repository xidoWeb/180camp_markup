// b_04_jQuery_event.js
(function($){
  var exWrap = $('.ex_wrap');
  var exP = exWrap.find('p');
  var exInnerText = exP.children('span');
  var evt = exWrap.find('.evt');
  var evtLi = evt.children('li');

  exInnerText.text('이벤트처리 전');

  exP.css({ 'backgroundColor' : '#fff', 'border':'1px solid #555'});
  evt.css({'marginTop':'30px'});
  evtLi.css({'width':'150px', 'height':'30px', 
             'backgroundColor':'#fa6', 'textAlign':'center'});

  // evtLi 첫번째에 클릭 이벤트 발생
  evtLi.eq(0).on('click', function(){
    exInnerText.text('li 첫번째 요소를 클릭하였습니다.');
  });

  evtLi.eq(1).on('click', function(evt){
    evt.preventDefault();
    exInnerText.text('li 두번째 요소 및 a를 클릭하였습니다.');
  });

})(jQuery); 