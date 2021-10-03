// b_11_tab_menu.js
(function($){
  // $.getJSON("../json/menu.json", function(data){
  //   console.log( data );
  // });

  $.ajax({
    url:"../json/menu.json",
    context:document.body
  }).done(function(data){
    var dataFile = data;  
    // console.log( dataFile );

    var i=0;
    var len = dataFile.length;
    var tabTitle = [];
    for(; i < len; i += 1){
      tabTitle.push( dataFile[i].type );
    }
    // console.log( tabTitle );

    /* tab menu title 설정 -------------------------------------- */
    // 배열.filter(function(data, index){});
    // indexOf() : 문자열/배열 에서 작성한 요소와 일치하는 순서를 파악

    // 중복되는 배열의 값을 정리해주는 기능
    var tabTitleCheck = tabTitle.filter(function(data,index){
      return tabTitle.indexOf(data) === index;
    });    
    // console.log(tabTitleCheck);

    /* tab menu 내용 구성에 맞는 목록 체크 ----------------------- */
    var tabMenuSet;
    var tabMenuFn = function(n){
      tabMenuSet = dataFile.filter(function(data){
        return data.type === tabTitleCheck[n];
      });
    }
    tabMenuFn(2);
    console.log(tabMenuSet);

  

  }); // $.ajax()
})(jQuery);
