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

// --------------------------------------------
// click :

  // evtLi 첫번째에 클릭 이벤트 발생
  evtLi.eq(0).on('click', function(){
    exInnerText.text('li 첫번째 요소를 클릭하였습니다.');
  });

  evtLi.eq(1).on('click', function(evt){
    evt.preventDefault();
    exInnerText.text('li 두번째 요소 및 a를 클릭하였습니다.');
  });
// ------------------------------------------
// dblclick: 더블클릭

  evtLi.eq(2).on('dblclick', function(){
    exInnerText.text('dblclick')
  });
// -----------------------------------------
// mousedown, mouseup 마우스를 누르거나 띄는 상태
  evtLi.eq(3).on('mousedown', function(e){
    exInnerText.text('마우스를 눌렀습니다.');
    evtLi.eq(3).css({ 'backgroundColor': '#d7d' });
  });

  evtLi.eq(3).on('mouseup', function(){
    exInnerText.text('마우스를 띄었습니다.');
    evtLi.eq(3).css({'backgroundColor':'#57a'});
  });

  // -------------------------------------------
  // mouseenter, mouseleave
  evtLi.eq(4).on('mouseenter', function(){
    exInnerText.text('마우스를 올렸습니다.');
    $(this).css({ color:'#06a', 'backgroundColor':'#ddd'});
  });

  evtLi.eq(4).on('mouseleave', function(){
    exInnerText.text('마우스를 벗어났습니다.');
    $(this).removeAttr('style');
  });

})(jQuery); 