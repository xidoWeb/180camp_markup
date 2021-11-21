# jquery에서 javascript로 변환하기 위한 기초내용

---
## jQuery에서 변환하기위한 간단한 개념

1. ES6 ~ ESNext: prepros이용하여 변환
2. 변수 선언 - es5기준 : var, es6: const,let
  ``` javascript
  var a = 10;
  var b = 'string'; 
  // const, let
  ```
3. 선택자 : 
   - $('#box')
   - document.getElementById('box');
   - document.querySelector('#box');
4. 속성 : 
   - attr()
   - getAttribute(), setAttribute()
5. class처리 : 
   - addClass, removeClass, toggle
   - classList.add, classList.remove, classList.toggle
6. animation :
   - animate()
   - setInterval(), clearInterval()
7. 순서확인, 할당 
   - index(), eq()
   - index, at()
8. 템플릿 처리(보간법)
   - '문자' + 변수 + '문자'
   - `${}`
9. 외부파일 불러오기
   - $.ajax()
   - XMLHttpRequest, fetch...
10. 이벤트처리(클릭이벤트)
   - jQuery는 선택자 기준에서 처리되는 형태가 자동으로 전체를 순환하는 기능
   - javascript는 선택자를 기준으로 이벤트 수행을 모두 수행하도록 수동으로 순환명령

---
